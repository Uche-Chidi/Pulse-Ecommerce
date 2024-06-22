"use client"
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Search from '../components/Search';
import { AnimatePresence, motion } from 'framer-motion';

export default function ShopDropdown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(true);
    const dropdownRef = useRef(null);

    const handleLinkClick = () => {
        setIsDropdownOpen(false);
    };

    const handleSearchItemClick = () => {
        setIsDropdownOpen(false);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const dropdownVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
    };

    return (
        <AnimatePresence>
            {isDropdownOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 md:z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    ></motion.div>
                    <motion.section
                        ref={dropdownRef}
                        className='fixed top-[60px] z-50 md:h-[50vh] h-[calc(100vh-60px)] w-full overflow-auto bg-white'
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                    >
                        <div className='flex flex-col md:flex-row mt-0 px-7 justify-between text-black overflow-y-scroll'>
                            <div className='sm:flex flex-1 justify-center md:hidden pt-20'>
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
                            <div className='hidden md:block'>
                                <div id="../../components/NewArrivals.jsx" onClick={handleLinkClick} className="hover:scale-95 duration-300 bg-cover md:h-[40vh] md:w-[60vw] w-full backdrop-brightness-0 flex items-center justify-center my-5" style={{ backgroundImage: "url('/dropdown.jpg')" }}>
                                    <p className='flex items-center justify-center text-center text-white font-extrabold text-4xl'>New Arrivals</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                </>
            )}
        </AnimatePresence>
    );
}
