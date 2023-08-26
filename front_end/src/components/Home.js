import React, { useContext } from 'react'
import Notes from './Notes'

const Home = () => {

  return (
    <div>
      <h1 className='text-3xl font-semibold'>Add a Note</h1>
      <form action="" className='m-3 p-2 flex flex-col'>
        <div className='mb-5 flex flex-col space-y-2'>
          <label htmlFor="title" className='text-xl font-semibold'>Title</label>
          <input type="text" id='title' name='title' className='w-full border border-slate-400 p-2 text-lg outline-slate-400' placeholder='add a title' />
        </div>
        <div className='mb-5 flex flex-col space-y-2'>
          <label htmlFor="desc" className='text-xl font-semibold'>Description</label>
          <input type="text" id='desc' name='desc' className='w-full border border-slate-400 p-2 text-lg outline-slate-400' placeholder='add a description' />
        </div>
        <button className='bg-black p-2 px-5 text-xl text-gray-200 place-self-end hover:text-white rounded-lg font-medium'>add a note</button>
      </form>
      {/* <hr /> */}
      <div className='my-5 mx-3 p-2'>
        <h1 className='text-3xl font-semibold '>Your Notes</h1>
        <Notes/>
      </div>
    </div>
  )
}

export default Home
