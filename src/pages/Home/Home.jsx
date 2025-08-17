// Home.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { slideBanh1, slideBanh2, slideBanh3 } from "../../assets/images";

export default function Home() {
  //banner
  const [currentSlide, setCurrentSlide] = useState(0);
  const bannerImagesRef = useRef(null);
  const bannerRef = useRef(null);

  const bgColors = ['#BB8843', '#721D64', '#615B1A'];
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
    <div className="banner_section">
      <div className="banner" ref={bannerRef}>
        <div className="banner_text">
          Thưởng thức
          <div id="flip">
            <div><div>Sự tươi mát</div></div>
            <div><div>Sự ngọt ngào</div></div>
            <div><div>Niềm hạnh phúc</div></div>
          </div>
          Mỗi miếng ăn!
        </div>
      </div>

      <div className="banner_images" ref={bannerImagesRef}>
        <div className="banner_image">
          <img src={slideBanh1} alt="Banner Image" className="banner_img" />
        </div>
        <div className="banner_image">
          <img src={slideBanh2} alt="Banner Image" className="banner_img2" />
        </div>
        <div className="banner_image">
          <img src={slideBanh3} alt="Banner Image" className="banner_img3" />
        </div>
      </div>

      {/* Slider Controls */}
      <div className="slider-controls">
        {[...Array(totalSlides)].map((_, index) => (
          <div
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
    //thêm content_products
  );
}