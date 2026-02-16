import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';

import ScrollToTop from './components/ScrollToTop';
import GlobalContactSection from './components/GlobalContactSection';

import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Handle all loading (Initial and Product Detail navigation)
  useEffect(() => {
    // Only trigger loading for initial hit OR when navigating to a product detail page
    if (loading || location.pathname.startsWith('/products/')) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <>
      {loading && <LoadingScreen />}

      <div
        className="app-root"
        key={location.pathname} // Critical: forces React to swap components properly
        style={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.4s ease-in-out',
          height: '100%'
        }}
      >
        <ScrollToTop />
        <div className="app">
          <Navbar />
          <main>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <GlobalContactSection />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
