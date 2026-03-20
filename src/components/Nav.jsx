import React from 'react'

const Nav = () => {
  return (
    <>
    <div className='navbar-contanier bg-[#264698]'>
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
    <div className='grid grid-cols-12'>
        <div className='col-span-3 flex justify-center items-center'>
           <div className="profile-conatiner m-3 ms-1 mt-6 rounded-3xl shadow-md bg-white ">
                <div className='image m-10 '>
                    <img class="w-50 h-50 rounded-full object-cover" src="https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world.jpg" alt="mountain" />
                </div>
                <div  className='p-2 border-b'>
                    Name : Rahul Thapliyal
                </div>
                <div className='p-2 border-b'>
                    Job Role: Software Developer
                </div>
                <div className='p-2 border-b'>
                    Experience: 1+ years of Experience
                </div>
                <div className='p-2 border-b'>
                    Skills: MERN STACk
                </div>
                <div className='p-2 '>
                    Contact No: 9650937253
                </div>
           </div>
        </div>
        <div className='col-span-9'>
          
        </div>
    </div>
    </>
  )
}

export default Nav