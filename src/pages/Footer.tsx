import React from 'react';



const Footer = () =>



<div className="py-12 bg-neutral-900">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Mots de Maître</h3>
        <p className="text-gray-400">Expertise en consulting et coaching pour réseaux sociaux.</p>
      </div>
      
      <div>
        <h4 className="font-bold mb-4">Services</h4>
        <ul className="space-y-2 text-gray-400">
          <li className="hover:text-[#442F8A] transition-colors">Consulting</li>
          <li className="hover:text-[#442F8A] transition-colors">Coaching</li>
          <li  className="hover:text-[#442F8A] transition-colors">Formation</li>
          <li  className="hover:text-[#442F8A] transition-colors">Audit</li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-bold mb-4">Liens Utiles</h4>
        <ul className="space-y-2 text-gray-400">
          <li><a href="/blog" className="hover:text-[#442F8A] transition-colors">Blog</a></li>
          <li><a href="/about" className="hover:text-[#442F8A] transition-colors">À Propos</a></li>
          <li><a href="/contact" className="hover:text-[#442F8A] transition-colors">Contact</a></li>
          <li><a href="/legalmentions" className="hover:text-[#442F8A] transition-colors">Mentions Légales</a></li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-bold mb-4">Contact</h4>
        <ul className="space-y-2 text-gray-400">
          <li className='hover:text-[#442F8A]'>motsdemaitre@gmail.com</li>
          <li className='hover:text-[#442F8A]'>+33 6 85 30 00 40</li>
          <li>
          <div className="flex space-x-4 mt-4">
          <a 
              href="https://www.facebook.com/cosette.fleurisson" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#442F8A] transition-colors"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a 
              href="https://www.instagram.com/cfsocialmedia_manager/?igsh=MWdpdzN2dWp5M2VnbA%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#442F8A] transition-colors"
            >    
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
              href="https://www.linkedin.com/in/cosette-fleurisson-579867228/?originalSubdomain=fr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#442F8A] transition-colors"
            >                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
                      <a 
                      href="https://pin.it/1bZ0tOYI7" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-[#442F8A]  transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.627 0-12 5.373-12 12 0 4.991 3.657 9.128 8.438 10.292-.117-.875-.223-2.219.047-3.172.242-.938 1.562-6.031 1.562-6.031s-.398-.797-.398-1.969c0-1.844 1.07-3.219 2.406-3.219 1.133 0 1.688.844 1.688 1.844 0 1.125-.719 2.812-1.094 4.375-.312 1.312.656 2.375 1.938 2.375 2.328 0 3.906-2.969 3.906-6.469 0-2.656-1.781-4.641-5.031-4.641-3.672 0-5.969 2.75-5.969 5.844 0 1.031.312 1.781.812 2.344.234.281.266.391.187.719-.062.234-.203.797-.266 1.016-.078.281-.312.391-.578.281-1.594-.656-2.344-2.406-2.344-4.375 0-3.25 2.75-7.156 8.219-7.156 4.391 0 7.281 3.188 7.281 6.625 0 4.5-2.5 7.844-6.219 7.844-1.25 0-2.438-.656-2.844-1.406l-.781 2.969c-.281 1.094-1.047 2.469-1.562 3.312 1.172.344 2.406.531 3.688.531 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
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
</div>

export default Footer;