import React, { useState } from 'react'
import NoteContext from './NoteContext'
import axios from 'axios'

const NoteState = (props) => {
    const hostName = "http://localhost:4000"
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)
    const [user, setUser] = useState([])

    const getUser = async () => {
        //  API Call
        const response = await fetch(`${hostName}/api/auth/getuser`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json();
        console.log("getUser",json);
        setUser(json)
    }
    // get all notes
    // const getNotes = async () => {
    //     //  API Call
    //     const response = await fetch(`${hostName}/api/notes/fetchallnotes`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "auth-token": localStorage.getItem('token')
    //         }
    //     });
    //     console.log("response",response);
    //     const json = await response.json();
    //     console.log("json",json)
    //     setNotes(json)
    // }

    const getNotes = async () => {
        //  API Call
        const response = await axios.get(`${hostName}/api/notes/fetchallnotes`, {
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        });
        console.log("response",response);
        const json = response.data;
        console.log("json",json);
        setNotes(json)
    }

    // Add a Note
    const addNote = async (title, description, tag) => {
        //  API Call
        const response = await fetch(`${hostName}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        // console.log(json)

        console.log("adding a new note")

        // let note = {
        //     "_id": json._id,
        //     "user": json.user,
        //     "title": title,
        //     "description": description,
        //     "tag": tag,
        //     "date": json.date,
        //     "__v": json.__v
        // };
        let note = json;
        setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = async (id) => {
        console.log("deleting the note with id ", id)
        //  API Call
        const response = await fetch(`${hostName}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = response.json();
        console.log(json);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // Edit a Note
    const editNote = async (id, title, description, tag) => {

        // API Call
        const response = await fetch(`${hostName}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        console.log(json)

        // Logic to edit in client
        notes.forEach( element => {
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        });

        const newNote = JSON.parse(JSON.stringify(notes))
        setNotes(newNote)
    }

    return (
        <NoteContext.Provider value={{ notes,user,getUser, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState