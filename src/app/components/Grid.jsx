"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { data } from "./data"
// import UnderlineText from './Underline';

export default function Grid() {

    
        const shoeData = data.filter(datum => datum.type == 'men').slice(5,7)
    
        const gridLog = shoeData.map(men => (
            <section key={men.id} className=' pt-6 pb-20'>
                <div className=" bg-[#D9D9D9] h-[45vh] w-[22vw]">
                    <div className=''>
                        <img
                                src={`/shoes/${men.name.split(' ').join('-').toLowerCase()}-men.jpg`} 
                                alt={men.name}
                                className="h-[40vh] w-[20vw] hover:scale-110 transition-transform cursor-pointer duration-300"
                               
                        />
                    </div>
                </div>
                    <div className="font-semibold">
                        <h3 className="flex items-center justify-center">{men.name}</h3>
                        <p className="flex items-center justify-center font-bold">
                             <span>&#8358;</span><span>{men.price}</span>
                        </p>
                    </div>
                </section>
            ))

            

    const [text1, setText1] = useState(true)
    const [text2, setText2] = useState(false)
    const [text3, setText3] = useState(false)
    const [text4, setText4] = useState(false)

    function changeText1(){
        setText1(true)
        setText2(false)
        setText3(false)
        setText4(false)
    }

    function changeText2(){
        setText1(false)
        setText2(true)
        setText3(false)
        setText4(false)
    }

    function changeText3(){
        setText1(false)
        setText2(false)
        setText3(true)
        setText4(false)
    }

    function changeText4(){
        setText1(false)
        setText2(false)
        setText3(false)
        setText4(true)
    }
  return (
    <section className=''>
        <div class="grid grid-cols-2 grid-rows-3 gap-0 mx-7 bg-white rounded shadow-lg">
            <div className="bg-cover bg-no-repeat h-screen min-w-[50%] flex items-center justify-center" style={{backgroundImage: text1 ? "url('/New Balances.jpeg')"  : text2 ? "url('/performance.jpg')" : text3 ? "url('/elegance.jpg')" : "url('/comfort.jpg')"}}>
                <div className='gap-y-2'>
                    <ul className='text-white text-2xl'>
                        <li onClick={changeText1} className={`cursor-pointer py-1 ${text1 ? 'border-b-2 border-white w-fit  duration-1000 text-white': ''}`}>
                            Comfort
                        </li>
                        <li onClick={changeText2} className={`cursor-pointer py-1 ${text2 ? 'border-b-2 border-white w-fit': ''}`}>
                            Elegance
                        </li>
                        <li onClick={changeText3} className={`cursor-pointer ${text3 ? 'underline duration-1000': ''}`} >
                            Performance
                        </li>
                        <li onClick={changeText4} className={`cursor-pointer ${text4 ? 'underline duration-1000': ''}`}>
                            Versatility
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                {text1 &&

                    <p className='flex justify-center items-center border border-white h-screen text-2xl'>Pulse, where style meets comfort</p>
                }
                {text2 &&

                    <p className='flex justify-center items-center border border-white h-screen text-2xl'>Discover your fairy tale fit at our shoe haven</p>
                }
                {text3 &&

                    <p className='flex justify-center items-center border border-white h-screen text-2xl'>Unleash Your Potential: Performance Shoes Built to Excel.</p>
                }
                {text4 &&

                    <p className='flex justify-center items-center border border-white h-screen text-2xl'>Adapt to Any Occasion: Versatile Shoes for Your Dynamic Lifestyle.</p>
                }
            </div>
            <div>
                <section className='flex flex-col justify-center items-center'>
                    <p className='pt-10 text-sm'>SOPHISTICATION AND ELEGANCE</p>
                    <h2 className='font-bold text-3xl pt-4'>Handpicked selection of</h2>
                    <h2 className='font-bold text-3xl'>exclusive sneakers</h2>

                    <div className="grid grid-cols-2 gap-x-2 mx-7 font-bold ">
                        {gridLog}
                    </div>
                    <button className='p-5 bg-black text-white'>SHOP EXCLUSIVE</button>

                </section>
            </div>
            <div className="bg-cover h-screen  bg-black text-opacity-100" style={{backgroundImage: "url('/nike-just-do-it.jpeg')"}}>
            </div>
            <div className="bg-cover h-screen flex items-center justify-center bg-black text-opacity-100" style={{backgroundImage: "url('/adidas.jpeg')"}}></div>
            <div className="flex justify-center items-center flex-col">
                <p className='flex justify-center items-center border border-white text-sm pt-10'>PERFECT FORM AND FUNCTION</p>
                <p className='flex justify-center items-center border border-white text-2xl font-extrabold pt-5'>Where Pulse Transcends into</p>
                <p className='flex justify-center items-center border border-white text-2xl font-extrabold'>Unforgettable Style Experiences</p>
                <p className='flex justify-center items-center border border-white text-sm pt-20 w-[50%]'>"Pulse" — it's more than a name; it's an experience, a journey into the artistry of footwear. Immerse yourself in our vast collection of shoes, meticulously curated to cater to every taste and occasion. Comfort is not just about fit — it's about feeling.</p>
                <p className='flex justify-center items-center border border-white text-sm pt-5 w-[50%]'>From the timeless allure of classic designs to the avant-garde innovation of cutting-edge styles, each pair of shoes tells a story of craftsmanship and elegance. Footwear is not just an accessory, but a reflection of your individuality.</p>
                <button className='p-3 text-white bg-black text-sm mt-40 flex items-center justify-center'>LEARN MORE</button>

            </div>
            </div>
    </section>
    )
}


