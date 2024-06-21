import { data } from "./data"
import Image from "next/image"
import Link from "next/link";

export const WomenShoeMain = () => {
    const shoeData = data.filter(datum => datum.type === 'women').slice(0, 2);
  
    const bargainsLog = shoeData.map(women => (
      <section key={women.id} className='pt-6 pb-16 md:pb-32'>
        <div className="bg-[#D9D9D9] overflow-hidden">
          <div>
            <Link href={`/products/${women.name.split(" ").join("-")}`}>
                <Image 
                src={`/shoes/${women.image}`} 
                alt={women.name} 
                width={700} 
                height={700}
                className="hover:scale-105 transition-transform cursor-pointer duration-300"
                />
              </Link>
          </div>
        </div>
        <div className="font-semibold text-center">
          <h3 className="text-lg md:text-xl">{women.name}</h3>
          <p className="text-md md:text-lg">
            <span>&#8358;</span><span>{women.price.toLocaleString()}</span>
          </p>
        </div>
      </section>
    ));
  
    return (
      <section>
        <div className="pt-20 md:pt-40 px-7 text-center">
          <h3 className='flex justify-center items-center text-3xl md:text-5xl w-full'>Bargains</h3>
          <p className='flex justify-center items-center w-full p-4 md:p-10 text-sm'>LATEST TRENDS DESIGNED TO IGNITE YOUR PASSION FOR STYLE</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-1 mx-7 md:mx-7">
          {bargainsLog}
        </div>
      </section>
    );
  };
