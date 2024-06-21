"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Search from '../components/Search';

export default function ShopDropdown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(true);

    const handleLinkClick = () => {
        setIsDropdownOpen(false);
    };

    const handleSearchItemClick = () => {
        setIsDropdownOpen(false);
    };

    return (
        isDropdownOpen && (
            <section className='absolute md:h-[50vh] h-[100vh] w-full overflow-auto mt-[8vh]'>
                <div className='flex flex-col md:flex-row mt-0 px-7 justify-between bg-white text-black overflow-y-scroll'>
                    <div className='sm:flex flex-1 justify-center md:hidden'>
                        <Search onSearchItemClick={handleSearchItemClick} />
                    </div>
                    <div className='block md:hidden py-10'>
                        <p className='text-sm font-extrabold text-gray-500'>MENU</p>
                        <Link href="/about" onClick={handleLinkClick}>
                            <p className='text-3xl font-bold'>About</p>
                        </Link>
                        <Link href="/contact" onClick={handleLinkClick}>
                            <p className='text-3xl font-bold'>Contact</p>
                        </Link>
                    </div>
                    <div className='md:my-5'>
                        <p className='text-sm font-extrabold text-gray-500 pb-8'>SHOP</p>
                        <Link href="/shop" onClick={handleLinkClick}>
                            <p className='text-3xl font-bold'>Shop All</p>
                        </Link>
                        <Link href="/bestsellers" onClick={handleLinkClick}>
                            <p className='text-3xl font-bold'>Bestsellers</p>
                        </Link>
                        <Link href="/exclusive" onClick={handleLinkClick}>
                            <p className='text-3xl font-bold'>Exclusive</p>
                        </Link>
                        <Link href="/sale" onClick={handleLinkClick}>
                            <p className='text-3xl font-bold'>On Sale</p>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 py-10 md:py-0 md:gap-20 md:my-5">
                        <div className='text-sm'>
                            <p className='text-sm font-extrabold text-gray-500 pb-8'>SEX</p>
                            <Link href="/male" onClick={handleLinkClick}>
                                <p className='pb-2'>Male</p>
                            </Link>
                            <Link href="/female" onClick={handleLinkClick}>
                                <p>Female</p>
                            </Link>
                        </div>
                        <div>
                            <p className='text-sm font-extrabold text-gray-500 pb-8'>BIG SIZES</p>
                            <p className='text-sm font-extrabold '>47</p>
                            <p className='text-sm font-extrabold '>48</p>
                            <p className='text-sm font-extrabold '>49</p>
                            <p className='text-sm font-extrabold '>50</p>
                        </div>
                    </div>
                    <div id="../../components/NewArrivals.jsx" onClick={handleLinkClick} className="hover:scale-95 duration-300 bg-cover md:h-[40vh] h-[30vh] md:w-[60vw] w-full backdrop-brightness-0 flex items-center justify-center my-5" style={{ backgroundImage: "url('/dropdown.jpg')" }}>
                        <p className='flex items-center justify-center text-center text-white font-extrabold text-4xl'>New Arrivals</p>
                    </div>
                </div>
            </section>
        )
    );
}
