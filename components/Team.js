import React from 'react';

const Team = () => {
    // Dummy data for team members (replace with actual data)
    const teamMembers = [
        {
            name: 'N N VENKAT REDDY',
            role: 'Software Engineer',
            description: ' I am a seasoned Software Engineer with a passion for building robust and scalable web applications. With expertise in frontend and backend development, he excels in crafting elegant solutions to complex technical challenges. His dedication to continuous learning and innovation drives him to deliver exceptional results and exceed client expectations.',
        },

    ];

    return (
        <section className="bg-gray-100 text-gray-800 py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                            <p className="text-gray-600 mb-4">{member.role}</p>
                            <p>{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
