import Image from "next/image";
import Banner from "./components/Banner";
import { ShoeMain } from "./components/NewArrivals";
import DiscoverMore from "./components/DiscoverMore";
import Grid from "./components/Grid";
import { WomenShoeMain } from "./components/Bargains";


export default function Home() {
  return (
    <main className="">
      <Banner />
      <ShoeMain />
      <DiscoverMore />
      <WomenShoeMain />
      <Grid />
      
    </main>
  );
}
