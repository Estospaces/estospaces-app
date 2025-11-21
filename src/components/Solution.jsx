import React from 'react';
import { UserCheck, Eye, Handshake, ArrowRight } from 'lucide-react';

const Solution = () => {
    const steps = [
        {
            icon: <UserCheck className="text-white" size={32} />,
            number: '01',
            title: 'Brokers Verify & Create',
            description: 'Verified brokers create immersive virtual tours of their properties.'
        },
        {
            icon: <Eye className="text-white" size={32} />,
            number: '02',
            title: 'You Explore Virtually',
            description: 'Discover and tour properties from anywhere—no travel required.'
        },
        {
            icon: <Handshake className="text-white" size={32} />,
            number: '03',
            title: 'Connect & Close',
            description: 'Reach out to brokers, finalize details, and close deals seamlessly.'
        }
    ];

    return (
        <section id="how-it-works" className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[15%] left-[5%] w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[15%] right-[5%] w-96 h-96 bg-orange-200/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold text-secondary mb-6 tracking-tight">
                        How <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">Estospaces</span> Works
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        A simple, transparent process powered by verified brokers and virtual technology.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            {/* Connector Arrow (hidden on mobile) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:flex absolute top-20 left-[60%] w-[80%] items-center justify-center z-0">
                                    <div className="w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent"></div>
                                    <ArrowRight className="text-primary/30 absolute right-0" size={24} />
                                </div>
                            )}

                            <div className="relative z-10 text-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                                {/* Icon Circle with Gradient */}
                                <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-primary to-orange-600 rounded-2xl mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 relative">
                                    {step.icon}
                                    {/* Step Number Badge */}
                                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-primary/20">
                                        <span className="text-primary font-bold text-lg">{step.number}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>

                                {/* Decorative Bottom Border */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-500 text-sm tracking-wider uppercase mb-4">
                        Simple • Transparent • Effective
                    </p>
                    <div className="flex justify-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
                        <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
