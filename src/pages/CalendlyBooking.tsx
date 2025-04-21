import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import UpperButton from '../components/UpperButton';
import Footer from './Footer';

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
      <header className={`py-24 bg-gradient-to-r from-[#442F8A]/40 to-[#F9AACD]/40 z-20 relative overflow-hidden`}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Réservez votre <span className="text-[#442F8A] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">Consultation</span></h1>
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
              <div className="w-12 h-12 bg-[#442F8A]  rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Durée des sessions</h3>
              <p className="text-gray-300">Nos consultations durent entre 30 minutes et 2 heures selon le service choisi.</p>
            </div>
            
            <div className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700">
              <div className="w-12 h-12 bg-[#442F8A]  rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0v3H7V4h6zm-5 7a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm3-2a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Mode de consultation</h3>
              <p className="text-gray-300">Nous proposons des consultations en visioconférence ou en présentiel selon vos préférences.</p>
            </div>
            
            <div className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700">
              <div className="w-12 h-12 bg-[#442F8A]  rounded-full flex items-center justify-center mb-4">
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
      
        {/* Footer */}
        <Footer />

        {/* Upper Button */}
        <UpperButton />
      <UpperButton />
    </div>
  );
};

export default CalendlyBooking;