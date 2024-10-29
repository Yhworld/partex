import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './pages/ScrollToTop';
import Footer from './pages/Footer';
import WhatsAppButton from './components/floating/WhatsappButton';
import ScrollToTopButton from './components/floating/ScrollToTopButton';
import Loader from './components/Loader/Loader';
import Contact from './components/Contact/Contact';

const Homepage = lazy(() => import('./pages/Homepage'));
const Products = lazy(() => import('./components/Products/products'));
const ProductPage = lazy(() => import('./components/Products/ProductPage'));
const AboutPage = lazy(() => import('./components/About/AboutPage'));
const GetQuotationForm = lazy(() => import('./components/Quotation/Quotation'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <div>
      <Helmet>
        <title>Partex - Premium Halal Meat Exports</title>
        <meta
          name="description"
          content="Partex supplies premium halal meat from Kenya to Gulf and North African markets. Discover our quality beef, chicken, lamb, goat, and fish."
        />
        <meta property="og:title" content="Partex - Premium Halal Meat Exports" />
        <meta
          property="og:description"
          content="Exporting high-quality halal meat products from Kenya to Gulf countries. Reliable and fresh meat supplies tailored to your needs."
        />
        <meta property="og:image" content={`${process.env.PUBLIC_URL}/logo192.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/logo192.png`} />
      </Helmet>

      <Navbar />
      <ScrollToTop />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>Partex - Your Source for Premium Halal Meat Exports</title>
                  <meta property="og:title" content="Partex - Your Source for Premium Halal Meat Exports" />
                </Helmet>
                <Homepage />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Helmet>
                  <title>About Partex - Trusted Halal Meat Exporter</title>
                  <meta property="og:title" content="About Partex - Trusted Halal Meat Exporter" />
                </Helmet>
                <AboutPage />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <Helmet>
                  <title>Explore Our Halal Meat Products | Partex</title>
                  <meta property="og:title" content="Explore Our Halal Meat Products | Partex" />
                </Helmet>
                <Products />
              </>
            }
          />
          <Route
            path="/products/:productName"
            element={
              <>
                <Helmet>
                  <title>Product Details - Partex</title>
                  <meta property="og:title" content="Product Details - Partex" />
                </Helmet>
                <ProductPage />
              </>
            }
          />
          <Route
            path="/get-quotation"
            element={
              <>
                <Helmet>
                  <title>Request a Quotation - Partex</title>
                  <meta property="og:title" content="Request a Quotation - Partex" />
                </Helmet>
                <GetQuotationForm />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Helmet>
                  <title>Contact Us - Partex</title>
                  <meta property="og:title" content="Contact Us - Partex" />
                </Helmet>
                <Contact />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Helmet>
                  <title>Page Not Found - Partex</title>
                  <meta property="og:title" content="Page Not Found - Partex" />
                </Helmet>
                <NotFound />
              </>
            }
          />
        </Routes>
      </Suspense>

      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
