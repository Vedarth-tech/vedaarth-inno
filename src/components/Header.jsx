import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import '../styles/home.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact' },
  ];

  const linkClasses = (path) =>
    `relative inline-block px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 ease-in-out
     after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#0f1a25] after:transition-all after:duration-300
     ${
       pathname === path
         ? 'text-[#0f1a25] after:w-full'
         : 'text-[#0f1a25]/80 hover:text-[#0f1a25] after:w-0 hover:after:w-full'
     }`;

  return (
    <header className="w-full fixed top-0 z-50 bg-[#ccbcdc]/90 backdrop-blur-md shadow-sm border-b border-[#0f1a25]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0 w-24">
            <img
              src="./assets/image/logo.png"
              alt="Vedaarth Logo"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map(({ path, label }) => (
              <Link key={path} to={path} className={linkClasses(path)}>
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 focus:outline-none text-[#0f1a25]"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#ccbcdc] backdrop-blur-md border-t border-[#0f1a25]/10 transition-all duration-300">
          <div className="flex flex-col items-center py-4 space-y-2">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`w-full text-center py-3 text-base font-medium tracking-wide ${
                  pathname === path
                    ? 'text-blue-600 bg-white/40'
                    : 'text-[#0f1a25] hover:text-blue-600 hover:bg-white/30'
                } transition-all duration-200`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
