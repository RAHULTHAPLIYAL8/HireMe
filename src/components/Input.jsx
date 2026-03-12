import React from 'react'

const Input = (props) => {
  return (
   <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
     />
  )
}

export default Input