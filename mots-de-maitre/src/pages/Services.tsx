import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

// Importez vos icônes si nécessaire ou utilisez des composants comme ci-dessous
const SearchIcon = () => (
  <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const StrategyIcon = () => (
  <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const CoachingIcon = () => (
  <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const AIIcon = () => (
  <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('audit');
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
      setShowScrollButton(bottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 'audit',
      title: 'Audit',
      icon: <SearchIcon />,
      description: "Analyse approfondie de votre présence actuelle sur les réseaux sociaux pour identifier les forces et les axes d'amélioration.",
      benefits: [
        "Analyse complète des performances actuelles",
        "Identification des opportunités de croissance",
        "Évaluation comparative avec vos concurrents",
        "Recommandations personnalisées"
      ],
      process: [
        "1. Analyse de vos comptes sociaux actuels",
        "2. Étude de votre audience et engagement",
        "3. Évaluation du contenu et des stratégies",
        "4. Présentation d'un rapport détaillé"
      ],
      price: "À partir de 490€",
      duration: "1 à 2 semaines"
    },
    {
      id: 'strategie',
      title: 'Stratégie',
      icon: <StrategyIcon />,
      description: "Élaboration d'une stratégie social media sur mesure pour atteindre vos objectifs business spécifiques.",
      benefits: [
        "Plan d'action détaillé et personnalisé",
        "Stratégie de contenu adaptée à votre cible",
        "Calendrier éditorial optimisé",
        "KPIs clairs pour mesurer les résultats"
      ],
      process: [
        "1. Définition de vos objectifs business",
        "2. Création d'une stratégie de positionnement",
        "3. Élaboration d'un plan de contenu",
        "4. Mise en place d'outils de mesure"
      ],
      price: "À partir de 990€",
      duration: "2 à 3 semaines"
    },
    {
      id: 'coaching',
      title: 'Coaching',
      icon: <CoachingIcon />,
      description: "Sessions personnalisées pour vous former aux meilleures pratiques et vous rendre autonome dans votre communication digitale.",
      benefits: [
        "Accompagnement sur mesure et personnalisé",
        "Acquisition de compétences concrètes",
        "Autonomie progressive dans votre communication",
        "Support continu pendant toute la durée du coaching"
      ],
      process: [
        "1. Évaluation de vos besoins spécifiques",
        "2. Sessions de formation personnalisées",
        "3. Exercices pratiques sur vos comptes",
        "4. Suivi et ajustements réguliers"
      ],
      price: "À partir de 750€ / mois",
      duration: "3 à 6 mois"
    },
    {
      id: 'ia',
      title: 'IA & Innovation',
      icon: <AIIcon />,
      description: "Intégration des outils d'intelligence artificielle pour optimiser votre communication et gagner en efficacité.",
      benefits: [
        "Automatisation des tâches répétitives",
        "Analyse prédictive des tendances",
        "Personnalisation avancée des contenus",
        "Optimisation de l'engagement grâce aux algorithmes"
      ],
      process: [
        "1. Audit des possibilités d'automatisation",
        "2. Sélection des outils IA adaptés",
        "3. Mise en place et intégration",
        "4. Formation à l'utilisation des outils"
      ],
      price: "Sur devis",
      duration: "Variable selon les besoins"
    }
  ];

  const selectedService = services.find(service => service.id === activeTab);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      
      {/* Header */}
      <header className={`py-24 bg-gradient-to-r from-purple-900 to-pink-900 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="absolute -top-20 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Nos <span className="text-pink-500">Services</span></h1>
            <p className="text-xl max-w-3xl mx-auto">
              Des solutions personnalisées pour booster votre présence sur les réseaux sociaux et transformer votre audience en communauté engagée.
            </p>
          </div>
        </div>
      </header>
      
      {/* Services Tabs */}
      <section className={`py-16 bg-black transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-colors ${
                  activeTab === service.id 
                  ? 'bg-pink-600 text-white' 
                  : 'bg-neutral-800 hover:bg-neutral-700 text-white hover:bg-neutral-700'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
          
          {selectedService && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Service Details */}
              <div className="lg:col-span-2">
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-8 border border-neutral-800">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      {selectedService.icon}
                    </div>
                    <h2 className="text-3xl font-bold">{selectedService.title}</h2>
                  </div>
                  
                  <p className="text-xl text-gray-300 mb-8">{selectedService.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-pink-500">Avantages</h3>
                      <ul className="space-y-3">
                        {selectedService.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-6 h-6 text-pink-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-pink-500">Déroulement</h3>
                      <ul className="space-y-3">
                        {selectedService.process.map((step, index) => (
                          <li key={index} className="text-gray-300">{step}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border-t border-neutral-700 pt-8">
                    <div className="flex flex-wrap justify-between items-center">
                      <div>
                        <h3 className="text-xl font-bold mb-2">Tarif</h3>
                        <p className="text-2xl text-pink-500 font-bold">{selectedService.price}</p>
                        <p className="text-gray-400 text-sm">Durée: {selectedService.duration}</p>
                      </div>
                      <Link 
                        to="/contact" 
                        className="mt-4 md:mt-0 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 hover:bg-neutral-700 text-white rounded-lg transition-colors"
                      >
                        Demander un devis personnalisé
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Call To Action */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-xl p-8 sticky top-24">
                  <h3 className="text-2xl font-bold mb-4">Besoin de plus d'informations ?</h3>
                  <p className="text-gray-200 mb-6">
                    Réservez un appel découverte gratuit de 30 minutes avec l'un de nos experts. Nous répondrons à toutes vos questions et vous aiderons à déterminer la meilleure approche pour votre projet.
                  </p>
                  
                  <Link 
                    to="/booking" 
                    className="block w-full py-3 bg-white text-pink-900 rounded-full text-center font-bold hover:bg-gray-100 transition-colors"
                  >
                    Réserver un appel découverte
                  </Link>
                  
                  <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                    <h4 className="font-bold mb-2">Ce que disent nos clients</h4>
                    <p className="italic text-gray-200">
                      "L'audit réalisé par Mots de Maître a transformé notre approche sur Instagram. Notre engagement a augmenté de 300% en seulement 3 mois !"
                    </p>
                    <p className="mt-2 text-sm text-gray-300">— Julie Martin, Startup Tech</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className={`py-16 bg-neutral-900 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Questions fréquentes</h2>
          
          <div className="space-y-6">
            <div className="bg-neutral-800 hover:bg-neutral-700 hover:bg-neutral-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Comment choisir le service qui me convient ?</h3>
              <p className="text-gray-300">Tout dépend de vos besoins actuels. L'audit est idéal pour évaluer votre situation présente, la stratégie pour mettre en place un plan d'action complet, le coaching pour développer vos compétences, et l'IA pour optimiser et automatiser vos processus. Nous vous recommandons de réserver un appel découverte pour discuter de vos objectifs spécifiques.</p>
            </div>
            
            <div className="bg-neutral-800 hover:bg-neutral-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Combien de temps avant de voir des résultats ?</h3>
              <p className="text-gray-300">Les premiers résultats sont généralement visibles après 1 à 3 mois, selon votre point de départ et l'intensité de la mise en œuvre. Les résultats significatifs se concrétisent généralement après 3 à 6 mois d'application constante des stratégies recommandées.</p>
            </div>
            
            <div className="bg-neutral-800 hover:bg-neutral-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Est-ce que vous travaillez avec tous les réseaux sociaux ?</h3>
              <p className="text-gray-300">Oui, nous avons une expertise sur toutes les plateformes majeures : Instagram, TikTok, LinkedIn, Facebook, Twitter, Pinterest et YouTube. Nous adaptons notre approche en fonction des plateformes les plus pertinentes pour votre audience et vos objectifs.</p>
            </div>
            
            <div className="bg-neutral-800 hover:bg-neutral-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Proposez-vous des forfaits personnalisés ?</h3>
              <p className="text-gray-300">Absolument. Bien que nous ayons des offres standards, nous créons souvent des packages sur mesure qui combinent différents services selon les besoins spécifiques de nos clients. Contactez-nous pour discuter de vos besoins particuliers.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className={`py-16 bg-gradient-to-r from-purple-900 to-pink-900 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre présence digitale ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Réservez votre consultation gratuite et découvrez comment nos services peuvent vous aider à atteindre vos objectifs.</p>
          <Link to="/booking" className="bg-white text-pink-900 px-8 py-3 rounded-full text-lg font-medium hover:bg-neutral-200 transition-colors inline-block">
            Réserver un appel découverte
          </Link>
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
                <li><Link to="/services" className="hover:text-pink-500 transition-colors">Audit</Link></li>
                <li><Link to="/services" className="hover:text-pink-500 transition-colors">Stratégie</Link></li>
                <li><Link to="/services" className="hover:text-pink-500 transition-colors">Coaching</Link></li>
                <li><Link to="/services" className="hover:text-pink-500 transition-colors">IA & Innovation</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Liens Utiles</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/blog" className="hover:text-pink-500 transition-colors">Blog</Link></li>
                <li><Link to="/about" className="hover:text-pink-500 transition-colors">À Propos</Link></li>
                <li><Link to="/contact" className="hover:text-pink-500 transition-colors">Contact</Link></li>
                <li><Link to="/mentions-legales" className="hover:text-pink-500 transition-colors">Mentions Légales</Link></li>
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
      
      {showScrollButton && (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed right-8 bottom-8 bg-pink-600 hover:bg-pink-700 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-colors z-50"
      aria-label="Retour en haut de page"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>
  )}
    </div>
  );
};

export default Services;