"use client"
import Licenses from './License'
import React, { useState, useEffect } from'react';
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
        <Licenses/>
    </div>
  )
}
