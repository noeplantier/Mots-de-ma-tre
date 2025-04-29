"use client"

import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import UpperButton from "../components/UpperButton"
import Footer from "./Footer"
import { Clock, ArrowRight, Calendar, User} from "lucide-react"
import "../../src/styles/articles.css"

export const blogPosts = [
  {
    id: 1,
    title: "Comment optimiser votre contenu pour l'algorithme TikTok en 2025",
    excerpt:
      "Découvrez les dernières mises à jour de l'algorithme TikTok et les meilleures pratiques pour maximiser votre portée organique.",
    date: "12 FÉV 2025",
    category: "tiktok",
    imageUrl: "/placeholder.svg",
    author: "Cosette Fleurisson",
    authorRole: "Experte TikTok",
    readTime: "8 min",
  
    content: `<h2 class="text-3xl font-bold mb-6 text-gradient">L'algorithme TikTok en 2025 : Les nouvelles règles du jeu</h2>
      <p class="mb-6">TikTok évolue constamment, et avec 2025, de nouvelles règles sont à prendre en compte pour optimiser votre contenu.</p>
      <div class="interactive-card mb-8 p-6 bg-neutral-800 rounded-xl hover:bg-neutral-700 transition-all duration-300 cursor-pointer">
        <h3 class="text-xl font-bold mb-4 text-[#F9AACD]">Points clés à retenir</h3>
        <ul class="space-y-3">
          <li class="flex items-center gap-2">
            <span class="w-2 h-2 bg-[#F9AACD] rounded-full"></span>
            <span>Nouveaux critères de mise en avant</span>
          </li>
          <li class="flex items-center gap-2">
            <span class="w-2 h-2 bg-[#F9AACD] rounded-full"></span>
            <span>Importance accrue de l'engagement</span>
          </li>
          <li class="flex items-center gap-2">
            <span class="w-2 h-2 bg-[#F9AACD] rounded-full"></span>
            <span>Fonctionnalités avancées pour créateurs</span>
          </li>
        </ul>
      </div>
      <p class="mb-6">Les changements incluent de nouveaux critères de mise en avant des contenus, plus d'importance donnée à l'engagement, et des fonctionnalités avancées pour les créateurs.</p>
      <div class="p-6 bg-gradient-to-r from-[#442F8A]/20 to-[#F9AACD]/20 rounded-xl mb-6 hover:from-[#442F8A]/30 hover:to-[#F9AACD]/30 transition-all duration-300">
        <p class="font-medium">En suivant ces conseils, vous pouvez augmenter vos chances de succès sur TikTok en 2025.</p>
      </div>`,
  },
  {
    id: 2,
    title: "Les 5 erreurs à éviter dans votre stratégie LinkedIn",
    excerpt:
      "Analyse des erreurs les plus courantes qui limitent votre impact sur LinkedIn et comment les corriger pour des résultats immédiats.",
    date: "5 FÉV 2025",
    category: "linkedin",
    imageUrl: "/placeholder.svg",
    author: "Cosette Fleurisson",
    authorRole: "Consultant LinkedIn",
    readTime: "10 min",
    content: `<h2 class="text-3xl font-bold mb-6 text-gradient">Les erreurs fatales qui plombent votre stratégie LinkedIn en 2025</h2>
      <p class="mb-6">Éviter ces erreurs permettra de maximiser votre visibilité sur LinkedIn. Certaines pratiques courantes peuvent limiter votre croissance.</p>
      
      <div class="space-y-8 mb-8">
        <div class="p-6 bg-neutral-800 rounded-xl hover:bg-neutral-700 transition-all duration-300 cursor-pointer">
          <h3 class="text-2xl font-bold mb-2 text-[#F9AACD]">1. Ne pas personnaliser vos invitations</h3>
          <p>Envoyer des invitations génériques peut donner l'impression que vous ne vous intéressez pas réellement à la personne.</p>
        </div>
        
        <div class="p-6 bg-neutral-800 rounded-xl hover:bg-neutral-700 transition-all duration-300 cursor-pointer">
          <h3 class="text-2xl font-bold mb-2 text-[#F9AACD]">2. Publier trop souvent</h3>
          <p>Inonder votre réseau avec trop de publications peut être contre-productif. Privilégiez la qualité à la quantité.</p>
        </div>
        
        <div class="p-6 bg-neutral-800 rounded-xl hover:bg-neutral-700 transition-all duration-300 cursor-pointer">
          <h3 class="text-2xl font-bold mb-2 text-[#F9AACD]">3. Ne pas utiliser de visuels</h3>
          <p>Les publications avec des images ou des vidéos attirent plus l'attention et génèrent plus d'engagement.</p>
        </div>
        
        <div class="p-6 bg-neutral-800 rounded-xl hover:bg-neutral-700 transition-all duration-300 cursor-pointer">
          <h3 class="text-2xl font-bold mb-2 text-[#F9AACD]">4. Ignorer les messages privés</h3>
          <p>Répondre rapidement aux messages privés montre que vous êtes engagé et professionnel.</p>
        </div>
        
        <div class="p-6 bg-neutral-800 rounded-xl hover:bg-neutral-700 transition-all duration-300 cursor-pointer">
          <h3 class="text-2xl font-bold mb-2 text-[#F9AACD]">5. Ne pas optimiser votre profil</h3>
          <p>Un profil complet et bien optimisé est essentiel pour attirer l'attention des recruteurs et des clients potentiels.</p>
        </div>
      </div>
      
      <div class="p-6 bg-gradient-to-r from-[#442F8A]/20 to-[#F9AACD]/20 rounded-xl mb-6 hover:from-[#442F8A]/30 hover:to-[#F9AACD]/30 transition-all duration-300">
        <p class="font-medium">En corrigeant ces erreurs, vous pouvez améliorer votre présence sur LinkedIn et obtenir de meilleurs résultats.</p>
      </div>`,
  },
  {
    id: 3,
    title: "Comment utiliser l'IA pour créer du contenu authentique",
    excerpt:
      "Guide pratique sur l'utilisation des outils d'IA pour générer du contenu qui reste authentique et connecté à votre audience.",
    date: "28 JAN 2025",
    category: "ia",
    imageUrl: "/images/intelligence.png",
    author: "Sophie Bernard",
    authorRole: "Spécialiste Contenu",
    readTime: "12 min",

    content: `<h2 class="text-3xl font-bold mb-6 text-gradient">L'IA et l'authenticité : concilier technologie et connexion humaine en 2025</h2>
      <p class="mb-6">L'intelligence artificielle est de plus en plus utilisée pour générer du contenu. Cependant, il est crucial de garder l'authenticité.</p>
      <div class="interactive-image mb-8 rounded-xl overflow-hidden">
        <div class="caption bg-neutral-800 p-3 text-sm">Découvrez comment l'IA peut vous aider à garder un ton authentique !</div>
      </div>
      <p class="mb-6">En utilisant des outils IA avancés, vous pouvez personnaliser votre contenu pour qu'il résonne avec votre public. Voici quelques conseils :</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="p-6 bg-neutral-800 rounded-xl">
          <h3 class="text-xl font-bold mb-2 text-[#F9AACD]">1. Utilisez l'IA pour la recherche</h3>
          <p>L'IA peut vous aider à trouver des informations pertinentes et à identifier les tendances actuelles.</p>
        </div>
        
        <div class="p-6 bg-neutral-800 rounded-xl">
          <h3 class="text-xl font-bold mb-2 text-[#F9AACD]">2. Personnalisez votre ton</h3>
          <p>Adaptez le ton de votre contenu pour qu'il soit cohérent avec votre marque et votre audience.</p>
        </div>
        
        <div class="p-6 bg-neutral-800 rounded-xl">
          <h3 class="text-xl font-bold mb-2 text-[#F9AACD]">3. Testez et ajustez</h3>
          <p>Utilisez des outils d'analyse pour mesurer l'impact de votre contenu et ajustez-le en conséquence.</p>
        </div>
        
        <div class="p-6 bg-neutral-800 rounded-xl">
          <h3 class="text-xl font-bold mb-2 text-[#F9AACD]">4. Gardez une touche humaine</h3>
          <p>Même avec l'IA, il est important de garder une touche humaine dans votre contenu pour maintenir l'authenticité.</p>
        </div>
      </div>
      
      <div class="p-6 bg-gradient-to-r from-[#442F8A]/20 to-[#F9AACD]/20 rounded-xl mb-6">
        <p class="font-medium">En suivant ces conseils, vous pouvez créer du contenu authentique et engageant avec l'aide de l'IA.</p>
      </div>`,
  },
  {
    id: 4,
    title: "Instagram Reels vs TikTok : quelle plateforme privilégier en 2025 ?",
    excerpt:
      "Analyse comparative des deux plateformes de vidéo courte et stratégies pour choisir celle qui convient le mieux à votre marque.",
    date: "15 JAN 2025",
    category: "instagram",
    imageUrl: "/images/instavstiktok.jpeg",
    author: "Julie Moreau",
    authorRole: "Stratège Social Media",
    readTime: "15 min",
    content: `<h2 class="text-3xl font-bold mb-6 text-gradient">Instagram Reels vs TikTok en 2025 : Guide stratégique pour faire le bon choix</h2>
      <p class="mb-6">Les deux plateformes sont dominantes, mais quelles sont les différences et comment choisir celle qui convient le mieux à votre stratégie ?</p>
      <div class="interactive-image mb-8 rounded-xl overflow-hidden">
        <div class="caption bg-neutral-800 p-3 text-sm">Cliquez pour découvrir la comparaison en temps réel entre les deux plateformes !</div>
      </div>
      
      <div class="mb-8">
        <h3 class="text-2xl font-bold mb-4 text-[#F9AACD]">Tableau comparatif</h3>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="bg-neutral-800">
                <th class="p-4 text-left">Critère</th>
                <th class="p-4 text-left">Instagram Reels</th>
                <th class="p-4 text-left">TikTok</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-neutral-700">
                <td class="p-4 font-medium">Démographie</td>
                <td class="p-4">Plus diversifiée, 25-40 ans</td>
                <td class="p-4">Plus jeune, 16-24 ans</td>
              </tr>
              <tr class="border-b border-neutral-700">
                <td class="p-4 font-medium">Fonctionnalités</td>
                <td class="p-4">Intégration avec l'écosystème Meta</td>
                <td class="p-4">Outils créatifs avancés</td>
              </tr>
              <tr class="border-b border-neutral-700">
                <td class="p-4 font-medium">Algorithme</td>
                <td class="p-4">Favorise la qualité</td>
                <td class="p-4">Favorise l'engagement</td>
              </tr>
              <tr>
                <td class="p-4 font-medium">Monétisation</td>
                <td class="p-4">En développement</td>
                <td class="p-4">Plus d'options</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="space-y-6 mb-8">
        <p>Les Reels et TikTok ont leurs propres avantages et inconvénients. Voici quelques points à considérer :</p>
        
        <div class="p-6 bg-neutral-800 rounded-xl">
          <h3 class="text-xl font-bold mb-2 text-[#F9AACD]">1. Démographie</h3>
          <p>TikTok attire un public plus jeune, tandis qu'Instagram a une base d'utilisateurs plus diversifiée.</p>
        </div>
        
        <div class="p-6 bg-neutral-800 rounded-xl">
          <h3 class="text-xl font-bold mb-2 text-[#F9AACD]">2. Fonctionnalités</h3>
          <p>TikTok offre des fonctionnalités avancées pour les créateurs, tandis qu'Instagram est plus intégré avec d'autres outils de réseaux sociaux.</p>
        </div>
        
        <div class="p-6 bg-neutral-800 rounded-xl">
          <h3 class="text-xl font-bold mb-2 text-[#F9AACD]">3. Algorithme</h3>
          <p>L'algorithme de TikTok favorise les vidéos courtes et engageantes, tandis qu'Instagram met en avant les contenus de haute qualité.</p>
        </div>
        
        <div class="p-6 bg-neutral-800 rounded-xl">
          <h3 class="text-xl font-bold mb-2 text-[#F9AACD]">4. Monétisation</h3>
          <p>TikTok offre plus d'opportunités de monétisation pour les créateurs, mais Instagram est en train de rattraper son retard.</p>
        </div>
      </div>
      
      <div class="p-6 bg-gradient-to-r from-[#442F8A]/20 to-[#F9AACD]/20 rounded-xl mb-6">
        <p class="font-medium">En fonction de vos objectifs et de votre audience cible, vous pouvez choisir la plateforme qui convient le mieux à votre stratégie.</p>
      </div>`,
  },
  {
    id: 5,
    title: "Comment construire une stratégie de contenu B2B efficace sur les réseaux sociaux",
    excerpt:
      "Les clés pour développer une présence B2B pertinente et générer des leads qualifiés via vos contenus sociaux.",
    date: "3 JAN 2025",
    category: "b2b",
    imageUrl: "/images/B2B.jpg",
    author: "Marc Leroy",
    authorRole: "Expert B2B",
    readTime: "11 min",
    content: `<h2 class="text-3xl font-bold mb-6 text-gradient">Stratégie B2B sur les réseaux sociaux en 2025 : le guide définitif</h2>
      <p class="mb-6">Le B2B a évolué avec l'avènement des réseaux sociaux. Voici comment créer une stratégie gagnante.</p>
      <div class="interactive-image mb-8 rounded-xl overflow-hidden">
        <div class="caption bg-neutral-800 p-3 text-sm">Interagissez pour voir des exemples de stratégies efficaces !</div>
      </div>
      
      <div class="mb-8">
        <h3 class="text-2xl font-bold mb-4 text-[#F9AACD]">Les 5 piliers d'une stratégie B2B réussie</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="p-6 bg-neutral-800 rounded-xl">
            <div class="text-3xl font-bold text-[#442F8A] mb-2">01</div>
            <h4 class="text-xl font-bold mb-2">Définissez vos objectifs</h4>
            <p>Identifiez ce que vous voulez accomplir avec votre stratégie B2B (génération de leads, notoriété de la marque, etc.).</p>
          </div>
          
          <div class="p-6 bg-neutral-800 rounded-xl">
            <div class="text-3xl font-bold text-[#442F8A] mb-2">02</div>
            <h4 class="text-xl font-bold mb-2">Connaissez votre audience</h4>
            <p>Comprenez les besoins et les préférences de votre audience cible pour créer du contenu pertinent.</p>
          </div>
          
          <div class="p-6 bg-neutral-800 rounded-xl">
            <div class="text-3xl font-bold text-[#442F8A] mb-2">03</div>
            <h4 class="text-xl font-bold mb-2">Créez du contenu de qualité</h4>
            <p>Publiez des articles, des études de cas, des infographies et des vidéos qui apportent de la valeur à votre audience.</p>
          </div>
          
          <div class="p-6 bg-neutral-800 rounded-xl">
            <div class="text-3xl font-bold text-[#442F8A] mb-2">04</div>
            <h4 class="text-xl font-bold mb-2">Engagez-vous avec votre audience</h4>
            <p>Répondez aux commentaires, posez des questions et encouragez les discussions pour créer une communauté engagée.</p>
          </div>
          
          <div class="p-6 bg-neutral-800 rounded-xl">
            <div class="text-3xl font-bold text-[#442F8A] mb-2">05</div>
            <h4 class="text-xl font-bold mb-2">Mesurez vos résultats</h4>
            <p>Utilisez des outils d'analyse pour suivre vos performances et ajuster votre stratégie en conséquence.</p>
          </div>

       <div class="p-6 bg-neutral-800 rounded-xl">
  <div class="text-3xl font-bold text-[#442F8A] mb-2">06</div>
  <h4 class="text-xl font-bold mb-2">Automatisez vos processus</h4>
  <p>Utilisez des outils d'automatisation pour planifier vos publications.</p>
</div>
        </div>
      </div>
      
      <div class="p-6 bg-gradient-to-r from-[#442F8A]/20 to-[#F9AACD]/20 rounded-xl mb-6">
        <p class="font-medium">En suivant ces étapes, vous pouvez créer une stratégie B2B efficace sur les réseaux sociaux.</p>
      </div>`,
  },
  {
    id: 6,
    title: "L'impact des nouvelles fonctionnalités de Meta sur votre stratégie marketing",
    excerpt:
      "Tour d'horizon des dernières innovations de Meta et comment les intégrer efficacement dans votre stratégie digitale.",
    date: "20 DÉC 2024",
    category: "meta",
    subcategory: "nouveautes",
    imageUrl: "/images/meta.jpg",
    author: "Cosette Fleurisson",
    authorImage: "/images/cosette.jpeg",
    authorRole: "Community Manager",
    readTime: "9 min",
    rubriques: ["Meta", "Instagram", "Facebook"],
    tags: ["#Meta", "#FacebookAds", "#InstaUpdate"],
    content: `
      <h2 class="text-3xl font-bold mb-6 text-gradient">Les innovations Meta qui redéfinissent le marketing digital</h2>
      <p class="mb-6">Le dernier trimestre 2024 a vu Meta déployer sa plus importante mise à jour depuis sa refonte, avec l'introduction de l'écosystème "MetaVerse Commerce" et une refonte complète de ses outils publicitaires. Ces changements ont des implications profondes pour toutes les marques présentes sur Facebook, Instagram et WhatsApp.</p>
      
      <div class="flex flex-wrap gap-2 mb-6">
        <span class="px-3 py-1 bg-[#442F8A] rounded-full text-sm">#Meta</span>
        <span class="px-3 py-1 bg-[#442F8A] rounded-full text-sm">#FacebookAds</span>
        <span class="px-3 py-1 bg-[#442F8A] rounded-full text-sm">#InstaUpdate</span>
      </div>
      
      <div class="mb-8">
        <h3 class="text-2xl font-bold mb-4 text-[#F9AACD]">MetaVerse Commerce : la révolution shopping</h3>
        <div class="p-6 bg-neutral-800 rounded-xl mb-6">
          <p class="mb-4">Lancé en novembre 2024, MetaVerse Commerce combine réalité augmentée et intelligence artificielle pour transformer l'expérience d'achat social. Les marques peuvent désormais créer des boutiques immersives où les utilisateurs peuvent :</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>"Essayer" virtuellement les produits via leur avatar personnalisé</li>
            <li>Participer à des événements shopping en direct avec interaction 3D</li>
            <li>Bénéficier de recommandations ultra-personnalisées basées sur leurs préférences comportementales</li>
          </ul>
        </div>
        <div class="p-6 bg-gradient-to-r from-[#442F8A]/20 to-[#F9AACD]/20 rounded-xl mb-6">
          <p class="font-medium">Les premiers tests montrent une augmentation moyenne de 67% du taux de conversion pour les marques ayant adopté cette technologie.</p>
        </div>
      </div>
      
      <div class="mb-8">
        <h3 class="text-2xl font-bold mb-4 text-[#F9AACD]">Meta Business Suite 2.0</h3>
        <p class="mb-4">La refonte complète de Meta Business Suite introduit plusieurs outils critiques :</p>
        
        <div class="space-y-6">
          <div class="p-6 bg-neutral-800 rounded-xl">
            <h4 class="text-xl font-bold mb-2">1. Intelligence des Audiences</h4>
            <p>L'IA prédictive de Meta peut désormais anticiper les tendances d'achat de vos audiences jusqu'à 30 jours à l'avance, permettant d'ajuster votre contenu et vos promotions en conséquence.</p>
          </div>
          
          <div class="p-6 bg-neutral-800 rounded-xl">
            <h4 class="text-xl font-bold mb-2">2. Attribution Multi-Touch Avancée</h4>
            <p>Le nouveau modèle d'attribution considère jusqu'à 28 points de contact sur l'ensemble des plateformes Meta et partenaires, offrant une compréhension sans précédent du parcours client.</p>
          </div>
          
          <div class="p-6 bg-neutral-800 rounded-xl">
            <h4 class="text-xl font-bold mb-2">3. Gestionnaire de Créativités Dynamiques</h4>
            <p>Cette fonctionnalité teste automatiquement des milliers de variations créatives et affine votre message en temps réel en fonction des performances.</p>
          </div>
        </div>
      </div>
      
      <div class="mb-8">
        <h3 class="text-2xl font-bold mb-4 text-[#F9AACD]">Nouvelles spécifications publicitaires</h3>
        <p class="mb-4">Meta a également introduit de nouveaux formats publicitaires qui surpassent significativement les formats traditionnels :</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 bg-neutral-800 rounded-xl">
            <h4 class="text-xl font-bold mb-2">Immersive Canvas Ads</h4>
            <p>Expériences plein écran interactives (CTR moyen supérieur de 34%)</p>
          </div>
          
          <div class="p-6 bg-neutral-800 rounded-xl">
            <h4 class="text-xl font-bold mb-2">Dynamic Audio Ads</h4>
            <p>Publicités audio sur Facebook et Instagram qui s'adaptent aux habitudes d'écoute</p>
          </div>
          
          <div class="p-6 bg-neutral-800 rounded-xl">
            <h4 class="text-xl font-bold mb-2">Story Sequence</h4>
            <p>Séries de Stories interconnectées qui guident l'utilisateur dans un parcours narratif</p>
          </div>
        </div>
      </div>
      
      <div class="mb-8">
        <h3 class="text-2xl font-bold mb-4 text-[#F9AACD]">Stratégie d'intégration des nouvelles fonctionnalités</h3>
        <p class="mb-4">Pour tirer pleinement parti de ces innovations, suivez cette approche en trois phases :</p>
        
        <div class="space-y-6">
          <div class="p-6 bg-neutral-800 rounded-xl">
            <h4 class="text-xl font-bold mb-2">Phase 1 : Audit et préparation technique</h4>
            <p>Vérifiez la compatibilité de votre catalogue produits avec MetaVerse Commerce et mettez à jour vos pixels Meta avec les nouveaux événements de conversion.</p>
          </div>
          
          <div class="p-6 bg-neutral-800 rounded-xl">
            <h4 class="text-xl font-bold mb-2">Phase 2 : Expérimentation progressive</h4>
            <p>Testez les nouvelles fonctionnalités sur 20% de votre budget marketing pendant au moins 14 jours avant de les déployer à grande échelle.</p>
          </div>
          
          <div class="p-6 bg-neutral-800 rounded-xl">
            <h4 class="text-xl font-bold mb-2">Phase 3 : Optimisation cross-plateforme</h4>
            <p>Assurez-vous que votre stratégie reste cohérente entre Facebook, Instagram et WhatsApp tout en exploitant les spécificités de chaque plateforme.</p>
          </div>
        </div>
      </div>`,
  },
  {
    id: 7,
    title: "Les tendances du marketing d'influence pour 2025",
    excerpt:
      "Découvrez comment le paysage du marketing d'influence évolue et comment adapter votre stratégie pour rester pertinent.",
    date: "15 DÉC 2024",
    category: "influence",
    subcategory: "tendances",
    imageUrl: "/images/influence.png",
    author: "Cosette Fleurisson",
    authorImage: "/images/cosette.jpeg",
    authorRole: "Community Manager",
    readTime: "8 min",
    rubriques: ["Micro-influenceurs", "ROI", "Authenticité"],
    tags: ["#Influence", "#ContentCreators", "#InfluencerMarketing"],
    content: `
      <h2 class="text-3xl font-bold mb-6 text-gradient">La transformation du marketing d'influence en 2025</h2>
      <p class="mb-6">Le marketing d'influence a subi une métamorphose complète, passant d'une stratégie axée sur la célébrité et la portée à un écosystème complexe de partenariats basés sur l'authenticité et les résultats mesurables.</p>
      
      <div class="flex flex-wrap gap-2 mb-6">
        <span class="px-3 py-1 bg-[#442F8A] rounded-full text-sm">#Influence</span>
        <span class="px-3 py-1 bg-[#442F8A] rounded-full text-sm">#ContentCreators</span>
        <span class="px-3 py-1 bg-[#442F8A] rounded-full text-sm">#InfluencerMarketing</span>
      </div>
      
      <div class="mb-8">
        <h3 class="text-2xl font-bold mb-4 text-[#F9AACD]">La montée des nano et micro-influenceurs</h3>
        <div class="p-6 bg-neutral-800 rounded-xl mb-6">
          <p class="mb-4">Les dernières données d'InfluencerMarketHub révèlent que 73% des budgets d'influence sont désormais alloués aux créateurs de contenu ayant moins de 50 000 abonnés. La raison ? Un taux d'engagement jusqu'à 6 fois supérieur à celui des macro-influenceurs et un coût d'acquisition client réduit de 41%.</p>
          <p>Les marques les plus performantes développent désormais des réseaux de 50 à 100 micro-influenceurs au lieu de miser sur quelques célébrités onéreuses.</p>
        </div>
      </div>
      
      <div class="mb-8">
        <h3 class="text-2xl font-bold mb-4 text-[#F9AACD]">L'influence B2B : la tendance de rupture</h3>
        <div class="p-6 bg-neutral-800 rounded-xl mb-6">
          <p>2025 marque l'explosion de l'influence B2B avec l'émergence des "experts d'influence" - des professionnels reconnus dans leur secteur qui combinent expertise technique et talent de création de contenu. Sur LinkedIn, ces experts génèrent un taux de conversion 3,7 fois supérieur aux contenus de marque traditionnels.</p>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="p-6 bg-neutral-800 rounded-xl">
          <h3 class="text-xl font-bold mb-2 text-[#F9AACD]">Contrats basés sur la performance</h3>
          <p>Le modèle économique de l'influence est en pleine révolution : 68% des contrats incluent désormais des clauses de rémunération basées sur les performances (conversions, acquisitions clients) plutôt que sur la simple exposition.</p>
        </div>
        
        <div class="p-6 bg-neutral-800 rounded-xl">
          <h3 class="text-xl font-bold mb-2 text-[#F9AACD]">L'authenticité comme valeur fondamentale</h3>
          <p>La transparence est devenue non-négociable : 81% des consommateurs déclarent se désabonner immédiatement d'un influenceur dont les partenariats semblent inauthentiques.</p>
        </div>
      </div>
      
      <div class="mb-8">
        <h3 class="text-2xl font-bold mb-4 text-[#F9AACD]">L'essor des créateurs de contenu "hyperspécialisés"</h3>
        <div class="p-6 bg-neutral-800 rounded-xl mb-6">
          <p>La tendance la plus marquante est l'émergence d'influenceurs ultra-spécialisés dans des micro-niches. Ces créateurs de contenu experts dans des domaines très précis (comme "l'investissement immobilier pour jeunes actifs urbains" ou "la photographie minimaliste sur smartphone") génèrent des taux de conversion jusqu'à 12 fois supérieurs à ceux des influenceurs généralistes.</p>
        </div>
      </div>
      
      <div class="p-6 bg-gradient-to-r from-[#442F8A]/20 to-[#F9AACD]/20 rounded-xl mb-6">
        <p class="font-medium">Les plateformes avancées comme InfluencerROI intègrent désormais des modèles d'attribution multi-touch qui identifient précisément l'impact de chaque influenceur dans le parcours d'achat, même lorsque la conversion finale se produit hors ligne ou plusieurs semaines après l'exposition au contenu.</p>
      </div>`,
  },
]

export type BlogPost = {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  imageUrl: string
  author: string
  authorRole: string
  readTime: string
  content: string
  likes: number
  bookmarks: number
  shares: number
  subcategory?: string
  authorImage?: string
  rubriques?: string[]
  tags?: string[]
}

const ArticlePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [article, setArticle] = useState<BlogPost | null>(null)
  const [relatedPosts] = useState<BlogPost[]>([])


  useEffect(() => {
    const currentArticle = blogPosts.find((post) => post.id === Number(id))
    if (!currentArticle) {
      navigate("/blog")
      return
    }
    setArticle({
      ...currentArticle,
      likes: 0,
      bookmarks: 0, 
      shares: 0
    })
  }, [id, navigate])

  if (!article) {
    return null
  }



  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Article Header */}
      <header className="py-24 bg-gradient-to-r from-[#442F8A]/40 to-[#F9AACD]/40 z-20 relative overflow-hidden">
        <div className="absolute -top-20 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[#442F8A] rounded-full text-sm font-medium hover:bg-[#442F8A]/80 transition-colors">
                {article.category}
              </span>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F9AACD] transition-all duration-500">
              {article.title}
            </h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#442F8A] flex items-center justify-center hover:bg-[#442F8A]/80 transition-colors">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium">{article.author}</h3>
                  <p className="text-sm text-gray-400">{article.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
               
                
             
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert" dangerouslySetInnerHTML={{ __html: article.content }} />

            {/* Article Tags */}
            {article.tags && (
              <div className="mt-12 pt-8 border-t border-neutral-800">
                <h3 className="text-xl font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#442F8A]/30 rounded-full text-sm hover:bg-[#442F8A]/50 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-neutral-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F9AACD]  transition-all duration-500">
              Articles similaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
    <article
    key={post.id}
    className="bg-neutral-800 rounded-xl overflow-hidden hover:bg-[#442F8A]/30 transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 hover:shadow-lg"
    onClick={() => navigate(`/blog/${post.id}`)}
  >
    <div className="relative overflow-hidden h-48">
      <div className="w-full h-full bg-gradient-to-br from-[#442F8A] to-[#F9AACD] animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
          <Calendar className="w-3 h-3" />
          <span>{post.date}</span>
          <Clock className="w-3 h-3 ml-2" />
          <span>{post.readTime}</span>
        </div>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <span className="px-3 py-1 bg-[#F9AACD]/20 text-[#F9AACD] rounded-full text-sm font-medium hover:bg-[#F9AACD]/30 transition-colors">
          {post.category}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-[#F9AACD] transition-colors">
        {post.title}
      </h3>
      <p className="text-gray-400 line-clamp-3">{post.excerpt}</p>
      <div className="mt-4 flex items-center text-[#F9AACD] font-medium group-hover:translate-x-2 transition-transform">
        <span>Lire l'article</span>
        <ArrowRight className="w-4 h-4 ml-2" />
      </div>
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
  )
}

export default ArticlePage

