import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import UpperButton from '../components/UpperButton';
import Footer from './Footer';

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
  
  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);

    // Add this new code to handle hash navigation
    if (window.location.hash === '#booking') {
      const servicesSection = document.getElementById('services-section');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
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
      
      <header className={`py-24 bg-gradient-to-r from-[#442F8A]/40 to-[#F9AACD]/40 z-20 relative overflow-hidden`}>
        <div className="absolute -top-20 right-0 w-64 h-64 bg-[#442F8A]  rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Nos <span className="text-[#442F8A] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">Services</span></h1>
            <p className="text-xl max-w-3xl mx-auto">
              Des solutions personnalisées pour booster votre présence sur les réseaux sociaux et transformer votre audience en communauté engagée.
            </p>
          </div>
        </div>
      </header>
      
      {/* Services Tabs */}
      <section id="services-section" className={`py-16 bg-black`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-colors ${
                  activeTab === service.id 
                  ? 'bg-[#442F8A]  text-white' 
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
                    <div className="w-16 h-16 bg-[#442F8A] rounded-full flex items-center justify-center mr-4">
                      {selectedService.icon}
                    </div>
                    <h2 className="text-3xl font-bold">{selectedService.title}</h2>
                  </div>
                  
                  <p className="text-xl text-gray-300 mb-8">{selectedService.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-[#442F8A] ">Avantages</h3>
                      <ul className="space-y-3">
                        {selectedService.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-6 h-6 text-[#442F8A] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]  mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-[#442F8A] ">Déroulement</h3>
                      <ul className="space-y-3">
                        {selectedService.process.map((step, index) => (
                          <li key={index} className="text-gray-300">{step}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border-t border-neutral-700 pt-8">
                    <div className="flex flex-wrap justify-between items-center">
                    
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
              <div className={`py-10 p-10 bg-gradient-to-r from-[#442F8A]/40 to-[#F9AACD]/40 z-20 relative overflow-hidden`}>
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
                      "L'audit réalisé par Mots de Maître a transformé notre approche sur Instagram. Notre engagement a augmenté de 30% en seulement 3 mois !"
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
      <section className={`py-24 bg-gradient-to-r from-[#442F8A]/40 to-[#F9AACD]/40 z-20 relative overflow-hidden`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre présence digitale ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Réservez votre consultation gratuite et découvrez comment nos services peuvent vous aider à atteindre vos objectifs.</p>
          <Link to="/booking" className="bg-white text-pink-900 px-8 py-3 rounded-full text-lg font-medium hover:bg-neutral-200 transition-colors inline-block">
            Réserver un appel découverte
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />

      {/* Upper Button */}
            
      <UpperButton />
    </div>
  );
};

export default Services;