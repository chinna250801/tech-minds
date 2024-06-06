import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <motion.section
            className="relative flex items-center justify-center bg-gradient-to-r from-green-500 to-red-600 text-black"
            style={{ minHeight: '100vh', paddingTop: '4rem', zIndex: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="max-w-4xl text-center">
                <motion.h1
                    className="text-6xl font-bold mb-4"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Welcome to <span className="text-red-300">TechMinds</span> Collective
                </motion.h1>
                <motion.p
                    className="text-lg mb-8"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Your Gateway to Innovation and Excellence
                </motion.p>
                <motion.a
                    href="/contact"
                    className="bg-yellow-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-yellow-600 hover:text-black transition duration-300 inline-block"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    Get Started
                </motion.a>
            </div>
        </motion.section>
    );
};

export default Hero;
