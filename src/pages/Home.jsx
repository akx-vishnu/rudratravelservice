import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/Hero'; // Renamed import to avoid conflict
import ServiceCard from '../components/ServiceCard';
import SEO from '../components/SEO';
import { Map, Moon, Bus, Users, Clock, ShieldCheck } from 'lucide-react';

const Home = () => {
    const services = [
        {
            icon: Bus,
            title: "Employee Pickup & Drop",
            description: "Daily scheduled transport ensuring your employees reach work on time and return home safely."
        },
        {
            icon: Moon,
            title: "Night Shift Operations",
            description: "Specialized secure transport for night shift employees with enhanced safety protocols."
        },
        {
            icon: Map,
            title: "Route Planning",
            description: "Optimization of routes to minimize travel time and operational costs for your company."
        },
        {
            icon: Users,
            title: "Monthly Contracts",
            description: "Flexible corporate monthly packages tailored to your headcount and shift timings."
        }
    ];

    return (
        <div className="bg-rudra-blue min-h-screen">
            <SEO
                title="Home"
                description="Premium corporate employee transport services in Coimbatore."
                keywords="corporate transport, employee pickup drop, cab service coimbatore"
            />
            <HeroSection />

            {/* Services Section */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core <span className="text-rudra-accent">Services</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Comprehensive transport solutions designed for the modern IT workforce.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </section>

            {/* Safety Banner */}
            <section className="bg-rudra-lightBlue py-16">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Uncompromised <span className="text-rudra-accent">Safety</span></h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Safety is not just a policy; it's our culture. We implement rigorous checks and advanced technology to ensure every ride is secure.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-300">
                                <ShieldCheck className="text-rudra-accent" size={20} />
                                <span>GPS Enabled Vehicles for Real-time Tracking</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <ShieldCheck className="text-rudra-accent" size={20} />
                                <span>Strict Female Employee Safety Protocols</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <ShieldCheck className="text-rudra-accent" size={20} />
                                <span>Police Verified & Uniformed Drivers</span>
                            </li>
                        </ul>
                        <div className="mt-8">
                            <a href="/safety" className="text-rudra-accent font-semibold hover:text-white transition-colors flex items-center gap-2">
                                Read full safety policy &rarr;
                            </a>
                        </div>
                    </div>
                    <div className="bg-rudra-blue rounded-xl p-8 border border-gray-700">
                        {/* Placeholder for safety visual */}
                        <div className="flex flex-col items-center justify-center text-center">
                            <ShieldCheck size={64} className="text-green-500 mb-4" />
                            <h3 className="text-xl font-bold text-white">100% Compliance</h3>
                            <p className="text-gray-400 mt-2 text-sm">Valid Permits, Insurance, and MSME Registered.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Short About Section */}
            <section className="py-20 max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-white mb-8">Trusted by Top Corporates</h2>
                <p className="text-gray-400 mb-12 max-w-3xl mx-auto">
                    We are proud partners to some of Coimbatore's leading IT firms, providing reliable daily commute for thousands of employees.
                </p>
                <div className="flex flex-wrap justify-center gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Logos - represented as text for now if no images */}
                    <h3 className="text-2xl font-bold text-white">KGiSL</h3>
                    <h3 className="text-2xl font-bold text-white">Hirotec India</h3>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-rudra-accent to-[#4bd1b0] py-16">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-rudra-blue mb-6">Ready to upgrade your employee transport?</h2>
                    <p className="text-rudra-blue/80 text-lg mb-8 font-medium">Get a customized quote for your organization today.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="/contact" className="bg-rudra-blue text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-rudra-blue transition-all shadow-xl">
                            Contact Us Now
                        </a>
                        <a href="https://wa.me/919994340262" className="bg-white text-rudra-blue px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-xl">
                            WhatsApp Chat
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
