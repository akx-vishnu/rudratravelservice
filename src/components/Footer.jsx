import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-rudra-blue text-white pt-12 pb-6 border-t border-rudra-lightBlue">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-rudra-accent mb-4">RUDRA TRAVEL SERVICE</h3>
                        <p className="text-gray-400 mb-4">
                            Providing safe, reliable, and punctual corporate employee transport solutions in Coimbatore since 2014.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Placeholders */}
                            <a href="#" className="text-gray-400 hover:text-rudra-accent"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-rudra-accent"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-rudra-accent"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'Our Services', path: '/services' },
                                { name: 'Safety Protocols', path: '/safety' },
                                { name: 'Our Fleet', path: '/fleet' },
                                { name: 'Contact Us', path: '/contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-400 hover:text-rudra-accent transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="text-rudra-accent shrink-0" size={20} />
                                <span>
                                    146 Shree Senthur Balaji Garden, Govinthanaicken Palayam, Idikarai, Coimbatore, Tamil Nadu 641110
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="text-rudra-accent shrink-0" size={20} />
                                <a href="tel:+919994340262" className="hover:text-white transition-colors">+91 99943 40262</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="text-rudra-accent shrink-0" size={20} />
                                <a href="mailto:rudratravelservice@gmail.com" className="hover:text-white transition-colors">rudratravelservice@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-rudra-lightBlue pt-6 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Rudra Travel Service. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
