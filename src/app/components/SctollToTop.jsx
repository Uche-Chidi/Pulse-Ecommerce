// components/ScrollToTop.js
"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ScrollToTop = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [router.pathname]);

  return null;
};

export default ScrollToTop;
