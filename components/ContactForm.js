import React from 'react';

const ContactForm = () => {
    return (
        <section className="bg-white text-gray-800 py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                <div className="max-w-md mx-auto">
                    <div className="mb-8">
                        <p className="text-lg font-semibold mb-2">Email:</p>
                        <p className="text-blue-500 leading-relaxed">vsnreddy65@gmail.com</p>
                    </div>
                    <div className="mb-8">
                        <p className="text-lg font-semibold mb-2">Phone:</p>
                        <p className="text-blue-500 leading-relaxed">+91 9951754803</p>
                    </div>
                    <div className="mb-8">
                        <p className="text-lg font-semibold mb-2">Address:</p>
                        <address className="text-gray-700 leading-relaxed">Team Collaborate Remotely </address>
                    </div>
                    {/* Add more contact information as needed */}
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
