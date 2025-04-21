// Dans App.js ou votre fichier principal
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CalendlyBooking from './pages/CalendlyBooking';
import ContactForm from './pages/ContactForm';
import BlogPage from './pages/BlogPage.tsx';
import About from './pages/About';
import Services from './pages/Services';
import ArticlePage from './pages/Articles';
import MentionsLegales from './pages/LegalMentions';
import NotFound from './pages/NotFound';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<CalendlyBooking />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<ArticlePage />} />    
        <Route path='/legalmentions' element={<MentionsLegales/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}