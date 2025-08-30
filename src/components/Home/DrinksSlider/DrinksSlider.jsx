// DrinksSlider.jsx
import React, { useState, useEffect } from "react";
import "./DrinksSlider.css";
export default function DrinksSlider({ drinks }) {
  const [currentDrinkSlide, setCurrentDrinkSlide] = useState(0);

  // Drinks slider functions
  const nextDrinkSlide = () => {
    setCurrentDrinkSlide((prev) => (prev + 1) % drinks.length);
  };

  const prevDrinkSlide = () => {
    setCurrentDrinkSlide((prev) => (prev - 1 + drinks.length) % drinks.length);
  };

  // Auto-slide cho drinks
  useEffect(() => {
    const drinkInterval = setInterval(() => {
      nextDrinkSlide();
    }, 3000); // Chuyển slide mỗi 3 giây
    return () => clearInterval(drinkInterval);
  }, [currentDrinkSlide]);

  return (
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
                <button className="drink_cart_btn">
                  <i className="fa-solid fa-cart-shopping"></i> 
                </button>
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
  );
}