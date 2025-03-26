import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import UpperButton from '../components/UpperButton';


export const blogPosts = [
  {
    id: 1,
    title: "Comment optimiser votre contenu pour l'algorithme TikTok en 2025",
    excerpt: "Découvrez les dernières mises à jour de l'algorithme TikTok et les meilleures pratiques pour maximiser votre portée organique.",
    date: "12 FÉV 2025",
    category: "tiktok",
    imageUrl: "/images/algo.jpeg",
    author: "Marie Dupont",
    authorRole: "Experte TikTok",
    readTime: "8 min",
    content: `
      <h2>L'algorithme TikTok en 2025 : Les nouvelles règles du jeu</h2>
      <!-- Rest of your content here -->
    `
  },
  {
    id: 2,
    title: "Les 5 erreurs à éviter dans votre stratégie LinkedIn",
    excerpt: "Analyse des erreurs les plus courantes qui limitent votre impact sur LinkedIn et comment les corriger pour des résultats immédiats.",
    date: "5 FÉV 2025",
    category: "linkedin",
    imageUrl: "/images/linkedin.jpeg",
    author: "Thomas Martin",
    authorRole: "Consultant LinkedIn",
    readTime: "10 min",
    content: `
      <h2>Les erreurs fatales qui plombent votre stratégie LinkedIn en 2025</h2>
      <!-- Rest of your content here -->
    `
  },
  {
    id: 3,
    title: "Comment utiliser l'IA pour créer du contenu authentique",
    excerpt: "Guide pratique sur l'utilisation des outils d'IA pour générer du contenu qui reste authentique et connecté à votre audience.",
    date: "28 JAN 2025",
    category: "ia",
    imageUrl: "/images/intelligence.png",
    author: "Sophie Bernard",
    authorRole: "Spécialiste Contenu",
    readTime: "12 min",
    content: `
      <h2>L'IA et l'authenticité : concilier technologie et connexion humaine en 2025</h2>
      <!-- Rest of your content here -->
    `
  },
  {
    id: 4,
    title: "Instagram Reels vs TikTok : quelle plateforme privilégier en 2025 ?",
    excerpt: "Analyse comparative des deux plateformes de vidéo courte et stratégies pour choisir celle qui convient le mieux à votre marque.",
    date: "15 JAN 2025",
    category: "instagram",
    imageUrl: "/images/instavstiktok.jpeg",
    author: "Julie Moreau",
    authorRole: "Stratège Social Media",
    readTime: "15 min",
    content: `
      <h2>Instagram Reels vs TikTok en 2025 : Guide stratégique pour faire le bon choix</h2>
      <!-- Rest of your content here -->
    `
  },
  {
    id: 5,
    title: "Comment construire une stratégie de contenu B2B efficace sur les réseaux sociaux",
    excerpt: "Les clés pour développer une présence B2B pertinente et générer des leads qualifiés via vos contenus sociaux.",
    date: "3 JAN 2025",
    category: "b2b",
    imageUrl: "/images/B2B.jpg",
    author: "Marc Leroy",
    authorRole: "Expert B2B",
    readTime: "11 min",
    content: `
      <h2>Stratégie B2B sur les réseaux sociaux en 2025 : le guide définitif</h2>
      <!-- Rest of your content here -->
    `
  }
];

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  author: string;
  authorRole: string;
  readTime: string;
  content: string;
};



const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]); // Add this line

  useEffect(() => {
    const currentArticle = blogPosts.find(post => post.id === Number(id));
    if (!currentArticle) {
      navigate('/blog');
      return;
    }

    setArticle(currentArticle);

    // Find related posts and set them in state
    const related = blogPosts
      .filter(post => post.category === currentArticle.category && post.id !== currentArticle.id)
      .slice(0, 3);
    setRelatedPosts(related); // Add this line

    window.scrollTo(0, 0);
  }, [id, navigate]);

  if (!article) {
    return null; // Or a loading spinner
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Article Header */}
      <header className="py-24 bg-gradient-to-r from-[#442F8A]/40 to-[#F9AACD]/40 z-20 relative overflow-hidden">
        <div className="absolute -top-20 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[#442F8A] rounded-full text-sm font-medium">
                {article.category}
              </span>
              <span className="text-gray-400">{article.date}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{article.title}</h1>
            <div className="flex items-center">
              <div className="mr-4">
                <h3 className="font-medium">{article.author}</h3>
                <p className="text-sm text-gray-400">{article.authorRole}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg prose-invert"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </main>

      {/* Related Articles */}
  {relatedPosts.length > 0 && (
    <section className="py-16 bg-neutral-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Articles similaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map(post => (
            <article 
              key={post.id}
              className="bg-neutral-800 rounded-xl overflow-hidden hover:bg-neutral-700 transition-colors"
              onClick={() => navigate(`/blog/${post.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-pink-600 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-400">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )}

      <UpperButton />
    </div>
  );
};

export default ArticlePage; 