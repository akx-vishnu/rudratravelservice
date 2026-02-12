import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { Users, Briefcase, Truck } from 'lucide-react';

const Fleet = () => {
    const vehicles = [
        {
            name: "Sedan Class",
            models: "Swift Dzire, Toyota Etios",
            capacity: "4 Seats + 1 Driver",
            features: ["AC", "Comfortable Seating", "Music System", "GPS"],
            description: "Ideal for executive travel, client pick-ups, and small team transport.",
            icon: Briefcase
        },
        {
            name: "SUV Class",
            models: "Toyota Innova, Crysta",
            capacity: "6/7 Seats + 1 Driver",
            features: ["Dual AC", "Spacious Legroom", "Luxury Interiors", "GPS"],
            description: "Perfect for senior management, long-distance travel, and airport transfers.",
            icon: Users
        },
        {
            name: "Tempo Traveller",
            models: "Force Traveller",
            capacity: "12 / 14 / 17 / 20 / 26 Seater",
            features: ["Pushback Seats", "Ample Luggage Space", "LCD TV", "GPS"],
            description: "The best choice for regular employee pick-up and drop operations.",
            icon: Truck
        }
    ];

    return (
        <div className="bg-rudra-blue min-h-screen">
            <SEO
                title="Our Fleet"
                description="Our fleet includes Sedans, SUVs, and Tempo Travellers for corporate needs."
                keywords="tempo traveller coimbatore, innova rental for corporate"
            />
            <PageHeader
                title="Our Fleet"
                subtitle="Modern, well-maintained vehicles for every corporate need."
            />

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {vehicles.map((vehicle, index) => (
                        <div key={index} className="bg-rudra-lightBlue rounded-xl overflow-hidden border border-gray-700 hover:border-rudra-accent transition-all shadow-lg group">
                            {/* Image Placeholder */}
                            <div className="h-48 bg-gray-800 flex items-center justify-center relative group-hover:bg-gray-700 transition-colors">
                                <vehicle.icon size={64} className="text-gray-600 group-hover:text-rudra-accent transition-colors" />
                                <div className="absolute bottom-2 right-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
                                    {vehicle.models}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">{vehicle.name}</h3>
                                <p className="text-rudra-accent font-semibold text-sm mb-4">{vehicle.capacity}</p>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    {vehicle.description}
                                </p>

                                <h4 className="text-white text-sm font-bold mb-2">Key Features:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {vehicle.features.map((feature, i) => (
                                        <span key={i} className="bg-rudra-blue px-3 py-1 rounded-full text-xs text-gray-300 border border-gray-700">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Fleet;
