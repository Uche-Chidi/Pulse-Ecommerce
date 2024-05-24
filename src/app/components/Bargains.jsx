import { data } from "./data"
import Image from "next/image"


export const WomenShoeMain = () => {
    const shoeData = data.filter(datum => datum.type == 'women').slice(0,2)

    const bargainsLog = shoeData.map(women => (
        <section key={women.id} className=' pt-6 pb-32'>
            <div className=" bg-[#D9D9D9] overflow-hidden">
                <div className=''>
                    <Image 
                        src={`/shoes/${women.name.split(' ').join('-').toLowerCase()}-women.jpg`} 
                        alt={women.name} 
                        width={700} 
                        height={700}
                        className="hover:scale-105 transition-transform cursor-pointer duration-300"
                    />
                </div>
            </div>
                <div className="font-semibold">
                    <h3 className="flex items-center justify-center">{women.name}</h3>
                    <p className="flex items-center justify-center">
                        <span>&#8358;</span><span>{women.price}</span>
                    </p>
                </div>
        </section>
    ))

    return (
        <section className=''>
            <div className="pt-40">
               <h3 className='flex justify-center items-center text-5xl w-full'>Bargains</h3>
                <p className='flex justify-center items-center w-full p-10 text-sm'>LATEST TRENDS DESIGNED TO IGNITE YOUR PASSION FOR STYLE</p>
            </div>
            <div className="grid grid-cols-2 gap-x-1 mx-7">
                {bargainsLog}
            </div>
        </section>
    )
}
