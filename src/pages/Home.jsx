import React from 'react';
import '../styles/bg_animation.css'; // For the blob animation styles
import '../styles/home.css';
import About from '../components/About';
import { Link } from 'react-router-dom';
import Blob from '../components/Blob';

const Home = () => {
  return (
    <div className="overflow-hidden font-poppins">

      {/* Hero Section */}
      <div className="z-20 relative min-h-screen pt-32 pb-16 px-4 home-page flex items-center justify-center">

        {/* Blob Section */}
        <Blob />
        
        <div className="content text-center">
          <h1 className="quote text-6xl md:text-8xl font-extrabold bg-clip-text text-content-light font-DESIGNER animate-fadeInDown">
            Vedaarth
          </h1>
          <p className="by text-xl md:text-2xl tracking-wide text-content-dark font-DESIGNER animate-fadeInUp">
            Innovation &amp; Technology
          </p>
         
          {/* <div className="flex justify-center">
            <button className="button" role="button">Click Here</button>
          </div> */}
        </div>
      </div>

      {/* About Section */}
      <div className=''>
        <About />
      </div>

      {/* <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white px-6 py-16">
        <section className="text-center mb-8">
          <h1 className="text-6xl font-extrabold text-purple-800 mb-6">Welcome to Our Company</h1>
          <p className="text-xl text-purple-600 max-w-3xl mx-auto leading-relaxed">
            We craft digital tools that empower people, teams, and ideas — with a heart full of innovation.
          </p>
        </section>

        <section className="bg-white rounded-3xl shadow-2xl p-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <img
              src="./assets/image/innovation-img.jpg"
              alt="Business Focus"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-purple-700 mb-6">Our Vision for Innovation</h2>
            <p className="text-lg text-purple-600 mb-8 leading-relaxed">
              At the core of our company is a belief that technology should be human-centered.
              Our products are made to simplify your journey, inspire innovation, and scale with purpose.
            </p>
            <Link to="/products">
              <button className="bg-gradient-to-br from-primary to-accent text-white px-8 py-3 rounded-full text-lg font-medium shadow-md transition duration-300 ease-in-out btn">
                Explore Our Products →
              </button>
            </Link>
          </div>
        </section>
      </div> */}

    </div>
  );
};

export default Home;
