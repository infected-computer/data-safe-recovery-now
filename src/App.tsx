import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={
        <div style={{ 
          padding: '40px', 
          textAlign: 'center' as const,
          fontFamily: 'Heebo, sans-serif'
        }}>
          <h1 style={{ color: '#1e3a8a', marginBottom: '20px' }}>
            404 - הדף לא נמצא
          </h1>
          <p style={{ color: '#6b7280' }}>
            הדף שחיפשת לא קיים
          </p>
          <a href="/" style={{ 
            color: '#25D366', 
            textDecoration: 'none',
            fontWeight: 'bold'
          }}>
            חזור לדף הבית
          </a>
        </div>
      } />
    </Routes>
  </BrowserRouter>
);

export default App;