import React, { useContext } from 'react'
import Notes from './Notes'
import AddNote from './AddNote'

const Home = () => {

  return (
    <>
      <AddNote/>
      {/* <hr /> */}
      <div className='my-5 mx-3 p-2'>
        <h1 className='text-3xl font-semibold '>Your Notes</h1>
        <Notes/>
      </div>
    </>
  )
}

export default Home
