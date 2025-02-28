import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "Comment optimiser votre contenu pour l'algorithme TikTok en 2025",
      excerpt: "Découvrez les dernières mises à jour de l'algorithme TikTok et les meilleures pratiques pour maximiser votre portée organique.",
      date: "12 FÉV 2025",
      category: "tiktok",
      imageUrl: "/images/algo.jpeg",
      author: "Marie Dupont",
      authorRole: "Experte TikTok"
    },
    {
      id: 2,
      title: "Les 5 erreurs à éviter dans votre stratégie LinkedIn",
      excerpt: "Analyse des erreurs les plus courantes qui limitent votre impact sur LinkedIn et comment les corriger pour des résultats immédiats.",
      date: "5 FÉV 2025",
      category: "linkedin",
      imageUrl: "/images/linkedin.jpeg",
      author: "Thomas Martin",
      authorRole: "Consultant LinkedIn"
    },
    {
      id: 3,
      title: "Comment utiliser l'IA pour créer du contenu authentique",
      excerpt: "Guide pratique sur l'utilisation des outils d'IA pour générer du contenu qui reste authentique et connecté à votre audience.",
      date: "28 JAN 2025",
      category: "ia",
      imageUrl: "/images/intelligence.png",
      author: "Sophie Bernard",
      authorRole: "Spécialiste Contenu"
    },
    {
      id: 4,
      title: "Instagram Reels vs TikTok : quelle plateforme privilégier en 2025 ?",
      excerpt: "Analyse comparative des deux plateformes de vidéo courte et stratégies pour choisir celle qui convient le mieux à votre marque.",
      date: "15 JAN 2025",
      category: "instagram",
      imageUrl: "/images/instavstiktok.jpeg",
      author: "Julie Moreau",
      authorRole: "Stratège Social Media"
    },
    {
      id: 5,
      title: "Comment construire une stratégie de contenu B2B efficace sur les réseaux sociaux",
      excerpt: "Les clés pour développer une présence B2B pertinente et générer des leads qualifiés via vos contenus sociaux.",
      date: "3 JAN 2025",
      category: "b2b",
      imageUrl: "/images/B2B.jpg",
      author: "Marc Leroy",
      authorRole: "Expert B2B"
    },
    {
      id: 6,
      title: "L'impact des nouvelles fonctionnalités de Meta sur votre stratégie marketing",
      excerpt: "Tour d'horizon des dernières innovations de Meta et comment les intégrer efficacement dans votre stratégie digitale.",
      date: "20 DÉC 2024",
      category: "meta",
      imageUrl: "/images/meta.jpg",
      author: "Alexandre Petit",
      authorRole: "Consultant Meta"
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les articles' },
    { id: 'tiktok', name: 'TikTok' },
    { id: 'instagram', name: 'Instagram' },
    { id: 'linkedin', name: 'LinkedIn' },
    { id: 'meta', name: 'Meta' },
    { id: 'b2b', name: 'B2B' },
    { id: 'ia', name: 'Intelligence Artificielle' }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation - simplified, would import from a shared component */}
      <Navbar />

      {/* Blog Header */}
      <header className="py-16 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">Les dernières tendances et stratégies pour optimiser votre présence sur les réseaux sociaux.</p>
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
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                  selectedCategory === category.id 
                    ? 'bg-pink-600 text-white' 
                    : 'bg-neutral-800 hover:bg-neutral-700 transition-colors'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Post (first post) */}
      {filteredPosts.length > 0 && (
        <section className="py-12 bg-black">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={filteredPosts[0].imageUrl} 
                  alt={filteredPosts[0].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-pink-500 mb-2">{filteredPosts[0].date}</p>
                <h2 className="text-3xl font-bold mb-4">{filteredPosts[0].title}</h2>
                <p className="text-gray-300 mb-6">{filteredPosts[0].excerpt}</p>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-gray-600 mr-4"></div>
                  <div>
                    <p className="font-medium">{filteredPosts[0].author}</p>
                    <p className="text-sm text-gray-400">{filteredPosts[0].authorRole}</p>
                  </div>
                </div>
                <a href={`/blog/${filteredPosts[0].id}`} className="bg-pink-600 px-6 py-3 rounded-full text-white font-medium hover:bg-pink-700 transition-colors inline-block">
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
              <div key={post.id} className="bg-neutral-900 rounded-lg overflow-hidden group">
                <div className="overflow-hidden h-56">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-pink-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-pink-500 transition-colors">{post.title}</h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 rounded-full bg-gray-600 mr-3"></div>
                    <div>
                      <p className="text-sm font-medium">{post.author}</p>
                      <p className="text-xs text-gray-400">{post.authorRole}</p>
                    </div>
                  </div>
                  <a href={`/blog/${post.id}`} className="text-pink-500 flex items-center group-hover:underline">
                    Lire l'article
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center">1</button>
              <button className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center">2</button>
              <button className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center">3</button>
              <span className="w-10 h-10 flex items-center justify-center">...</span>
              <button className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center">8</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-lg p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Restez à jour avec nos derniers articles</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">Inscrivez-vous à notre newsletter pour recevoir les dernières tendances et conseils directement dans votre boîte mail.</p>
              <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="px-4 py-3 rounded-full bg-white text-black flex-grow"
                />
                <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer - would be a shared component */}
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
    </div>
  );
};

export default BlogPage;