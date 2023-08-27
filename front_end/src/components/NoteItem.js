import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note , updateNote } = props;

    const handleClick = () => { deleteNote(note._id) }
    
    return (
        <div className=''>
            <div className='border py-2 px-5'>
                <h5 className='text-xl font-semibold'>{note.title}</h5>
                <p className=''>{note.description}</p>
                <p className=''>{note.tag}</p>
                {/* <button href="/" className='bg-black text-gray-200 hover:text-white py-2 rounded-lg font-semibold px-5 my-2'>Edit Note</button> */}
                <div className='flex justify-end'>
                    <i className="fa-solid fa-trash text-2xl m-2 cursor-pointer" onClick={handleClick}></i>
                    <i className="fa-solid fa-pen-to-square text-2xl m-2 cursor-pointer" onClick={()=>{updateNote(note)}}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
