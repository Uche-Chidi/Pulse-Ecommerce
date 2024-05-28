import React from 'react'
import Image from "next/image"
import { data } from "../components/data"
import Link from 'next/link';
import { IoIosArrowRoundBack,  } from "react-icons/io";


export const AllShoeMain = () => {
    const allShoeData = data.filter(datum => datum.all === 'all').slice(12, 24);
  
    const shopLog = allShoeData.map(all => (
      <section key={all.id} className=''>
        <div className="bg-[#D9D9D9] overflow-hidden">
          <div>
            <Image 
              src={`/shoes/${all.image}`}
              alt={all.name} 
              width={700} 
              height={700}
              className="hover:scale-105 transition-transform cursor-pointer duration-300"
            />
          </div>
        </div>
        <div className="font-semibold text-center">
          <h3 className="text-lg md:text-xl">{all.name}</h3>
          <p className="text-md md:text-lg">
            <span>&#8358;</span><span>{all.price}</span>
          </p>
        </div>
      </section>
    ));
  
    return (
      <section className="">
        <div className="pt-20 md:pt-40 md:mx-7 mx-7">
          <h3 className='text-3xl md:text-5xl w-full'>Shop All</h3>
          <div className='flex flex-col sm:flex-row gap-5 text-sm pt-10 pb-10'>
            <p>ALL PRODUCTS</p>
            <p>ALPHABETICALLY, A-Z</p>
            <p>ALPHABETICALLY, Z-A</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-x-1 md:mx-7 mx-7">
          {shopLog}
        </div>
        <Link href={`/shop/${'shop-1'}`}>
            <div className='flex m-20 items-center justify-center gap-x-3'>
                <button>Prev 2/2</button>
                <p><IoIosArrowRoundBack/></p>
            </div>
        </Link> 
      </section>
    );
  };
  