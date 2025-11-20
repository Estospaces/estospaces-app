import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const FinalCTA = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle waitlist signup
        console.log('Email submitted:', email);
        alert('Welcome to the waitlist! We\'ll notify you as soon as we launch.');
        setEmail('');
    };

    return (
        <section className="py-20 bg-gradient-to-br from-secondary via-gray-800 to-secondary text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Headline */}
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        The Future of Real Estate Starts Here
                    </h2>

                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        Join the waitlist and be part of the virtual-first revolution in property discovery.
                    </p>

                    {/* Email Form */}
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 relative">
                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full pl-12 pr-4 py-4 rounded-full bg-white text-secondary outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 whitespace-nowrap"
                            >
                                Join Waitlist
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </form>

                    {/* Microcopy */}
                    <p className="text-sm text-gray-400 mb-8">
                        No spam. Unsubscribe anytime.
                    </p>

                    {/* Contact Info */}
                    <div className="text-sm text-gray-400">
                        <p>Questions? Reach us at <a href="mailto:contact@estospaces.com" className="text-primary hover:underline">contact@estospaces.com</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
