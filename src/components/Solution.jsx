import React from 'react';
import { UserCheck, Eye, Handshake } from 'lucide-react';

const Solution = () => {
    const steps = [
        {
            icon: <UserCheck className="text-white" size={28} />,
            number: '01',
            title: 'Brokers Verify & Create',
            description: 'Verified brokers create immersive virtual tours of their properties.'
        },
        {
            icon: <Eye className="text-white" size={28} />,
            number: '02',
            title: 'You Explore Virtually',
            description: 'Discover and tour properties from anywhere—no travel required.'
        },
        {
            icon: <Handshake className="text-white" size={28} />,
            number: '03',
            title: 'Connect & Close',
            description: 'Reach out to brokers, finalize details, and close deals seamlessly.'
        }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                        How Estospaces Works
                    </h2>
                    <p className="text-lg text-gray-600">
                        A simple, transparent process powered by verified brokers and virtual technology.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Connector Line (hidden on mobile) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gray-200 z-0" />
                            )}

                            <div className="relative z-10 text-center">
                                {/* Icon Circle */}
                                <div className="inline-flex items-center justify-center w-24 h-24 bg-primary rounded-full mb-6 shadow-lg">
                                    {step.icon}
                                </div>

                                {/* Step Number */}
                                <div className="text-6xl font-bold text-gray-100 mb-2">
                                    {step.number}
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-secondary mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solution;
