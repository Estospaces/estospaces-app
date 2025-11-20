import React from 'react';
import { Eye, Shield, Zap, Bell, Award } from 'lucide-react';

const WhyJoin = () => {
    const benefits = [
        {
            icon: <Eye className="text-primary" size={24} />,
            text: 'First access to virtual property tours'
        },
        {
            icon: <Shield className="text-primary" size={24} />,
            text: 'Exclusive verified listings before public launch'
        },
        {
            icon: <Bell className="text-primary" size={24} />,
            text: 'Early notifications for new properties'
        },
        {
            icon: <Zap className="text-primary" size={24} />,
            text: 'Influence platform features as a founding user'
        },
        {
            icon: <Award className="text-primary" size={24} />,
            text: 'Founding member perks and priority support'
        }
    ];

    return (
        <section id="join-waitlist" className="py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Join the Waitlist
                        </h2>
                        <p className="text-xl text-white text-opacity-90">
                            Be among the first to experience the future of real estate.
                        </p>
                    </div>

                    {/* Benefits List */}
                    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 md:p-12 mb-8">
                        <ul className="space-y-6">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                        {benefit.icon}
                                    </div>
                                    <span className="text-lg pt-1.5">
                                        {benefit.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105">
                            Reserve Your Spot
                        </button>
                        <p className="mt-4 text-white text-opacity-80 text-sm">
                            Join early • No commitment required
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyJoin;
