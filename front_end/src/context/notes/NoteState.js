import React, { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "64df45fb91cc9edd4ba9fc2a",
            "user": "64df3bd130ef972b8a603c84",
            "title": "first updated note",
            "description": "this is my first updated note",
            "tag": "very special",
            "date": "2023-08-18T10:20:43.711Z",
            "__v": 0
        },
        {
            "_id": "64df466691cc9edd4ba9fc36",
            "user": "64df3bd130ef972b8a603c84",
            "title": "second note",
            "description": "this is my second note",
            "tag": "very less special",
            "date": "2023-08-18T10:22:30.429Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState