import React from 'react';
import Navbar from '../components/Navbar';
import UpperButton from '../components/UpperButton';
import Footer from './Footer';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      
      {/* Header */}
      <header className={`py-24 bg-gradient-to-r from-[#442F8A]/40 to-[#F9AACD]/40 z-20 relative overflow-hidden`}>
        <div className="absolute -top-20 right-0 w-64 h-64 bg-[#442F8A] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Mentions <span className="text-[#442F8A] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">Légales</span></h1>
            <p className="text-xl max-w-3xl mx-auto">
              Informations juridiques concernant Mots de Maître et l'utilisation de notre site web et services.
            </p>
          </div>
        </div>
      </header>
      
      {/* Informations Légales */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Identité */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Identité de la <span className="text-[#442F8A] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">Société</span></h2>
              <p className="text-gray-300 mb-6">
                <strong>Raison sociale :</strong> Mots de Maître 
              </p>
              <p className="text-gray-300 mb-6">
                <strong>Statut juridique :</strong> Société à Responsabilité Limitée
              </p>
              <p className="text-gray-300 mb-6">
                <strong>Capital social :</strong> 1000 €
              </p>
              <p className="text-gray-300 mb-6">
                <strong>Siège social :</strong>  2 rue Jacques Lemercier, 31000, Toulouse 
              </p>
              <p className="text-gray-300 mb-6">
                <strong>SIRET :</strong> 123 456 789 00012
              </p>
          
              <p className="text-gray-300 mb-6">
                <strong>Directeur de la publication :</strong> Cosette Fleurisson, Fondatrice & Directrice
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nous <span className="text-[#442F8A] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">Contacter</span></h2>
              <p className="text-gray-300 mb-6">
                <strong>Adresse :</strong>  2 rue Jacques Lemercier, 31000, Toulouse 
              </p>
              <p className="text-gray-300 mb-6">
                <strong>Téléphone :</strong> +33 6 85 30 00 40
              </p>
              <p className="text-gray-300 mb-6">
                <strong>Email :</strong> motsdemaitre@gmail.com
              </p>
              <p className="text-gray-300 mb-6">
                <strong>Formulaire de contact :</strong> Disponible sur notre page <a href="/contact" className="text-[#442F8A] hover:underline">Contact</a>
              </p>
              <p className="text-gray-300">
                Nous nous engageons à répondre à toutes les demandes dans un délai de 48 heures ouvrées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hébergement et Données Personnelles */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Hébergement */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Hébergement du <span className="text-[#442F8A] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">Site</span></h2>
              <p className="text-gray-300 mb-6">
                <strong>Hébergeur :</strong> OVH SAS
              </p>
              <p className="text-gray-300 mb-6">
                <strong>Adresse :</strong> 3 rue Victor Jacquemont, 37200, Tours
              </p>
              <p className="text-gray-300 mb-6">
                <strong>Téléphone :</strong> +33 (0)6 66 16 77 88
              </p>
              <p className="text-gray-300 mb-6">
                <strong>Site internet :</strong> <a href="https://www.ovh.com" target="_blank" rel="noopener noreferrer" className="text-[#442F8A] hover:underline">www.ovh.com</a>
              </p>
            </div>

            {/* Données Personnelles */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Données <span className="text-[#442F8A] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">Personnelles</span></h2>
              <p className="text-gray-300 mb-6">
                Conformément au Règlement Général sur la Protection des Données (RGPD), Mots de Maître s'engage à protéger la confidentialité, la sécurité et l'intégrité des données personnelles de ses utilisateurs.
              </p>
              <p className="text-gray-300 mb-6">
                Les informations collectées sur ce site sont utilisées uniquement dans le cadre des services proposés par Mots de Maître et ne sont en aucun cas cédées à des tiers sans votre consentement explicite.
              </p>
           
              <p className="text-gray-300">
                <strong>Contact DPO :</strong> motsdemaitre@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Propriété Intellectuelle et Cookies */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Propriété Intellectuelle */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Propriété <span className="text-[#442F8A] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">Intellectuelle</span></h2>
              <p className="text-gray-300 mb-6">
                L'ensemble des éléments constituant le site www.motsdemaitre.fr (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, logos, marques, etc.) est la propriété exclusive de Mots de Maître ou de ses partenaires.
              </p>
              <p className="text-gray-300 mb-6">
                Ces éléments sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="text-gray-300 mb-6">
                Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, sans l'accord préalable et écrit de Mots de Maître, est strictement interdite et constituerait une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Gestion des <span className="text-[#442F8A] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">Cookies</span></h2>
              <p className="text-gray-300 mb-6">
                Le site www.motsdemaitre.fr utilise des cookies pour améliorer l'expérience utilisateur et analyser la fréquentation du site.
              </p>
              <p className="text-gray-300 mb-6">
                Les cookies sont de petits fichiers texte stockés sur votre appareil qui nous permettent d'analyser la façon dont les utilisateurs naviguent sur notre site.
              </p>
              <p className="text-gray-300 mb-6">
                Vous pouvez à tout moment choisir de désactiver ces cookies en paramétrant votre navigateur ou en utilisant notre panneau de gestion des cookies accessible depuis notre site.
              </p>
            
            </div>
          </div>
        </div>
      </section>
      
      {/* Conditions d'Utilisation et Limitation de Responsabilité */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Conditions d'Utilisation */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Conditions <span className="text-[#442F8A] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">d'Utilisation</span></h2>
              <p className="text-gray-300 mb-6">
                L'utilisation du site www.motsdemaitre.fr implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-après.
              </p>
              <p className="text-gray-300 mb-6">
                Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment. Les utilisateurs sont donc invités à les consulter de manière régulière.
              </p>
          
            </div>

            {/* Limitation de Responsabilité */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Limitation de <span className="text-[#442F8A] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">Responsabilité</span></h2>
              <p className="text-gray-300 mb-6">
                Mots de Maître ne pourra être tenue responsable des dommages directs ou indirects résultant de l'accès au site www.motsdemaitre.fr ou de l'utilisation de son contenu.
              </p>
              <p className="text-gray-300 mb-6">
                Le site peut contenir des liens vers d'autres sites web. Mots de Maître n'exerce aucun contrôle sur ces sites et n'assume aucune responsabilité quant à leur contenu.
              </p>
              <p className="text-gray-300 mb-6">
                Mots de Maître s'efforce d'assurer la disponibilité du site 24 heures sur 24 et 7 jours sur 7, mais ne peut être tenue responsable en cas d'indisponibilité du site, pour quelque cause que ce soit.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Loi Applicable et Médiation */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Loi Applicable */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Loi <span className="text-[#442F8A] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">Applicable</span></h2>
              <p className="text-gray-300 mb-6">
                Les présentes mentions légales sont régies par la loi française.
              </p>
              <p className="text-gray-300 mb-6">
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>
              <p className="text-gray-300">
                Les présentes conditions sont soumises à la loi française et à la juridiction des tribunaux de Paris, sous réserve d'une attribution de compétence spécifique découlant d'un texte de loi ou réglementaire particulier.
              </p>
            </div>

            {/* Médiation */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Règlement des <span className="text-[#442F8A] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">Litiges</span></h2>
              <p className="text-gray-300 mb-6">
                Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges, Mots de Maître adhère au Service du Médiateur de la consommation.
              </p>
              <p className="text-gray-300 mb-6">
                Après démarche préalable écrite des consommateurs vis-à-vis de Mots de Maître, le Service du Médiateur peut être saisi pour tout litige de consommation dont le règlement n'aurait pas abouti.
              </p>
              <p className="text-gray-300">
                <strong>Pour contacter le Médiateur :</strong> <a href="https://www.mediation-conso.fr" target="_blank" rel="noopener noreferrer" className="text-[#442F8A] hover:underline">www.mediation-conso.fr</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Droit d'Accès et Crédits */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Droit d'Accès */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Droit <span className="text-[#442F8A] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">d'Accès</span></h2>
              <p className="text-gray-300 mb-6">
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Européen n°2016/679/UE du 27 avril 2016, vous bénéficiez d'un droit d'accès, de rectification, de portabilité et d'effacement de vos données ou encore de limitation du traitement.
              </p>
              <p className="text-gray-300 mb-6">
                Vous pouvez également, pour des motifs légitimes, vous opposer au traitement des données vous concernant.
              </p>
              <p className="text-gray-300">
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : dpo@motsdemaitre.fr ou par courrier postal à l'adresse du siège social indiquée ci-dessus.
              </p>
            </div>

            {/* Crédits */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6"><span className="text-[#442F8A] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">Crédits</span></h2>
              <p className="text-gray-300 mb-6">
                <strong>Conception et développement :</strong> Mots de Maître 
              </p>
              <p className="text-gray-300 mb-6">
                <strong>Photographies :</strong> Droits réservés - Mots de Maître
              </p>
              <p className="text-gray-300 mb-6">
                <strong>Icônes :</strong> Flaticon, Font Awesome
              </p>
              <p className="text-gray-300">
                <strong>Date de dernière mise à jour :</strong> 30 mars 2025
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className={`py-24 bg-gradient-to-r from-[#442F8A]/40 to-[#F9AACD]/40 z-20 relative overflow-hidden`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Des questions sur nos mentions légales ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions concernant nos services et nos conditions d'utilisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-pink-900 px-8 py-3 rounded-full text-lg font-medium hover:bg-neutral-200 transition-colors">
              Nous Contacter
            </a>
           
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
      <UpperButton />
    </div>
  );
};

export default MentionsLegales;