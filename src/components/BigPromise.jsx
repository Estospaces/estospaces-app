import React from 'react';
import { Eye, Shield, Zap, Network } from 'lucide-react';

const BigPromise = () => {
    const features = [
        {
            icon: <Eye className="text-primary" />,
            title: 'Virtual Property Tours',
            description: 'Explore properties from anywhere with immersive 3D walkthroughs.'
        },
        {
            icon: <Shield className="text-primary" />,
            title: 'Verified Listings',
            description: 'Every property is verified. No fake listings, no wasted time.'
        },
        {
            icon: <Zap className="text-primary" />,
            title: 'Seamless Journey',
            description: 'From discovery to closing—everything in one smooth experience.'
        },
        {
            icon: <Network className="text-primary" />,
            title: 'Broker Network',
            description: 'Connect with trusted, verified brokers across the platform.'
        }
    ];

    return (
        <section id="features" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold text-secondary mb-6 tracking-tight">
                        Real Estate, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">Reimagined.</span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Estospaces is a virtual-first platform that transforms how you discover, explore, and secure properties.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {React.cloneElement(feature.icon, { className: "text-primary group-hover:text-white transition-colors duration-300", size: 32 })}
                            </div>

                            <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
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
