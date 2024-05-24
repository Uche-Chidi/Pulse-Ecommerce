import React from 'react'

export default function About3() {
  return (
    <section>
        <div className='py-40 flex flex-col justify-center items-center space-y-5'>
            <p className='text-sm'>WRITE YOUR STORY</p>
            <div className='text-7xl flex space-x-5'>
                <h1>Make Your</h1>
                <h1 className='text-gray-400'>Choice</h1>
            </div>
        </div>

        <div>
            <img src="/about2.jpg" alt="" />
        </div>
    </section>
  )
}
