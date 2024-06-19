"use client";
import { data } from '../../components/data';
import Image from 'next/image';
import { MdArrowBack } from "react-icons/md";
import Link from 'next/link';
import React, { useState, useEffect, useContext } from 'react';
import Loader from "../../components/Loader";
import { SideBarContext } from '@/app/providers';

export default function ProductPage({ params }) {
    const { val, setVal, inputVal, setInputVal, cartItems, setCartItems} = useContext(SideBarContext);
    
    const product = data.find(p => p.name.split(' ').join('-') === params.slug);
    const [itemName, setItemName] = useState(product ? product.name : "")

    

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const changeValType = (e) => {
        setInputVal(Number(e.target.value));

    };

    const addValToCart = () => {
        setVal(prev => prev + inputVal);
        
        let newCartItems
        const itemIndex = cartItems.findIndex(item => item.title === itemName)
        if (itemIndex !== -1) {
            newCartItems = cartItems.map((item, index) =>
            index === itemIndex ? {
                ...item, 
                value:item.value + inputVal,
            } : item
            )
        }else {
            newCartItems = [...cartItems, {id:product.id,title:product.name,image:product.image,value:inputVal,amount:product.price}]
            
        }
        setCartItems(newCartItems);
    };

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    if (loading) {
        return <Loader />;
    }

    const recommendationData = shuffle(data.filter(datum => datum.all === 'all')).slice(0, 3);

    const recommendationLog = recommendationData.map(all => (
        <section key={all.id} className='pt-6 pb-20'>
            <div className="bg-[#D9D9D9] h-[52vh] w-full sm:w-[32vw] gap-1">
                <div>
                    <Link href={`/products/${all.name.split(" ").join("-")}`}>
                        <Image
                            src={`/shoes/${all.image}`}
                            alt={all.name}
                            width={700}
                            height={700}
                            className="hover:scale-105 transition-transform cursor-pointer duration-300"
                        />
                    </Link>
                </div>
            </div>
            <div className="font-semibold text-center">
                <h3 className="flex items-center justify-center">{all.name}</h3>
                <p className="flex items-center justify-center font-bold">
                    <span>&#8358;</span><span>{all.price}</span>
                </p>
            </div>
        </section>
    ));

    return (
        <div className=''>
            <div className='pt-20 flex flex-col md:flex-row mx-7 gap-10 mb-7'>
                <div className='w-full md:w-1/2 bg-[#D9D9D9]'>
                    <Image src={`/shoes/${product.image}`} alt={product.name} width={1420} height={900} className="w-full h-auto" />
                </div>
                <div className='w-full md:w-1/2'>
                    <Link href="/shop" className='flex gap-2 mb-5 md:mb-20'>
                        <MdArrowBack />
                        <button>SHOP ALL</button>
                    </Link>
                    <h1 className='text-3xl md:text-4xl font-extrabold'>{product.name}</h1>
                    <p className='font-bold pt-3'><span>&#8358;</span>{product.price}</p>
                    <p className='w-full md:w-[75%] lg:w-[50%] pt-5 md:pt-20'>{product.description}</p>
                    <div className='flex flex-col justify-between'>
                        <div className='flex flex-wrap w-full md:w-[50%] justify-between mt-10 md:mt-20 gap-3'>
                            <button className='p-3 bg-black text-white rounded-full'>38</button>
                            <button className='p-3 bg-black text-white rounded-full'>39</button>
                            <button className='p-3 bg-black text-white rounded-full'>40</button>
                            <button className='p-3 bg-black text-white rounded-full'>41</button>
                            <button className='p-3 bg-black text-white rounded-full'>42</button>
                        </div>
                        <div className='flex flex-row justify-between gap-2 md:mt-20 mt-10'>
                            <input 
                                type="number" 
                                name='num' 
                                id='num' 
                                max='5' 
                                min='1'
                                className='md:w-20 w-20 text-black border border-solid border-black rounded-md text-center pl-2 md:h-13 h-12 '
                                defaultValue={inputVal}
                                onChange={changeValType}
                            />
                            <button 
                                onClick={addValToCart} 
                                className='bg-black text-white md:w-full w-[75%] py-4 md:py-2 md:mt-0 rounded-md'
                            >
                                ADD TO BAG
                            </button>
                        </div>
                        <div className='flex justify-between mt-10'>
                            <Link href="/shipping">
                                <p>SHIPPING POLICY</p>
                            </Link>
                            <Link href="/refund">
                                <p>REFUND POLICY</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='mx-0 text-center'>
                    <h3 className='text-3xl md:text-5xl w-full font-extrabold pt-20'>You May Also Like</h3>
                    <div className='flex flex-col md:flex-row text-sm py-5 justify-center items-center text-center'>
                        <p>FIND INSPIRATION AND DISCOVER</p>
                        <p className='md:pl-1'>YOUR NEXT FASHION OBSESSION</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mx-7 md:mx-7 pt-10">
                    {recommendationLog}
                </div>
            </div>
        </div>
    );
}
