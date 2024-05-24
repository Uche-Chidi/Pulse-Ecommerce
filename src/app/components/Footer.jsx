import React from 'react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className=' bg-black w-[100%] min-h-[40vh] text-white px-7'>
        <div className='flex justify-between pt-7'>
          <div>
            <h2 className='text-white text-xl'>Pulse</h2>
          </div>
          <div className=' border-b pb-3 border-gray-400'>
            <input type="text" placeholder='ENTER YOUR EMAIL ADDRESS' className='bg-black w-56  text-xs text-gray-400'/>
            <button type='button' className='pl-5 text-xs'>SUBMIT</button>
          </div>
        </div>

        <div className=' text-xs flex justify-between pt-32'>
          <div className='flex justify-between gap-40'>
            <ul className='flex flex-col '>
              <li className='pb-5'>
                <Link href='/all'>SHOP ALL</Link>
              </li>
              <li className='pb-5'>
                <Link href='/about'>ABOUT</Link>
              </li>
              <li className='pb-5'>
                <Link href='/contact'>CONTACT</Link>
              </li>
            </ul>
            <ul>
              <li className='pb-5'>TERMS</li>
              <li className='pb-5'>SHIPPING POLICY</li>
              <li className='pb-5'>REFUND POLICY</li>
            </ul>
            <ul>
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

          <div className='pt-9 text-gray-400'>
            <ul className=''>
              <li className='pb-5 flex justify-end items-end'>LICENSES</li>
              <li className='pb-5'><Link href=''>&copy; {new Date().getFullYear()} CHOICE</Link></li>
            </ul>
          </div>
        </div>
    </footer>
  )
}
