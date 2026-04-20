import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Philosophy from './components/Philosophy';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import Membership from './components/Membership';
import Transformations from './components/Transformations';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import CursorGlow from './components/CursorGlow';

export default function App() {
  return (
    <>
      <PageLoader />
      <WhatsAppFloat />
      <CursorGlow />
      <Navbar />
      <Hero />
      <StatsBar />
      <Philosophy />
      <Programs />
      <Trainers />
      <Membership />
      <Transformations />
      <Gallery />
      <BookingForm />
      <MapSection />
      <Footer />
    </>
  );
}
