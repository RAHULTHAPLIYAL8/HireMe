import React from 'react'

const Nav = () => {
  return (
    <div className='navbar-contanier bg-blue-600'>
        <div className='flex items-center justify-between'>
            <div className='options flex  gap-8 mx-4 my-4'>
                    <div className='text-white font-bold'>
                        Home
                    </div>
                    <div className='text-white font-bold'>
                        About
                    </div>
                    <div className='text-white font-bold'>
                        Contact
                    </div>
                    <div className='text-white font-bold'>
                        Options
                    </div>
            </div>
            <div className='mr-10'>
                <input className="w-[300px] px-3 py-2 text-sm bg-white border-2 border-gray-300 rounded-full focus:outline-none focus:border-black" type="text" />
            </div>
        </div>
    </div>
  )
}

export default Nav