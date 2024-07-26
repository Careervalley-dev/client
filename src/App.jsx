import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import { Route, Routes, Outlet, useLocation } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import ServicesPage from './pages/ServicesPage';
import ExploreCityPage  from './pages/ExploreCityPage';
import BaPage from './pages/Course/BaPage';
import BbaPage from './pages/Course/BbaPage';
import BcaPage from './pages/Course/BcaPage';
import BcomPage from './pages/Course/BcomPage';
import BscPage from './pages/Course/BscPage';
import Btech from './pages/Course/Btech';
import MbaPage from './pages/Course/MbaPage';
import MtechPage from './pages/Course/MtechPage';
import CatExam from './pages/Exams/CatExam';
import AuthPage from './pages/AuthPage';
import Team from './pages/Team';
import Experts from './pages/Experts';
import Colleges from './pages/Colleges';
import LlbPage from './pages/Course/LlbPage';
import Courses from './pages/Courses';


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

  // /auth/reset-password/:userId/:token
  return (
    <>
      {!isAuthPage && <Header />}
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
        
        <Route path='/course/mba/exams' element={<CatExam />} />

        {/* <Route path='/auth/' element={<Outlet />}>
          <Route index element={<LoginPage />} />
        </Route> */}
        <Route path="/auth/*" element={<AuthPage />}/>
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  )
}

export default App
