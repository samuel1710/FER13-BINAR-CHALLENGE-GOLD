import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHeader from './header/Navbar';
import styles from './styles/styles.css';
import SectionMobil from './pages/HeroSection';
import SectionServices from './pages/Services';
import WhyUsSection from './pages/WhyUs';
import TestimonialCarousel from './pages/Testimony';
import BannerSection from './pages/Banner';
import FaqSection from './pages/Faq';
import SectionFooter from './footer/Footer';



function App() {
  return (
    <div>

   
 <div className='customNavbar'>
   <NavbarHeader/>
   <SectionMobil/>
 
 </div>
 <SectionServices/>
 <WhyUsSection/>
 <TestimonialCarousel/>
 <BannerSection/>
 <FaqSection/>
 <SectionFooter/>

 </div>

  )
}


export default App;
