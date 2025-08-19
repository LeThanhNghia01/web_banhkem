// Home.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { slideBanh1, slideBanh2, slideBanh3, donut1, donut2, donut3, donut4, donut5, donut6, donut7, chocolate1, chocolate2, chocolate3, chocolate4,nenbk1,nenbk2,nenbk3,nenbk4 } from "../../assets/images";

export default function Home() {
  // Banner
  const [currentSlide, setCurrentSlide] = useState(0);
  const bannerImagesRef = useRef(null);
  const bannerRef = useRef(null);
  const revealedElementsRef = useRef(new Set());

  const bgColors = ["#BB8843", "#721D64", "#615B1A"];
  const totalSlides = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    updateSlider();
  }, [currentSlide]);

  // Updated reveal on scroll functionality
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

    // Initialize reveal elements on page load
    revealOnScroll();
    checkReveal();
    
    // Add event listeners
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('scroll', checkReveal);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
      window.removeEventListener('scroll', checkReveal);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const updateSlider = () => {
    if (bannerImagesRef.current && bannerRef.current) {
      bannerImagesRef.current.style.left = `-${currentSlide * 100}%`;
      bannerRef.current.style.backgroundColor = bgColors[currentSlide];
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="banner_section">
        <div className="banner" ref={bannerRef}>
          <div className="banner_text">
            Thưởng thức
            <div id="flip">
              <div>
                <div>Sự tươi mát</div>
              </div>
              <div>
                <div>Sự ngọt ngào</div>
              </div>
              <div>
                <div>Niềm hạnh phúc</div>
              </div>
            </div>
            Mỗi miếng ăn!
          </div>
        </div>

        <div className="banner_images" ref={bannerImagesRef}>
          <div className="banner_image">
            <img src={slideBanh1} alt="Banner 1" className="banner_img" />
          </div>
          <div className="banner_image">
            <img src={slideBanh2} alt="Banner 2" className="banner_img2" />
          </div>
          <div className="banner_image">
            <img src={slideBanh3} alt="Banner 3" className="banner_img3" />
          </div>
        </div>

        {/* Slider Controls */}
        <div className="slider-controls">
          {[...Array(totalSlides)].map((_, index) => (
            <div
              key={index}
              className={`slider-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Content Products Section */}
      <div className="content_products">
        <div className="content_banhvong">
          <h1>Bánh Vòng</h1>
          <p>
            Những chiếc bánh vòng mềm mại, thơm lừng, phủ lớp đường ngọt
            ngào.
          </p>
        </div>
        <div className="banhvong">
          <div className="image_banhvong">
            <img
              src={chocolate1}
              alt="Chocolate"
              className="image_chocolate1 reveal"
            />
            <img
              src={chocolate2}
              alt="Chocolate"
              className="image_chocolate2 reveal"
            />
            <img
              src={chocolate3}
              alt="Chocolate"
              className="image_chocolate3 reveal"
            />
            <img
              src={chocolate4}
              alt="Chocolate"
              className="image_chocolate4 reveal"
            />
            <a href="#vd" className="link_donut">
              Xem Thêm
            </a>
          </div>
        </div>
        <div className="banhvongs">
          <div className="spacer"></div>
          <a href="#vd"> <img src={donut1} alt="donut" className="image_banhvongs"/></a>
          <a href="#vd"> <img src={donut2} alt="donut" className="image_banhvongs"/></a>
          <a href="#vd"> <img src={donut3} alt="donut" className="image_banhvongs"/></a>
          <a href="#vd"> <img src={donut4} alt="donut" className="image_banhvongs"/></a>
          <a href="#vd"> <img src={donut5} alt="donut" className="image_banhvongs"/></a>
          <a href="#vd"> <img src={donut6} alt="donut" className="image_banhvongs"/></a>
          <a href="#vd"> <img src={donut7} alt="donut" className="image_banhvongs"/></a>
        </div>
      </div>
      <div class="content_products_cake">
            <div class="content_cake">
                <h1>Bánh Kem</h1>
                <p>Bánh kem mềm mịn, ngọt ngào, được trang trí tinh tế.</p>
            </div>
            {/* <div class="cake">
                <div class="image_cakes">
                    <img src="/image/BanhKem/bk1.png" alt="Bánh Kem" class="img_cake reveal"/>
                    <img src="/image/BanhKem/bk2.png" alt="Bánh Kem" class="img_cake reveal"/>
                    <img src="/image/BanhKem/bk3.png" alt="Bánh Kem" class="img_cake reveal"/>
                    <img src="/image/BanhKem/bk4.png" alt="Bánh Kem" class="img_cake reveal"/>
                </div>
                <a href="#vd" class="link_cake ">Xem Thêm</a>
            </div> */}
           
       </div>
      
    </div>
  );
}