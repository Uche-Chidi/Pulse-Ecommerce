import React from 'react';
import Image from "next/image";
import { data } from "../components/data";
import Link from 'next/link';

export default function ZToA() {
    const zToAData = data.filter(datum => datum.all === 'all').slice(0, 24);

    const alphabetical = zToAData.sort((a, b) => b.name.localeCompare(a.name));

    const zToALog = alphabetical.map(item => (
        <section key={item.id} className=''>
            <div className="bg-[#D9D9D9] overflow-hidden">
                <Link href={`/products/${item.name.split(" ").join("-")}`}>
                    <div>
                        <Image 
                            src={`/shoes/${item.image}`}
                            alt={item.name} 
                            width={700} 
                            height={700}
                            className="hover:scale-105 transition-transform cursor-pointer duration-300"
                        />
                    </div>
                </Link>
            </div>
            <div className="font-semibold text-center">
                <h3 className="text-lg md:text-xl">{item.name}</h3>
                <p className="text-md md:text-lg">
                    <span>&#8358;</span><span>{item.price.toLocaleString()}</span>
                </p>
            </div>
        </section>
    ));

    return (
        <section className="">
            <div className="pt-20 md:pt-40 md:mx-7 mx-7">
                <h3 className='text-3xl md:text-5xl w-full'>Shop All</h3>
                <div className='flex flex-col sm:flex-row gap-5 text-sm pt-10 pb-10'>
                    <Link href="/shop">
                        <p>ALL PRODUCTS</p>
                    </Link>
                    <Link href="/a-z">
                        <p>ALPHABETICALLY, A-Z</p>
                    </Link>
                    <Link href="/z-a">
                        <p>ALPHABETICALLY, Z-A</p>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-x-1 md:pb-5 md:mx-7 mx-7">
                {zToALog}
            </div>
        </section>
    );
}
