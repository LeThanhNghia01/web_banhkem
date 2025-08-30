// Home.jsx - Updated with Components
import React, { useEffect, useRef } from "react";
import donuts from "../../data/mockProducts";
import cakes from "../../data/mockCakes";
import drinks from "../../data/mockDrinks";
import "./Home.css";

// Import các components
import Banner from "./Banner/Banner";
import AboutUs from "./AboutUs/AboutUs";
import ProductList from "./ProductList/ProductList";
import OtherChoices from "./OtherChoices/OtherChoices";
import CustomCake from "./CustomCake/CustomCake";
import CookiesSection from "./CookiesSection/CookiesSection";
import Footer from "./Footer/Footer";

export default function Home() {
  const revealedElementsRef = useRef(new Set());

  useEffect(() => {
    function revealOnScroll() {
      let reveals = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    
    function checkReveal() {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      
      reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const elementVisible = 150;
        
        if ((elementTop < windowHeight - elementVisible) && (elementBottom > elementVisible)) {
          element.classList.add('active');
          revealedElementsRef.current.add(element);
        } else {
          if (revealedElementsRef.current.has(element)) {
            element.classList.remove('active');
          }
        }
      });
    }

    revealOnScroll();
    checkReveal();
    
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('scroll', checkReveal);
    
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
      window.removeEventListener('scroll', checkReveal);
    };
  }, []);

  return (
    <div>
      <Banner />
      <AboutUs />
      <ProductList 
        products={donuts}
        type="donuts"
        title="Bánh Vòng"
        description="Những chiếc bánh vòng mềm mại, thơm lừng, phủ lớp đường ngọt ngào."
      />
      <OtherChoices drinks={drinks} />
      <ProductList 
        products={cakes}
        type="cakes"
        title="Bánh Kem"
        description="Bánh kem mềm mịn, ngọt ngào, được trang trí tinh tế."
      />
      <Footer />
    </div>
  );
}