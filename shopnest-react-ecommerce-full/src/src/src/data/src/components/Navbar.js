import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">ShopNest</Link>
        <div className="space-x-4">
          <Link to="/" className={navClass(location.pathname === '/')}>Home</Link>
          <Link to="/cart" className={navClass(location.pathname === '/cart')}>Cart</Link>
          <Link to="/login" className={navClass(location.pathname === '/login')}>Login</Link>
          <button onClick={() => setDarkMode(!darkMode)} className="text-gray-500 dark:text-gray-300">
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
};

const navClass = (active) =>
  `px-3 py-1 rounded-md transition ${
    active ? 'bg-blue-100 dark:bg-blue-600 text-blue-800 dark:text-white' : 'text-gray-700 dark:text-gray-300'
  }`;

export default Navbar;
