import React from 'react';
import { AlertCircle } from 'lucide-react';

const Problem = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                        <AlertCircle className="text-red-500" size={32} />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                        Real Estate Shouldn't Be This Hard.
                    </h2>

                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Endless property visits drain your time and money. Limited broker visibility means you miss great options.
                        Fake listings destroy trust. And outdated, flat images don't show you what you really need to see.
                    </p>

                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <p className="text-2xl font-bold text-primary mb-2">
                            Estospaces changes everything.
                        </p>
                        <p className="text-gray-600">
                            A virtual-first platform built for trust, transparency, and a seamless property journey.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
