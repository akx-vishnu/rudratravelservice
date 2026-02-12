import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { Quote } from 'lucide-react';

const Clients = () => {
    const clients = [
        { name: "KGiSL", logo: "K" },
        { name: "Hirotec India", logo: "H" },
        // Add more placeholders
        { name: "Global Tech Solutions", logo: "G" },
        { name: "Future Systems", logo: "F" },
    ];

    const testimonials = [
        {
            text: "Rudra Travel Service has been punctual and professional. their drivers are courteous and the vehicles are always clean. Highly recommended for corporate transport.",
            author: "HR Manager",
            company: "KGiSL"
        },
        {
            text: "We appreciate their flexibility and quick response to our ad-hoc requests. The night shift transport is particularly reliable.",
            author: "Admin Officer",
            company: "Hirotec India"
        }
    ];

    return (
        <div className="bg-rudra-blue min-h-screen">
            <SEO
                title="Clients & Testimonials"
                description="See why top IT companies trust Rudra Travel Service."
                keywords="corporate transport clients, testimonials"
            />
            <PageHeader
                title="Our Valuable Clients"
                subtitle="Proudly serving top organizations in Coimbatore."
            />

            <div className="max-w-7xl mx-auto px-4 py-16">

                {/* Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {clients.map((client, index) => (
                        <div key={index} className="bg-rudra-lightBlue aspect-square rounded-xl flex items-center justify-center border border-gray-700 hover:border-rudra-accent transition-all group">
                            {/* Placeholder for Logo */}
                            <div className="text-center">
                                <div className="text-4xl font-black text-gray-600 group-hover:text-rudra-accent transition-colors mb-2">
                                    {client.logo}
                                </div>
                                <div className="text-gray-400 font-medium group-hover:text-white transition-colors">
                                    {client.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonials */}
                <h2 className="text-3xl font-bold text-center text-white mb-12">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-rudra-lightBlue p-8 rounded-xl border border-gray-700 relative">
                            <Quote className="absolute top-6 left-6 text-rudra-accent opacity-20" size={48} />
                            <p className="text-gray-300 italic mb-6 relative z-10 leading-relaxed">
                                "{item.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-rudra-blue rounded-full flex items-center justify-center font-bold text-rudra-accent border border-gray-600">
                                    {item.author[0]}
                                </div>
                                <div>
                                    <p className="text-white font-bold">{item.author}</p>
                                    <p className="text-gray-500 text-sm">{item.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Clients;
