import React from 'react';

const About = () => {
    return (
        <div>
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-lg text-gray-800 leading-relaxed">
                            Welcome to TechMinds Collective, where innovation meets expertise. We are a remote team of passionate developers committed to delivering exceptional solutions across a diverse range of technologies.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mt-4">
                            Our mission is simple: to empower businesses with cutting-edge technology solutions that drive growth and success. With a focus on precision and efficiency, we thrive on challenges and excel at turning ideas into reality.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mt-4">
                            At TechMinds Collective, we believe in the power of collaboration and continuous learning. Our team consists of industry veterans and rising stars, united by a shared passion for innovation and a commitment to excellence.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
