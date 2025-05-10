import React from 'react'
import Blob from '../components/Blob'
import ServiceCard from '../components/ServiceCard'
// Sample service data
const services = [
    {
        title: 'Software Development',
        image: 'assets/image/software-development.jpg',
        description: 'Custom applications tailored to your business needs.'
    },
    {
        title: 'Web Development',
        image: 'assets/image/web-development.png',
        description: 'Creating intuitive and engaging user experiences.'
    },
    {
        title: 'Testing & QA',
        image: 'assets/image/testing.png',
        description: 'Boost your reach with modern marketing strategies.'
    },
    {
        title: 'Pentesting',
        image: 'assets/image/pentesting.webp',
        description: 'Expert advice to take your business to the next level.'
    },
    {
        title: 'Content Designing',
        image: 'assets/image/content-designing.jpg',
        description: 'Expert advice to take your business to the next level.'
    },
    {
        title: 'Network Security',
        image: 'assets/image/network-security.png',
        description: 'Expert advice to take your business to the next level.'
    }
]

const Services = () => {
    return (
        <div className="w-full min-h-screen relative overflow-hidden bg-white text-zinc-900 font-poppins">
            {/* Animated Background Blobs */}
            <Blob />

            {/* Content */}
            <div className="px-4 md:px-20 py-10 relative z-10 w-full h-full pt-20">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center animate-fadeInDown">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            image={service.image}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
