"use client"
import About from './About1'
import About2 from './About2'
import About3 from './About3'
import React, { useState, useEffect } from 'react';
import Loader from "../components/Loader";
import ScrollToTop from '../components/SctollToTop';

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
      <ScrollToTop />
        <About />
        <About2 />
        <About3 />
    </div>
  )
}
