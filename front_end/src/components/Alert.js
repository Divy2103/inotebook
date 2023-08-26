import React from 'react'

const Alert = (props) => {
  return (
    <div className='py-4 text-blue-900 px-10 text-xl -mt-2 bg-[#cce5ff]' role='alert'>
      {props.message}
    </div>
  )
}

export default Alert
