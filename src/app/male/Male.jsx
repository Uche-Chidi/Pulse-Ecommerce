import { data } from "../components/data"
import Image from "next/image"
import Link from "next/link";

export const ShoeMain = () => {
    const shoeData = data.filter(datum => datum.type === 'men').slice(0, 24);
  
    const arrivalsLog = shoeData.map(men => (
      <section key={men.id} className='flex flex-col items-center pt-6 pb-16 md:pb-32'>
        <div className="bg-[#D9D9D9] w-full">
          <div>
            <Link href={`/products/${men.name.split(" ").join("-")}`}>
              <Image 
                src={`/shoes/${men.image}`} 
                alt={men.name} 
                width={800} 
                height={800} 
                className="h-[40vh] md:h-[60vh] w-full hover:scale-105 transition-transform cursor-pointer duration-300"
              />
            </Link>
          </div>
        </div>
        <div className="font-semibold text-center">
          <h3 className="text-lg md:text-xl">{men.name}</h3>
          <p className="text-md md:text-lg">
            <span>&#8358;</span><span>{men.price.toLocaleString}</span>
          </p>
        </div>
      </section>
    ));
  
    return (
      <section className='mx-7 pt-32'>
        <div>
            <h3 className="className='text-3xl md:text-5xl w-full">Men's Shoes</h3>
            <div className='flex flex-col sm:flex-row gap-5 text-sm pt-10 pb-10'>
                <p>ALL PRODUCTS</p>
                <p>ALPHABETICALLY, A-Z</p>
                <p>ALPHABETICALLY, Z-A</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-1">
          {arrivalsLog}
        </div>
      </section>
    );
  };


