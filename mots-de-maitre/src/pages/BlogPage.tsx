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

// ...existing code...

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
    tags: ["#TikTok", "#Algorithme", "#Contenu2025"],
    content: `
      <h2>Les derniers changements de l'algorithme TikTok en 2025</h2>
      <p>TikTok a considérablement modifié son algorithme ce trimestre, privilégiant désormais la rétention et l'engagement profond plutôt que simplement les vues. D'après les dernières analyses, les vidéos qui retiennent l'attention des utilisateurs jusqu'à la fin sont favorisées à 78% par rapport à celles qui génèrent des interactions rapides mais superficielles.</p>
      
      <h3>Les facteurs clés du nouvel algorithme</h3>
      <ul>
        <li><strong>Temps de visionnage complet</strong> : L'algorithme favorise les vidéos regardées entièrement plutôt que celles simplement survolées</li>
        <li><strong>Engagement qualitatif</strong> : Les commentaires détaillés et les partages ont plus d'impact que les simples likes</li>
        <li><strong>Contenu de niche</strong> : TikTok pousse davantage les créateurs spécialisés dans un domaine précis</li>
        <li><strong>Régularité de publication</strong> : Un calendrier de publication constant est maintenant un facteur déterminant</li>
      </ul>
      
      <h3>Stratégies à adopter immédiatement</h3>
      <p>Pour maximiser votre visibilité avec ces nouveaux paramètres, concentrez-vous sur la création de contenu qui incite le spectateur à regarder jusqu'à la fin. Les 3 premières secondes sont cruciales, mais la rétention complète est désormais le Saint Graal de l'algorithme.</p>
      
      <p>Les analyses récentes montrent que les vidéos utilisant des transitions fluides, posant des questions ouvertes et promettant une résolution à la fin obtiennent en moyenne 43% plus de vues complètes.</p>
      
      <h3>L'importance des hashtags en 2025</h3>
      <p>Contrairement aux idées reçues, TikTok a renforcé l'importance des hashtags spécifiques. Utilisez 3 à 5 hashtags ultra-ciblés plutôt qu'une dizaine de génériques pour une meilleure performance algorithmique.</p>
      
      <h2>Comment analyser vos performances</h2>
      <p>Utilisez le tableau de bord Analytics amélioré de TikTok pour suivre votre taux de complétion de visionnage, votre taux de conversion en abonnés et votre score d'engagement qualitatif, trois métriques devenues essentielles depuis le dernier trimestre.</p>
    `
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
    tags: ["#LinkedIn", "#ProfilPro", "#ReseautageB2B"],
    content: `
      <h2>Pourquoi votre stratégie LinkedIn échoue</h2>
      <p>LinkedIn a dépassé les 1,2 milliard d'utilisateurs en 2025, et pourtant la plupart des professionnels continuent de commettre des erreurs fondamentales qui limitent drastiquement leur influence sur la plateforme.</p>
      
      <h3>Erreur n°1 : Négliger l'optimisation SEO de votre profil</h3>
      <p>Depuis la mise à jour de l'algorithme LinkedIn "Horizon" de décembre 2024, votre profil doit contenir des mots-clés stratégiques dans des sections spécifiques. Nos analyses montrent que les profils optimisés pour le SEO LinkedIn apparaissent 4,7 fois plus souvent dans les recherches internes.</p>
      <p>La section "À propos" doit désormais contenir vos mots-clés principaux dans les 220 premiers caractères, et votre titre doit inclure votre proposition de valeur unique plutôt qu'un simple intitulé de poste.</p>
      
      <h3>Erreur n°2 : Publication sans stratégie de contenu cohérente</h3>
      <p>Les statistiques récentes révèlent que 78% des utilisateurs publient du contenu sans aucune cohérence thématique, ce qui fragmente leur positionnement. La nouvelle matrice d'autorité de LinkedIn favorise les créateurs qui maintiennent une cohérence thématique sur au moins 70% de leurs publications.</p>
      
      <h3>Erreur n°3 : Ignorer les nouvelles fonctionnalités</h3>
      <p>Les utilisateurs qui exploitent activement les Newsletters LinkedIn et les fonctionnalités audio récemment introduites connaissent une croissance d'audience de 320% supérieure à ceux qui se limitent aux formats traditionnels.</p>
      
      <h3>Erreur n°4 : Réseau de connexions non stratégique</h3>
      <p>L'algorithme de LinkedIn favorise désormais la qualité d'engagement de votre réseau plutôt que sa taille. Un réseau de 300 connexions pertinentes et actives aura plus d'impact qu'un réseau de 3000 connexions passives.</p>
      
      <h3>Erreur n°5 : Négliger l'analyse des données</h3>
      <p>Le nouveau tableau de bord Analytics de LinkedIn offre des insights précieux sur les heures optimales de publication et les formats préférés de votre audience. Les utilisateurs qui ajustent leur stratégie en fonction de ces données voient leur taux d'engagement augmenter de 46% en moyenne.</p>
      
      <h2>Plan d'action correctif</h2>
      <p>Commencez par effectuer un audit de votre profil selon les nouveaux critères d'optimisation 2025, puis établissez un calendrier éditorial thématique sur 90 jours pour renforcer votre positionnement d'expert.</p>
    `
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
    tags: ["#IA", "#ContentCreation", "#Authenticité"],
    content: `
      <h2>L'IA et l'authenticité : un paradoxe résolu</h2>
      <p>Avec la sortie récente des modèles GPT-5 et Claude 3 Opus, l'IA générative a atteint un niveau de sophistication qui soulève des questions fondamentales sur l'authenticité du contenu. Pourtant, les créateurs les plus influents utilisent désormais l'IA comme amplificateur d'authenticité plutôt que comme substitut.</p>
      
      <h3>Les nouveaux outils d'IA pour le contenu en 2025</h3>
      <p>La dernière génération d'outils comme ContentForge AI et NarrativePulse permettent désormais d'intégrer votre ton de voix personnel et votre historique de contenu pour générer des suggestions qui restent fidèles à votre identité de marque.</p>
      
      <h3>Le framework A.R.T pour un contenu IA authentique</h3>
      <h4>A - Augmentation (et non remplacement)</h4>
      <p>Utilisez l'IA pour amplifier votre expertise plutôt que pour la remplacer. Les études récentes montrent que le contenu le plus performant utilise l'IA pour la recherche et la structuration, mais conserve l'expertise humaine pour les insights et les analyses.</p>
      
      <h4>R - Révision stratégique</h4>
      <p>La technique du "double filtre" consistant à faire réviser le contenu généré par l'IA à travers votre propre expertise puis à travers le prisme des besoins de votre audience a démontré une augmentation de 67% de l'engagement.</p>
      
      <h4>T - Transparence dosée</h4>
      <p>Les analyses de MarketingSense révèlent que mentionner l'utilisation de l'IA dans votre processus créatif (sans nécessairement détailler chaque élément généré) augmente la confiance de l'audience de 23%.</p>
      
      <h3>Étude de cas : le succès de MindfulTech</h3>
      <p>La startup MindfulTech a réussi à augmenter son engagement de 340% en trois mois en utilisant l'IA pour analyser les questions récurrentes de sa communauté, tout en laissant ses experts humains apporter les réponses personnalisées et nuancées.</p>
      
      <h2>Personnalisation à grande échelle</h2>
      <p>Les nouveaux algorithmes d'IA permettent désormais de créer des variantes personnalisées de votre contenu pour différents segments d'audience tout en maintenant votre voix authentique - une stratégie adoptée par 78% des marques ayant connu la plus forte croissance en 2024.</p>
      
      <h3>Les limites à ne pas franchir</h3>
      <p>Malgré ces avancées, certaines zones restent l'apanage de l'humain : le storytelling émotionnel, les prises de position sur des sujets sensibles et l'établissement de connexions authentiques lors des interactions directes avec votre communauté.</p>
    `
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
    tags: ["#Reels", "#TikTok", "#VideoSocial"],
    content: `
      <h2>Le paysage des vidéos courtes en 2025</h2>
      <p>La rivalité entre Instagram Reels et TikTok a atteint son paroxysme en 2025, avec des innovations majeures des deux côtés. Selon les dernières données de SocialInsight, TikTok maintient sa position de leader avec 1,9 milliard d'utilisateurs actifs mensuels, tandis qu'Instagram Reels a considérablement réduit l'écart avec 1,7 milliard d'utilisateurs réguliers.</p>
      
      <h3>Démographie et engagement : les chiffres qui changent tout</h3>
      <p>L'évolution démographique sur ces plateformes est peut-être le changement le plus significatif de 2025 :</p>
      <ul>
        <li><strong>TikTok</strong> : La plateforme a considérablement vieilli, avec une croissance de 47% dans la tranche des 35-55 ans</li>
        <li><strong>Instagram Reels</strong> : A renforcé sa position auprès des 18-34 ans et connaît une croissance fulgurante chez les professionnels</li>
      </ul>
      
      <p>Le taux d'engagement moyen sur TikTok reste supérieur (5,7% contre 4,3% pour Reels), mais Instagram offre désormais un meilleur taux de conversion pour les marques (2,1% contre 1,7% pour TikTok).</p>
      
      <h3>Innovations technologiques 2025</h3>
      <h4>TikTok :</h4>
      <ul>
        <li>Intégration de la réalité augmentée interactive</li>
        <li>Nouvelles options de monétisation directe</li>
        <li>Outils de collaboration avancés entre créateurs</li>
      </ul>
      
      <h4>Instagram Reels :</h4>
      <ul>
        <li>Intégration complète avec la suite d'outils Meta pour les entreprises</li>
        <li>Fonctionnalités de shopping immersif améliorées</li>
        <li>Meilleure interopérabilité avec Facebook et WhatsApp</li>
      </ul>
      
      <h3>Quelle plateforme pour quel objectif ?</h3>
      <p>Le choix entre Reels et TikTok dépend désormais moins de votre secteur d'activité que de vos objectifs spécifiques :</p>
      
      <h4>Privilégiez TikTok pour :</h4>
      <ul>
        <li>Développer votre notoriété de marque auprès d'une audience diversifiée</li>
        <li>Expérimenter des formats créatifs innovants</li>
        <li>Toucher les niches très spécifiques grâce à l'algorithme ultra-personnalisé</li>
      </ul>
      
      <h4>Privilégiez Instagram Reels pour :</h4>
      <ul>
        <li>Convertir une audience déjà engagée sur Instagram</li>
        <li>Bénéficier de l'écosystème Meta pour le retargeting</li>
        <li>Développer une stratégie B2B ou luxe</li>
      </ul>
      
      <h3>La stratégie cross-plateforme optimisée</h3>
      <p>La tendance dominante de 2025 est l'approche "création native, distribution adaptée" qui consiste à créer du contenu spécifiquement pour chaque plateforme tout en maintenant une cohérence de marque. Les marques adoptant cette approche observent un engagement supérieur de 37% par rapport à celles qui répliquent le même contenu.</p>
    `
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
    tags: ["#B2B", "#SocialSelling", "#ContentStrategy"],
    content: `
      <h2>Repenser le B2B sur les réseaux sociaux en 2025</h2>
      <p>Le paradigme du marketing B2B sur les réseaux sociaux a radicalement évolué, avec 72% des décisions d'achat B2B désormais influencées par les contenus consultés sur les plateformes sociales avant même le premier contact commercial.</p>
      
      <h3>La matrice de contenu B2B performante</h3>
      <p>Les dernières analyses de B2B Marketing Institute révèlent une formule précise pour un mix de contenu optimal :</p>
      <ul>
        <li><strong>40% de contenu éducatif</strong> : Partage d'expertise et de connaissances sectorielles</li>
        <li><strong>25% de contenu inspirant</strong> : Success stories et études de cas</li>
        <li><strong>20% de contenu conversationnel</strong> : Questions ouvertes et sondages</li>
        <li><strong>15% de contenu promotionnel</strong> : Présentation directe de solutions</li>
      </ul>
      
      <h3>LinkedIn : le hub central du B2B</h3>
      <p>Avec l'introduction de LinkedIn Business Suite en 2025, la plateforme a consolidé sa position de leader pour le B2B. Les nouvelles fonctionnalités de qualification de leads automatisée et d'intégration CRM native permettent désormais de suivre le parcours complet d'un prospect, du premier engagement sur un contenu jusqu'à la conversion.</p>
      
      <h4>Contenu à privilégier sur LinkedIn en 2025 :</h4>
      <ul>
        <li>Newsletters thématiques (taux d'ouverture moyen de 42% contre 23% pour les emails)</li>
        <li>Articles de fond avec données exclusives</li>
        <li>Vidéos explicatives de 2 à 3 minutes</li>
        <li>Documents PDF interactifs (nouveau format avec engagement 3x supérieur)</li>
      </ul>
      
      <h3>Twitter/X : le nouveau terrain de prospection B2B</h3>
      <p>La transformation de Twitter en X a bouleversé son utilisation B2B. La fonctionnalité "Industry Networks" lancée en Q1 2025 permet désormais de cibler précisément les décideurs par secteur et fonction, transformant la plateforme en outil de prospection ultra-ciblé.</p>
      
      <h3>Le format vidéo court en B2B</h3>
      <p>Contrairement aux idées reçues, les vidéos courtes performent exceptionnellement bien en B2B, avec un taux d'engagement supérieur de 54% à celui des publications texte. La clé : des formats de 30 à 60 secondes axés sur une problématique business unique et sa solution.</p>
      
      <h3>Mesurer efficacement le ROI de votre stratégie sociale B2B</h3>
      <p>Les métriques traditionnelles (likes, partages) sont désormais secondaires face aux nouveaux KPIs B2B :</p>
      <ul>
        <li>Taux de conversion des visiteurs sociaux en leads qualifiés</li>
        <li>Réduction du cycle de vente pour les prospects issus des réseaux sociaux</li>
        <li>Score d'engagement des décideurs (vs engagement général)</li>
        <li>Impact sur la valeur moyenne des contrats signés</li>
      </ul>
      
      <h2>Le cas pratique SaaSTech</h2>
      <p>L'entreprise SaaS B2B SaaSTech a transformé sa présence sociale en machine à leads en appliquant une stratégie de contenu segmentée par persona et par étape du parcours d'achat, résultant en une augmentation de 187% de ses leads qualifiés en seulement un trimestre.</p>
    `
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
    tags: ["#Meta", "#FacebookAds", "#InstaUpdate"],
    content: `
      <h2>Les innovations Meta qui redéfinissent le marketing digital</h2>
      <p>Le dernier trimestre 2024 a vu Meta déployer sa plus importante mise à jour depuis sa refonte, avec l'introduction de l'écosystème "MetaVerse Commerce" et une refonte complète de ses outils publicitaires. Ces changements ont des implications profondes pour toutes les marques présentes sur Facebook, Instagram et WhatsApp.</p>
      
      <h3>MetaVerse Commerce : la révolution shopping</h3>
      <p>Lancé en novembre 2024, MetaVerse Commerce combine réalité augmentée et intelligence artificielle pour transformer l'expérience d'achat social. Les marques peuvent désormais créer des boutiques immersives où les utilisateurs peuvent :</p>
      <ul>
        <li>"Essayer" virtuellement les produits via leur avatar personnalisé</li>
        <li>Participer à des événements shopping en direct avec interaction 3D</li>
        <li>Bénéficier de recommandations ultra-personnalisées basées sur leurs préférences comportementales</li>
      </ul>
      
      <p>Les premiers tests montrent une augmentation moyenne de 67% du taux de conversion pour les marques ayant adopté cette technologie.</p>
      
      <h3>Meta Business Suite 2.0</h3>
      <p>La refonte complète de Meta Business Suite introduit plusieurs outils critiques :</p>
      
      <h4>1. Intelligence des Audiences</h4>
      <p>L'IA prédictive de Meta peut désormais anticiper les tendances d'achat de vos audiences jusqu'à 30 jours à l'avance, permettant d'ajuster votre contenu et vos promotions en conséquence.</p>
      
      <h4>2. Attribution Multi-Touch Avancée</h4>
      <p>Le nouveau modèle d'attribution considère jusqu'à 28 points de contact sur l'ensemble des plateformes Meta et partenaires, offrant une compréhension sans précédent du parcours client.</p>
      
      <h4>3. Gestionnaire de Créativités Dynamiques</h4>
      <p>Cette fonctionnalité teste automatiquement des milliers de variations créatives et affine votre message en temps réel en fonction des performances.</p>
      
      <h3>Nouvelles spécifications publicitaires</h3>
      <p>Meta a également introduit de nouveaux formats publicitaires qui surpassent significativement les formats traditionnels :</p>
      <ul>
        <li><strong>Immersive Canvas Ads</strong> : Expériences plein écran interactives (CTR moyen supérieur de 34%)</li>
        <li><strong>Dynamic Audio Ads</strong> : Publicités audio sur Facebook et Instagram qui s'adaptent aux habitudes d'écoute</li>
        <li><strong>Story Sequence</strong> : Séries de Stories interconnectées qui guident l'utilisateur dans un parcours narratif</li>
      </ul>
      
      <h3>Stratégie d'intégration des nouvelles fonctionnalités</h3>
      <p>Pour tirer pleinement parti de ces innovations, suivez cette approche en trois phases :</p>
      
      <h4>Phase 1 : Audit et préparation technique</h4>
      <p>Vérifiez la compatibilité de votre catalogue produits avec MetaVerse Commerce et mettez à jour vos pixels Meta avec les nouveaux événements de conversion.</p>
      
      <h4>Phase 2 : Expérimentation progressive</h4>
      <p>Testez les nouvelles fonctionnalités sur 20% de votre budget marketing pendant au moins 14 jours avant de les déployer à grande échelle.</p>
      
      <h4>Phase 3 : Optimisation cross-plateforme</h4>
      <p>Assurez-vous que votre stratégie reste cohérente entre Facebook, Instagram et WhatsApp tout en exploitant les spécificités de chaque plateforme.</p>
    `
  },
  {
    id: 7,
    title: "Les tendances du marketing d'influence pour 2025",
    excerpt: "Découvrez comment le paysage du marketing d'influence évolue et comment adapter votre stratégie pour rester pertinent.",
    date: "15 DÉC 2024",
    category: "influence",
    subcategory: "tendances",
    imageUrl: "/images/influence.jpg",
    author: "Émilie Rousseau",
    authorImage: "/images/profile4.jpg",
    authorRole: "Experte Marketing d'Influence",
    readTime: "8 min",
    rubriques: ["Micro-influenceurs", "ROI", "Authenticité"],
    tags: ["#Influence", "#ContentCreators", "#InfluencerMarketing"],
    content: `
      <h2>La transformation du marketing d'influence en 2025</h2>
      <p>Le marketing d'influence a subi une métamorphose complète, passant d'une stratégie axée sur la célébrité et la portée à un écosystème complexe de partenariats basés sur l'authenticité et les résultats mesurables.</p>
      
      <h3>La montée des nano et micro-influenceurs</h3>
      <p>Les dernières données d'InfluencerMarketHub révèlent que 73% des budgets d'influence sont désormais alloués aux créateurs de contenu ayant moins de 50 000 abonnés. La raison ? Un taux d'engagement jusqu'à 6 fois supérieur à celui des macro-influenceurs et un coût d'acquisition client réduit de 41%.</p>
      
      <p>Les marques les plus performantes développent désormais des réseaux de 50 à 100 micro-influenceurs au lieu de miser sur quelques célébrités onéreuses.</p>
      
      <h3>L'influence B2B : la tendance de rupture</h3>
      <p>2025 marque l'explosion de l'influence B2B avec l'émergence des "experts d'influence" - des professionnels reconnus dans leur secteur qui combinent expertise technique et talent de création de contenu. Sur LinkedIn, ces experts génèrent un taux de conversion 3,7 fois supérieur aux contenus de marque traditionnels.</p>
      
      <h3>Contrats basés sur la performance</h3>
      <p>Le modèle économique de l'influence est en pleine révolution : 68% des contrats incluent désormais des clauses de rémunération basées sur les performances (conversions, acquisitions clients) plutôt que sur la simple exposition.</p>
      
      <p>Les plateformes comme InfluencerMetrics et ConversionTrack permettent maintenant de suivre précisément le parcours de l'audience d'un influenceur jusqu'à l'achat final.</p>
      
      <h3>L'essor des créateurs de contenu "hyperspécialisés"</h3>
      <p>La tendance la plus marquante est l'émergence d'influenceurs ultra-spécialisés dans des micro-niches. Ces créateurs de contenu experts dans des domaines très précis (comme "l'investissement immobilier pour jeunes actifs urbains" ou "la photographie minimaliste sur smartphone") génèrent des taux de conversion jusqu'à 12 fois supérieurs à ceux des influenceurs généralistes.</p>
      
      <h3>L'authenticité comme valeur fondamentale</h3>
      <p>La transparence est devenue non-négociable : 81% des consommateurs déclarent se désabonner immédiatement d'un influenceur dont les partenariats semblent inauthentiques. Les collaborations longue durée (minimum 6 mois) avec un nombre limité de marques sont désormais la norme pour les créateurs soucieux de préserver leur crédibilité.</p>
      
      <h3>Intégration du contenu généré par les influenceurs</h3>
      <p>Les marques les plus innovantes réutilisent le contenu créé par leurs influenceurs partenaires sur leurs propres canaux de communication. Cette approche "influence inversée" augmente l'authenticité perçue des communications de marque de 47% et réduit les coûts de production de contenu de 35%.</p>
      
      <h3>Mesure d'impact et attribution</h3>
      <p>L'utilisation de codes promo et liens de tracking personnalisés ne suffit plus. Les plateformes avancées comme InfluencerROI intègrent désormais des modèles d'attribution multi-touch qui identifient précisément l'impact de chaque influenceur dans le parcours d'achat, même lorsque la conversion finale se produit hors ligne ou plusieurs semaines après l'exposition au contenu.</p>
    `
  },
  {
    id: 8,
    title: "Comment créer une stratégie de storytelling percutante pour votre marque",
    excerpt: "Les techniques narratives les plus efficaces pour connecter émotionnellement avec votre audience et renforcer votre image de marque.",
    date: "5 DÉC 2024",
    category: "contenu",
    subcategory: "storytelling",
    imageUrl: "/images/storytelling.jpg",
    author: "Claire Fontaine",
    authorImage: "/images/profile2.jpg",
    authorRole: "Experte en Brand Storytelling",
    readTime: "11 min",
    rubriques: ["Narration", "Identité de marque", "Engagement émotionnel"],
    tags: ["#Storytelling", "#MarqueMémorable", "#ContentStrategy"],
    content: `
      <h2>L'art du storytelling à l'ère de l'attention fractionnée</h2>
      <p>Dans un monde où l'attention moyenne est passée sous la barre des 8 secondes, le storytelling est devenu l'arme ultime pour capter et retenir l'intérêt de votre audience. Les dernières recherches en neurosciences confirment que notre cerveau retient 22 fois mieux l'information lorsqu'elle est présentée sous forme d'histoire plutôt que de simples faits.</p>
      
      <h3>Les 5 archétypes narratifs qui fonctionnent en 2025</h3>
      <p>L'analyse de plus de 10 000 campagnes marketing réalisée par StoryMetrics révèle que 5 structures narratives génèrent systématiquement plus d'engagement :</p>
      
      <h4>1. Le voyage du héros modernisé</h4>
      <p>Une adaptation du schéma classique où le client est le héros et votre marque le mentor qui l'accompagne dans sa transformation. Cette structure génère 31% plus d'identification que les autres approches.</p>
      
      <h4>2. La narration en constellation</h4>
      <p>Ce modèle émergent connecte plusieurs micro-histoires autour d'une valeur centrale de marque, permettant à des audiences diverses de trouver leur point d'entrée personnel dans votre univers.</p>
      
      <h4>3. Le contraste avant/après</h4>
      <p>Une structure simple mais puissante qui met en évidence la transformation rendue possible par votre produit ou service, avec un focus sur l'état émotionnel plutôt que sur les fonctionnalités.</p>
      
      <h4>4. La révélation progressive</h4>
      <p>Une technique qui dévoile graduellement votre message, créant un effet de curiosité qui maintient l'attention jusqu'à la révélation finale. Particulièrement efficace sur les plateformes sociales.</p>
      
      <h4>5. L'histoire derrière l'histoire</h4>
      <p>Révéler les coulisses de votre entreprise, l'origine de vos produits ou les défis surmontés humanise votre marque et crée une connexion authentique avec votre audience.</p>
      
      <h3>Personnalisation narrative et micro-segmentation</h3>
      <p>2025 marque l'avènement du "storytelling adaptatif" - des récits personnalisés en fonction des préférences, comportements et valeurs de micro-segments d'audience. Les marques leaders utilisent désormais l'IA narrative pour générer des variations cohérentes de leur histoire centrale adaptées à différentes personas.</p>
      
      <h3>L'importance des "story hooks" dans les 3 premières secondes</h3>
      <p>Dans l'économie de l'attention actuelle, la façon dont vous démarrez votre histoire est cruciale. Les "story hooks" (accroches narratives) les plus performantes en 2025 :</p>
      <ul>
        <li>La question provocatrice qui remet en question une croyance établie</li>
        <li>Le paradoxe intrigant qui crée une dissonance cognitive</li>
        <li>L'affirmation contre-intuitive appuyée par des données surprenantes</li>
        <li>La projection future qui place immédiatement l'audience dans un "après" désirable</li>
      </ul>
      
      <h3>Storytelling transmedia : créer un univers cohérent</h3>
      <p>Les marques qui réussissent en 2025 déploient leur narratif sur multiples plateformes, chacune révélant une facette différente mais complémentaire de leur histoire centrale. Cette approche transmedia augmente l'immersion et l'engagement de 147% par rapport aux campagnes mono-canal.</p>
      
      <h3>Mesurer l'impact de votre storytelling</h3>
      <p>Au-delà des métriques traditionnelles, de nouveaux indicateurs permettent d'évaluer l'efficacité narrative de votre contenu :</p>
      <ul>
        <li>Indice de résonance émotionnelle (analyse sémantique des commentaires)</li>
        <li>Taux de complétion narrative (pourcentage de votre histoire consommée jusqu'à la fin)</li>
        <li>Quotient de mémorabilité (capacité de l'audience à se rappeler des éléments clés après exposition)</li>
        <li>Score d'association de marque (force de la connexion entre votre narratif et votre identité)</li>
      </ul>
    `
  },
  {
    id: 9,
    title: "Comment optimiser votre stratégie de community management en 2025",
    excerpt: "Les nouvelles approches pour développer et engager votre communauté dans un paysage digital en constante évolution.",
    date: "28 NOV 2024",
    category: "community",
    subcategory: "engagement",
    imageUrl: "/images/community_manager.png",
    author: "Nicolas Durand",
    authorImage: "/images/profile5.jpg",
    authorRole: "Community Manager Senior",
    readTime: "9 min",
    rubriques: ["Engagement", "Fidélisation", "UGC"],
    tags: ["#CommunityManagement", "#EngagementStrategy", "#SocialROI"],
    content: `
      <h2>Le community management réinventé</h2>
      <p>En 2025, le community management n'est plus un simple poste de gestion des réseaux sociaux, mais une fonction stratégique centrale qui influence directement le développement produit, l'acquisition client et la fidélisation. Les marques qui excellent dans ce domaine ont transformé leurs communautés en véritables écosystèmes d'ambassadeurs et de co-créateurs.</p>
      
      <h3>L'approche C.A.R.E pour un engagement authentique</h3>
      <p>Le framework C.A.R.E, développé par l'institut Digital Engagement, représente la nouvelle norme d'excellence en community management :</p>
      
      <h4>C - Conversation (et non broadcast)</h4>
      <p>Les marques qui génèrent le plus d'engagement ont abandonné l'approche broadcast pour un modèle conversationnel où 70% des contenus sont des réponses ou des interactions plutôt que des publications initiales. Cette approche augmente le taux d'engagement moyen de 83%.</p>
      
      <h4>A - Assistance proactive</h4>
      <p>Anticiper les questions et les besoins de votre communauté avant qu'ils ne soient exprimés. Les outils de social listening avancés permettent désormais d'identifier les problématiques émergentes et d'y répondre de manière proactive.</p>
      
      <h4>R - Reconnaissance personnalisée</h4>
      <p>Les programmes de reconnaissance des membres actifs de la communauté doivent être personnalisés et aller au-delà des simples badges ou points. Les marques leaders créent des expériences exclusives pour leurs contributeurs les plus engagés.</p>
      
      <h4>E - Empowerment communautaire</h4>
      <p>Donner à votre communauté le pouvoir d'influencer réellement votre marque, vos produits et vos décisions. Les études montrent que les marques qui impliquent leur communauté dans leur processus décisionnel bénéficient d'un taux de fidélité 4,7 fois supérieur.</p>
      
      <h3>Les outils de community management de nouvelle génération</h3>
      <p>2025 a vu l'émergence de plateformes d'engagement communautaire intégrées comme CommunityPulse et TribalEngage qui offrent :</p>
      <ul>
        <li>Analyse prédictive des sentiments en temps réel</li>
        <li>Détection automatique des membres influents et leur catégorisation</li>
        <li>Gestion cross-plateforme unifiée avec préservation du contexte conversationnel</li>
        <li>Automatisation contextuelle intelligente préservant l'authenticité des interactions</li>
      </ul>
      
      <h3>Community call-outs : la nouvelle tendance d'engagement</h3>
      <p>Les "community call-outs" - sollicitations spécifiques adressées à votre communauté - génèrent 3,4 fois plus d'engagement que les publications standard. Les formats les plus performants :</p>
      <ul>
        <li>"Expert spotlights" : inviter les membres experts à partager leur savoir</li>
        <li>Défis créatifs avec contraintes spécifiques</li>
        <li>Débats structurés sur des questions pertinentes pour votre secteur</li>
        <li>Sessions de feedback organisées sur des nouveautés</li>
      </ul>
      
      <h3>Métriques d'engagement communautaire de 2025</h3>
      <p>Les KPIs traditionnels comme le nombre d'abonnés ou les likes sont désormais secondaires face à ces nouvelles métriques d'engagement communautaire :</p>
      <ul>
        <li><strong>Taux de contribution active</strong> : pourcentage de membres qui créent du contenu ou participent aux discussions</li>
        <li><strong>Score d'influence intra-communautaire</strong> : mesure de l'impact des membres sur leurs pairs</li>
        <li><strong>Indice de résilience communautaire</strong> : capacité de la communauté à rester engagée sans stimulation constante de la marque</li>
        <li><strong>Taux de transformation communautaire</strong> : pourcentage de membres qui évoluent de spectateurs à contributeurs puis à ambassadeurs</li>
      </ul>
      
      <h3>Étude de cas : La transformation communautaire de TechVibe</h3>
      <p>La startup TechVibe a transformé une communauté inactive de 50 000 membres en un écosystème dynamique de 120 000 participants engagés en appliquant la méthodologie des "cercles concentriques d'engagement" - une approche progressive qui guide les membres à travers différents niveaux d'investissement, du simple like jusqu'à la co-création de produits.</p>
    `
  },
  {
    id: 10,
    title: "Les secrets de la création de contenu vidéo viral sur les réseaux sociaux",
    excerpt: "Techniques et stratégies pour concevoir des vidéos qui captent l'attention et génèrent un partage massif sur toutes les plateformes.",
    date: "18 NOV 2024",
    category: "video",
    subcategory: "viral",
    imageUrl: "/images/videos.jpeg",
    author: "Julien Moreau",
    authorImage: "/images/profile1.jpg",
    authorRole: "Expert Vidéo Social Media",
    readTime: "10 min",
    rubriques: ["Vidéo sociale", "Viralité", "Production vidéo"],
    tags: ["#VideoContent", "#ViralMarketing", "#SocialVideo"],
    content: `
      <h2>Décoder la viralité vidéo en 2025</h2>
      <p>La viralité n'est plus un phénomène aléatoire mais une science qui peut être maîtrisée. L'analyse de 50 000 vidéos virales réalisée par ViralScience Institute a identifié des patterns récurrents qui augmentent significativement les chances de partage massif.</p>
      
      <h3>Les 7 déclencheurs émotionnels de viralité</h3>
      <p>Les vidéos virales activent systématiquement un ou plusieurs de ces déclencheurs émotionnels :</p>
      <ol>
        <li><strong>Surprise cognitive</strong> : rupture inattendue avec les attentes</li>
        <li><strong>Identification amplifiée</strong> : situation familière présentée de façon exagérée</li>
        <li><strong>Curiosité séquentielle</strong> : révélation progressive qui maintient l'intérêt</li>
        <li><strong>Émerveillement technique</strong> : démonstration de compétences extraordinaires</li>
        <li><strong>Réaction émotionnelle intense</strong> : contenu qui provoque une émotion forte</li>
        <li><strong>Utilité immédiate</strong> : solution simple à un problème répandu</li>
        <li><strong>Divergence normative</strong> : remise en question d'une norme sociale établie</li>
      </ol>
      
      <h3>Structure narrative optimale par plateforme</h3>
      <p>Chaque plateforme favorise un format narratif spécifique pour maximiser l'engagement et la viralité :</p>
      
      <h4>TikTok :</h4>
      <p>Structure en "hook-développement-twist-call to action" avec un accrochage puissant dans les 1,5 premières secondes. Les vidéos avec un élément de surprise à 70% de leur durée ont 2,3 fois plus de chances d'être partagées.</p>
      
      <h4>Instagram Reels :</h4>
      <p>Format "problème-agitation-solution" avec une esthétique léchée. L'inclusion d'un élément visuel distinctif unique à votre marque augmente le taux de mémorisation de 47%.</p>
      
      <h4>YouTube Shorts :</h4>
      <p>Narration frontale avec une promesse claire et une démonstration rapide. Les vidéos utilisant une question rhétorique en ouverture génèrent 34% plus de commentaires.</p>
      
      <h4>LinkedIn :</h4>
      <p>Structure "contexte-insight-application-bénéfice" avec une orientation professionnelle. Les vidéos qui incluent des données exclusives ou contre-intuitives sont partagées 2,7 fois plus souvent.</p>
      
      <h3>Optimisation technique pour la rétention</h3>
      <p>Les spécifications techniques qui maximisent le taux de visionnage complet :</p>
      <ul>
        <li><strong>Audio</strong> : Voix claire avec modulation émotionnelle + musique à rythme variable</li>
        <li><strong>Montage</strong> : Changement de plan toutes les 2-3 secondes avec transitions dynamiques</li>
        <li><strong>Texte</strong> : Sous-titres synchronisés avec emphase visuelle sur les mots-clés</li>
        <li><strong>Luminosité</strong> : 15% supérieure à la moyenne pour augmenter l'attention visuelle</li>
      </ul>
      
      <h3>L'impact des tendances sur la viralité</h3>
      <p>Les vidéos qui s'inscrivent dans une tendance émergente (plutôt qu'établie) tout en y apportant une perspective unique ont 340% plus de chances de devenir virales. Les outils comme TrendSurfer et ViralPotential permettent d'identifier les tendances à leur phase d'accélération initiale.</p>
      
      <h3>Optimiser pour l'algorithme de chaque plateforme</h3>
      <p>Les dernières mises à jour algorithmiques favorisent :</p>
      <ul>
        <li><strong>TikTok</strong> : Visionnage complet et engagement dans les commentaires</li>
        <li><strong>Instagram</strong> : Partage en messages privés et enregistrements</li>
        <li><strong>YouTube</strong> : Durée de visionnage et clics sur les vidéos suggérées</li>
        <li><strong>LinkedIn</strong> : Partage avec commentaire personnalisé</li>
      </ul>
      
      <h3>Étude de cas : Comment "SportStyle" a créé 3 vidéos virales consécutives</h3>
      <p>La marque SportStyle a appliqué la méthodologie "Triple E" (Émotion-Esthétique-Expérience) pour créer une série de vidéos qui ont chacune dépassé 10 millions de vues en utilisant une narration émotionnelle combinée à une identité visuelle distinctive et une expérience interactive qui encourageait le partage contextuel.</p>
    `
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