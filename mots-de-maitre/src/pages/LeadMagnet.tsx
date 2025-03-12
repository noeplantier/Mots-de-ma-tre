import React, { useState, useEffect } from 'react';

const LeadMagnet = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    acceptNewsletter: true
  });
  const [formState, setFormState] = useState({
    submitted: false,
    submitting: false,
    error: null
  });
  const [showPopup, setShowPopup] = useState(false);
  const [exitIntent, setExitIntent] = useState(false);

  // Gestion des changements dans le formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Soumettre le formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ ...formState, submitting: true, error: null });
    
    // Simuler un appel API
    setTimeout(() => {
      setFormState({
        submitted: true,
        submitting: false,
        error: null
      });
      
      // Réinitialiser le formulaire
      setFormData({
        email: '',
        name: '',
        acceptNewsletter: true
      });
      
      // Fermer la popup après quelques secondes si elle est ouverte
      if (showPopup) {
        setTimeout(() => {
          setShowPopup(false);
        }, 5000);
      }
    }, 1500);
  };

  // Gestionnaire d'intention de sortie
  useEffect(() => {
    const handleExitIntent = (e: MouseEvent) => {
      // Si le curseur sort par le haut de la page et qu'on n'a pas déjà détecté d'intention de sortie
      if (e.clientY <= 0 && !exitIntent && !localStorage.getItem('exitIntentShown')) {
        setExitIntent(true);
        setShowPopup(true);
        // Marquer comme déjà affiché dans localStorage pour ne pas afficher à chaque visite
        localStorage.setItem('exitIntentShown', 'true');
        
        // Réinitialiser après 30 jours
        setTimeout(() => {
          localStorage.removeItem('exitIntentShown');
        }, 30 * 24 * 60 * 60 * 1000);
      }
    };

    // Délai avant d'activer la détection d'exit intent
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleExitIntent);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleExitIntent);
    };
  }, [exitIntent]);

  // Pop-up Lead Magnet (s'affiche lors de l'exit intent)
  const LeadMagnetPopup = () => (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${showPopup ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}>
      <div className="absolute inset-0 bg-black/70" onClick={() => setShowPopup(false)}></div>
      
      <div className="relative bg-neutral-900 rounded-lg max-w-md w-full mx-4 overflow-hidden">
        <button 
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <div className="bg-gradient-to-r from-[#442F8A] /40 to-[#F9AACD]/40 p-6">
          <h3 className="text-2xl font-bold mb-2">Ne partez pas si vite !</h3>
          <p className="text-white/90">Obtenez notre guide exclusif et transformez votre stratégie social media</p>
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg">Guide Gratuit</h4>
              <p className="text-gray-400 text-sm">50 stratégies qui fonctionnent en 2025</p>
            </div>
          </div>
          
          {formState.submitted ? (
            <div className="bg-green-900/30 border border-green-500 rounded-lg p-4 text-center">
              <p className="text-green-400 font-medium mb-2">Merci pour votre inscription !</p>
              <p className="text-sm text-gray-300">Vérifiez votre boîte mail pour télécharger votre guide.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="popup-name" className="block text-sm font-medium text-gray-300 mb-1">Votre prénom</label>
                <input
                  type="text"
                  id="popup-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                  placeholder="Prénom"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="popup-email" className="block text-sm font-medium text-gray-300 mb-1">Votre email</label>
                <input
                  type="email"
                  id="popup-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                  placeholder="email@exemple.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="popup-newsletter"
                    name="acceptNewsletter"
                    checked={formData.acceptNewsletter}
                    onChange={handleChange}
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="popup-newsletter" className="text-sm text-gray-300">
                    J'accepte de recevoir la newsletter et les offres promotionnelles de Mots de Maître.
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={formState.submitting}
                className={`w-full py-3 rounded-full font-medium ${
                  formState.submitting
                    ? 'bg-neutral-700 cursor-not-allowed'
                    : 'bg-pink-600 hover:bg-pink-700 transition-colors'
                }`}
              >
                {formState.submitting ? 'Traitement en cours...' : 'Télécharger le guide gratuit'}
              </button>
              
              <p className="text-xs text-center text-gray-400 mt-4">
                Nous respectons votre vie privée. Désabonnez-vous à tout moment.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  // En-tête du blog ou sidebar avec lead magnet
  const SidebarLeadMagnet = () => (
    <div className="bg-neutral-900 rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-[#442F8A] /40 to-[#F9AACD]/40 p-4">
        <h3 className="text-xl font-bold">Guide gratuit</h3>
        <p className="text-white/90 text-sm">Social Media : 50 stratégies pour 2025</p>
      </div>
      
      <div className="p-4">
        {formState.submitted ? (
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-sm">Merci ! Vérifiez votre boîte mail.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white text-sm"
                placeholder="Votre email"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={formState.submitting}
              className={`w-full py-2 rounded-full text-sm font-medium ${
                formState.submitting
                  ? 'bg-neutral-700 cursor-not-allowed'
                  : 'bg-pink-600 hover:bg-pink-700 transition-colors'
              }`}
            >
              {formState.submitting ? 'Envoi...' : 'Télécharger'}
            </button>
          </form>
        )}
      </div>
    </div>
  );

  // Bannière inline pour les articles de blog ou la page d'accueil
  const InlineLeadMagnet = () => (
    <div className="bg-gradient-to-r from-[#442F8A] /40 to-[#F9AACD]/40 rounded-lg p-6 md:p-8 my-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        <div className="lg:col-span-3">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Téléchargez notre guide gratuit</h3>
          <h4 className="text-xl mb-4 text-pink-200">50 stratégies de social media qui fonctionnent en 2025</h4>
          <p className="text-gray-100 mb-6">
            Découvrez les techniques utilisées par les plus grandes marques pour développer leur communauté
            et augmenter leur engagement sur les réseaux sociaux.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-pink-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              Stratégies testées et approuvées
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-pink-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              Optimisation pour les algorithmes 2025
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-pink-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              Outils et ressources exclusifs
            </li>
          </ul>
        </div>
        
        <div className="lg:col-span-2">
          {formState.submitted ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h5 className="text-xl font-bold mb-2">Merci pour votre inscription !</h5>
              <p>Vérifiez votre boîte mail pour télécharger votre guide.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h5 className="text-xl font-bold mb-4 text-center">Recevez ce guide gratuit</h5>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-black/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                  placeholder="Votre prénom"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-black/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                  placeholder="Votre email"
                  required
                />
              </div>
              <div className="mb-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="acceptNewsletter"
                    name="acceptNewsletter"
                    checked={formData.acceptNewsletter}
                    onChange={handleChange}
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="acceptNewsletter" className="text-sm">
                    J'accepte de recevoir la newsletter et les conseils de Mots de Maître.
                  </label>
                </div>
              </div>
              <button
                type="submit"
                disabled={formState.submitting}
                className={`w-full py-3 rounded-full font-medium ${
                  formState.submitting
                    ? 'bg-neutral-700 cursor-not-allowed'
                    : 'bg-pink-600 hover:bg-pink-700 transition-colors'
                }`}
              >
                {formState.submitting ? 'Traitement en cours...' : 'Télécharger maintenant'}
              </button>
              <p className="text-xs text-center mt-4 text-gray-300">
                Nous ne partageons jamais vos informations.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  // Bannière fixe en bas de l'écran
  const FixedBottomBanner = () => {
    const [showBanner, setShowBanner] = useState(false);
    
    useEffect(() => {
      // Afficher la bannière après un défilement de 50% de la page
      const handleScroll = () => {
        const scrolled = window.scrollY;
        const viewportHeight = window.innerHeight;
        const bodyHeight = document.body.clientHeight;
        
        if (scrolled > bodyHeight * 0.3 && !localStorage.getItem('bannerClosed')) {
          setShowBanner(true);
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const closeBanner = () => {
      setShowBanner(false);
      localStorage.setItem('bannerClosed', 'true');
      
      // Réinitialiser après 7 jours
      setTimeout(() => {
        localStorage.removeItem('bannerClosed');
      }, 7 * 24 * 60 * 60 * 1000);
    };
    
    if (!showBanner) return null;
    
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-pink-600 p-3 z-40">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-3 md:mb-0">
            <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center mr-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <p className="font-bold">Téléchargez notre guide gratuit</p>
              <p className="text-sm text-gray-300">50 stratégies social media pour 2025</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setShowPopup(true)}
              className="bg-pink-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-700 transition-colors"
            >
              Télécharger
            </button>
            <button 
              onClick={closeBanner}
              className="text-gray-400 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Composant principal qui rend tous les sous-composants */}
      <InlineLeadMagnet />
      <SidebarLeadMagnet />
      <LeadMagnetPopup />
      <FixedBottomBanner />
      
      {/* Bouton pour déclencher manuellement le popup (pour démonstration) */}
      <div className="text-center my-8">
        <button 
          onClick={() => setShowPopup(true)}
          className="bg-pink-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-pink-700 transition-colors inline-flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd"></path>
          </svg>
          Obtenir le guide gratuit
        </button>
      </div>
    </>
  );
};

export default LeadMagnet;