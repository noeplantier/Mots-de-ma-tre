import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from './Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      
      {/* Header Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#442F8A]/40 to-[#F9AACD]/40 z-20"></div>
        <div className="absolute -top-20 right-0 w-64 h-64 bg-[#442F8A]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-30 max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-8xl sm:text-9xl font-bold mb-4 text-[#442F8A] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">
              404
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Oups ! Cette page semble avoir <span className="font-extrabold  drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)] text-[#442F8A]">disparu</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Ne vous inquiétez pas, nous pouvons vous aider à retrouver votre chemin. Revenez à l'accueil pour découvrir nos services de community management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/" 
                className="bg-[#442F8A] px-8 py-3 rounded-full text-lg font-medium hover:bg-[#442F8A]/80 transition-all hover:scale-105 duration-300"
              >
                Retour à l'accueil
              </Link>
              <Link 
                to="/contact" 
                className="border border-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all hover:scale-105 duration-300"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound; 