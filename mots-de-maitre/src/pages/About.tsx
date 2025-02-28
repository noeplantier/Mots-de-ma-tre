import React from 'react';
import Navbar from '../components/Navbar';
import UpperButton from '../components/UpperButton';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      
      {/* Header */}
      <header className="py-24 bg-gradient-to-r from-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute -top-20 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">À propos de <span className="text-pink-500">Mots de Maître</span></h1>
            <p className="text-xl max-w-3xl mx-auto">
              Notre expertise au service de votre présence digitale pour transformer votre audience en communauté engagée.
            </p>
          </div>
        </div>
      </header>
      
           {/* Notre Mission et Engagement */}
           <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre <span className="text-pink-500">Mission</span></h2>
              <p className="text-gray-300 mb-6">
                Chez Mots de Maître, nous croyons au pouvoir d'une présence digitale authentique et stratégique. Notre mission est de vous aider à développer une communication qui vous ressemble et qui résonne avec votre audience.
              </p>
              <p className="text-gray-300">
                Nous ne nous contentons pas de suivre les tendances : nous les anticipons. Notre approche combine expertise humaine et outils innovants pour créer des stratégies sur mesure qui génèrent des résultats concrets.
              </p>
            </div>

            {/* Engagement */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre <span className="text-pink-500">Engagement</span></h2>
              <p className="text-gray-300 mb-6">
                Contrairement aux agences classiques qui se concentrent uniquement sur la gestion des réseaux sociaux, Mots de Maître mise sur l'autonomisation des clients en leur donnant les outils et les compétences pour gérer eux-mêmes leur communication digitale. 
              </p>
              <p className="text-gray-300">
                Nous nous engageons à vous fournir des outils efficaces pour gérer votre audience, à vous offrir des insights précis pour améliorer votre stratégie et à vous aider à atteindre vos objectifs.

                
              </p>
            </div>
          </div>
        </div>
      </section>

              

             
     
      
      {/* Notre Histoire */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Notre <span className="text-pink-500">Histoire</span></h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-600"></div>
            
            {/* Timeline Content */}
            <div className="relative z-10">
              {/* 2020 */}
              <div className="mb-16">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-pink-600 text-white py-1 px-4 rounded-full font-bold">2020</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-neutral-800 p-6 rounded-lg md:ml-auto mr-0 md:mr-8">
                    <h3 className="text-xl font-bold mb-3">Fondation</h3>
                    <p className="text-gray-300">
                      Mots de Maître est né de la passion de notre fondatrice pour la communication digitale et d'un constat simple : les entreprises ont besoin d'authenticité pour se démarquer.
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
              
              {/* 2022 */}
              <div className="mb-16">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-pink-600 text-white py-1 px-4 rounded-full font-bold">2022</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div></div>
                  <div className="bg-neutral-800 p-6 rounded-lg ml-0 md:ml-8">
                    <h3 className="text-xl font-bold mb-3">Expansion</h3>
                    <p className="text-gray-300">
                      Après deux années de succès avec nos premiers clients, notre équipe s'agrandit avec l'arrivée d'experts en stratégie de contenu et en analyse de données.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 2023 */}
              <div className="mb-16">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-pink-600 text-white py-1 px-4 rounded-full font-bold">2023</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-neutral-800 p-6 rounded-lg md:ml-auto mr-0 md:mr-8">
                    <h3 className="text-xl font-bold mb-3">Innovation</h3>
                    <p className="text-gray-300">
                      Nous intégrons les dernières technologies d'intelligence artificielle à nos méthodes pour offrir des analyses plus précises et des stratégies encore plus performantes.
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
              
              {/* 2025 */}
              <div>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-pink-600 text-white py-1 px-4 rounded-full font-bold">2025</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div></div>
                  <div className="bg-neutral-800 p-6 rounded-lg ml-0 md:ml-8">
                    <h3 className="text-xl font-bold mb-3">Aujourd'hui</h3>
                    <p className="text-gray-300">
                      Notre équipe accompagne désormais plus de 50 clients dans leur stratégie digitale, avec un taux de satisfaction de 98% et des résultats qui dépassent systématiquement les objectifs fixés.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Notre Équipe */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Notre <span className="text-pink-500">Équipe</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Member 1 */}
            <div className="bg-neutral-900/50 backdrop-blur-sm p-6 rounded-lg border border-neutral-800 hover:border-pink-500 transition-colors">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img 
                  src="/images/sophie_dubois.jpg" 
                  alt="Sophie Martin" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-4">
                    <div className="flex space-x-4">
                      <a href="#" className="text-white hover:text-pink-500 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-white hover:text-pink-500 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Sophie Martin</h3>
              <p className="text-pink-500 text-sm mb-4">Fondatrice & Directrice</p>
              <p className="text-gray-300">
                Experte en stratégie digitale avec plus de 10 ans d'expérience dans les médias sociaux et le marketing de contenu.
              </p>
            </div>
            
            {/* Member 2 */}
            <div className="bg-neutral-900/50 backdrop-blur-sm p-6 rounded-lg border border-neutral-800 hover:border-pink-500 transition-colors">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img 
                  src="/images/thomas_renard.jpg" 
                  alt="Thomas Dubois" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-4">
                    <div className="flex space-x-4">
                      <a href="#" className="text-white hover:text-pink-500 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-white hover:text-pink-500 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Thomas Dubois</h3>
              <p className="text-pink-500 text-sm mb-4">Responsable Stratégie</p>
              <p className="text-gray-300">
                Spécialiste des stratégies de contenus et d'engagement, Thomas a travaillé avec des marques internationales avant de rejoindre notre équipe.
              </p>
            </div>
            
            {/* Member 3 */}
            <div className="bg-neutral-900/50 backdrop-blur-sm p-6 rounded-lg border border-neutral-800 hover:border-pink-500 transition-colors">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img 
                  src="/images/julie_martin.jpg" 
                  alt="Julie Renard" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-4">
                    <div className="flex space-x-4">
                      <a href="#" className="text-white hover:text-pink-500 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-white hover:text-pink-500 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Julie Renard</h3>
              <p className="text-pink-500 text-sm mb-4">Data Analyst</p>
              <p className="text-gray-300">
                Julie exploite les données pour identifier les opportunités de croissance et mesurer l'impact de nos stratégies avec précision.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Prêt à collaborer avec notre équipe ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Découvrez comment notre expertise peut transformer votre présence digitale et vous aider à atteindre vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/booking" className="bg-white text-pink-900 px-8 py-3 rounded-full text-lg font-medium hover:bg-neutral-200 transition-colors">
              Prendre Rendez-vous
            </a>
            <a href="/contact" className="border border-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-pink-900 transition-colors">
              Nous Contacter
            </a>
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
                <li><a href="#" className="hover:text-pink-500 transition-colors">Consulting</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Coaching</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Formation</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Audit</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Liens Utiles</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/blog" className="hover:text-pink-500 transition-colors">Blog</a></li>
                <li><a href="/about" className="hover:text-pink-500 transition-colors">À Propos</a></li>
                <li><a href="/contact" className="hover:text-pink-500 transition-colors">Contact</a></li>
                <li><a href="/mentions-legales" className="hover:text-pink-500 transition-colors">Mentions Légales</a></li>
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
      <UpperButton />
    </div>
  );
};

export default About;