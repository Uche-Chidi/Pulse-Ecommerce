import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function search() {
  return (
    <div className='flex items-center border-4 p-2'>
        <FaSearch className='text-2xl' />
        <input type="text" name='search' id='search' defaultValue={'search here'} />
    </div>
  )
}
