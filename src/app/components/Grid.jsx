"use client";

import Link from 'next/link';
import { data } from "./data";
import React, { useState, useEffect } from 'react';
import Loader from "../components/Loader";

export default function Grid() {
    const [loading, setLoading] = useState(true);
    const [activeText, setActiveText] = useState("text1");

    useEffect(() => {
        // Simulate a network request or some async operation
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust the duration as needed

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    const shoeData = data.filter(datum => datum.type === 'men').slice(8, 10);

    const gridLog = shoeData.map(men => (
        <section key={men.id} className='pt-6 pb-20'>
            <div className="bg-[#D9D9D9] h-[45vh] w-full sm:w-[22vw]">
                <div className=''>
                    <Link href={`/products/${men.name.split(" ").join("-")}`}>
                        <img
                            src={`/shoes/${men.image}`}
                            alt={men.name}
                            className="h-[40vh] w-full sm:w-[20vw] hover:scale-110 transition-transform cursor-pointer duration-300"
                        />
                    </Link>
                </div>
            </div>
            <div className="font-semibold text-center">
                <h3 className="flex items-center justify-center">{men.name}</h3>
                <p className="flex items-center justify-center font-bold">
                    <span>&#8358;</span><span>{men.price}</span>
                </p>
            </div>
        </section>
    ));

    return (
        <section className=''>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mx-7 bg-white rounded shadow-lg gap-y-2 md:gap-y-0">
                <div className="bg-cover bg-no-repeat h-screen min-w-full sm:min-w-[50%] flex items-center justify-center" style={{ backgroundImage: activeText === "text1" ? "url('/New Balances.jpeg')" : activeText === "text2" ? "url('/performance.jpg')" : activeText === "text3" ? "url('/elegance.jpg')" : "url('/comfort.jpg')" }}>
                    <div className='gap-y-2'>
                        <ul className='text-white text-2xl'>
                            <li onClick={() => setActiveText("text1")} className={`cursor-pointer py-1 ${activeText === "text1" ? 'border-b-2 border-white w-fit duration-1000 text-white' : ''}`}>
                                Comfort
                            </li>
                            <li onClick={() => setActiveText("text2")} className={`cursor-pointer py-1 ${activeText === "text2" ? 'border-b-2 border-white w-fit' : ''}`}>
                                Elegance
                            </li>
                            <li onClick={() => setActiveText("text3")} className={`cursor-pointer py-1 ${activeText === "text3" ? 'underline duration-1000' : ''}`}>
                                Performance
                            </li>
                            <li onClick={() => setActiveText("text4")} className={`cursor-pointer py-1 ${activeText === "text4" ? 'underline duration-1000' : ''}`}>
                                Versatility
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    {activeText === "text1" && <p className='flex justify-center items-center border border-white h-screen text-2xl text-center'>Pulse, where style meets comfort</p>}
                    {activeText === "text2" && <p className='flex justify-center items-center border border-white h-screen text-2xl text-center'>Discover your fairy tale fit at our shoe haven</p>}
                    {activeText === "text3" && <p className='flex justify-center items-center border border-white h-screen text-2xl text-center'>Unleash Your Potential: Performance Shoes Built to Excel.</p>}
                    {activeText === "text4" && <p className='flex justify-center items-center border border-white h-screen text-2xl text-center'>Adapt to Any Occasion: Versatile Shoes for Your Dynamic Lifestyle.</p>}
                </div>
                <div>
                    <section className='flex flex-col justify-center items-center'>
                        <p className='pt-10 text-sm'>SOPHISTICATION AND ELEGANCE</p>
                        <h2 className='font-bold sm:text-3xl pt-4 text-xl'>Handpicked selection</h2>
                        <h2 className='font-bold text-xl sm:text-3xl'>of exclusive sneakers</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 mx-7 font-bold">
                            {gridLog}
                        </div>
                        <Link href="/exclusive">
                            <button className='p-5 bg-black text-white mt-4'>SHOP EXCLUSIVE</button>
                        </Link>
                    </section>
                </div>
                <div className="bg-cover h-screen bg-black text-opacity-100" style={{ backgroundImage: "url('/nike-just-do-it.jpeg')" }}>
                </div>
                <div className="bg-cover h-screen flex items-center justify-center bg-black text-opacity-100" style={{ backgroundImage: "url('/adidas.jpeg')" }}></div>
                <div className="flex justify-center items-center flex-col">
                    <p className='flex justify-center items-center border border-white text-sm pt-10'>PERFECT FORM AND FUNCTION</p>
                    <p className='flex justify-center items-center border border-white text-2xl font-extrabold pt-5 text-center'>Where Pulse Transcends into</p>
                    <p className='flex justify-center items-center border border-white text-2xl font-extrabold text-center'>Unforgettable Style Experiences</p>
                    <p className='flex justify-center items-center border border-white text-sm pt-20 w-full sm:w-[50%] text-center'>"Pulse" — it's more than a name; it's an experience, a journey into the artistry of footwear. Immerse yourself in our vast collection of shoes, meticulously curated to cater to every taste and occasion. Comfort is not just about fit — it's about feeling.</p>
                    <p className='flex justify-center items-center border border-white text-sm pt-5 w-full sm:w-[50%] text-center'>From the timeless allure of classic designs to the avant-garde innovation of cutting-edge styles, each pair of shoes tells a story of craftsmanship and elegance. Footwear is not just an accessory, but a reflection of your individuality.</p>
                    <Link href="/about">
                        <button className='p-3 text-white bg-black text-sm mt-10 sm:mt-40 flex items-center justify-center'>LEARN MORE</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
