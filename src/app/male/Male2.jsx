import React from 'react'
import Link from 'next/link';

export default function Male2() {
    return (
      <section className='pt-10 flex flex-col lg:flex-row gap-3 mx-7 pb-7'>
        <div className="bg-cover h-[50vh] lg:h-[100vh] w-full lg:w-[50vw] flex items-center justify-center" style={{ backgroundImage: "url('/shop1.jpg')" }}>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-white text-2xl mb-4'>Our Fashion Narrative</h2>
            <Link href='/about'>
              <button className='text-black bg-white border p-5 text-sm backdrop-brightness-[10%]'>ABOUT US</button>
            </Link>
          </div>
        </div>
        <div className="bg-cover h-[50vh] lg:h-[100vh] w-full lg:w-[50vw] flex items-center justify-center" style={{ backgroundImage: "url('/shop2.jpg')" }}>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-white text-center text-2xl mb-4'>Fashion Forward Conversations</h2>
            <Link href="/contact">
              <button className='text-black bg-white border p-5 text-sm backdrop-brightness-50'>CONTACT US</button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
  
 