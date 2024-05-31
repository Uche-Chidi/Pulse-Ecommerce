import React from 'react'
import Image from "next/image"
import { data } from "../components/data"
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from 'next/link';




export const Bestsellers = () => {
    const bestData = data.filter(datum => datum.category === 'bestsellers').slice(0, 24);
  
    const bestLog = bestData.map(bestsellers => (
      <section key={bestsellers.id} className=''>
        <div className="bg-[#D9D9D9] overflow-hidden">
        <Link href={`/products/${bestsellers.name.split(" ").join("-")}`}>
          <div>
            <Image 
              src={`/shoes/${bestsellers.image}`}
              alt={bestsellers.name} 
              width={700} 
              height={700}
              className="hover:scale-105 transition-transform cursor-pointer duration-300"
            />
          </div>
        </Link>
        </div>
        <div className="font-semibold text-center">
          <h3 className="text-lg md:text-xl">{bestsellers.name}</h3>
          <p className="text-md md:text-lg">
            <span>&#8358;</span><span>{bestsellers.price}</span>
          </p>
        </div>
      </section>
    ));
  
    return (
      <section className="">
        <div className="pt-20 md:pt-40 md:mx-7 mx-7">
          <h3 className='text-3xl md:text-5xl w-full'>Bestsellers</h3>
          <div className='flex flex-col sm:flex-row gap-5 text-sm pt-10 pb-10'>
            <p>ALL PRODUCTS</p>
            <p>ALPHABETICALLY, A-Z</p>
            <p>ALPHABETICALLY, Z-A</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-x-1 md:pb-5 md:mx-7 mx-7">
          {bestLog}
        </div>
      </section>
    );
  };
  