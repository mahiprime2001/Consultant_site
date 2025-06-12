import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Blog } from './components/Blog';
import { BlogPost } from './components/BlogPost';
import { AdminPanel } from './components/AdminPanel';

function HomePage() {
  return (
    <Box>
      <Hero />
      <Services />
      <About />
      <Experience />
      <Testimonials />
      <Contact />
    </Box>
  );
}

function App() {
  return (
    <Router>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;