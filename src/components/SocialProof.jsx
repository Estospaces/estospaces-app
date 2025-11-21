import React from 'react';
import { Users, Building2, Award, Quote } from 'lucide-react';

const SocialProof = () => {
    const stats = [
        {
            icon: <Building2 className="text-white" size={36} />,
            value: 'Virtual-First',
            label: 'Platform'
        },
        {
            icon: <Award className="text-white" size={36} />,
            value: 'Verified',
            label: 'Brokers & Listings'
        },
        {
            icon: <Users className="text-white" size={36} />,
            value: 'Trusted',
            label: 'Broker Network'
        }
    ];

    return (
        <section className="py-32 bg-gradient-to-br from-secondary via-gray-900 to-secondary text-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                        Built for the Future of{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-orange-600">
                            Real Estate
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Estospaces brings together cutting-edge virtual technology, verified brokers, and a trusted ecosystem.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl text-center hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group"
                        >
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-orange-600 rounded-2xl mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                {stat.icon}
                            </div>
                            <div className="text-4xl md:text-5xl font-bold mb-3 text-white">
                                {stat.value}
                            </div>
                            <div className="text-lg text-gray-300">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonial Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-12 rounded-3xl shadow-2xl relative">
                        {/* Quote Icon */}
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center shadow-xl">
                                <Quote className="text-white" size={24} />
                            </div>
                        </div>

                        {/* Quote Text */}
                        <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed text-center mt-4">
                            "Estospaces is transforming how we connect buyers with their dream properties—virtually, efficiently, and transparently."
                        </blockquote>

                        {/* Author */}
                        <div className="text-center">
                            <div className="inline-block">
                                <p className="text-primary font-bold text-lg mb-1">
                                    Siranjeevi
                                </p>
                                <p className="text-gray-400 text-sm">
                                    Co-founder, Estospaces
                                </p>
                            </div>
                        </div>

                        {/* Decorative Bottom Border */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-b-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
