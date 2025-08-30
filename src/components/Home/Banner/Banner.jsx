// Banner.jsx
import React, { useState, useEffect, useRef } from "react";
import { slideBanh1, slideBanh2, slideBanh3, chocolate1, chocolate2, chocolate3, chocolate4,
  allmatcha, botmatcha, tra, blueberry, allblueberry, blueberrycream, banh, creamcheese, slicelemoncake } from "../../../assets/images";
import "./Banner.css";
export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const bannerRef = useRef(null);
  const [animatingItems, setAnimatingItems] = useState(false);
  
  const bgColors = ["#BB8843", "#721D64", "#615B1A"];
  const totalSlides = 3;

  // Banner content data for each slide
  const bannerContentData = [
    {
      // Slide 1 - Cake content
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
          subtitle: "Xứng đáng từng miếng.",
          alt: "Giá bánh kem"
        }
      ]
    },
    {
      // Slide 2 - Blueberry cake content  
      items: [
        {
          image: blueberry,
          title: "Việt quất tươi",
          subtitle: "Tạo vị chua ngọt tự nhiên",
          alt: "Blueberry"
        },
        {
          image: blueberrycream,
          title: "Hương vị tươi mát",
          subtitle: "Kem mịn, thơm ngon hấp dẫn",
          alt: "Donut"
        },
        {
          image: allblueberry,
          title: "Chỉ từ 35K",
          subtitle: "Thấm đẫm từng miếng.",
          alt: "Giá cả"
        }
      ]
    },
    {
      // Slide 3 - Matcha content
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

  const goToSlideWithAnimation = (index) => {
    setAnimatingItems(false); // Reset animation
    setCurrentSlide(index);
    
    // Trigger animation sau khi slide đã được set
    setTimeout(() => {
      setAnimatingItems(true);
    }, 100);
  };

  return (
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
            onClick={() => goToSlideWithAnimation(index)}
          >
            <img src={image} alt={`Banner ${index + 1}`} className="thumbnail-img" />
          </div>
        ))}
      </div>
    </div>
  );
}