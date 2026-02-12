import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, Shield, Users, Award } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-rudra-blue min-h-screen">
            <SEO
                title="About Us"
                description="Rudra Travel Service has been a trusted partner for corporate mobility in Coimbatore since 2014."
                keywords="about rudra travels, transport company history"
            />
            <PageHeader
                title="About Rudra Travel Service"
                subtitle="Dedicated to safe and reliable corporate transport since 2014."
            />

            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Mission / History */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Our Journey</h2>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Established in 2014, Rudra Travel Service began with a single vision: to provide the most reliable and safe transportation for the growing IT sector in Coimbatore.
                        </p>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Over the last decade, we have grown from a small fleet to a robust operation of 40+ vehicles, serving top multinational corporations. as a registered MSME entity, we pride ourselves on professional management and strict adherence to safety compliance.
                        </p>
                        <div className="flex items-center gap-4 mt-8">
                            <div className="flex items-center gap-2 text-rudra-accent font-bold">
                                <Calendar size={24} />
                                <span>Est. 2014</span>
                            </div>
                            <div className="h-6 w-px bg-gray-600"></div>
                            <div className="flex items-center gap-2 text-rudra-accent font-bold">
                                <Award size={24} />
                                <span>MSME Registered</span>
                            </div>
                        </div>
                    </motion.div>
                    <div className="bg-rudra-lightBlue p-8 rounded-xl border border-gray-700">
                        {/* Placeholder for About Image */}
                        <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                            <Users size={48} className="text-gray-600" />
                        </div>
                    </div>
                </div>

                {/* Core Values */}
                <h2 className="text-3xl font-bold text-center text-white mb-12">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Shield,
                            title: "Safety First",
                            desc: "We never compromise on safety. From vehicle maintenance to driver verification, every step is monitored."
                        },
                        {
                            icon: Calendar,
                            title: "Punctuality",
                            desc: "We understand the value of time in the corporate world. Our on-time record is our badge of honor."
                        },
                        {
                            icon: Users,
                            title: "Customer Focus",
                            desc: "We build long-term relationships with our clients by offering flexible, tailored transport solutions."
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-rudra-lightBlue p-6 rounded-xl border border-gray-800 text-center"
                        >
                            <div className="inline-block p-4 bg-rudra-blue rounded-full text-rudra-accent mb-4 cursor-pointer">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
