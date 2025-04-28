import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import UpperButton from '../components/UpperButton';
import Footer from './Footer';


const HomePage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionIndex = Math.floor(scrollPosition / (windowHeight * 0.8));
      setActiveSection(sectionIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">

    {/* Navigation */}
    <Navbar/>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 pt-20 px-6">
          <div className="flex flex-col space-y-6 text-xl">
            <a href="#/" className="hover:text-[#442F8A] transition-colors">Accueil</a>
            <a href="#services" className="hover:text-[#442F8A] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#442F8A] transition-colors">À Propos</a>
            <a href="#blog" className="hover:text-[#442F8A] transition-colors">Blog</a>
            <a href="#contact" className="hover:text-[#442F8A] transition-colors">Contact</a>
            <button className="bg-[#442F8A] px-6 py-3 rounded-full text-sm font-medium hover:bg-pink-700 transition-colors w-full">
              Demande de devis
            </button>
          </div>
        </div>
      )}


      
           {/* Hero Section */}
           <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#442F8A]/40 to-[#F9AACD]/40 z-20"></div>
      <div className="absolute inset-0 bg-cover bg-center"></div>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-30 max-w-6xl">
        <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-pointer">Propulsez votre{' '}</span>
              <span className="block hover:scale-105 transition-transform duration-300 cursor-pointer">présence digitale</span>{' '}
              <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-pointer">avec</span> <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-pointer text-[#442F8A] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">Mots de Maître</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
              Consulting et coaching en réseaux sociaux pour des stratégies qui transforment votre audience en communauté engagée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link to="/contact" className="w-full sm:w-auto bg-[#442F8A] px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-[#442F8A]/80 transition-all hover:scale-105 duration-300">
              Demande de devis
              </Link>
              <Link to="/services" className="w-full sm:w-auto border border-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-white hover:text-black transition-all hover:scale-105 duration-300">
                Découvrir nos services
              </Link>
            </div>
        </div>
      </div>
    </section>


{/* Values Section */}
<section className="py-24 bg-black relative overflow-hidden">
  {/* Background elements */}
  <div className="absolute -top-20 right-0 w-64 h-64 bg-[#442F8A]/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
  
  <div className="container mx-auto px-6 relative z-10">
    <div className="max-w-4xl mx-auto text-center mb-20">
      <h2 className="text-3xl md:text-6xl font-bold mb-10">Nos <span className="text-[#442F8A] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">Valeurs</span></h2>
      <p className="text-xl text-gray-300">
        Des principes qui guident nos actions pour vous offrir une expertise qui fait la différence.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Authenticité */}
      <div className="bg-neutral-900/50 backdrop-blur-sm p-8 rounded-lg hover:bg-neutral-800/70 transition-all duration-300 transform hover:-translate-y-1 border border-neutral-800">
        <div className="w-16 h-16 bg-[#442F8A] rounded-full flex items-center justify-center mb-6 mx-auto">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-4 text-center">L'Authenticité</h3>
        <p className="text-gray-300 text-center">
          Construire une présence digitale qui vous ressemble et qui crée une véritable connexion avec votre audience.
        </p>
      </div>
      
      {/* Expertise */}
      <div className="bg-neutral-900/50 backdrop-blur-sm p-8 rounded-lg hover:bg-neutral-800/70 transition-all duration-300 transform hover:-translate-y-1 border border-neutral-800">
        <div className="w-16 h-16 bg-[#442F8A] rounded-full flex items-center justify-center mb-6 mx-auto">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-4 text-center">L'Expertise</h3>
        <p className="text-gray-300 text-center">
          Apporter des analyses précises et des stratégies éprouvées pour maximiser votre impact.
        </p>
      </div>
      
      {/* Innovation */}
      <div className="bg-neutral-900/50 backdrop-blur-sm p-8 rounded-lg hover:bg-neutral-800/70 transition-all duration-300 transform hover:-translate-y-1 border border-neutral-800">
        <div className="w-16 h-16 bg-[#442F8A] rounded-full flex items-center justify-center mb-6 mx-auto">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-4 text-center">L'Innovation</h3>
        <p className="text-gray-300 text-center">
          Intégrer l'<span className="font-bold">IA</span> et les outils digitaux les plus performants pour optimiser votre communication.
        </p>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      {/* Autonomie */}
      <div className="bg-neutral-900/50 backdrop-blur-sm p-8 rounded-lg hover:bg-neutral-800/70 transition-all duration-300 transform hover:-translate-y-1 border border-neutral-800">
        <div className="w-16 h-16 bg-[#442F8A] rounded-full flex items-center justify-center mb-6 mx-auto">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-4 text-center">L'Autonomie</h3>
        <p className="text-gray-300 text-center">
          Vous donner les clés pour gérer efficacement vos réseaux sociaux et en tirer le meilleur parti.
        </p>
      </div>
      
      {/* Résultats */}
      <div className="bg-neutral-900/50 backdrop-blur-sm p-8 rounded-lg hover:bg-neutral-800/70 transition-all duration-300 transform hover:-translate-y-1 border border-neutral-800">
        <div className="w-16 h-16 bg-[#442F8A] rounded-full flex items-center justify-center mb-6 mx-auto">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-4 text-center">Les Résultats</h3>
        <p className="text-gray-300 text-center">
          Transformer votre audience en communauté engagée et en clients fidèles.
        </p>
      </div>
    </div>
  </div>
</section>
      
        {/* Success Section */}
        <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-6xl font-bold mb-10 text-center">Votre succès <span className="text-[#442F8A]">Notre priorité</span> </h2>
       <h2 className="text-xl md:text-xl mb-20 text-center">
            Nous vous accompagnons à chaque étape pour faire de vos réseaux sociaux un véritable levier
            de croissance. </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 p-8 rounded-lg hover:bg-neutral-700 transition-colors">
              <div className="w-16 h-16 bg-[#442F8A] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Audit & Stratégie</h3>
              <p className="text-gray-300">Nous analysons votre présence actuelle sur les réseaux sociaux pour identifier les forces et les axes d'amélioration. À partir de cette étude approfondie, nous construisons une strategie
              personnalisée qui vous permettra d'atteindre vos objectifs.</p>
            </div>
            
            <div className="bg-neutral-800 p-8 rounded-lg hover:bg-neutral-700 transition-colors">
              <div className="w-16 h-16 bg-[#442F8A] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Coaching & Formation</h3>
              <p className="text-gray-300"> Nous vous apprenons à maîtriser les plateformes et à utiliser les dernières tendances, y compris
l'intelligence artificielle, pour créer du contenu impactant et gagner en visibilité.
</p>
            </div>
            
            <div className="bg-neutral-800 p-8 rounded-lg hover:bg-neutral-700 transition-colors">
              <div className="w-16 h-16 bg-[#442F8A] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Suivi & Optimisation</h3>
              <p className="text-gray-300">Le digital évolue sans cesse : nous vous accompagnons avec un suivi personnalisé pour ajuster
              votre stratégie en fonction des résultats obtenus.</p>
            </div>
          </div>
        </div>
      </section>


      
      
  

      
           {/* Testimonials Section */}
           <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6 ">
        <h2 className="text-3xl md:text-6xl font-bold mb-10 text-center">Ce que nos <span className="text-[#442F8A]">Clients</span> disent</h2>
        <h2 className="text-xl md:text-xl mb-20 text-center">
            Nous vous accompagnons à chaque étape pour faire de vos réseaux sociaux un véritable levier
            de croissance. </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <div className="bg-neutral-800 p-8 rounded-lg hover:bg-neutral-700">
              <div className="flex items-center mb-6 ">
                <img 
                  src="/images/julie_martin.jpg" 
                  alt="Julie Martin" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Julie Martin</h4>
                  <p className="text-sm text-gray-400">Startup Tech</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"Grâce à Mots de Maître, notre engagement sur LinkedIn a augmenté de plusieurs centaines de viewers en seulement 2 mois. Leur approche personnalisée a vraiment fait la différence."</p>
            </div>
            
            <div className="bg-neutral-800 p-8 rounded-lg hover:bg-neutral-700">
              <div className="flex items-center mb-6">
                <img 
                  src="/images/thomas_renard.jpg" 
                  alt="Thomas Dubois" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Thomas Dubois</h4>
                  <p className="text-sm text-gray-400">E-commerce Mode</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"Nos ventes ont augmenté d'environs 20% depuis que nous avons mis en place la stratégie Instagram développée lors de nos sessions de coaching avec Cosette, un grand merci !"</p>
            </div>
            
            <div className="bg-neutral-800 p-8 rounded-lg hover:bg-neutral-700">
              <div className="flex items-center mb-6">
                <img 
                  src="/images/sophie_dubois.jpg" 
                  alt="Sophie Renard" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Sophie Renard</h4>
                  <p className="text-sm text-gray-400">Agence de Communication</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"La formation en équipe a permis à tous nos collaborateurs d'aligner leur vision et d'optimiser notre présence sur les réseaux (en particulier Instagram), encore bravo."</p>
            </div>
          </div>
        </div>
      </section>
      
   {/* Blog Preview Section */}
<section id="blog" className="py-20 bg-black">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl md:text-6xl font-bold mb-10 text-center">Notre <span className="text-[#442F8A]">Blog</span></h2>
    <h2 className="text-xl md:text-xl mb-20 text-center">
      Nous vous accompagnons à chaque étape pour faire de vos réseaux sociaux un véritable levier
      de croissance.
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="group">
        <div className="overflow-hidden mb-6">
          <img
            src="/images/algo.jpeg"
            alt="Article de blog"
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <p className="text-[#442F8A] mb-2 text-sm">12 FÉV 2025</p>
        <h3 className="text-xl font-bold mb-3 transition-colors">Comment optimiser votre contenu pour l'algorithme TikTok en 2025</h3>
        <a href="/blog/1" className="text-[#442F8A] flex items-center ">
          Lire l'article
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
      <div className="group">
        <div className="overflow-hidden mb-6">
          <img
            src="/images/linkedin.jpg"
            alt="Article de blog"
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <p className="text-[#442F8A] mb-2 text-sm">5 FÉV 2025</p>
        <h3 className="text-xl font-bold mb-3 transition-colors">Les 5 erreurs à éviter dans votre stratégie LinkedIn</h3>
        <a href="/blog/2" className="text-[#442F8A] flex items-center group-hover:underline">
          Lire l'article
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
      <div className="group">
        <div className="overflow-hidden mb-6">
          <img
            src="/images/intelligence.png"
            alt="Article de blog"
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <p className="text-[#442F8A] mb-2 text-sm">28 JAN 2025</p>
        <h3 className="text-xl font-bold mb-3 transition-colors">Comment utiliser l'IA pour créer du contenu authentique</h3>
        <a href="/blog/3" className="text-[#442F8A] flex items-center group-hover:underline">
          Lire l'article
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
    <div className="text-center mt-12">
      <a href="/blog" className="border border-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-colors inline-block">
        Voir tous les articles
      </a>
    </div>
  </div>
</section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#442F8A]/40 to-[#F9AACD]/40 z-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Ce que nos clients disent de nos PDF</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="/images/CV-PIC.png" 
                  alt="Noé Plantier" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Noé Plantier</h4>
                  <p className="text-sm text-gray-300">Développeur Web & Mobile</p>
                </div>
              </div>
              <p className="text-gray-200 italic">"Le PDF 'Stratégie Instagram pour Entrepreneurs' de Cosette m'a permis de structurer ma communication et d'augmenter mon engagement de facon significative. Un must-have pour tout entrepreneur qui veut se démarquer sur Instagram."</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="/images/alexberch.webp" 
                  alt="Alexandre Berchemin" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Alexandre Berchemin</h4>
                  <p className="text-sm text-gray-300">Coach Business</p>
                </div>
              </div>
              <p className="text-gray-200 italic">"Le guide 'Management pour Professionnels' est une mine d'or. Les stratégies de Cosette sont concrètes et applicables immédiatement. J'ai doublé mon nombre de prospects qualifiés en seulement 2 mois."</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="/images/steven.avif" 
                  alt="Steven Fleureau" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Steven Fleureau</h4>
                  <p className="text-sm text-gray-300">Consultant Digital</p>
                </div>
              </div>
              <p className="text-gray-200 italic">"Le PDF 'Content Strategy' de Cosette est révolutionnaire. Les techniques d'IA et de création de contenu sont à la pointe. Un investissement qui a complètement transformé ma façon de produire du contenu."</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/pdf-store" 
              className="bg-white text-[#442F8A] px-8 py-3 rounded-full text-lg font-medium hover:bg-neutral-200 transition-colors inline-block"
            >
              Découvrir nos PDF
            </Link>
          </div>
        </div>
      </section>
      
      
      {/* Footer */}
  
    <Footer />

    {/* Upper Button */}
    <UpperButton />
      <UpperButton />
      
      {/* Page Indicator */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <div className="flex flex-col space-y-4">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div 
              key={index}
              className={`w-3 h-3 rounded-full ${activeSection === index ? 'bg-[#442F8A]' : 'bg-gray-500'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
} 


export default HomePage;