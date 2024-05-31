import React from 'react'
import Link from 'next/link';

export default function DiscoverMore() {
    return (
      <div className="relative pt-1 w-full h-full px-7 flex justify-center items-center">
        <div 
          className="bg-cover h-screen w-full flex items-center justify-center bg-black text-opacity-100 px-7"
          style={{ backgroundImage: "url('/Discover.jpg')" }}
        >
          <div className="flex flex-col items-center justify-center pt-96">
            <h2 className="text-white text-2xl md:text-4xl">Discover More</h2>
            <Link href="/shop-3">
              <button className="bg-white text-black p-3 mt-5 hover:bg-gray-100">SHOP ALL</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  

