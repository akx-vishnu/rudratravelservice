import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="flex flex-col min-h-screen bg-rudra-blue text-rudra-white font-sans overflow-x-hidden">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <FloatingActions />
        </div>
    );
};

export default Layout;
