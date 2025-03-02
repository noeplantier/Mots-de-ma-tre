import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import UpperButton from '../components/UpperButton';

const CalendlyBooking = () => {
  useEffect(() => {
    // Handle hash navigation
    if (window.location.hash === '#booking') {
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Initialize Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <Navbar />

      
      {/* Header */}
      <header id="header" className="py-16 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Réservez votre consultation</h1>
          <p className="text-xl max-w-2xl mx-auto">Choisissez le créneau qui vous convient et rencontrons-nous pour discuter de votre stratégie social media.</p>
        </div>
      </header>
      
      {/* Calendly Integration */}
      <section id="booking" className="py-16 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Sélectionnez un service et une date</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Notre outil de réservation en ligne vous permet de choisir le service qui correspond à vos besoins
              et de trouver un créneau qui s'adapte à votre emploi du temps.
            </p>
          </div>
          
          <div className="bg-neutral-900 rounded-lg p-2 md:p-6 mb-10">
    <div 
      className="calendly-inline-widget"
      data-url="https://calendly.com/noeplantier"
      style={{ 
        minWidth: '320px',
        height: '700px',
        border: 'none'
      }}>
        
      </div>
      </div>
      </div>
      
      </section>
      
      {/* Additional Info */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700">
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Durée des sessions</h3>
              <p className="text-gray-300">Nos consultations durent entre 30 minutes et 2 heures selon le service choisi.</p>
            </div>
            
            <div className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700">
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0v3H7V4h6zm-5 7a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm3-2a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Mode de consultation</h3>
              <p className="text-gray-300">Nous proposons des consultations en visioconférence ou en présentiel selon vos préférences.</p>
            </div>
            
            <div className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700">
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Tarification</h3>
              <p className="text-gray-300">Nos tarifs varient selon le service. Le paiement s'effectue après la session.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Questions fréquentes</h2>
          
          <div className="space-y-6">
            <div className="bg-neutral-900 hover:bg-neutral-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Comment annuler ou reporter mon rendez-vous ?</h3>
              <p className="text-gray-300">Vous pouvez annuler ou reporter votre rendez-vous directement depuis l'email de confirmation que vous recevrez après votre réservation. Merci de nous prévenir au moins 24h à l'avance.</p>
            </div>
            
            <div className="bg-neutral-900 hover:bg-neutral-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Comment se préparer à la consultation ?</h3>
              <p className="text-gray-300">Préparez vos questions et objectifs principaux. Pour les audits, nous vous demanderons l'accès à vos comptes sociaux avant la session. Vous recevrez un email détaillé après la réservation.</p>
            </div>
            
            <div className="bg-neutral-900 hover:bg-neutral-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Comment se déroulent les consultations ?</h3>
              <p className="text-gray-300">Nos consultations débutent par une analyse de vos besoins, suivie de recommandations stratégiques et d'un temps pour vos questions. Un compte-rendu vous sera envoyé après la session.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer serait importé comme composant partagé */}
      <footer className="py-12 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mots de Maître</h3>
              <p className="text-gray-400">Expertise en consulting et coaching pour réseaux sociaux.</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-500 transition-colors">Consulting</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Coaching</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Formation</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Audit</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Liens Utiles</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-500 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">À Propos</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Mentions Légales</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contact@motsdemaitre.fr</li>
                <li>+33 1 23 45 67 89</li>
                <li>
                  <div className="flex space-x-4 mt-4">
                    <a href="#" className="hover:text-pink-500 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                      </svg>
                    </a>
                    <a href="#" className="hover:text-pink-500 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="hover:text-pink-500 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Mots de Maître. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
      <UpperButton />
    </div>
  );
};

export default CalendlyBooking;