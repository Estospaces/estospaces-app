import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'What is Estospaces?',
            answer: 'Estospaces is a virtual-first real estate platform that lets you explore properties through immersive 3D tours, connect with verified brokers, and complete your property journey—all online.'
        },
        {
            question: 'When will Estospaces launch?',
            answer: 'We\'re launching soon! Join the waitlist to get notified first and receive early access.'
        },
        {
            question: 'Is the waitlist free?',
            answer: 'Yes, joining the waitlist is completely free with no commitment required.'
        },
        {
            question: 'How are listings verified?',
            answer: 'Every listing on Estospaces is created by verified brokers. We ensure authenticity so you never waste time on fake posts.'
        }
    ];

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary transition-colors"
                        >
                            <button
                                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-bold text-lg text-secondary pr-8">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`text-primary flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                                    size={24}
                                />
                            </button>

                            {openIndex === index && (
                                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                                    <p className="text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Contact */}
                <div className="text-center mt-12">
                    <p className="text-gray-600">
                        More questions?{' '}
                        <a href="mailto:contact@estospaces.com" className="text-primary font-semibold hover:underline">
                            Contact us
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
