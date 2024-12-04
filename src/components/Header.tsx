"use client";

import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Link from 'next/link';
import { HiX } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='bg-blue-500 text-black-200 py-5 flex justify-between  items-center px-10 relative z-10'>
      <h1 className="text-2xl font-serif hover:text-white">HandsFree Online Shop</h1>

      {/* Desktop navigation */}
      <nav className="hidden md:flex gap-11 justify-end font-bold">
        <Link href="/" className="hover:text-white" onClick={closeMenu}>Home</Link>
        <Link href="/about" className="hover:text-white" onClick={closeMenu}>About</Link>
        <Link href="/handsfree" className="hover:text-white" onClick={closeMenu}>Handsfree</Link>
        <Link href="/contact" className="hover:text-white" onClick={closeMenu}>Contact</Link>
        <FaShoppingCart className="text-white text-xl" />
      </nav>

      {/* Hamburger icon for mobile */}
      <div className="md:hidden flex items-center">
        <HiMenuAlt3
          className="text-white text-3xl cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-0 left-0 w-full h-full hover:divide-amber-900 bg-blue-300 p-5 md:hidden z-20`}>
        <div className="flex justify-end">
          <HiX className="text-black text-3xl cursor-pointer" onClick={toggleMenu} />
        </div>

        <nav className="flex flex-col items-center gap-3 text-black font-bold">
          <Link href="/" className="hover:text-white" onClick={closeMenu}>Home</Link>
          <Link href="/about" className="hover:text-white" onClick={closeMenu}>About</Link>
          <Link href="/handsfree" className="hover:text-white" onClick={closeMenu}>Handsfree</Link>
          <Link href="/contact" className="hover:text-white" onClick={closeMenu}>Contact</Link>
          <FaShoppingCart className="text-white hover:text-blue-800 text-xl" />
        </nav>
      </div>
    </header>
  );
};

export default Header;