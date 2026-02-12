import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { Shield, CheckCircle, Smartphone, UserCheck, AlertTriangle } from 'lucide-react';

const Safety = () => {
    return (
        <div className="bg-rudra-blue min-h-screen">
            <SEO
                title="Safety & Compliance"
                description="We prioritize safety with GPS tracking, verified drivers, and strict protocols."
                keywords="safe employee transport, female employee safety"
            />
            <PageHeader
                title="Safety & Compliance"
                subtitle="Your employees' safety is our non-negotiable priority."
            />

            <div className="max-w-4xl mx-auto px-4 py-16">

                {/* Intro */}
                <div className="text-center mb-16">
                    <p className="text-xl text-gray-300 leading-relaxed">
                        At Rudra Travel Service, we go beyond standard requirements to ensure a secure commuting environment, especially for female employees and night shift staff.
                    </p>
                </div>

                {/* Safety Features List */}
                <div className="space-y-8">
                    {[
                        {
                            icon: UserCheck,
                            title: "Verified Drivers",
                            desc: "Every driver undergoes rigorous background verification, police clearance, and behavioral training before joining our fleet."
                        },
                        {
                            icon: Smartphone,
                            title: "GPS Tracking",
                            desc: "All vehicles are equipped with active GPS systems allowing real-time location monitoring by our central command center."
                        },
                        {
                            icon: Shield,
                            title: "Female Employee Safety",
                            desc: "For late-night drops, we ensure female employees are never the last to be dropped off unless accompanied by a security guard (if required by client)."
                        },
                        {
                            icon: CheckCircle,
                            title: "Vehicle Compliance",
                            desc: "All vehicles hold valid commercial permits, fitness certificates, and comprehensive insurance coverage."
                        },
                        {
                            icon: AlertTriangle,
                            title: "Emergency Response",
                            desc: "Drivers are trained in basic first aid and emergency response protocols. 24/7 support line available for any on-road assistance."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-rudra-lightBlue p-6 rounded-xl border border-gray-700 flex flex-col md:flex-row gap-6 items-start">
                            <div className="bg-rudra-blue p-4 rounded-full text-rudra-accent shrink-0">
                                <item.icon size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Safety;
