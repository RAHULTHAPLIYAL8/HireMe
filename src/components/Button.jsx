import React from 'react'

const Button = (props) => {
  return (
    <button
              style={{ width: props.width }}
              type="submit"
              className={`w-${props.width} bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition`}
    >
             {props.name }
    </button>
  )
}

export default Button