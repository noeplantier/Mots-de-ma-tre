// Dans App.js ou votre fichier principal
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CalendlyBooking from './pages/CalendlyBooking';
import ContactForm from './pages/ContactForm';
import BlogPage from './pages/BlogPage.tsx';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<CalendlyBooking />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}