import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import UpperButton from '../components/UpperButton';
import emailjs from '@emailjs/browser';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('audit');
  



  const profileImages = [
    '/images/profile1.jpg',
    '/images/profile2.jpg',
    '/images/profile3.jpg',
    '/images/profile4.jpg',
    '/images/profile5.jpg',
    '/images/profile6.jpg'
  ];

  const getRandomProfileImage = () => {
    const randomIndex = Math.floor(Math.random() * profileImages.length);
    return profileImages[randomIndex];
  };


  // Ajoutez un état pour le formulaire de newsletter
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    error: null as string | null
  });
  
  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);
  
  // Fonction pour gérer l'inscription à la newsletter
  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validation basique de l'email
    if (!email || !email.includes('@')) {
      setNewsletterStatus({
        ...newsletterStatus,
        submitted: true,
        success: false,
        error: "Veuillez entrer une adresse email valide."
      });
      return;
    }
    
    setNewsletterStatus({ ...newsletterStatus, submitting: true });
    
    try {
      // Configuration pour EmailJS
      const templateParams = {
        to_email: 'plantiernoe50@gmail.com', // Votre adresse email
        subscriber_email: email,
        subscribe_date: new Date().toLocaleDateString(),
        message: `Nouvelle inscription à la newsletter: ${email}`
      };
      
      // Envoi de l'email avec EmailJS
      await emailjs.send(
        'service_ihrp1by',        // Votre service_id
        'template_cjac7ty',       // Remplacez par votre template_id
        templateParams,
        '0qXgDUu0VDOlxI5qO'       // Votre public key
      );
      
      // Mise à jour du statut en cas de succès
      setNewsletterStatus({
        submitting: false,
        submitted: true,
        success: true,
        error: null
      });
      
      // Réinitialiser le formulaire
      setEmail('');
      
    } catch (error) {
      console.error("EmailJS error:", error);
      setNewsletterStatus({
        submitting: false,
        submitted: true,
        success: false,
        error: "Une erreur est survenue lors de l'inscription. Veuillez réessayer."
      });
    }
  };

// Remplacez votre structure blogPosts actuelle par celle-ci
const blogPosts = [
  {
    id: 1,
    title: "Comment optimiser votre contenu pour l'algorithme TikTok en 2025",
    excerpt: "Découvrez les dernières mises à jour de l'algorithme TikTok et les meilleures pratiques pour maximiser votre portée organique.",
    date: "12 FÉV 2025",
    category: "tiktok",
    subcategory: "algorithme",
    imageUrl: "/images/algo.jpeg",
    author: "Marie Dupont",
    authorImage: "/images/profile1.jpg",
    authorRole: "Experte TikTok",
    readTime: "5 min",
    rubriques: ["Algorithme", "Portée organique", "Tendances"],
    tags: ["#TikTok", "#Algorithme", "#Contenu2025"]
  },
  {
    id: 2,
    title: "Les 5 erreurs à éviter dans votre stratégie LinkedIn",
    excerpt: "Analyse des erreurs les plus courantes qui limitent votre impact sur LinkedIn et comment les corriger pour des résultats immédiats.",
    date: "5 FÉV 2025",
    category: "linkedin",
    subcategory: "strategie",
    imageUrl: "/images/linkedin.jpeg",
    author: "Thomas Martin",
    authorImage: "/images/profile2.jpg",
    authorRole: "Consultant LinkedIn",
    readTime: "7 min",
    rubriques: ["Stratégie B2B", "Profil professionnel", "Networking"],
    tags: ["#LinkedIn", "#ProfilPro", "#ReseautageB2B"]
  },
  {
    id: 3,
    title: "Comment utiliser l'IA pour créer du contenu authentique",
    excerpt: "Guide pratique sur l'utilisation des outils d'IA pour générer du contenu qui reste authentique et connecté à votre audience.",
    date: "28 JAN 2025",
    category: "ia",
    subcategory: "creation-contenu",
    imageUrl: "/images/intelligence.png",
    author: "Sophie Bernard",
    authorImage: "/images/profile3.jpg",
    authorRole: "Spécialiste Contenu",
    readTime: "10 min",
    rubriques: ["Intelligence Artificielle", "Création de contenu", "Authenticité"],
    tags: ["#IA", "#ContentCreation", "#Authenticité"]
  },
  {
    id: 4,
    title: "Instagram Reels vs TikTok : quelle plateforme privilégier en 2025 ?",
    excerpt: "Analyse comparative des deux plateformes de vidéo courte et stratégies pour choisir celle qui convient le mieux à votre marque.",
    date: "15 JAN 2025",
    category: "instagram",
    subcategory: "comparaison",
    imageUrl: "/images/instavstiktok.jpeg",
    author: "Julie Moreau",
    authorImage: "/images/profile4.jpg",
    authorRole: "Stratège Social Media",
    readTime: "8 min",
    rubriques: ["Vidéo courte", "Comparaison", "Stratégie cross-plateforme"],
    tags: ["#Reels", "#TikTok", "#VideoSocial"]
  },
  {
    id: 5,
    title: "Comment construire une stratégie de contenu B2B efficace sur les réseaux sociaux",
    excerpt: "Les clés pour développer une présence B2B pertinente et générer des leads qualifiés via vos contenus sociaux.",
    date: "3 JAN 2025",
    category: "b2b",
    subcategory: "leads",
    imageUrl: "/images/B2B.jpg",
    author: "Marc Leroy",
    authorImage: "/images/profile5.jpg",
    authorRole: "Expert B2B",
    readTime: "12 min",
    rubriques: ["Génération de leads", "Content Marketing", "LinkedIn B2B"],
    tags: ["#B2B", "#SocialSelling", "#ContentStrategy"]
  },
  {
    id: 6,
    title: "L'impact des nouvelles fonctionnalités de Meta sur votre stratégie marketing",
    excerpt: "Tour d'horizon des dernières innovations de Meta et comment les intégrer efficacement dans votre stratégie digitale.",
    date: "20 DÉC 2024",
    category: "meta",
    subcategory: "nouveautes",
    imageUrl: "/images/meta.jpg",
    author: "Alexandre Petit",
    authorImage: "/images/profile6.jpg",
    authorRole: "Consultant Meta",
    readTime: "9 min",
    rubriques: ["Meta", "Instagram", "Facebook"],
    tags: ["#Meta", "#FacebookAds", "#InstaUpdate"]
  }
];



  const categories = [
    { id: 'all', name: 'Tous les articles', icon: '📋' },
    { id: 'tiktok', name: 'TikTok', icon: '🎵' },
    { id: 'instagram', name: 'Instagram', icon: '📸' },
    { id: 'linkedin', name: 'LinkedIn', icon: '💼' },
    { id: 'meta', name: 'Meta', icon: '📱' },
    { id: 'b2b', name: 'B2B', icon: '🤝' },
    { id: 'ia', name: 'Intelligence Artificielle', icon: '🤖' }
  ];
  
  const subcategories = {
    'tiktok': ['algorithme', 'trends', 'ads'],
    'instagram': ['reels', 'stories', 'comparaison'],
    'linkedin': ['profil', 'strategie', 'ads'],
    'meta': ['nouveautes', 'facebook', 'marketplace'],
    'b2b': ['leads', 'content', 'networking'],
    'ia': ['creation-contenu', 'analytics', 'workflow']
  };

// Ajoutez ces états
const [selectedSubcategory, setSelectedSubcategory] = useState('all');
const [currentPage, setCurrentPage] = useState(1);
const postsPerPage = 6;

// Modifiez la fonction de filtrage pour prendre en compte les sous-catégories
const filteredPosts = selectedCategory === 'all' 
  ? blogPosts 
  : selectedSubcategory === 'all'
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts.filter(post => post.category === selectedCategory && post.subcategory === selectedSubcategory);

// Ajoutez cette fonction pour la pagination
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

// Fonction pour changer de page
const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <Navbar />

   {/* Blog Header */}
   <header className={`py-24 bg-gradient-to-r from-[#442F8A]/40 to-[#F9AACD]/40 z-20 relative overflow-hidden`}>
        <div className="absolute -top-20 right-0 w-64 h-64 bg-[#442F8A]  rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
  <div className="container mx-auto px-6 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Notre <span className="text-[#442F8A] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">Blog</span></h1>
      <p className="text-xl max-w-3xl mx-auto">
      Les dernières tendances et stratégies pour optimiser votre présence sur les réseaux sociaux.</p>
    </div>
  </div>
</header>
      
     {/* Categories Navigation */}
<section className="py-8 bg-neutral-900 sticky top-0 z-10">
  <div className="container mx-auto px-6">
    <div className="flex overflow-x-auto pb-4 md:pb-0 md:justify-center space-x-4 no-scrollbar">
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`px-4 py-2 rounded-full text-sm whitespace-nowrap flex items-center text-white font-bold ${
            selectedCategory === category.id 
              ? 'bg-[#442F8A] text-white' 
              : 'bg-neutral-800 hover:bg-neutral-700 transition-colors'
          }`}
        >
          <span className="mr-2">{category.icon}</span>
          {category.name}
        </button>
      ))}
    </div>
  </div>
</section>


  
   {/* Featured Post */}
{filteredPosts.length > 0 && (
  <section className="py-12 bg-black">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="overflow-hidden rounded-lg relative">
          <img 
            src={filteredPosts[0].imageUrl} 
            alt={filteredPosts[0].title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-[#442F8A]  px-3 py-1 rounded-full text-xs font-medium">
            {categories.find(cat => cat.id === filteredPosts[0].category)?.icon} {categories.find(cat => cat.id === filteredPosts[0].category)?.name}
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-400 mb-3">
            <span>{filteredPosts[0].date}</span>
            <span className="mx-2">•</span>
            <span>{filteredPosts[0].readTime} de lecture</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">{filteredPosts[0].title}</h2>
          <p className="text-gray-300 mb-6">{filteredPosts[0].excerpt}</p>
          <div className="flex items-center mb-6">
            <img 
              src={filteredPosts[0].authorImage} 
              alt={filteredPosts[0].author} 
              className="w-10 h-10 rounded-full mr-4 object-cover"
            />
            <div>
              <p className="font-medium">{filteredPosts[0].author}</p>
              <p className="text-sm text-gray-400">{filteredPosts[0].authorRole}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {filteredPosts[0].tags.map((tag, index) => (
              <span key={index} className="bg-neutral-800 px-3 py-1 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
          <a href={`/blog/${filteredPosts[0].id}`} className="bg-[#442F8A]  px-6 py-3 rounded-full text-white font-medium hover:bg-opacity-90 transition-colors inline-block">
            Lire l'article
          </a>
        </div>
      </div>
    </div>
  </section>
)}
      
    {/* Blog Posts Grid */}
<section className="py-12 bg-black">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredPosts.slice(1).map(post => (
        <div key={post.id} className="bg-neutral-900 rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
          <div className="overflow-hidden h-56 relative">
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 bg-[#442F8A]  px-3 py-1 rounded-full text-xs font-medium">
              {categories.find(cat => cat.id === post.category)?.icon} {categories.find(cat => cat.id === post.category)?.name}
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center text-xs text-gray-400 mb-3">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime} de lecture</span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-[#442F8A]  transition-colors">{post.title}</h3>
            <p className="text-gray-300 mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.rubriques.slice(0, 2).map((rubrique, index) => (
                <span key={index} className="bg-neutral-800 px-2 py-1 rounded-md text-xs">
                  {rubrique}
                </span>
              ))}
              {post.rubriques.length > 2 && (
                <span className="bg-neutral-800 px-2 py-1 rounded-md text-xs">
                  +{post.rubriques.length - 2}
                </span>
              )}
            </div>
            <div className="flex items-center mb-6">
              <img 
                src={post.authorImage} 
                alt={post.author} 
                className="w-8 h-8 rounded-full mr-3 object-cover"
              />
              <div>
                <p className="text-sm font-medium">{post.author}</p>
                <p className="text-xs text-gray-400">{post.authorRole}</p>
              </div>
            </div>
            <a href={`/blog/${post.id}`} className="text-[#442F8A]  flex items-center group-hover:underline">
              Lire l'article
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Section Articles Recommandés */}
<section className="py-16 bg-black">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold mb-10 text-center">Articles recommandés</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {blogPosts.slice(0, 4).map(post => (
        <div key={post.id} className="bg-neutral-900 rounded-lg overflow-hidden group">
          <div className="overflow-hidden h-40 relative">
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center text-xs text-gray-400 mb-2">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
            <h3 className="text-base font-bold mb-2 group-hover:text-[#442F8A]  line-clamp-2">{post.title}</h3>
            <a href={`/blog/${post.id}`} className="text-[#442F8A]  text-sm flex items-center mt-2 group-hover:underline">
              Lire
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      
      {/* Newsletter Section - MODIFIÉE */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-gradient-to-r from-[#442F8A] /40 to-[#F9AACD]/40 rounded-lg p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Restez à jour avec nos derniers articles</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">Inscrivez-vous à notre newsletter pour recevoir les dernières tendances et conseils directement dans votre boîte mail.</p>
              
              {newsletterStatus.submitted && newsletterStatus.success ? (
                <div className="bg-green-900/30 border border-green-500 rounded-lg p-6 text-center max-w-md mx-auto">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Inscription réussie !</h3>
                  <p className="text-gray-300">
                    Merci pour votre inscription. Vous recevrez bientôt nos dernières actualités.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse email" 
                    className="px-4 py-3 rounded-full bg-white text-black flex-grow"
                    required
                  />
                  <button 
                    type="submit"
                    disabled={newsletterStatus.submitting}
                    className={`text-white px-6 py-3 rounded-full font-medium transition-colors ${
                      newsletterStatus.submitting 
                        ? 'bg-neutral-600 cursor-not-allowed' 
                        : 'bg-black hover:bg-neutral-800'
                    }`}
                  >
                    {newsletterStatus.submitting ? 'Inscription...' : 'S\'inscrire'}
                  </button>
                </form>
              )}
              
              {/* Message d'erreur */}
              {newsletterStatus.submitted && !newsletterStatus.success && newsletterStatus.error && (
                <div className="mt-4 bg-red-900/30 border border-red-500 rounded-lg p-4 max-w-md mx-auto">
                  <p className="text-red-500">{newsletterStatus.error}</p>
                </div>
              )}
            </div>
          </div>
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
                <li><a href="#" className="hover:text-[#442F8A]  transition-colors">Consulting</a></li>
                <li><a href="#" className="hover:text-[#442F8A]  transition-colors">Coaching</a></li>
                <li><a href="#" className="hover:text-[#442F8A]  transition-colors">Formation</a></li>
                <li><a href="#" className="hover:text-[#442F8A]  transition-colors">Audit</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Liens Utiles</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#442F8A]  transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#442F8A]  transition-colors">À Propos</a></li>
                <li><a href="#" className="hover:text-[#442F8A]  transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[#442F8A]  transition-colors">Mentions Légales</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contact@motsdemaitre.fr</li>
                <li>+33 1 23 45 67 89</li>
                <li>
                  <div className="flex space-x-4 mt-4">
                    <a href="#" className="hover:text-[#442F8A]  transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                      </svg>
                    </a>
                    <a href="#" className="hover:text-[#442F8A]  transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="hover:text-[#442F8A]  transition-colors">
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

export default BlogPage;