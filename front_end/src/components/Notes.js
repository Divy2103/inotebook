import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, setNotes } = context;
    return (
        <div className='grid grid-flow-row grid-cols-3 2xl:grid-cols-4 gap-5 mt-10'>
            {notes.map((note) => {
                return <NoteItem note={note} />;
            })}
        </div>
    )
}

export default Notes