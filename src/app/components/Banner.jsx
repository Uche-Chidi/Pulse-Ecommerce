import React from 'react'
import Link from 'next/link'


export default function Banner() {
  return (
    <div>
        <div className=' absolute top-0 left-0 w-[100%] h-[100%] bg-black bg-opacity-50'></div>
        <div className='w-[100%] h-[100vh]'>
            <video autoPlay muted loop className=' h-[100%] w-[100%] object-cover'>
                <source src="/vid1.mp4" type='video/mp4'/>
            </video>
        </div>
        <div className=' absolute w-[100%] h-[100%] top-0 flex flex-col justify-start items-start pt-[60vh] pl-5'>
            <div className=' text-6xl text-white'>
                <h2>Stride with Swagger,</h2>
                <h2>Sneak in Style</h2>
            </div>
            <div className='flex cursor-pointer mx-3 pt-8'>
                <button className=' bg-white p-3 mr-3'>SHOP NOW</button>
                <button className=' text-white border-2 p-3'>ABOUT CHOICE</button>
            </div>
        </div>

        <div className='flex pt-5 w-[100%] h-[100%] gap-5 px-6'>
            <div className='bg-black h-[95vh] w-[48vw] overflow-hidden'>
                <Link href="">
                <div className="bg-cover h-[95vh] w-[48vw] flex items-center justify-center hover:scale-105 transition-transform cursor-pointer duration-300" style={{backgroundImage: "url('/menshoes.jpg')"}}>
                    <h2 className='flex justify-center items-center mt-[47.5] text-white text-4xl h-full w-full backdrop-brightness-50'>Men's Shoes</h2>
                </div>
                </Link>
            </div>
            <div className='bg-black h-[95vh] w-[48vw] overflow-hidden'>
                <div className="bg-cover h-[95vh] w-[48vw] flex items-center justify-center hover:scale-105 transition-transform cursor-pointer duration-300" style={{backgroundImage: "url('/womenshoes.jpg')"}}>
                    <h2 className='flex justify-center items-center mt-[47.5] text-white text-4xl h-full w-full backdrop-brightness-50'>Women's Shoes</h2>
                </div>
            </div>
        </div>
        <div className='pt-40'>
                <div className=''>
                    <h2 className='flex justify-center items-center text-5xl w-full'>New Arrivals</h2>
                    <p className='flex justify-center items-center w-full p-10 text-sm'>LATEST TRENDS DESIGNED TO IGNITE YOUR PASSION FOR STYLE</p>
                </div>
        </div>

    </div>
  )
}
