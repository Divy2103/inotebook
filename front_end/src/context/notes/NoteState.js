import React, { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "64df45fb91cc9edd4ba9fc2a1",
            "user": "64df3bd130ef972b8a603c84",
            "title": "first updated note",
            "description": "this is my first updated note",
            "tag": "very special",
            "date": "2023-08-18T10:20:43.711Z",
            "__v": 0
        },
        {
            "_id": "64df45fb91cc9edd4ba9fc2a2",
            "user": "64df3bd130ef972b8a603c84",
            "title": "first updated note",
            "description": "this is my first updated note",
            "tag": "very special",
            "date": "2023-08-18T10:20:43.711Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    // Add a Note
    const addNote = (title, description, tag) => {
        console.log("adding a new note")
        // TODO : API Call
        let note = {
            "_id": "64df45fb91cc9edd4ba9fc2a3",
            "user": "64df3bd130ef972b8a603c84",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-08-18T10:20:43.711Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = () => {

    }

    // Edit a Note
    const editNote = () => {

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState