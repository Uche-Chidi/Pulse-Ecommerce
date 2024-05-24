import Link from 'next/link'; // Correct import statement
import React from 'react';
import { IoBagOutline } from "react-icons/io5";

export default function Navbar() {
    const cartVal = 0;
    return (
        <nav className='flex items-center justify-between px-7 py-2 text-black'>
                <ul className='flex items-center gap-10'>
                    <li className='text-xl'>
                        <Link href='/'>Pulse</Link> 
                    </li>
                </ul>
                <ul className=' flex gap-10 items-center'>

                    <li>
                        <Link href='/shop' className='text-sm'>SHOP</Link> 
                    </li>
                    <li>
                        <Link href='/about' className='text-sm'>ABOUT</Link> 
                    </li>
                    <li>
                        <Link href='/contact' className='text-sm'>CONTACT</Link> 
                    </li>
                <span className='flex items-center'>
                    <li className='text-sm'>
                        <IoBagOutline />
                    </li>
                    <li className='text-black pl-3 py-1 items-center font-mono text-sm'>({cartVal})</li>
                </span>
                </ul>
        </nav>
    );
}
