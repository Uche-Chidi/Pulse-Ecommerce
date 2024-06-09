'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { RiShoppingBagLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import ShopDropdown from '../dropdown/ShopDropdown';

const links = [
    { name: 'SHOP', href: '#' },  // Adjusted href to '#' as it won't be used for navigation
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' }
];

const orderDropdownLinks = [
    { name: 'Sub-order 1', href: '/order/suborder1' },
    { name: 'Sub-order 2', href: '/order/suborder2' },
    { name: 'Sub-order 3', href: '/order/suborder3' }
];

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [drop, setDrop] = useState(false);
    const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    function showDropDown(){
        setDrop(!drop)
    }

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    const toggleOrderDropdown = () => {
        setIsOrderDropdownOpen(!isOrderDropdownOpen);
    }

    const closeNav = () => {
        setIsNavOpen(false);
    }

    const closeOrderDropdown = () => {
        setIsOrderDropdownOpen(false);
    }

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Handle search submission (e.g., redirect to search results page)
        console.log("Search query submitted:", searchQuery);
    };

    const val = 0;

    return (
        <div>

        <nav className='bg-white max-w-full px-7 md:px-7 items-center h-[8vh] md:h-[8vh] fixed inset-x-0 z-[2] flex justify-between'>
            <div>
                <h1 className='text-black font-bold text-2xl sm:text-lg '>
                    <Link href='/'>Pulse</Link>
                </h1>
            </div>
            <div className='hidden sm:flex flex-1 justify-center'>
                    <form onSubmit={handleSearchSubmit} className='flex'>
                        <input 
                            type='text' 
                            value={searchQuery} 
                            onChange={handleSearchChange} 
                            placeholder='Search...'
                            className='p-2 border border-gray-300 focus:outline-none focus:border-black rounded-full pr-10'
                        />
                        <button type='submit' className='py-2 bg-black text-white rounded-full ml-2 px-5'>Search</button>
                    </form>
                </div>
            <div className='flex items-center'>
                <ul className='text-black hidden sm:flex flex-row gap-8 relative text-sm'>
                   
                        <li onClick={showDropDown} className='cursor-pointer'>
                            SHOP    
                        </li>
                        <Link href="/about">
                        <li>
                            ABOUT
                        </li>
                        </Link>
                        <Link href="/contact">
                        <li>
                            CONTACT
                        </li>
                        </Link>
                    
                </ul>
                <div className='flex items-center ml-4'>
                    <RiShoppingBagLine className='font-semibold text-black' />
                    <span className='font-semibold ml-2 text-black'>({val})</span>
                </div>
                <div className='ml-4 relative sm:hidden'>
                    <div className='text-2xl cursor-pointer text-black' onClick={showDropDown}>
                        {isNavOpen ? <IoMdClose /> : <RxHamburgerMenu />}
                    </div>
                    {isNavOpen && (
                        <div className='absolute right-0 mt-4 w-80 h-[40rem] bg-white text-black  flex flex-col items-center justify-center p-4'>
                            <ul className='flex flex-col gap-2 text-center'>
                                {links.map(link => (
                                    <li key={link.href} onClick={closeNav}>
                                        <Link className='tracking-[1.5px] font-semibold' href={link.href}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
        {drop &&
            <ShopDropdown onClick={showDropDown}/>
        }
        </div>
    )
}

export default Navbar