import React from 'react';
import Header from '../components/Header';
import '../styles/blob-animation.css'; // For the blob animation styles
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import Blob from '../components/Blob';

const Contact = () => {
  return (
    <div className="relative min-h-screen text-black overflow-hidden">

      {/* Animated Background Blobs */}
      <Blob />

      <div className="z-20 flex flex-col items-center justify-center pb-16 pt-16 px-4 md:mt-0 mt-14">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center animate-fadeInDown">Get in Touch</h1>
        <p className="max-w-2xl text-center text-xl mb-12 animate-fadeInDown">
          We'd love to hear from you—whether you have a question, a project in mind, or you're curious about the future of Web 3.0. Reach out and connect!
        </p>

        <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
          {/* Contact Form Section */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-2xl animate-fadeInDown">
            <h2 className="text-2xl font-semibold mb-4 text-black">Send Us a Message</h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 rounded-md border-2 border-blue-400 bg-white bg-opacity-20 placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded-md border-2 border-blue-400 bg-white bg-opacity-20 placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="px-4 py-2 rounded-md border-2 border-blue-400 bg-white bg-opacity-20 placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
              <button
                type="submit"
                className="bg-gradient-to-br from-primary to-accent text-white btn transition-colors py-2 rounded-md font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info and Newsletter Section */}
          <div className="flex flex-col gap-8">
            {/* Contact Information Card */}
            <div className="bg-white text-black bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-2xl animate-fadeInDown">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="flex items-center gap-4 mb-3">
                <HiOutlinePhone className="text-2xl" />
                <span className="text-lg">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <HiOutlineMail className="text-2xl" />
                <span className="text-lg">info@example.com</span>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <HiOutlineLocationMarker className="text-2xl" />
                <span className="text-lg">123 Web3 Avenue, Future City, USA</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
                  <img src="https://img.icons8.com/fluency/48/facebook-new.png" alt="" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-300 transition-colors">
                  <img src="https://img.icons8.com/fluency/48/instagram-new.png" alt="" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-700 transition-colors">
                  <img src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="" />
                </a>
              </div>
            </div>
            {/* Newsletter Subscription Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-2xl animate-fadeInDown">
              <h2 className="text-2xl font-semibold mb-4 text-slate-800">Subscribe to Our Newsletter</h2>
              <p className="mb-4 text-slate-400">
                Stay updated on the latest Web 3.0 trends and insights delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 rounded-md border-2 border-blue-400 bg-white bg-opacity-20 placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-500 flex-1"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-br from-primary to-accent btn text-white transition-colors p-2 rounded-md font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
