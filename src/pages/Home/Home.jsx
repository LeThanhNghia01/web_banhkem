// Home.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { slideBanh1, slideBanh2, slideBanh3, donut1, donut2, donut3, donut4, donut5, donut6, donut7, chocolate1, chocolate2, chocolate3, chocolate4,nenbk1,nenbk2,nenbk3, bkdau,
  bkdg,
  bkmix,
  bkgd,
  bktang,
  bkvq,
  bkjj,
  bkhh,
  allmatcha,
  botmatcha,tra,blueberry,allblueberry,blueberrycream ,banh,creamcheese,slicelemoncake} from "../../assets/images";
  
export default function Home() {
  // Banner state
  const [currentSlide, setCurrentSlide] = useState(0);
  const bannerRef = useRef(null);
  const revealedElementsRef = useRef(new Set());
  const [animatingItems, setAnimatingItems] = useState(false);
  const bgColors = ["#BB8843", "#721D64", "#615B1A"];
  const totalSlides = 3;

  // Banner content data for each slide
  const bannerContentData = [
    {
    // Slide  - Cake content
    items: [
      {
        image: creamcheese,
        title: "Kem phô mai chanh",
        subtitle: "Kem tươi, mềm mịn tinh tế",
        alt: "Bánh kem"
        
      },
      {
        image: banh,
        title: "Cốt bánh ",
        subtitle: "Bánh bông lan mềm ẩm, nhẹ xốp",
        alt: "Bánh dâu"
      },
      {
        image: slicelemoncake,
        title: "Từ 40K",
        subtitle: "Xứng đáng từng miếng.",
        alt: "Giá bánh kem"
      }
    ]
    },
    {
      // Slide  - Blueberry cake content  
      items: [
        {
          image: blueberry,
          title: "Việt quất tươi",
          subtitle: "Tạo vị chua ngọt tự nhiên",
          alt: "Blueberry"
        },
        {
          image: blueberrycream,
          title: "Hương vị tươi mát",
          subtitle: "Kem mịn, thơm ngon hấp dẫn",
          alt: "Donut"
        },
        {
          image: allblueberry,
          title: "Chỉ từ 35K",
          subtitle: "Thấm đẫm từng miếng.",
          alt: "Giá cả"
        }
      ]
    },
    {
        // Slide  - Matcha content
        items: [
          {
            image: botmatcha,
            title: "Thành phần chính",
            subtitle: "Bột matcha & Cream cheese",
            alt: "Nguyên liệu"
          },
          {
            image: tra,
            title: "Trà xanh",
            subtitle: "Hài hoà hơn với trà xanh",
            alt: "Trà xanh"
          },
          {
            image: allmatcha,
            title: "Chỉ khoảng 35K",
            subtitle: "Một miếng 35k, đủ vị matcha.",
            alt: "Giá cả"
          }
        ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);
  useEffect(() => {
    // Reset animation khi chuyển slide
    setAnimatingItems(false);
    
    // Trigger animation sau khi background đã thay đổi
    const timer = setTimeout(() => {
      setAnimatingItems(true);
    }, 200); // Delay nhỏ để background transition hoàn thành trước
    
    return () => clearTimeout(timer);
  }, [currentSlide]);
  
  useEffect(() => {
    updateBackground();
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const updateBackground = () => {
    if (bannerRef.current) {
      bannerRef.current.style.backgroundColor = bgColors[currentSlide];
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

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

    revealOnScroll();
    checkReveal();
    
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('scroll', checkReveal);
    
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
      window.removeEventListener('scroll', checkReveal);
    };
  }, []);
  const goToSlideWithAnimation = (index) => {
    setAnimatingItems(false); // Reset animation
    setCurrentSlide(index);
    
    // Trigger animation sau khi slide đã được set
    setTimeout(() => {
      setAnimatingItems(true);
    }, 100);
  };
  return (
    <div>
      {/* Banner Section với Fade Effect */}
      <div className="banner_section">
        <div className="banner" ref={bannerRef}>
          <div className="banner_content">
            {bannerContentData[currentSlide].items.map((item, index) => (
              <div 
                key={`${currentSlide}-${index}`} 
                className={`banner_content_item ${animatingItems ? 'active' : ''}`}
                style={{
                  transitionDelay: animatingItems ? `${index * 0.2 + 0.2}s` : '0s'
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="banner_content_image" 
                />
                <div className="banner_content_texts">
                  <h2 className="banner_content_text">{item.title}</h2>
                  <p className="banner_content_subtext">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="banner_images">
          <div className={`banner_image ${currentSlide === 0 ? 'active' : ''}`}>
            <img src={slideBanh1} alt="Banner 1" className="banner_img" />
          </div>
          <div className={`banner_image ${currentSlide === 1 ? 'active' : ''}`}>
            <img src={slideBanh2} alt="Banner 2" className="banner_img2" />
          </div>
          <div className={`banner_image ${currentSlide === 2 ? 'active' : ''}`}>
            <img src={slideBanh3} alt="Banner 3" className="banner_img3" />
          </div>
        </div>

        {/* Slider Controls */}
        <div className="slider-controls">
          {[slideBanh1, slideBanh2, slideBanh3].map((image, index) => (
            <div
              key={index}
              className={`slider-thumbnail ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlideWithAnimation(index)} // Sử dụng function mới
            >
              <img src={image} alt={`Banner ${index + 1}`} className="thumbnail-img" />
            </div>
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
          <a href="#vd" className="arrow-link">
          <div className="arrow-circle">
                    <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>     
                  <span className="arrow-text">Xem thêm</span>
             </a>
        </div>
      </div>
      
      <div className="content_products_cake">
            <div className="content_cake">
                <h1>Bánh Kem</h1>
                <p>Bánh kem mềm mịn, ngọt ngào, được trang trí tinh tế.</p>
            </div>
            <div className="cake">
                <div className="image_cake">
                    <img src={nenbk1} alt="Bánh Kem" className="img_cake reveal"/>
                    <img src={nenbk2} alt="Bánh Kem" className="img_cake reveal"/>
                    <img src={nenbk3} alt="Bánh Kem" className="img_cake reveal"/>
                </div>
                <a href="#vd" className="link_cake ">Xem Thêm</a>
            </div>
              <div className="cakes">
                  <a href="#vd"><img src={bkdau} alt="Bánh kem" className="image_cakes"/></a>
                  <a href="#vd"><img src={bkvq} alt="Bánh kem" className="image_cakes"/></a>
                  <a href="#vd"><img src={bkgd} alt="Bánh kem" className="image_cakes"/></a>
                  <a href="#vd"><img src={bkhh} alt="Bánh kem" className="image_cakes"/></a>
                  <a href="#vd"><img src={bkjj} alt="Bánh kem" className="image_cakes"/></a>
                  <a href="#vd"><img src={bkmix} alt="Bánh kem" className="image_cakes"/></a>
                  <a href="#vd"><img src={bktang} alt="Bánh kem" className="image_cakes"/></a>
                  <div className="view-more-arrow">
                  <a href="#vd" className="arrow-link">
                    <div className="arrow-circle">
                      <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="arrow-text">Xem thêm</span>
                  </a>
            </div>
            </div>
       </div>
      
    </div>
  );
}