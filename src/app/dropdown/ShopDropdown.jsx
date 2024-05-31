import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function ShopDropdown() {
  return (
    
    <section className='absolute md:h-[50vh] h-[100vh] w-full overflow-auto mt-[8vh]'>
        <div className='flex flex-col md:flex-row mt-0 px-7 justify-between bg-white text-black overflow-y-scroll'>
            <div className='md:hidden py-10'>
                <p className='text-sm font-extrabold text-gray-500'>MENU</p>
                <Link href="/about">
                    <p className='text-3xl font-bold'>About</p>
                </Link>
                <Link href="/contact">
                    <p className='text-3xl font-bold'>Contact</p>
                </Link>
            </div>
            <div>
                <p className='text-sm font-extrabold text-gray-500 pb-8'>SHOP</p>
                <Link href="/shop">
                <p className='text-3xl font-bold'>Shop All</p>
                </Link>
                <Link href="/bestsellers">
                <p className='text-3xl font-bold'>Bestsellers</p>
                </Link>
                <Link href="/exclusive">
                <p className='text-3xl font-bold'>Exclusive</p>
                </Link>
                <Link href="sale">
                <p className='text-3xl font-bold'>On Sale</p>
                </Link>
            </div>
            <div className="grid grid-cols-2 py-10 md:py-0 md:gap-20">
                <div className='text-sm'>
                    <p className='text-sm font-extrabold text-gray-500 pb-8'>SEX</p>
                    <p>Male</p>
                    <p>Female</p>
                </div>
                <div>
                    <p className='text-sm font-extrabold text-gray-500 pb-10'>BIG SIZES</p>
                    <p>47</p>
                    <p>48</p>
                    <p>49</p>
                    <p>50</p>
                </div>
            </div>
            <Link href="/shop">
                <div className="hover:scale-95 duration-300 bg-cover md:h-[40vh] h-[30vh] md:w-[60vw] w-full backdrop-brightness-0 flex items-center justify-center my-5" style={{backgroundImage: "url('/dropdown.jpg')"}}>
                    <p className='flex items-center justify-center text-center text-white font-extrabold text-4xl'>New Arrivals</p>
                </div>
            </Link>

           
        </div>
    </section>
  )
}
