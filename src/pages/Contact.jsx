import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        serviceType: 'Employee Pickup & Drop',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        const phoneNumber = "919994340262";
        const message = `*New Inquiry from Website*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.serviceType}
Message: ${formData.message}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');

        setStatus('success');
        setFormData({
            name: '',
            phone: '',
            email: '',
            serviceType: 'Employee Pickup & Drop',
            message: ''
        });
    };

    return (
        <div className="bg-rudra-blue min-h-screen">
            <SEO
                title="Contact Us"
                description="Get a quote for corporate transport. Call +91 99943 40262."
                keywords="contact rudra travels, transport quote"
            />
            <PageHeader
                title="Contact Us"
                subtitle="Get in touch for a customized corporate transport quote."
            />

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-8">Reach Out Directly</h2>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="bg-rudra-lightBlue p-3 rounded-lg text-rudra-accent">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Office Address</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        146 Shree Senthur Balaji Garden,<br />
                                        Govinthanaicken Palayam, Idikarai,<br />
                                        Coimbatore, Tamil Nadu 641110
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-rudra-lightBlue p-3 rounded-lg text-rudra-accent">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                                    <p className="text-gray-400">
                                        <a href="tel:+919994340262" className="hover:text-white transition-colors">+91 99943 40262</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-rudra-lightBlue p-3 rounded-lg text-rudra-accent">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                                    <p className="text-gray-400">
                                        <a href="mailto:rudratravelservice@gmail.com" className="hover:text-white transition-colors">rudratravelservice@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="rounded-xl overflow-hidden border border-gray-700 h-64 shadow-lg">
                            <iframe
                                src="https://maps.google.com/maps?q=11.13725,76.97244&hl=en&z=14&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Office Location"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-rudra-lightBlue p-8 rounded-xl border border-gray-700 shadow-xl">
                        <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-rudra-blue border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-rudra-accent transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-rudra-blue border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-rudra-accent transition-colors"
                                        placeholder="+91 999..."
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-rudra-blue border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-rudra-accent transition-colors"
                                    placeholder="name@company.com"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="serviceType">Interested In</label>
                                <select
                                    id="serviceType"
                                    name="serviceType"
                                    value={formData.serviceType}
                                    onChange={handleChange}
                                    className="w-full bg-rudra-blue border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-rudra-accent transition-colors"
                                >
                                    <option>Employee Pickup & Drop</option>
                                    <option>Night Shift Transport</option>
                                    <option>Monthly Contract</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full bg-rudra-blue border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-rudra-accent transition-colors"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full bg-rudra-accent text-rudra-blue font-bold py-3 rounded-lg hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
                            >
                                {status === 'submitting' ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        SendMessage
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <div className="bg-green-500/20 text-green-400 p-3 rounded-lg text-center text-sm font-medium border border-green-500/50">
                                    WhatsApp opened! Please click 'Send' to complete your inquiry.
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="bg-red-500/20 text-red-400 p-3 rounded-lg text-center text-sm font-medium border border-red-500/50">
                                    Failed to send message. Please try again or call us directly.
                                </div>
                            )}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
