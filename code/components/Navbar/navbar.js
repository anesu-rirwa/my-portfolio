"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative shadow bg-gray-800">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center lg:justify-center">
                <div className="flex items-center justify-between lg:hidden">

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-200 hover:text-gray-500  focus:outline-none focus:text-gray-500 "
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                            </svg>
                            ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                <div
                    className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center
                    ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}
                    lg:block`}
                >
                    <div className="flex flex-col md:flex-row md:mx-6">
                    <Link className="md:px-8 md:py-2 -mb-px text-sm md:text-center md:bg-transparent md:border-b-2 md:border-gray-200 sm:text-base text-white whitespace-nowrap cursor-base md:focus:outline-none 
                    hover:text-gray-300
                    hover:border-blue-500" href="/">Dashboard</Link>

                    <Link className="md:px-8 md:py-2 -mb-px text-sm md:text-center md:bg-transparent md:border-b-2 md:border-gray-200 sm:text-base text-white whitespace-nowrap cursor-base md:focus:outline-none 
                    hover:text-gray-300
                    hover:border-blue-500" href="/about-me">About Me</Link>
                    
                    <Link className="md:px-8 md:py-2 -mb-px text-sm md:text-center md:bg-transparent md:border-b-2 md:border-gray-200 sm:text-base text-white whitespace-nowrap cursor-base md:focus:outline-none 
                    hover:text-gray-300
                    hover:border-blue-500" href="/experience">Experience</Link>

                    <Link className="md:px-8 md:py-2 -mb-px text-sm md:text-center md:bg-transparent md:border-b-2 md:border-gray-200 sm:text-base text-white whitespace-nowrap cursor-base md:focus:outline-none 
                    hover:text-gray-300
                    hover:border-blue-500" href="/projects">Projects</Link>
                    
                    <Link className="md:px-8 md:py-2 -mb-px text-sm md:text-center md:bg-transparent md:border-b-2 md:border-gray-200 sm:text-base text-white whitespace-nowrap cursor-base md:focus:outline-none 
                    hover:text-gray-300
                    hover:border-blue-500" href="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

/*
h-12 px-8 py-2 -mb-px text-sm text-center bg-transparent border-b-2 border-gray-200 sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400
*/