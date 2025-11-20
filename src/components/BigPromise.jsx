import React from 'react';
import { Eye, Shield, Zap, Network } from 'lucide-react';

const BigPromise = () => {
    const features = [
        {
            icon: <Eye className="text-primary" size={32} />,
            title: 'Virtual Property Tours',
            description: 'Explore properties from anywhere with immersive 3D walkthroughs.'
        },
        {
            icon: <Shield className="text-primary" size={32} />,
            title: 'Verified Listings',
            description: 'Every property is verified. No fake listings, no wasted time.'
        },
        {
            icon: <Zap className="text-primary" size={32} />,
            title: 'Seamless Journey',
            description: 'From discovery to closing—everything in one smooth experience.'
        },
        {
            icon: <Network className="text-primary" size={32} />,
            title: 'Broker Network',
            description: 'Connect with trusted, verified brokers across the platform.'
        }
    ];

    return (
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                        Real Estate, Reimagined.
                    </h2>
                    <p className="text-lg text-gray-600">
                        Estospaces is a virtual-first platform that transforms how you discover, explore, and secure properties.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="text-center p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 group"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary bg-opacity-10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BigPromise;
