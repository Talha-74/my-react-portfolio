import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import ThemeContextProvider from './contexts/ThemeContext';
import reportWebVitals from './reportWebVitals';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);

reportWebVitals();
