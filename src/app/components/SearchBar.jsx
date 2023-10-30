import Image from 'next/image'
import React from 'react'

const SearchButton = () => {
    return (
        <form className='w-[450px]'>
            <div className="relative flex flex-wrap items-stretch sm:w-full gap-1">
                <input type="search" id="default-search" className="relative flex-auto border-r-0 block min-w-0 rounded-3xl border bg-white focus:transition-all focus:ease-in-out focus:z-10 py-[11px] px-[16px] focus:drop-shadow-3xl focus:border-focus-blue focus:border-4 Class
Properties
outline-none" required />
                <button 
                type="submit" 
                className="flex relative z-2 right-0 bottom-0 ml-[-60px] px-4 py-3 border-gray-300 border rounded-3xl bg-white"
                >
                    <Image src='search.svg' alt='' width={20} height={20}/>
                </button>
            </div>
        </form>
    )
}

export default SearchButton

