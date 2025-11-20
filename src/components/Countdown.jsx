import React from 'react';
import { Clock } from 'lucide-react';

const Countdown = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary bg-opacity-10 rounded-full mb-6">
                        <Clock className="text-primary" size={32} />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                        We're Launching Soon.
                    </h2>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        Stay tuned for new updates, invites, and launch details.
                    </p>

                    <div className="mt-8 inline-block bg-primary bg-opacity-10 px-6 py-3 rounded-full">
                        <p className="text-primary font-bold text-lg">
                            Launching Q1 2026
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Countdown;
