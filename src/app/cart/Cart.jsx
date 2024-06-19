"use client";
import React, { useContext, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { SideBarContext } from '../providers';
import Image from 'next/image';
import { RiDeleteBin2Fill } from 'react-icons/ri';

export default function Cart() {
    const { cartItems } = useContext(SideBarContext);
    const [isCartOpen, setIsCartOpen] = useState(true);

    const handleClick = () => {
        setIsCartOpen(false);
    };

    const totalAmount = cartItems.reduce((acc, item) => acc + ((item.amount)*(item.value)), 0);

    return (
        isCartOpen && (
            <section className='fixed top-0 right-0 w-[33%] h-[100vh] bg-white shadow-lg flex flex-col overflow-hidden'>
                <div className='p-7 flex-1 flex flex-col'>
                    <div className='flex justify-between items-center mb-5 mt-10'>
                        <h2 className='text-3xl font-bold text-black'>Cart</h2>
                        <button onClick={handleClick} className='text-3xl'>
                            <IoMdClose />
                        </button>
                    </div>
                    {cartItems.length === 0 ? (
                        <div className='flex-1 flex items-center justify-center'>
                            <p className='text-xl font-semibold'>Your cart is empty</p>
                        </div>
                    ) : (
                        <div className='overflow-y-auto flex-1 mb-5'>
                            {cartItems.map((item, id) => (
                                <div key={item.id} className='mb-5 grid grid-cols-3 gap-x-10 items-center'>
                                    <div className='bg-[#D9D9D9]'>
                                        <Image src={`/shoes/${item.image}`} alt={item.image} width={150} height={150} />
                                    </div>
                                    <div className='flex flex-col justify-between text-xs font-bold'>
                                        <p className='text-sm'>{item.title}</p>
                                        <div>
                                            <p>{item.value}</p>
                                            <p>{item.amount}</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-end items-start'>
                                        <RiDeleteBin2Fill className='cursor-pointer text-xl' />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className='border-t pt-5'>
                        <div className='flex justify-between'>
                            <p className='text-xl font-bold'>TOTAL</p>
                            <p className='text-xl font-bold'>
                                {totalAmount.toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='p-7 bg-white'>
                    <button className='bg-black text-white p-3 w-full hover:bg-gray-100 hover:text-black'>
                        CHECKOUT
                    </button>
                </div>
            </section>
        )
    );
}
