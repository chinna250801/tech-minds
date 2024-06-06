import React from 'react';
import { motion } from 'framer-motion';

const Projects = ({ projects }) => {
    return (
        <section className="bg-white text-gray-800 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center text-gray-900 mb-12">Our Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-100 p-6 rounded-xl shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
                            <p className="text-gray-700">{project.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
