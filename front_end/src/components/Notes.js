import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, getNotes } = context;
    useEffect(() => {
        getNotes()
    }, [])

    return (
        <div className='grid grid-flow-row grid-cols-3 2xl:grid-cols-4 gap-5 mt-5'>

            {notes.map((note) => {
                return <NoteItem note={note} key={note._id} />;
            })}
        </div>
    )
}

export default Notes