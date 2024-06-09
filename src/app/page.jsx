"use client"
import Image from "next/image";
import Banner from "./components/Banner";
import { ShoeMain } from "./components/NewArrivals";
import DiscoverMore from "./components/DiscoverMore";
import Grid from "./components/Grid";
import { WomenShoeMain } from "./components/Bargains";
import React, { useState, useEffect } from 'react';
import Loader from "./components/Loader";




export default function Home() {
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulate a network request or some async operation
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); // Adjust the duration as needed
  
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return <Loader />;
    }
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
