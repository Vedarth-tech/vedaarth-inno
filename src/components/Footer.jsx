import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-primary to-accent text-white py-8 w-full h-full">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Branding */}
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <h2 className="text-2xl font-DESIGNER">Vedaarth</h2>
                    <p className="mt-2 text-white">Empowering Innovation in Every Step</p>
                </div>

                {/* Navigation Links */}
                <div className="flex gap-6">
                    <Link to="/home" className="hover:text-gray-300 transition duration-200">Home</Link>
                    <Link to="/products" className="hover:text-gray-300 transition duration-200">Products</Link>
                    <Link to="/contact" className="hover:text-gray-300 transition duration-200">Contact</Link>
                </div>
 
                {/* Social Icons */}
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition duration-200"
                    >
                        <Facebook size={20} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition duration-200"
                    >
                        <Twitter size={20} />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition duration-200"
                    >
                        <Instagram size={20} />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 text-center text-white text-sm">
                © {new Date().getFullYear()} OurCompany. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
