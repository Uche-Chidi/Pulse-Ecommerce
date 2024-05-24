import { data } from "./data"
import Image from "next/image"


export const ShoeMain = () => {
    const shoeData = data.filter(datum => datum.type == 'men').slice(0,3)

    const arrivalsLog = shoeData.map(men => (
        <section key={men.id} className='flex flex-col items-center pt-6 pb-32'>
            <div className="bg-[#D9D9D9]">
                <div className=''>
                    <Image 
                        src={`/shoes/${men.name.split(' ').join('-').toLowerCase()}-men.jpg`} 
                        alt={men.name} 
                        width={600} 
                        height={800} 
                        className="h-[60vh] w-full hover:scale-105 transition-transform cursor-pointer duration-300"
                    />
                </div>
            </div>
                <div className="font-semibold">
                    <h3 className="flex items-center justify-center">{men.name}</h3>
                    <p className="flex items-center justify-center">
                        <span>&#8358;</span><span>{men.price}</span>
                    </p>
                </div>
        </section>
    ))

    return (
        <section className=''>
            <div className="grid grid-cols-3 mx-7 gap-x-1">
                {arrivalsLog}
            </div>
        </section>
    )
}
