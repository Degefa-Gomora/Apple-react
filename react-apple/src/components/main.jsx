import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import AlertSection from './AlertSection.jsx'
import SectionOne from './SectionOne.jsx'
import SectionTwo from './SectionTwo.jsx'
import SectionThree from './SectionThree.jsx'
import SectionFour from './SectionFour.jsx'
import SectionFive from './SectionFive.jsx'
import SectionSix from "./SectionSix.jsx";



// Import CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../commonResource/css/styles.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";






createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Header />
    <AlertSection />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
    <Footer />
  </StrictMode>,
)
