import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import UpperButton from '../components/UpperButton';
import emailjs from '@emailjs/browser';
import Footer from './Footer';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    gdpr: false
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    error: null as string | null  // Update the type to allow both string and null
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
// Partie à modifier dans votre fonction handleSubmit

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setFormStatus({ ...formStatus, submitting: true });
  
  try {
    // Configuration pour EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message
    };
    
    const serviceId = process.env.EMAILJS_SERVICE_ID || 'default_service_id';
    const templateId = process.env.EMAILJS_TEMPLATE_ID || 'default_template_id';
    const publicKey = process.env.EMAILJS_PUBLIC_KEY || 'default_public_key';

    emailjs.send(
      serviceId,
      templateId,
      { from_name: 'John Doe', message: 'Hello!' },
      publicKey
    );
    
    // Mise à jour du statut en cas de succès
    setFormStatus({
      submitting: false,
      submitted: true,
      success: true,
      error: null
    });
    
    // Réinitialiser le formulaire après succès
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      gdpr: false
    });
  } catch (error) {
    console.error("EmailJS error:", error);
    // Mise à jour du statut en cas d'erreur
    setFormStatus({
      submitting: false,
      submitted: true,
      success: false,
      error: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer."
    });
  }
};
  
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <Navbar/>
      
      {/* Contact Header */}
      <header className={`py-24 bg-gradient-to-r from-[#442F8A]/40 to-[#F9AACD]/40 z-20 relative overflow-hidden`}>
        <div className="absolute -top-20 right-0 w-64 h-64 bg-[#442F8A]  rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contactez-<span className="text-[#442F8A] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">Nous</span></h1>
            <p className="text-xl max-w-3xl mx-auto">
              Vous avez des questions ? Nous sommes là pour vous aider. Envoyez-nous un message et nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
        </div>
      </header>
      
      {/* Contact Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Coordonnées */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Nos coordonnées</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#442F8A]  rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Notre adresse</h3>
                    <p className="text-gray-300">
                      2 rue Jacques Lemercier<br />
                     31000 Toulouse, France
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#442F8A]  rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Téléphone</h3>
                    <p className="text-gray-300">+33 6 85 30 00 40</p>
                    <p className="text-gray-400 text-sm mt-1">Du lundi au vendredi, 9h-18h</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#442F8A]  rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <p className="text-gray-300">motsdemaitre@gmail.com</p>
                    <p className="text-gray-400 text-sm mt-1">Nous répondons sous 24h</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#442F8A]  rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Réseaux sociaux</h3>
                    <div className="flex space-x-4 mt-2">
                    <a 
              href="https://www.facebook.com/cosette.fleurisson" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#442F8A] transition-colors"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a 
              href="https://www.instagram.com/cfsocialmedia_manager/?igsh=MWdpdzN2dWp5M2VnbA%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#442F8A] transition-colors"
            >    
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
              href="https://www.linkedin.com/in/cosette-fleurisson-579867228/?originalSubdomain=fr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#442F8A] transition-colors"
            >                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
                      <a 
                      href="https://pin.it/1bZ0tOYI7" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-[#442F8A]  transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.627 0-12 5.373-12 12 0 4.991 3.657 9.128 8.438 10.292-.117-.875-.223-2.219.047-3.172.242-.938 1.562-6.031 1.562-6.031s-.398-.797-.398-1.969c0-1.844 1.07-3.219 2.406-3.219 1.133 0 1.688.844 1.688 1.844 0 1.125-.719 2.812-1.094 4.375-.312 1.312.656 2.375 1.938 2.375 2.328 0 3.906-2.969 3.906-6.469 0-2.656-1.781-4.641-5.031-4.641-3.672 0-5.969 2.75-5.969 5.844 0 1.031.312 1.781.812 2.344.234.281.266.391.187.719-.062.234-.203.797-.266 1.016-.078.281-.312.391-.578.281-1.594-.656-2.344-2.406-2.344-4.375 0-3.25 2.75-7.156 8.219-7.156 4.391 0 7.281 3.188 7.281 6.625 0 4.5-2.5 7.844-6.219 7.844-1.25 0-2.438-.656-2.844-1.406l-.781 2.969c-.281 1.094-1.047 2.469-1.562 3.312 1.172.344 2.406.531 3.688.531 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    </div>
                  </div>
                </div>
              </div>
              </div>

    
            {/* Formulaire */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Envoyez-nous un message</h2>
              
              {formStatus.submitted && formStatus.success ? (
                <div className="bg-green-900/30 border border-green-500 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message envoyé avec succès !</h3>
                  <p className="text-gray-300">
                    Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nom complet *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#442F8A]  text-white"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#442F8A]  text-white"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Téléphone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#442F8A]  text-white"
                        placeholder="+33 1 23 45 67 89"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Sujet *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-neutral-800 rounded-lg  focus:ring-2 focus:ring-[#442F8A]  text-white"
                      >
                        <option value="" disabled>Sélectionnez un sujet</option>
                        <option value="information">Demande d'information</option>
                        <option value="devis">Demande de devis</option>
                        <option value="partenariat">Proposition de partenariat</option>
                        <option value="support">Support technique</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-3 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#442F8A]  text-white"
                      placeholder="Détaillez votre demande ici..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="gdpr"
                        name="gdpr"
                        checked={formData.gdpr}
                        onChange={handleChange}
                        required
                        className="mt-1 mr-3"
                      />
                      <label htmlFor="gdpr" className="text-sm text-gray-300">
                        J'accepte que mes données soient traitées conformément à la politique de confidentialité de Mots de Maître. *
                      </label>
                    </div>
                  </div>
                  
                  {/* Message d'erreur */}
                  {formStatus.submitted && !formStatus.success && (
                    <div className="bg-red-900/30 border border-red-500 rounded-lg p-4">
                      <p className="text-red-500">{formStatus.error || "Une erreur est survenue. Veuillez réessayer."}</p>
                    </div>
                  )}
                  
                  <div>
                    <button
                      type="submit"
                      disabled={formStatus.submitting}
                      className={`w-full py-3 rounded-full font-medium ${
                        formStatus.submitting
                          ? 'bg-neutral-700 cursor-not-allowed'
                          : 'bg-[#442F8A]'
                      }`}
                    >
                      {formStatus.submitting ? 'Envoi en cours...' : 'Envoyer le message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Questions fréquentes</h2>
          
          <div className="space-y-6">
            <div className="bg-neutral-800 hover:bg-neutral-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Quel est le délai de réponse ?</h3>
              <p className="text-gray-300">Nous nous efforçons de répondre à toutes les demandes dans un délai de 24 heures ouvrées.</p>
            </div>
            
            <div className="bg-neutral-800 hover:bg-neutral-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Proposez-vous des rendez-vous en présentiel ?</h3>
              <p className="text-gray-300">Oui, nous proposons des consultations en présentiel à notre siège sur Toulouse, ainsi que des rendez-vous en visioconférence pour plus de flexibilité.</p>
            </div>
            
            <div className="bg-neutral-800 hover:bg-neutral-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Comment se déroule une première consultation ?</h3>
              <p className="text-gray-300">La première consultation débute par un audit de votre présence actuelle, suivi d'échanges sur vos objectifs et vos attentes. Nous établissons ensuite un plan d'action personnalisé.</p>
            </div>
          </div>
        </div>
      </section>
      
    <Footer/>
      <UpperButton />
    </div>
    
  );
};

export default ContactForm;