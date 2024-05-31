import React from 'react'
import Link from 'next/link'

export default function Banner() {
    return (
      <div>
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
        <div className='w-full h-screen'>
          <video autoPlay muted loop className='h-full w-full object-cover'>
            <source src="/vid1.mp4" type='video/mp4'/>
          </video>
        </div>
        <div className='absolute w-full h-full top-0 flex flex-col justify-start items-start pt-[60vh] pl-5 md:pl-10'>
          <div className='text-3xl md:text-6xl text-white'>
            <h2>Stride with Swagger,</h2>
            <h2>Sneak in Style</h2>
          </div>
          <div className='flex cursor-pointer mx-3 pt-8'>
            <Link href="/shop">
              <button className='bg-white border-2 p-2 md:p-3 mr-3 hover:bg-gray-300'>SHOP NOW</button>
            </Link>
            <Link href="/about">
              <button className='text-white border-2 p-2 md:p-3 hover:bg-white hover:text-black'>ABOUT PULSE</button>
            </Link>
          </div>
        </div>
  
        <div className='flex flex-col md:flex-row pt-5 w-full h-full gap-5 px-7 md:px-7'>
          <div className='bg-black h-[50vh] md:h-[95vh] w-full md:w-[48vw] overflow-hidden'>
            <Link href="">
              <div className="bg-cover h-full w-full flex items-center justify-center hover:scale-105 transition-transform cursor-pointer duration-300" style={{backgroundImage: "url('/menshoes.jpg')"}}>
                <h2 className='flex justify-center items-center text-white text-2xl md:text-4xl h-full w-full backdrop-brightness-50'>Men's Shoes</h2>
              </div>
            </Link>
          </div>
          <div className='bg-black h-[50vh] md:h-[95vh] w-full md:w-[48vw] overflow-hidden'>
            <div className="bg-cover h-full w-full flex items-center justify-center hover:scale-105 transition-transform cursor-pointer duration-300" style={{backgroundImage: "url('/womenshoes.jpg')"}}>
              <h2 className='flex justify-center items-center text-white text-2xl md:text-4xl h-full w-full backdrop-brightness-50'>Women's Shoes</h2>
            </div>
          </div>
        </div>
        
        <div className='pt-20 md:pt-40'>
          <div className='text-center'>
            <h2 className='text-3xl md:text-5xl'>New Arrivals</h2>
            <p className='p-4 md:p-10 text-sm'>LATEST TRENDS DESIGNED TO IGNITE YOUR PASSION FOR STYLE</p>
          </div>
        </div>
      </div>
    )
  }

