"use client"
import Contact from './Contact'
import Contact1 from './Contact1'
"use client"
import Contact2 from './Contact2'
import React, { useState, useEffect } from 'react';
import Loader from "../components/Loader";

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
        <Contact />
        <Contact1 />
        <Contact2 />
    </div>
  )
}
