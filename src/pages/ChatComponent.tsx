import React, { useEffect } from 'react';

const ChatComponent = () => {
  useEffect(() => {
    // Script d'intégration de Tidio Chat
    const script = document.createElement('script');
    script.src = '//code.tidio.co/votre_cl_public_key.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Nettoyage lors du démontage du composant
      document.body.removeChild(script);
    };
  }, []);

  return null; // Ce composant ne rend rien visuellement, il ajoute juste le script Tidio
};

export default ChatComponent;