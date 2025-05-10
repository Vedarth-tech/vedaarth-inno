import React from 'react';

const ServiceCard = ({ title, image, description }) => (
  <div className="w-full bg-slate-50 shadow-2xl rounded-2xl flex flex-col md:flex-row overflow-hidden transform transition-transform animate-fadeInDown duration-500 ease-in-out hover:scale-105">
    <div className="md:w-1/2 w-full h-64 md:h-auto">
      <img className="object-cover w-full h-full" src={image} alt={title} />
    </div>
    <div className="md:w-1/2 w-full p-6 flex flex-col justify-center gap-2">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-sm text-zinc-700">{description}</p>
      <button className="mt-4 px-4 w-fit bg-gradient-to-br from-primary to-accent text-white transition-colors py-2 rounded-md font-semibold hover:bg-zinc-800">
        Learn More
      </button>
    </div>
  </div>
);

export default ServiceCard;
