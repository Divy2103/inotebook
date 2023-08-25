import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl font-semibold text-center'>Add a Note</h1>
      <form action="" className='m-3 p-2 flex flex-col justify-center items-center'>
        <div className='mb-5 flex flex-col space-y-2 w-[80%]'>
          <label htmlFor="title" className='text-xl font-semibold'>Title</label>
          <input type="text" id='title' name='title' className='w-full border border-slate-400 p-2 text-lg outline-slate-400' placeholder='add a title' />
        </div>
        <div className='mb-5 flex flex-col space-y-2 w-[80%]'>
          <label htmlFor="desc" className='text-xl font-semibold'>Description</label>
          <input type="text" id='desc' name='desc' className='w-full border border-slate-400 p-2 text-lg outline-slate-400' placeholder='add a description' />
        </div>
        <button className='bg-black p-2 px-5 text-xl text-gray-200 hover:text-white rounded-lg font-medium'>add a note</button>
      </form>
      <hr/>
      <div className='m-5 p-5'>
        <h1 className='text-3xl font-semibold text-center'>Your Notes</h1>
      </div>
    </div>
  )
}

export default Home
