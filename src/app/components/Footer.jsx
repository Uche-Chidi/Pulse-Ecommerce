import React from 'react'
import Link from 'next/link'


export const Footer = () => {
  return (
    <footer className='bg-black w-full min-h-[40vh] text-white px-7'>
      <div className='flex flex-col sm:flex-row justify-between pt-7'>
        <div>
          <Link href="/">
            <h2 className='text-white text-xl'>Pulse</h2>
          </Link>
        </div>
        <div className='border-b pb-3 border-gray-400 w-full sm:w-auto mt-4 sm:mt-0'>
          <input
            type="text"
            placeholder='ENTER YOUR EMAIL ADDRESS'
            className='bg-black w-full sm:w-56 text-xs text-gray-400 p-2 mb-2 sm:mb-0'
          />
          <button
            type='button'
            className='w-full sm:w-auto sm:p-3 text-xs bg-white text-black p-2'
          >
            SUBMIT
          </button>
        </div>
      </div>

      <div className='text-xs flex flex-col sm:flex-row justify-between pt-32'>
        <div className='flex flex-col sm:flex-row sm:gap-40'>
          <ul className='flex flex-col mb-5 sm:mb-0'>
            <li className='pb-5' onClick="">
              <Link href='/shop'>SHOP ALL</Link>
            </li>
            <li className='pb-5'>
              <Link href='/about'>ABOUT</Link>
            </li>
            <li className='pb-5'>
              <Link href='/contact'>CONTACT</Link>
            </li>
          </ul>
          <ul className='flex flex-col mb-5 sm:mb-0'>
            <Link href="/terms">
              <li className='pb-5'>TERMS</li>
            </Link>
            <Link href="/shipping">
              <li className='pb-5'>SHIPPING POLICY</li>
            </Link>
            <Link href="/refund">
              <li className='pb-5'>REFUND POLICY</li>
            </Link>
          </ul>
          <ul className='flex flex-col mb-5 sm:mb-0'>
            <li className='pb-5'>
              <Link href='http://www.instagram.com'>INSTAGRAM</Link>
            </li>
            <li className='pb-5'>
              <Link href='http://www.facebook.com'>FACEBOOK</Link>
            </li>
            <li className='pb-5'>
              <Link href='http://wwww.twitter.com'>TWITTER</Link>
            </li>
          </ul>
        </div>

        <div className='pt-9 text-gray-400 sm:text-left text-right'>
          <ul className=''>
            <Link href="/license">
              <li className='pb-5 flex sm:justify-start justify-end items-end'>LICENSES</li>
            </Link>
            <li className='pb-5'>
              <Link href=''>&copy; {new Date().getFullYear()} PULSE</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
