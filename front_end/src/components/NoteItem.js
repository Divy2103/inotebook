import React from 'react'

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className=''>
            <div className='border py-2 px-5'>
                <h5 className='text-xl font-semibold'>{note.title}</h5>
                <p className=''>{note.description}</p>
                {/* <button href="/" className='bg-black text-gray-200 hover:text-white py-2 rounded-lg font-semibold px-5 my-2'>Edit Note</button> */}
                <div className='flex justify-end'>
                <i className="fa-solid fa-trash text-2xl m-2 cursor-pointer"></i>
                <i className="fa-solid fa-pen-to-square text-2xl m-2 cursor-pointer"></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
