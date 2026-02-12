import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingActions = () => {
    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
            {/* WhatsApp Button */}
            <motion.a
                href="https://wa.me/919994340262?text=Hello!%20I%20am%20interested%20in%20corporate%20transport%20services."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#25D366] text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-[#20bd5a] transition-colors"
                title="Chat on WhatsApp"
            >
                <MessageCircle size={28} />
            </motion.a>

            {/* Phone Button */}
            <motion.a
                href="tel:+919994340262"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-rudra-accent text-rudra-blue p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-[#4bd1b0] transition-colors"
                title="Call Now"
            >
                <Phone size={28} />
            </motion.a>
        </div>
    );
};

export default FloatingActions;
