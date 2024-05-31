import React from 'react'

export default function About() {
  return (
    <div className='px-7 pt-16 md:pt-32'>
      <div>
        <h1 className='font-extrabold text-4xl md:text-7xl'>About Us</h1>
        <div className='flex flex-col md:w-[50%] text-sm md:text-md pt-10'>
          <p>At Pulse, we're more than just a brand -- we're a community of fashion</p>
          <p>enthusiasts dedicated to helping you express your unique style. Our passion</p>
          <p>for fashion and commitment to quality shine through in everything we do.</p>
        </div>
      </div>
      <div className='pt-20'>
        <video autoPlay muted loop className='h-[30vh] md:h-screen w-full object-cover'>
          <source src="/vid2.mp4" type='video/mp4'/>
        </video>
      </div>
    </div>
  )
}
