"use client"

import React, { useState, useEffect } from 'react';
import Loader from "../components/Loader";
import Contact from '../components/Contact';
import Contact1 from '../components/Contact1';
import Contact2 from '../components/Contact2';

export default function page() {
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
        <Contact/>
        <Contact1 />
        <Contact2/>
    </div>
  )
}
