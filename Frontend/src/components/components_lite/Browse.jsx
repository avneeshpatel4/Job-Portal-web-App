import React from 'react'
import Navbar from './Navbar'
import Job1 from './Job1';

const randomJobs  = [1,2,3,4,5,6,7,8,9];

function Browse() {
  return (
    <div>
      <Navbar/>
      <div className='max-w-7xl mx-auto gap-2'>
        <h1 className='font-bold my-10  text-xl'>Search Result {randomJobs.length}</h1>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1
         gap-4 mt-5'>
              {
          randomJobs.map((index,item)=>{
            return <Job1/>
          })
        }
         </div>
      </div>
    </div>
  )
}

export default Browse