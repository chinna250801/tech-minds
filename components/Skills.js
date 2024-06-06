import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: 'Machine Learning', icon: '🧠' },
        { name: 'Deep Learning', icon: '🔍' },
        { name: 'Python', icon: '🐍' },
        { name: 'FastAPI', icon: '⚡' },
        { name: 'Golang', icon: '🐹' },
        { name: 'AWS Services', icon: '☁️' },
        { name: 'DevOps', icon: '🔧' },
        { name: 'Ansible', icon: '📦' },
        { name: 'Chef', icon: '👨‍🍳' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Git', icon: '🔗' },
        { name: 'Linux', icon: '🐧' },
        { name: 'Kubernetes', icon: '🚢' },
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '🔺' },
        { name: 'SQL', icon: '🗃️' },
    ];

    return (
        <section className="bg-gray-50 text-gray-800 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center text-gray-900 mb-12">Our Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg text-center transition transform hover:-translate-y-1 hover:shadow-2xl"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="text-6xl mb-4">{skill.icon}</div>
                            <p className="text-2xl font-semibold text-gray-700">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
