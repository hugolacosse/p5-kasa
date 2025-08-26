import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.scss';
// pages/
import Home from './pages/Home/Home.jsx';
import Logement from './pages/Logement/Logement.jsx';
import About from './pages/About/About.jsx';
import PageNotFound from './pages/PageNotFound/PageNotFound.jsx';
// components/
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
