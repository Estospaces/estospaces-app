import React from 'react';
import { Users, Building2, Award } from 'lucide-react';

const SocialProof = () => {
    const stats = [
        {
            icon: <Building2 className="text-primary" size={32} />,
            value: 'Virtual-First',
            label: 'Platform'
        },
        {
            icon: <Award className="text-primary" size={32} />,
            value: 'Verified',
            label: 'Brokers & Listings'
        },
        {
            icon: <Users className="text-primary" size={32} />,
            value: 'Trusted',
            label: 'Broker Network'
        }
    ];

    return (
        <section className="py-20 bg-secondary text-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Built for the Future of Real Estate
                    </h2>
                    <p className="text-lg text-gray-300">
                        Estospaces brings together cutting-edge virtual technology, verified brokers, and a trusted ecosystem.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-10 rounded-full mb-4">
                                {stat.icon}
                            </div>
                            <div className="text-3xl md:text-4xl font-bold mb-2">
                                {stat.value}
                            </div>
                            <div className="text-gray-300">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonial */}
                <div className="mt-16 max-w-3xl mx-auto text-center">
                    <blockquote className="text-xl italic text-gray-300 mb-4">
                        "Estospaces is transforming how we connect buyers with their dream properties—virtually, efficiently, and transparently."
                    </blockquote>
                    <p className="text-primary font-semibold">
                        — Siranjeevi, Co-founder
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
