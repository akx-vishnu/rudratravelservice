import React from 'react';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';
import SEO from '../components/SEO';
import { Bus, Moon, Map, FileText, ShieldCheck, Truck } from 'lucide-react';

const Services = () => {
    const allServices = [
        {
            icon: Bus,
            title: "Employee Pickup & Drop",
            description: "Door-to-door or point-to-point lookup services for employees, ensuring they arrive fresh and on time."
        },
        {
            icon: Moon,
            title: "Night Shift Transport",
            description: "Specialized fleet for night shifts with enhanced security measures, including GPS tracking and check-in systems."
        },
        {
            icon: FileText,
            title: "Monthly Corporate Contracts",
            description: "Cost-effective monthly billing models tailored to your headcount. Flexible scaling options available."
        },
        {
            icon: Map,
            title: "Route Optimization",
            description: "We analyze employee clusters to design the most efficient routes, saving time and fuel costs."
        },
        {
            icon: Truck, // Placeholder for Backup
            title: "Backup Vehicle Support",
            description: "Standby vehicles always available to ensure zero downtime in case of breakdowns or emergencies."
        },
        {
            icon: ShieldCheck,
            title: "Ad-hoc Requests",
            description: "Support for client visits, team outings, or airport transfers with our premium vehicle options."
        }
    ];

    return (
        <div className="bg-rudra-blue min-h-screen">
            <SEO
                title="Services"
                description="Comprehensive employee transport solutions including daily pickup/drop and night shift security."
                keywords="employee transport services, night shift cabs"
            />
            <PageHeader
                title="Our Services"
                subtitle="Comprehensive transport management solutions for the modern workplace."
            />

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allServices.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
