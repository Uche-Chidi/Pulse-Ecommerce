import React from 'react';
import Link from 'next/link';

export default function About2() {
  return (
    
    <div className='mx-7 space-y-5'>
        <div className='grid grid-cols-2 mt-5 gap-5 '>
        <div className='min-w-[50%] px-7 bg-[whitesmoke]'>
            <p className='pt-10 text-sm'>CRAFTING STYLE</p>
            <p className='pt-5 text-3xl font-extrabold'>The Pulse Story</p>
            <p className='w-full pt-2 text-sm'>Our journey began with a vision to revolutionize the footwear industry, creating more than just shoes, but style statements. Rooted in a deep appreciation for fashion and individuality, Pulse is more than just a store; it's a narrative of self-expression and empowerment. We've curated a collection that transcends trends, offering shoes that are as unique as the individuals who wear them. Each pair embodies our commitment to quality craftsmanship and timeless style, ensuring that your footwear journey is nothing short of extraordinary.</p>

            <p className='pt-2 text-sm'>As we continue to evolve, our dedication to innovation and customer satisfaction remains unwavering. We strive to create not just a shopping experience, but a community where fashion enthusiasts can connect, explore, and celebrate their unique style journeys together. With a focus on inclusivity and authenticity, Pulse is more than a destination; it's a place for self-discovery and confidence-building.</p>
            
            <Link href='/contact' className=''>
                <button className='bg-black text-white p-3 text-sm my-5 cursor-pointer'>CONTACT US</button>
            </Link>

        </div>
            <div className='min-w-[50%] h-full'>
                <img src="/about1.jpg" alt="image/mp4" />
            </div>
        </div>
        

        <div className='grid grid-cols-2 grid-rows-2 gap-5'>
                <div className=' bg-[whitesmoke] h-40 border-t-2 flex flex-col px-5'>
                    <p className='text-2xl font-extrabold py-5'> 
                        Uncompromising Quality
                    </p>
                    <p className='font-light text-sm'>
                        Our shoes are crafted with precision and care, ensuring
                    </p>
                    <p className='font-light text-sm'>durability and longevity for everyday wear.</p>
                </div>
                <div className=' bg-[whitesmoke] border-t-2 px-5'>
                    <p className='text-2xl font-extrabold py-5'>
                        Inspired by Fashion
                    </p>
                    <p className='font-light text-sm'>
                        Our shoes are inspired by the latest trends in the fashion industry,
                    </p>
                    <p className='font-light text-sm'> creating a unique and personalized experience.</p>
                </div>
                <div className=' bg-[whitesmoke] border-t-2 px-5'>
                    <p className='text-2xl font-extrabold py-5'>
                        Community-Driven
                    </p>
                    <p className='font-light text-sm'>
                        Our shoes are designed to inspire and empower, creating a community where fashion 
                    </p>
                    <p className='font-light text-sm'> 
                        enthusiasts can connect, explore, and celebrate their unique style journeys together.
                    </p>
                </div>
                <div className=' bg-[whitesmoke] border-t-2 px-5'>
                    <p className='text-2xl font-extrabold py-5'>
                        Authenticity
                    </p>
                    <p className='font-light text-sm'>
                        Our shoes are crafted to reflect the authenticity of the individuals who wear them,
                    </p>
                    <p className='font-light text-sm'>
                        creating a sense of belonging and connection.
                    </p>
                </div>
    </div>
       
    </div>
  )
}
