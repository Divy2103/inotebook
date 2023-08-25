import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext';

const About = () => {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update()
    // eslint-disable-next-line
  }, [])
  
  return ( 
    <div>
      this is About {a.state.name} and {a.state.class}
    </div>
  )
}

export default About
