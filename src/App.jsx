import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import { Route, Routes, useLocation } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import ServicesPage from './pages/ServicesPage';
import ExploreCityPage from './pages/ExploreCityPage';
import AuthPage from './pages/AuthPage';
import Team from './pages/Team';
import Experts from './pages/Experts';
import Colleges from './pages/Colleges';
import Courses from './pages/Courses';
import { useState, useEffect } from 'react';
import Loader2 from './components/common/loader2/Loader2';


const AuthPages = [
  '/auth/signup',
  '/auth/login',
  '/auth/forgot-password',
  '/auth/reset-password',
  '/auth/validate-otp',
];

function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isAuthPage = AuthPages.some(page => currentPath.startsWith(page));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 2 seconds delay for each route change

    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (loading) {
    return (
      <Loader2 />
    );
  }

  return (
    <>
      {!isAuthPage && <Header  />}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact_us' element={<ContactPage />} />
          <Route path='/events' element={<EventsPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/explorecity' element={<ExploreCityPage />} />
          <Route path='/team' element={<Team />} />
          <Route path='/experts' element={<Experts />} />

          <Route path='/colleges/*' element={<Colleges />} />
          <Route path='/courses/*' element={<Courses />} />

          <Route path="/auth/*" element={<AuthPage />} />
        </Routes>
      {!isAuthPage && <Footer />}
    </>
  )
}

export default App
