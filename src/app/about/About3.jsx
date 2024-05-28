import React from 'react'

export default function About3() {
  return (
    <section className="px-7">
      <div className='py-20 md:py-40 flex flex-col justify-center items-center space-y-5'>
        <p className='text-sm'>WRITE YOUR STORY</p>
        <div className='text-4xl md:text-7xl flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5 text-center md:text-left'>
          <h1>Make Your</h1>
          <h1 className='text-gray-400'>Choice</h1>
        </div>
      </div>

      <div className="w-full">
        <img src="/about2.jpg" alt="About Image" className="w-full object-cover" />
      </div>
    </section>
  );
}
