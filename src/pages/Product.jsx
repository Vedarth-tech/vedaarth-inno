import React from 'react';
import { Rocket, Lightbulb, Code } from 'lucide-react';

const Product = () => {
    return (
        <div className="min-h-screen bg-gradient-to-tr from-purple-50 to-purple-200 px-6 py-12 text-purple-900">
            {/* Hero Section */}
            <section className="text-center my-16">
                <h1 className="text-5xl font-bold mb-4">Our Projects & Vision</h1>
                <p className="text-xl text-purple-700 max-w-3xl mx-auto">
                    Discover what we're building and why we believe in creating experiences that truly make a difference.
                </p>
            </section>

            {/* Projects Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
                <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                    <Rocket className="w-10 h-10 text-purple-600 mb-4" />
                    <h3 className="text-2xl font-semibold text-purple-800 mb-2">Launchpad App</h3>
                    <p className="text-purple-600">
                        A tool for startups to manage their launch journey with ease, from ideation to go-live.
                    </p>
                </div>
                <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                    <Code className="w-10 h-10 text-purple-600 mb-4" />
                    <h3 className="text-2xl font-semibold text-purple-800 mb-2">DevSync</h3>
                    <p className="text-purple-600">
                        A collaborative coding platform built for teams who want a real-time, no-hassle dev workflow.
                    </p>
                </div>
                <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                    <Lightbulb className="w-10 h-10 text-purple-600 mb-4" />
                    <h3 className="text-2xl font-semibold text-purple-800 mb-2">IdeaForge</h3>
                    <p className="text-purple-600">
                        A platform that helps individuals brainstorm, validate, and bring ideas to life with the help of AI.
                    </p>
                </div>
            </section>

            {/* Vision Section */}
            <section className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-10 text-center">
                <h2 className="text-4xl font-bold text-purple-700 mb-4">Our Vision</h2>
                <p className="text-lg text-purple-600 leading-relaxed">
                    We envision a world where creativity meets technology to shape better futures.
                    Our projects are built with purpose — to inspire, empower, and elevate every user we reach.
                </p>
            </section>
        </div>
    );
};

export default Product;
