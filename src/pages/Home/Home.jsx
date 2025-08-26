// Home.jsx - Updated with Drinks Slider
import React, { useState, useEffect, useRef } from "react";
import donuts from "../../data/mockProducts";
import cakes from "../../data/mockCakes";
import drinks from "../../data/mockDrinks"
import "./Home.css";
import { slideBanh1, slideBanh2, slideBanh3, chocolate1, chocolate2, chocolate3, chocolate4,nenbk1,nenbk2,nenbk3, 
  allmatcha,
  botmatcha,tra,blueberry,allblueberry,blueberrycream ,banh,creamcheese,slicelemoncake,  nuoc,
  banhnho,
  socola,
  donuttren,
  donutduoi,cookies,} from "../../assets/images";
  
export default function Home() {
  // Banner state
  const [currentSlide, setCurrentSlide] = useState(0);
  const bannerRef = useRef(null);
  const revealedElementsRef = useRef(new Set());
  const [animatingItems, setAnimatingItems] = useState(false);
  const videoUrl = "https://res.cloudinary.com/dfngbzim8/video/upload/v1756197653/quytrinh1_is290r.mp4";
  // Slide out state cho donuts
  const [slideOutStates, setSlideOutStates] = useState({});
  
  // Drinks slider state
  const [currentDrinkSlide, setCurrentDrinkSlide] = useState(0);
  
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
        subtitle: "Xứng đáng từng miếng.",
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

  // Function để handle click slide out effect
  const handleCardClick = (type, id, event) => {
    event.preventDefault();
    const key = `${type}-${id}`;
    setSlideOutStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  
  // Function để handle click nút "Xem Thêm" mà không đóng overlay
  const handleMoreInfoClick = (event) => {
    event.stopPropagation(); // Ngăn event bubbling
    // Thêm logic navigation hoặc modal ở đây nếu cần
  };

  // Drinks slider functions
  const nextDrinkSlide = () => {
    setCurrentDrinkSlide((prev) => (prev + 1) % drinks.length);
  };

  const prevDrinkSlide = () => {
    setCurrentDrinkSlide((prev) => (prev - 1 + drinks.length) % drinks.length);
  };

  const goToDrinkSlide = (index) => {
    setCurrentDrinkSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Auto-slide cho drinks
  useEffect(() => {
    const drinkInterval = setInterval(() => {
      nextDrinkSlide();
    }, 3000); // Chuyển slide mỗi 3 giây
    return () => clearInterval(drinkInterval);
  }, [currentDrinkSlide]);
  
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
  //video
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
              onClick={() => goToSlideWithAnimation(index)}
            >
              <img src={image} alt={`Banner ${index + 1}`} className="thumbnail-img" />
            </div>
          ))}
        </div>
      </div>
        {/* About Us Section */}
        <div className="about_section">
          <div className="about_content">
            <h1>"YUM" A Journey to Sweetness</h1>
            <div className="about_image">
              <img src={nuoc} alt="About Us" className="about_img_nuoc reveal" />
              <img src={socola} alt="About Us" className="about_img_socola reveal" />
              <img src={donutduoi} alt="About Us" className="about_img_donutduoi reveal" />
              <img src={donuttren} alt="About Us" className="about_img_donuttren reveal" />
              <img src={banhnho} alt="About Us" className="about_img_banhnho reveal" />
            </div>
            <p>
               "Tại YUM, mỗi chiếc bánh không chỉ là món ngọt, mà còn là câu chuyện của đam mê và sự tận tâm. Hành trình vị ngọt của chúng tôi bắt đầu từ tình yêu hương vị và mong muốn mang niềm vui đến từng khoảnh khắc của bạn."
            </p>  
            <a href="#vd" className="about_link">Đặt ngay  <i className="fa-solid fa-cart-shopping"></i></a>  
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
          {donuts.map((donut) => (
            <div 
              key={donut.id} 
              className={`item-wrapper ${slideOutStates[`donut-${donut.id}`]? 'slide-out' : ''}`}
              onClick={(e) => handleCardClick('donut', donut.id, e)}
            >
              <img
                src={donut.image}
                alt={donut.name}
                className="image_banhvongs"
              />
              <div className="info-overlay">
                <h3>{donut.name}</h3>
                <p>{donut.description.length > 80 ? 
                    `${donut.description.substring(0, 40)}...` : 
                    donut.description
                }</p>
                <div className="price">{donut.price}</div>
                  <div className ="moreinfo">
                  <a href="#vd" onClick={handleMoreInfoClick}>Xem Thêm</a>
                  </div>
              </div>
            </div>
          ))}

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
      
      {/* Drinks và lựa chọn khác với Drinks Slider */}
      <div className="content_otherchoices">
        <div className="content_drinks">
       
          <div className="drinks_slider">
            <div className="drinks_container">
       
              {drinks.map((drink, index) => (
                <div 
                  key={drink.id}
                  className={`drink_slide ${index === currentDrinkSlide ? 'active' : ''}`}
                >
                  <img 
                    src={drink.image} 
                    alt={drink.name}
                    className="image_drink"
                  />
                  <div className="drink_info">
                    <p className="drink_price">{drink.price.toLocaleString('vi-VN')}₫</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation controls */}
            <div className="drinks_navigation">
              <button 
                className="drinks_nav_btn prev" 
                onClick={prevDrinkSlide}
                aria-label="Previous drink"
              >
                &#8249;
              </button>
              <button 
                className="drinks_nav_btn next" 
                onClick={nextDrinkSlide}
                aria-label="Next drink"
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
        
        <div className="content_customcake">
          <h1>Bánh theo yêu cầu</h1>
          <video 
            className="custom_cake_video"
            autoPlay 
            muted 
            loop 
            playsInline
            preload="auto"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          <a href="#vd" className="linkcutomscake">Liên hệ ngay</a>
        </div>
        
        <div className="content_cookies">
   
            <a href="#vd" className="linkcookies">Combo bánh quy</a>
            <img src={cookies} className="img_cookies" />
        </div>
      </div>

      {/* Content Products Section */}
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
          {cakes.map((cake)=>(
          <div 
            key={cake.id}
          className={`item-wrapper ${slideOutStates[`cake-${cake.id}`] ? 'slide-out' : ''}`}
          onClick={(e) => handleCardClick('cake', cake.id, e)}
          >
            <img
              src={cake.image}
              alt={cake.name}
              className="image_cakes"
            />
            <div className="info-overlay">
              <h3>{cake.name}</h3>
              <p>{cake.description.length > 80 ? 
                  `${cake.description.substring(0, 40)}...` :
                  cake.description
              }</p>
              <div className="price">{cake.price}</div>
                <div className ="moreinfo">
                <a href="#vd" onClick={handleMoreInfoClick}>Xem Thêm</a>
                </div>
            </div>
          </div>
          ))}
       
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