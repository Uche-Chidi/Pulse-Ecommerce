"use client"
// import { AllShoeMain } from '../shop/Shop3'
import Female2 from './Female2'
import { WomenMain } from './Female'
import React, { useState, useEffect } from'react';
import Loader from "../components/Loader";

export default function Page() {
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
    <div>
        <WomenMain />
        <Female2 />
    </div>
  )
}
