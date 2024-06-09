import React from 'react';

export default function Licenses() {
  return (
    
    <section className='pt-[8vh] px-7'>
        
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='w-full md:w-[90%] gap-32'>
                <div>
                    <h3 className='font-extrabold text-3xl md:text-6xl pt-10 md:pt-20'>Licenses</h3>
                    <p className='text-sm font-light py-5'>All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-xl'>Images & Videos</h3>
                    <p className='text-sm font-light py-5'>All images and videos used in Choice come from Unsplash, Pexels and footlocker and are free for personal and commercial use.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-xl'>Icons</h3>
                    <p className='text-sm font-light py-5'>All icons used in Choice come from Phosphor Icons. Meaning they are are free for personal and commercial use.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-xl'>Font</h3>
                    <p className='text-sm font-light py-5'>Choice is using one main font, called Archivo. It can be downloaded at Google Fonts. It is free for personal and commercial use.</p>
                </div>
            </div>
            <div className='h-[100vh] md:w-[100%] md:h-[100vh]  right-0 top-[8vh] md:top-0 md:right-7'>
                <img src="/licenses.jpg" alt="Terms Image" className='w-full h-full object-cover' />
            </div>
        </div>
    </section>
  )
}
