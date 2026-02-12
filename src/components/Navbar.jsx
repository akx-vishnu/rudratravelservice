import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Safety', path: '/safety' },
        { name: 'Fleet', path: '/fleet' },
        { name: 'Clients', path: '/clients' },
        { name: 'Contact', path: '/contact' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-rudra-blue text-white sticky top-0 z-50 shadow-lg border-b border-rudra-lightBlue">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="bg-white p-2 rounded-full">
                            <ShieldCheck className="h-8 w-8 text-rudra-blue" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-wider text-rudra-white">RUDRA</span>
                            <span className="text-xs text-rudra-accent tracking-widest">TRAVEL SERVICE</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${location.pathname === link.path
                                            ? 'text-rudra-accent bg-rudra-lightBlue'
                                            : 'text-gray-300 hover:text-white hover:bg-rudra-lightBlue'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href="tel:+919994340262"
                            className="flex items-center gap-2 bg-rudra-accent text-rudra-blue px-4 py-2 rounded-full font-bold hover:bg-white transition-colors"
                        >
                            <Phone size={18} />
                            <span>Call Now</span>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-rudra-lightBlue focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-rudra-lightBlue overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path
                                            ? 'text-rudra-accent bg-rudra-blue'
                                            : 'text-gray-300 hover:text-white hover:bg-rudra-blue'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="tel:+919994340262"
                                className="block w-full text-center mt-4 bg-rudra-accent text-rudra-blue px-4 py-3 rounded-md font-bold"
                            >
                                Call Now
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
