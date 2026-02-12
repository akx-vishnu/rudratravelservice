import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-rudra-lightBlue p-6 rounded-xl border border-gray-800 hover:border-rudra-accent/50 transition-all shadow-md"
        >
            <div className="w-12 h-12 bg-rudra-blue rounded-lg flex items-center justify-center mb-4 text-rudra-accent border border-gray-700">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
                {description}
            </p>
        </motion.div>
    );
};

export default ServiceCard;
