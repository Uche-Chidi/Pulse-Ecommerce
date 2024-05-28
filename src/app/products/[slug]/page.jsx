import React from 'react'
import { data } from '../../components/data'
import Image from 'next/image'
import { MdArrowBack } from "react-icons/md";
import Link from 'next/link';


export default function ProductPage({ params }) {
  const product = data.find(p => p.name.split(' ').join('-') === params.slug);

  return (
      <div className='pt-20 flex flex-col md:flex-row mx-7 gap-10 mb-7'>
          <div className='w-full md:w-1/2 bg-[#D9D9D9]'>
              <Image src={`/shoes/${product.image}`} alt={product.name} width={1420} height={900} className="w-full h-auto" />
          </div>
          <div className='w-full md:w-1/2'>
              <Link href="/shop" className='flex gap-2 mb-5 md:mb-20'>
                  <MdArrowBack />
                  <button>SHOP ALL</button>
              </Link>
              <h1 className='text-3xl md:text-4xl font-extrabold'>{product.name}</h1>
              <p className='font-bold pt-3'><span>&#8358;</span>{product.price}</p>
              <p className='w-full md:w-[75%] lg:w-[50%] pt-5 md:pt-20'>{product.description}</p>
              <div className='flex flex-col justify-between'>
                  <div className='flex flex-wrap w-full md:w-[50%] justify-between mt-5 md:mt-20 gap-3'>
                      <button className='p-3 bg-gray-300 text-black rounded-full'>38</button>
                      <button className='p-3 bg-gray-300 text-black rounded-full'>39</button>
                      <button className='p-3 bg-gray-300 text-black rounded-full'>40</button>
                      <button className='p-3 bg-gray-300 text-black rounded-full'>41</button>
                      <button className='p-3 bg-gray-300 text-black rounded-full'>42</button>  
                  </div>
                  <button className='bg-black text-white w-full py-4 mt-10 md:mt-64'>ADD TO BAG</button>
                  <div className='flex justify-between mt-10'>
                      <p>SHIPPING POLICY</p>
                      <p>REFUND POLICY</p>
                  </div>
              </div>
          </div>
      </div>
  );
}