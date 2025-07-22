import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';

// Simple loading component without external dependencies
const SimpleLoader = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    fontFamily: 'Heebo, sans-serif'
  }}>
    טוען...
  </div>
);

// Lazy load pages
const Index = lazy(() => import('./pages/Index'));
const PricingPage = lazy(() => import('./pages/PricingPage').then(module => ({ default: module.PricingPage })));
const ArticlesPage = lazy(() => import('./pages/ArticlesPage').then(module => ({ default: module.ArticlesPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(module => ({ default: module.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(module => ({ default: module.TermsPage })));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<SimpleLoader />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;