import React from 'react'
import Link from 'next/link'
const Skeleton = () => {
  return (
    <div>
        {[...Array(10)].map((item) => (
          <div className=' vbl-post py-2 bg-[#F8F9FA] flex flex-col gap-6 px-9 my-[16px] animate-pulse'>
            <h2 className='text-xl'>
              <small className='text-[15px] badge p-1 rounded-md mr-2 bg-light-gray text-white py-[3px] px-[9.25px]'></small>
              <Link href='' className='text-[#0A58CA] dark:text-[#6ea8fe] rounded-lg bg-gray-600'>
              </Link>
            </h2>

            <nav className='nav mb-2 flex items-center gap-5 justify-start text-sm dark:text-light-gray rounded-lg bg-gray-600'>
              
            </nav>

            <ul className='nav mb-2 flex items-center gap-5 justify-start text-sm text-light-gray rounded-lg bg-gray-600'>
              
            </ul>
          </div>
        ))
        }
    </div>
  )
}

export default Skeleton