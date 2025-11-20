import React from 'react';
import { ArrowRight } from 'lucide-react';

const SneakPeek = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                        Experience Properties Like Never Before
                    </h2>

                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Virtual tours. Verified brokers. Seamless connections. Estospaces brings it all together
                        in one powerful platform built for modern property seekers.
                    </p>

                    <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mx-auto">
                        Join the Waitlist
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SneakPeek;
