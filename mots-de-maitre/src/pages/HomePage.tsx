import React, { useState, useEffect } from 'react';

const HomePage = () => {
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
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-sm">        <div className="flex items-center">
          <h1 className="text-3xl font-bold">MOTS DE MAÎTRE</h1>
        </div>
        
        <div className="hidden md:flex space-x-8 font-bold text-xl">
          <a href="#" className="hover:text-pink-500 transition-colors">Accueil</a>
          <a href="#services" className="hover:text-pink-500 transition-colors">Services</a>
          <a href="#about" className="hover:text-pink-500 transition-colors">À Propos</a>
          <a href="#blog" className="hover:text-pink-500 transition-colors">Blog</a>
          <a href="#contact" className="hover:text-pink-500 transition-colors">Contact</a>
        </div>
        
        <button className="bg-pink-600 px-4 py-2 rounded-full text-m font-bold hover:bg-pink-700 transition-colors">
          Prendre RDV
        </button>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 'Fermer' : 'Menu'}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 pt-20 px-6">
          <div className="flex flex-col space-y-6 text-xl">
            <a href="#" className="hover:text-pink-500 transition-colors">Accueil</a>
            <a href="#services" className="hover:text-pink-500 transition-colors">Services</a>
            <a href="#about" className="hover:text-pink-500 transition-colors">À Propos</a>
            <a href="#blog" className="hover:text-pink-500 transition-colors">Blog</a>
            <a href="#contact" className="hover:text-pink-500 transition-colors">Contact</a>
            <button className="bg-pink-600 px-6 py-3 rounded-full text-sm font-medium hover:bg-pink-700 transition-colors w-full">
              Prendre RDV
            </button>
          </div>
        </div>
      )}
      
    {/* Hero Section */}
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-pink-900/60"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-50"></div>
        
          <div className="flex flex-col items-start">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
              Propulsez votre{' '}
              <span className="block">présence digitale</span>{' '}
              avec <span className="text-pink-500">Mots de Maître</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl">
              Consulting et coaching en réseaux sociaux pour des stratégies qui transforment votre audience en communauté engagée
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-pink-600 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-pink-700 transition-colors">
                Prendre Rendez-vous
              </button>
              <button className="w-full sm:w-auto border border-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-white hover:text-black transition-colors">
                Découvrir nos services
              </button>
            </div>
          </div>
        
      </section>
      
      
        {/* Values Section */}
        <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-6xl font-bold mb-16 text-center">Votre succès <span className="text-pink-500">Notre priorité</span> </h2>
       <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Nous vous accompagnons à chaque étape pour faire de vos réseaux sociaux un véritable levier
            de croissance. </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 p-8 rounded-lg hover:bg-neutral-700 transition-colors">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Audit & Stratégie</h3>
              <p className="text-gray-300">Nous analysons votre présence actuelle sur les réseaux sociaux pour identifier les forces et les axes d'amélioration. À partir de cette étude approfondie, nous construisons une strategie
              personnalisée qui vous permettra d'atteindre vos objectifs.</p>
            </div>
            
            <div className="bg-neutral-800 p-8 rounded-lg hover:bg-neutral-700 transition-colors">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-6">
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
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-6">
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


      
      
  
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-6xl font-bold mb-16 text-center">Nos <span className="text-pink-500">Services</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group">
              <div className="overflow-hidden mb-6">
                <img 
                  src="/images/consultant.png" 
                  alt="Consulting en Stratégie Sociale" 
                  className="w-28 h-28 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-pink-500 transition-colors">Consulting en Stratégie Sociale</h3>
              <p className="text-gray-300 mb-4">Analyse approfondie de votre présence actuelle et élaboration d'une stratégie sur mesure pour atteindre vos objectifs spécifiques.</p>
              <a href="#" className="text-pink-500 flex items-center group-hover:underline">
                En savoir plus 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
            
            <div className="group">
              <div className="overflow-hidden mb-6">
                <img 
                  src="/images/mentoring.png" 
                  alt="Coaching Personnalisé" 
                  className="w-28 h-28 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-pink-500 transition-colors">Coaching Personnalisé</h3>
              <p className="text-gray-300 mb-4">Sessions individuelles pour vous former aux meilleures pratiques, avec un suivi régulier pour garantir des résultats durables.</p>
              <a href="#" className="text-pink-500 flex items-center group-hover:underline">
                En savoir plus 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      
           {/* Testimonials Section */}
           <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6 ">
        <h2 className="text-3xl md:text-6xl font-bold mb-16 text-center">Ce que nos <span className="text-pink-500">Clients</span> disent</h2>
          
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
              <p className="text-gray-300 italic">"Grâce à Mots de Maître, notre engagement sur LinkedIn a augmenté de 300% en seulement 3 mois. Leur approche personnalisée a vraiment fait la différence."</p>
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
              <p className="text-gray-300 italic">"Nos ventes ont augmenté de 40% depuis que nous avons mis en place la stratégie Instagram développée lors de nos sessions de coaching."</p>
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
              <p className="text-gray-300 italic">"La formation en équipe a permis à tous nos collaborateurs d'aligner leur vision et d'optimiser notre présence digitale de façon cohérente."</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Preview Section */}
      <section id="blog" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Notre <span className="text-pink-500">Blog</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="overflow-hidden mb-6">
                <img 
                  src="/images/tiktok.jpg" 
                  alt="Article de blog" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-pink-500 mb-2 text-sm">12 FÉV 2025</p>
              <h3 className="text-xl font-bold mb-3 group-hover:text-pink-500 transition-colors">Comment optimiser votre contenu pour l'algorithme TikTok en 2025</h3>
              <a href="#" className="text-pink-500 flex items-center group-hover:underline">
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
              <p className="text-pink-500 mb-2 text-sm">5 FÉV 2025</p>
              <h3 className="text-xl font-bold mb-3 group-hover:text-pink-500 transition-colors">Les 5 erreurs à éviter dans votre stratégie LinkedIn</h3>
              <a href="#" className="text-pink-500 flex items-center group-hover:underline">
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
              <p className="text-pink-500 mb-2 text-sm">28 JAN 2025</p>
              <h3 className="text-xl font-bold mb-3 group-hover:text-pink-500 transition-colors">Comment utiliser l'IA pour créer du contenu authentique</h3>
              <a href="#" className="text-pink-500 flex items-center group-hover:underline">
                Lire l'article
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="border border-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-colors inline-block">
              Voir tous les articles
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Prêt à transformer votre présence digitale?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Réservez une consultation gratuite de 30 minutes pour découvrir comment nos services peuvent vous aider à atteindre vos objectifs.</p>
          <button className="bg-white text-pink-900 px-8 py-3 rounded-full text-lg font-medium hover:bg-neutral-200 transition-colors">
            Prendre Rendez-vous Maintenant
          </button>
        </div>
      </section>
      
      {/* Footer */}
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
      
      {/* Page Indicator */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <div className="flex flex-col space-y-4">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div 
              key={index}
              className={`w-3 h-3 rounded-full ${activeSection === index ? 'bg-pink-500' : 'bg-gray-500'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
} 


export default HomePage;