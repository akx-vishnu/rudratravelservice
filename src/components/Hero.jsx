import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, MapPin, CheckCircle } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative bg-rudra-blue overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#112240_1px,transparent_1px)] [background-size:20px_20px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-rudra-lightBlue text-rudra-accent text-sm font-semibold tracking-wide border border-rudra-accent/20">
                        PREMIUM CORPORATE TRANSPORT
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                        Safe. <span className="text-rudra-accent">Reliable.</span> <br />
                        On Time. Every Day.
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
                        Trust Rudra Travel Service for seamless employee transportation. With 10+ years of experience and a premium fleet, we ensure your team arrives safe and fresh.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="contact" className="bg-rudra-accent text-rudra-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-all shadow-lg text-center">
                            Request Corporate Quote
                        </a>
                        <a href="tel:+919994340262" className="border border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-rudra-blue transition-all text-center">
                            Speak to an Expert
                        </a>
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-rudra-lightBlue p-2 rounded-full text-rudra-accent">
                                <CheckCircle size={20} />
                            </div>
                            <span className="text-gray-300 font-medium">40+ Vehicles</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-rudra-lightBlue p-2 rounded-full text-rudra-accent">
                                <Shield size={20} />
                            </div>
                            <span className="text-gray-300 font-medium">100% Safety Compliance</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-rudra-lightBlue p-2 rounded-full text-rudra-accent">
                                <Clock size={20} />
                            </div>
                            <span className="text-gray-300 font-medium">24/7 Support</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-rudra-lightBlue p-2 rounded-full text-rudra-accent">
                                <MapPin size={20} />
                            </div>
                            <span className="text-gray-300 font-medium">Smart Route Planning</span>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Image / Visuals */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-rudra-lightBlue/50">
                        {/* Using a placeholder gradient or relevant image if available. Since I don't have images yet, I'll use a styled container */}
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 aspect-video flex items-center justify-center relative">
                            {/* Abstract visualization of a fleet/map */}
                            <div className="absolute inset-0 bg-rudra-blue opacity-50 mix-blend-overlay"></div>
                            <div className="text-center p-8">
                                <Shield className="w-24 h-24 text-rudra-accent mx-auto mb-4 opacity-80" />
                                <p className="text-2xl font-bold text-white">Your Safety Partner</p>
                                <p className="text-gray-400 mt-2">Connecting IT Corridors since 2014</p>
                            </div>
                        </div>
                    </div>

                    {/* Floating Badge */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 max-w-xs"
                    >
                        <div className="bg-green-100 p-2 rounded-full">
                            <CheckCircle className="text-green-600 w-8 h-8" />
                        </div>
                        <div>
                            <p className="text-gray-900 font-bold">Verified Drivers</p>
                            <p className="text-xs text-gray-500">Background Checked & Trained</p>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;
