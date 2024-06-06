import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const Navbar = () => {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);

    // Function to handle scroll event
    const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 50);
    };

    // Add scroll event listener when component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 bg-blue-600 text-white py-4 transition duration-300 z-50`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" passHref>
                    <motion.div
                        className="text-xl font-bold cursor-pointer transition duration-300 hover:text-blue-400"
                        whileHover={{ scale: 1.05 }}
                    >
                        TechMinds Collective
                    </motion.div>
                </Link>
                <ul className="flex space-x-4">
                    <NavItem path="/" name="Home" router={router} />
                    <NavItem path="/about" name="About Us" router={router} />
                    <NavItem path="/team" name="Team" router={router} />
                    <NavItem path="/contact" name="Contact" router={router} />
                </ul>
            </div>
        </motion.nav>
    );
};

const NavItem = ({ path, name, router }) => (
    <li className="relative flex items-center">
        <Link href={path} passHref>
            <motion.div
                className={`cursor-pointer transition duration-300 hover:text-blue-400 ${router.pathname === path ? 'text-blue-400' : ''}`}
                whileHover={{ scale: 1.05 }}
            >
                {name}
            </motion.div>
        </Link>
    </li>
);

export default Navbar;
