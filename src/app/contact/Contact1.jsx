import React from 'react'

export default function Contact1() {
    return (
      <section className='mx-4 md:mx-7'>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-5 gap-5'>
          <div className='bg-[whitesmoke]'>
            <p className='py-10 font-bold text-3xl md:text-5xl mx-4 md:mx-7'>Get In Touch</p>
            <div className='flex flex-col pb-5 mx-4 md:mx-7'>
              <input type="text" placeholder='FULL NAME' className='border-b-2 pb-2 pt-5 bg-[whitesmoke] pl-2'/>
              <input type="email" placeholder='EMAIL' className='border-b-2 pb-2 pt-5 bg-[whitesmoke] pl-2'/>
              <input type="text" placeholder='MESSAGE' className='border-b-2 pb-2 pt-5 bg-[whitesmoke] pl-2'/>
              <button className='text-white bg-black w-full py-5 my-10'>SEND A MESSAGE</button>
            </div>
          </div>
          <div className='bg-[whitesmoke]'>
            <p className='text-3xl md:text-5xl font-bold py-10 mx-4 md:mx-7'>Let's Connect</p>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <div className='my-5 mx-0 md:mx-7'>
                <p className='text-sm'>SUPPORT</p>
                <p className='text-lg font-extrabold text-black'>help@pulse.com</p>
              </div>
              <div className='my-5'>
                <p className='text-sm'>WHOLESALE</p>
                <p className='text-lg font-extrabold text-black'>sales@pulse.com</p>
              </div>
              <div className='my-5 mx-0 md:mx-7'>
                <p className='text-sm'>PHONE</p>
                <p className='text-lg font-extrabold text-black'>+234(810)-317-2537</p>
              </div>
              <div className='my-5'>
                <p className='text-sm'>FAX</p>
                <p className='text-lg font-extrabold text-black'>+234(810)-317-2537</p>
              </div>
              <div className='my-5 mx-0 md:mx-7'>
                <p className='text-sm'>LAGOS, NG</p>
                <p className='text-lg font-extrabold text-black'>41 Montgomery road.</p>
              </div>
              <div className='my-5'>
                <p className='text-sm'>ABUJA, NG</p>
                <p className='text-lg font-extrabold text-black'>12 Wuse Ave.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  