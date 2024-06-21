"use client"// import React from 'react'
import { AllShoeMains } from '../Shop1'
import { AllShoeMain } from '../Shop3'
import React, { useState, useEffect } from 'react';
import Loader from "../../components/Loader";

export default function Page({params}) {
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
    <div className=''> 
        {params.slug == 'shop-3' ?
        
         <AllShoeMain/> : <AllShoeMains /> 
         }
    </div>
  )
}
