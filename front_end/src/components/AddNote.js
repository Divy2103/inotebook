import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext';

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" })

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag)
    setNote({ title: "", description: "", tag: "" })
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <>
      <h1 className='text-3xl font-semibold'>Add a Note</h1>
      <form action="" className='m-3 p-2 flex flex-col'>
        <div className='mb-5 flex flex-col space-y-2'>
          <label htmlFor="title" className='text-xl font-semibold'>Title</label>
          <input type="text" id='title' name='title' className='w-full border border-slate-400 p-2 text-lg outline-slate-400' placeholder='add a title (min - 3 chararcter )' value={note.title} onChange={onChange} />
        </div>
        <div className='mb-5 flex flex-col space-y-2'>
          <label htmlFor="description" className='text-xl font-semibold'>Description</label>
          <input type="text" id='description' name='description' className='w-full border border-slate-400 p-2 text-lg outline-slate-400' placeholder='add a description (min - 5 chararcter )' value={note.description} onChange={onChange} />
        </div>
        <div className='mb-5 flex flex-col space-y-2'>
          <label htmlFor="tag" className='text-xl font-semibold'>Tag</label>
          <input type="text" id='tag' name='tag' className='w-full border border-slate-400 p-2 text-lg outline-slate-400' placeholder='add a tag' value={note.tag} onChange={onChange} />
        </div>
        <button disabled={note.title.length < 3 || note.description.length < 5} className={`bg-black p-2 px-5 text-xl text-gray-200 place-self-end hover:text-white rounded-lg font-medium disabled:opacity-80 disabled:cursor-not-allowed`} onClick={handleClick}>Add Note</button>
      </form>
    </>
  )
}

export default AddNote
