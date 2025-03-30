import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import UpperButton from '../components/UpperButton';
import Footer from './Footer';

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
    content:
      `<h2>L'algorithme TikTok en 2025 : Les nouvelles règles du jeu</h2>
      <p>TikTok évolue constamment, et avec 2025, de nouvelles règles sont à prendre en compte pour optimiser votre contenu.</p>
      <div class="interactive-image">
        <img src="/images/tiktok-algo.png" alt="Algorithme TikTok" />
        <div class="caption">Interagissez avec les éléments pour comprendre comment l'algorithme fonctionne !</div>
      </div>
      <p>Les changements incluent de nouveaux critères de mise en avant des contenus, plus d'importance donnée à l'engagement, et des fonctionnalités avancées pour les créateurs. Par exemple, les vidéos avec un taux de complétion élevé et des interactions significatives (likes, commentaires, partages) sont plus susceptibles d'être mises en avant.</p>
      <h3>Conseils pratiques pour optimiser votre contenu</h3>
      <ul>
        <li>Utilisez des hashtags pertinents et populaires.</li>
        <li>Publiez régulièrement pour maintenir l'engagement.</li>
        <li>Créez des vidéos courtes et percutantes.</li>
        <li>Engagez-vous avec votre audience en répondant aux commentaires.</li>
      </ul>
      <p>En suivant ces conseils, vous pouvez augmenter vos chances de succès sur TikTok en 2025.</p>`
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
    content:
      `<h2>Les erreurs fatales qui plombent votre stratégie LinkedIn en 2025</h2>
      <p>Éviter ces erreurs permettra de maximiser votre visibilité sur LinkedIn. Certaines pratiques courantes peuvent limiter votre croissance.</p>
      <div class="interactive-image">
        <img src="/images/linkedin-errors.png" alt="Erreurs LinkedIn" />
        <div class="caption">Cliquez sur les icônes pour explorer les erreurs courantes !</div>
      </div>
      <p>LinkedIn est un outil puissant, mais de mauvaises pratiques peuvent nuire à vos résultats. Voici les erreurs à éviter :</p>
      <h3>1. Ne pas personnaliser vos invitations</h3>
      <p>Envoyer des invitations génériques peut donner l'impression que vous ne vous intéressez pas réellement à la personne.</p>
      <h3>2. Publier trop souvent</h3>
      <p>Inonder votre réseau avec trop de publications peut être contre-productif. Privilégiez la qualité à la quantité.</p>
      <h3>3. Ne pas utiliser de visuels</h3>
      <p>Les publications avec des images ou des vidéos attirent plus l'attention et génèrent plus d'engagement.</p>
      <h3>4. Ignorer les messages privés</h3>
      <p>Répondre rapidement aux messages privés montre que vous êtes engagé et professionnel.</p>
      <h3>5. Ne pas optimiser votre profil</h3>
      <p>Un profil complet et bien optimisé est essentiel pour attirer l'attention des recruteurs et des clients potentiels.</p>
      <p>En corrigeant ces erreurs, vous pouvez améliorer votre présence sur LinkedIn et obtenir de meilleurs résultats.</p>`
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
    content:
      `<h2>L'IA et l'authenticité : concilier technologie et connexion humaine en 2025</h2>
      <p>L'intelligence artificielle est de plus en plus utilisée pour générer du contenu. Cependant, il est crucial de garder l'authenticité.</p>
      <div class="interactive-image">
        <img src="/images/ia-content.png" alt="IA et contenu authentique" />
        <div class="caption">Découvrez comment l'IA peut vous aider à garder un ton authentique !</div>
      </div>
      <p>En utilisant des outils IA avancés, vous pouvez personnaliser votre contenu pour qu'il résonne avec votre public. Voici quelques conseils :</p>
      <h3>1. Utilisez l'IA pour la recherche</h3>
      <p>L'IA peut vous aider à trouver des informations pertinentes et à identifier les tendances actuelles.</p>
      <h3>2. Personnalisez votre ton</h3>
      <p>Adaptez le ton de votre contenu pour qu'il soit cohérent avec votre marque et votre audience.</p>
      <h3>3. Testez et ajustez</h3>
      <p>Utilisez des outils d'analyse pour mesurer l'impact de votre contenu et ajustez-le en conséquence.</p>
      <h3>4. Gardez une touche humaine</h3>
      <p>Même avec l'IA, il est important de garder une touche humaine dans votre contenu pour maintenir l'authenticité.</p>
      <p>En suivant ces conseils, vous pouvez créer du contenu authentique et engageant avec l'aide de l'IA.</p>`
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
    content:
      `<h2>Instagram Reels vs TikTok en 2025 : Guide stratégique pour faire le bon choix</h2>
      <p>Les deux plateformes sont dominantes, mais quelles sont les différences et comment choisir celle qui convient le mieux à votre stratégie ?</p>
      <div class="interactive-image">
        <img src="/images/reels-vs-tiktok.png" alt="Reels vs TikTok" />
        <div class="caption">Cliquez pour découvrir la comparaison en temps réel entre les deux plateformes !</div>
      </div>
      <p>Les Reels et TikTok ont leurs propres avantages et inconvénients. Voici quelques points à considérer :</p>
      <h3>1. Démographie</h3>
      <p>TikTok attire un public plus jeune, tandis qu'Instagram a une base d'utilisateurs plus diversifiée.</p>
      <h3>2. Fonctionnalités</h3>
      <p>TikTok offre des fonctionnalités avancées pour les créateurs, tandis qu'Instagram est plus intégré avec d'autres outils de réseaux sociaux.</p>
      <h3>3. Algorithme</h3>
      <p>L'algorithme de TikTok favorise les vidéos courtes et engageantes, tandis qu'Instagram met en avant les contenus de haute qualité.</p>
      <h3>4. Monétisation</h3>
      <p>TikTok offre plus d'opportunités de monétisation pour les créateurs, mais Instagram est en train de rattraper son retard.</p>
      <p>En fonction de vos objectifs et de votre audience cible, vous pouvez choisir la plateforme qui convient le mieux à votre stratégie.</p>`
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
    content:
      `<h2>Stratégie B2B sur les réseaux sociaux en 2025 : le guide définitif</h2>
      <p>Le B2B a évolué avec l'avènement des réseaux sociaux. Voici comment créer une stratégie gagnante.</p>
      <div class="interactive-image">
        <img src="/images/b2b-strategy.png" alt="Stratégie B2B" />
        <div class="caption">Interagissez pour voir des exemples de stratégies efficaces !</div>
      </div>
      <p>En mettant en place une approche basée sur l'engagement et le partage d'informations pertinentes, vous pouvez développer une solide présence B2B. Voici quelques étapes clés :</p>
      <h3>1. Définissez vos objectifs</h3>
      <p>Identifiez ce que vous voulez accomplir avec votre stratégie B2B (génération de leads, notoriété de la marque, etc.).</p>
      <h3>2. Connaissez votre audience</h3>
      <p>Comprenez les besoins et les préférences de votre audience cible pour créer du contenu pertinent.</p>
      <h3>3. Créez du contenu de qualité</h3>
      <p>Publiez des articles, des études de cas, des infographies et des vidéos qui apportent de la valeur à votre audience.</p>
      <h3>4. Engagez-vous avec votre audience</h3>
      <p>Répondez aux commentaires, posez des questions et encouragez les discussions pour créer une communauté engagée.</p>
      <h3>5. Mesurez vos résultats</h3>
      <p>Utilisez des outils d'analyse pour suivre vos performances et ajuster votre stratégie en conséquence.</p>
      <p>En suivant ces étapes, vous pouvez créer une stratégie B2B efficace sur les réseaux sociaux.</p>`
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
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const currentArticle = blogPosts.find(post => post.id === Number(id));
    if (!currentArticle) {
      navigate('/blog');
      return;
    }
    setArticle(currentArticle);
    const related = blogPosts
      .filter(post => post.category === currentArticle.category && post.id !== currentArticle.id)
      .slice(0, 3);
    setRelatedPosts(related);
    window.scrollTo(0, 0);
  }, [id, navigate]);

  if (!article) {
    return null;
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

      <Footer />
      <UpperButton />
    </div>
  );
};

export default ArticlePage;
