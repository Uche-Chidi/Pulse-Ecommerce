"use client"
import { ShoeMain } from './Male'
import Male2 from './Male2'
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
        <ShoeMain />
        <Male2 />
    </div>
  )
}
