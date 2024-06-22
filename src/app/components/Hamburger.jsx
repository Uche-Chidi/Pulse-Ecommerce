'use client';
import Link from 'next/link';
import React, { useContext, useState, useRef } from 'react';
import { RiShoppingBagLine } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import ShopDropdown from '../dropdown/ShopDropdown';
import { SideBarContext } from '../providers';
import Search from './search';
import Cart from '../cart/Cart';
import { useOutsideClick } from '../outsideClick/OutsideClick';
import { motion } from 'framer-motion';

const links = [
    { name: 'SHOP', href: '#' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' }
];

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [drop, setDrop] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const dropdownRef = useRef(null);
    const cartRef = useRef(null);

    const { val } = useContext(SideBarContext);

    useOutsideClick(dropdownRef, () => setDrop(false));
    useOutsideClick(cartRef, () => setIsCartOpen(false));

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const toggleDrop = () => {
        setDrop(!drop);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Handle search submission (e.g., redirect to search results page)
        console.log('Search query submitted:', searchQuery);
    };

    return (
        <div>
            <nav className='bg-white max-w-full px-7 md:px-7 items-center h-[8vh] md:h-[8vh] fixed inset-x-0 z-[2] flex justify-between'>
                <div>
                    <h1 className='text-black font-bold text-2xl sm:text-lg'>
                        <Link href='/'>Pulse</Link>
                    </h1>
                </div>
                <div className='hidden md:block'>
                    <Search searchQuery={searchQuery} handleSearchChange={handleSearchChange} handleSearchSubmit={handleSearchSubmit} />
                </div>
                <div className='flex items-center text-sm'>
                    <ul className='text-black hidden sm:flex flex-row gap-8 relative text-sm'>
                        <li onClick={toggleDrop} className='cursor-pointer'>
                            SHOP
                        </li>
                        <Link href='/about'>
                            <li>ABOUT</li>
                        </Link>
                        <Link href='/contact'>
                            <li>CONTACT</li>
                        </Link>
                    </ul>
                    <div onClick={toggleCart} className='flex items-center ml-4 cursor-pointer'>
                        <RiShoppingBagLine className='font-semibold text-black' />
                        <span className='font-semibold ml-2 text-black'>({val})</span>
                    </div>
                    <div className='ml-4 relative md:hidden'>
                        <div className='text-2xl cursor-pointer text-black' onClick={toggleDrop}>
                            {drop ? <IoMdClose /> : <RxHamburgerMenu />}
                            
                        </div>
                        {isNavOpen && (
                            <div className='absolute right-0 mt-4 w-80 h-[40rem] bg-white text-black flex flex-col items-center justify-center p-4'>
                                <ul className='flex flex-col gap-2 text-center'>
                                    {links.map((link) => (
                                        <li key={link.href} onClick={toggleNav}>
                                            <Link className='tracking-[1.5px] font-semibold' href={link.href}>
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            {drop && (
                <div ref={dropdownRef}>
                    <ShopDropdown />
                </div>
            )}
            {/* {isNavOpen && (
                <div ref={dropdownRef}>
                    <ShopDropdown />
                </div>
            )} */}
            {isCartOpen && (
                <div ref={cartRef}>
                    <Cart />
                </div>
            )}
        </div>
    );
};

export default Navbar;
