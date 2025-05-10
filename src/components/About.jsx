import React from 'react';
import { Users, Star, Target, ShieldCheck } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-secondary to-accent text-white px-6 py-20">
            {/* Intro Section */}
            <section className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                    Who We Are
                </h1>
                <p className="text-xl text-white max-w-2xl mx-auto">
                    A passionate team of creatives and developers crafting intuitive digital experiences that drive innovation.
                </p>
            </section>

            {/* Mission Section */}
            <section className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-12 text-center mb-20 animate-slide-up">
                <div className="flex flex-col items-center gap-4">
                    <Target className="w-12 h-12 text-purple-600" />
                    <h2 className="text-3xl md:text-4xl font-semibold text-purple-800">
                        Our Mission
                    </h2>
                    <p className="text-lg md:text-xl text-purple-600 leading-relaxed max-w-2xl">
                        To innovate with heart and empower through design. We build tools that inspire change, simplify life, and scale purposefully.
                    </p>
                </div>
            </section>

            {/* Values Section */}
            <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 animate-fade-in">
                <div className="bg-white rounded-2xl shadow-md p-8 flex items-start gap-5 hover:shadow-lg transition duration-300">
                    <Users className="w-10 h-10 text-purple-600" />
                    <div>
                        <h3 className="text-2xl font-semibold text-purple-800 mb-2">
                            Collaborative Culture
                        </h3>
                        <p className="text-purple-600">
                            We thrive on curiosity, shared vision, and mutual respect. Every voice matters in our process.
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-8 flex items-start gap-5 hover:shadow-lg transition duration-300">
                    <Star className="w-10 h-10 text-purple-600" />
                    <div>
                        <h3 className="text-2xl font-semibold text-purple-800 mb-2">
                            Excellence Driven
                        </h3>
                        <p className="text-purple-600">
                            We push limits with purpose, delivering beyond expectations through clarity, craft, and care.
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-8 flex items-start gap-5 hover:shadow-lg transition duration-300">
                    <ShieldCheck className="w-10 h-10 text-purple-600" />
                    <div>
                        <h3 className="text-2xl font-semibold text-purple-800 mb-2">
                            Integrity First
                        </h3>
                        <p className="text-purple-600">
                            Our work is rooted in transparency and trust. We lead with ethics and deliver with authenticity.
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-8 flex items-start gap-5 hover:shadow-lg transition duration-300">
                    <Target className="w-10 h-10 text-purple-600" />
                    <div>
                        <h3 className="text-2xl font-semibold text-purple-800 mb-2">
                            Purpose-Led Design
                        </h3>
                        <p className="text-purple-600">
                            Every decision we make is centered on real human needs and future-forward impact.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
