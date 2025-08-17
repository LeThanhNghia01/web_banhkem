// Home.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { slideBanh1, slideBanh2, slideBanh3, donut1, donut2, donut3, donut4, donut5, donut6, donut7 ,chocolate1,chocolate2,chocolate3,chocolate4} from "../../assets/images";

export default function Home() {
  // Banner
  const [currentSlide, setCurrentSlide] = useState(0);
  const bannerImagesRef = useRef(null);
  const bannerRef = useRef(null);

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
        <div className="content_products_donut" id="donut">
          <div className="content_banhvong">
            <h1>Bánh Vòng</h1>
            <p>
              Những chiếc bánh vòng mềm mại, thơm lừng, phủ lớp đường ngọt
              ngào sẽ mang đến cho bạn trải nghiệm ngọt ngào khó quên.
            </p>
          </div>

          {/* <div className="banhvong">
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
            </div>
            <a href="#vd" className="link_donut">
              Xem Thêm
            </a>
          </div> */}
{/* 
          <div className="banhvongs">
            {[donut1, donut2, donut3, donut4, donut5, donut6, donut7].map(
              (donut, i) => (
                <a href="#vd" key={i}>
                  <img src={donut} alt="donut" className="image_banhvongs" />
                </a>
              )
            )}
          </div> */}
        </div>
      </div>

      {/* Nếu muốn thêm section bánh kem thì mở comment bên dưới */}
      {/*
      <div className="content_products_cake" id="cake">
        <div className="content_cake">
          <h1>Bánh Kem</h1>
          <p>Bánh kem mềm mịn, ngọt ngào, được trang trí tinh tế.</p>
        </div>
        <div className="cake">
          <div className="image_cakes">
            <img src="/image/BanhKem/bk1.png" alt="Bánh Kem" className="img_cake reveal" />
            <img src="/image/BanhKem/bk2.png" alt="Bánh Kem" className="img_cake reveal" />
            <img src="/image/BanhKem/bk3.png" alt="Bánh Kem" className="img_cake reveal" />
            <img src="/image/BanhKem/bk4.png" alt="Bánh Kem" className="img_cake reveal" />
          </div>
          <a href="#vd" className="link_cake">Xem Thêm</a>
        </div>
        <div className="cakes">
          <a href="#vd"><img src="/image/BanhKem/bktang.jpg" alt="Bánh kem" className="image_banhvongs" /></a>
          <a href="#vd"><img src="/image/BanhKem/bkdau.jpg" alt="Bánh kem" className="image_banhvongs" /></a>
          <a href="#vd"><img src="/image/BanhKem/bkdg.jpg" alt="Bánh kem" className="image_banhvongs" /></a>
          <a href="#vd"><img src="/image/BanhKem/bkmix.jpg" alt="Bánh kem" className="image_banhvongs" /></a>
          <a href="#vd"><img src="/image/BanhKem/bkgd.jpg" alt="Bánh kem" className="image_banhvongs" /></a>
          <a href="#vd"><img src="/image/BanhKem/bkvq.jpg" alt="Bánh kem" className="image_banhvongs" /></a>
          <a href="#vd"><img src="/image/BanhKem/bkjj.jpg" alt="Bánh kem" className="image_banhvongs" /></a>
          <a href="#vd"><img src="/image/BanhKem/bkhh.jpg" alt="Bánh kem" className="image_banhvongs" /></a>
        </div>
      </div>
      */}
    </div>
  );
}
