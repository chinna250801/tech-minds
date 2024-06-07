import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaProjectDiagram, FaChartBar } from 'react-icons/fa';

const iconMap = {
    'Multimodal Sentiment Analysis': <FaChartBar />,
    'Book Order System SDK': <FaCode />,
    'Book Management API': <FaProjectDiagram />,
    // Add more icons as needed for other projects
};

const Projects = ({ projects }) => {
    return (
        <section className="bg-gray-50 text-gray-800 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center text-gray-900 mb-12">Our Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex justify-center items-center mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    {iconMap[project.title] || <FaProjectDiagram />}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                            </div>
                            <p className="text-gray-700">{project.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
