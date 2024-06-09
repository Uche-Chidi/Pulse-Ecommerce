"use client"
// import React from 'react'
import { AllShoeMains } from './Shop1'
import Shop2 from './Shop2'
import React, { useState, useEffect } from 'react';
import Loader from "../components/Loader";

export default function page() {
  const [loading, setLoading] = useState(true);
  
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
  return (
  
    <div>
      <AllShoeMains />
      {/* <Shop2 /> */}
    </div>
  )
}
