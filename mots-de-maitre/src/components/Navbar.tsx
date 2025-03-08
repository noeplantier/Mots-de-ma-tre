import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-[#2E2649]" : "hover:text-[#2E2649] transition-colors";
  };

  return (
    <>
      {/* Navigation */}
      <nav className="w-full z-50 px-6 py-4 bg-black">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">MOTS DE MAÎTRE</Link>
          </div>
          
          <div className="hidden md:flex space-x-8 font-bold">
            <Link to="/" className={isActive('/')}>Accueil</Link>
            <Link to="/services" className={isActive('/services')}>Services</Link>
            <Link to="/about" className={isActive('/about')}>À Propos</Link>
            <Link to="/blog" className={isActive('/blog')}>Blog</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
          </div>
          
          <Link to="/booking" className="font-bold bg-[#2E2649] px-4 py-2 rounded-full text-sm hover:bg-[#2E2649]/80 transition-colors">
            Prendre RDV
          </Link>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 'Fermer' : 'Menu'}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 pt-20 px-6">
          <div className="flex flex-col space-y-6 text-xl">
            <Link to="/" className={isActive('/')} onClick={() => setIsMenuOpen(false)}>Accueil</Link>
            <Link to="/about" className={isActive('/about')} onClick={() => setIsMenuOpen(false)}>À Propos</Link>
            <Link to="/blog" className={isActive('/blog')} onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/contact" className={isActive('/contact')} onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link 
              to="/booking" 
              className="bg-[#2E2649] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#2E2649]/80 transition-colors w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Prendre RDV
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;