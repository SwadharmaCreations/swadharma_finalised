// src/ScrollToTop.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This will run every time the route (pathname) changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render any HTML
}