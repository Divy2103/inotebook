import React, { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {
    const hostName = "http://localhost:4000"
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)

    // get all notes
    const getNotes = async () => {
        //  API Call
        const response = await fetch(`${hostName}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkZjNiZDEzMGVmOTcyYjhhNjAzYzg0In0sImlhdCI6MTY5MjM1MTQ0MX0.DBb3gDH4ug3ApQDwz0Bq2RUWrXCNHXxsVEQKY8EK2rY"
            }
        });
        const json = await response.json();
        console.log(json)
        setNotes(json)
    }

    // Add a Note
    const addNote = async (title, description, tag) => {
        //  API Call
        const response = await fetch(`${hostName}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkZjNiZDEzMGVmOTcyYjhhNjAzYzg0In0sImlhdCI6MTY5MjM1MTQ0MX0.DBb3gDH4ug3ApQDwz0Bq2RUWrXCNHXxsVEQKY8EK2rY"
            },
            body: JSON.stringify({ title, description, tag })
        });
        // const json = response.json();
        console.log("adding a new note")

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
    const deleteNote = (id) => {
        console.log("deleting the note with id ", id)
        // TODO : API Call
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API Call

        const response = await fetch(`${hostName}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkZjNiZDEzMGVmOTcyYjhhNjAzYzg0In0sImlhdCI6MTY5MjM1MTQ0MX0.DBb3gDH4ug3ApQDwz0Bq2RUWrXCNHXxsVEQKY8EK2rY"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();

        // Logic to edit in client
        notes.forEach(element => {
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        });
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState