import { Note } from '../model/note.model.js'

const fetchAllNotes = async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}

const addNote = async (req, res) => {

    try {

        const { title, description, tag } = req.body;

        const note = new Note({
            title, description, tag, user: req.user.id
        })

        const saveNote = await note.save()
        res.json(saveNote)


    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}

const upldateNote = async (req, res) => {

    try {

        const { title, description, tag } = req.body;
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // Find a note to be updated and update it
        let note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).send("not found")
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("not allowed")
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json(note)

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}

const deleteNote = async (req, res) => {

    try {
        // Find a note to be updated and update it
        let note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).send("not found")
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("not allowed")
        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "success": "note has been deleted", "note": note })

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}

export {
    fetchAllNotes,
    addNote,
    upldateNote,
    deleteNote
}