// ProductList.jsx
import React, { useState } from "react";
import { chocolate1, chocolate2, chocolate3, chocolate4, nenbk1, nenbk2, nenbk3 } from "../../../assets/images";
import "./ProductList.css";
export default function ProductList({ products, type, title, description }) {
  const [slideOutStates, setSlideOutStates] = useState({});

  // Function để handle click slide out effect
  const handleCardClick = (productType, id, event) => {
    event.preventDefault();
    const key = `${productType}-${id}`;
    setSlideOutStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  
  // Function để handle click nút "Xem Thêm" mà không đóng overlay
  const handleMoreInfoClick = (event) => {
    event.stopPropagation(); // Ngăn event bubbling
    // Thêm logic navigation hoặc modal ở đây nếu cần
  };

  // Render decorative images based on product type
  const renderDecorativeImages = () => {
    if (type === 'donuts') {
      return (
        <div className="image_banhvong">
          <img src={chocolate1} alt="Chocolate" className="image_chocolate1 reveal" />
          <img src={chocolate2} alt="Chocolate" className="image_chocolate2 reveal" />
          <img src={chocolate3} alt="Chocolate" className="image_chocolate3 reveal" />
          <img src={chocolate4} alt="Chocolate" className="image_chocolate4 reveal" />
          <a href="#vd" className="link_donut">Xem Thêm</a>
        </div>
      );
    } else if (type === 'cakes') {
      return (
        <div className="image_cake">
          <img src={nenbk1} alt="Bánh Kem" className="img_cake reveal"/>
          <img src={nenbk2} alt="Bánh Kem" className="img_cake reveal"/>
          <img src={nenbk3} alt="Bánh Kem" className="img_cake reveal"/>
          <a href="#vd" className="link_cake">Xem Thêm</a>
        </div>
      );
    }
    return null;
  };

  const containerClass = type === 'donuts' ? 'content_products' : 'content_products_cake';
  const sectionClass = type === 'donuts' ? 'content_banhvong' : 'content_cake';
  const wrapperClass = type === 'donuts' ? 'banhvong' : 'cake';
  const itemsClass = type === 'donuts' ? 'banhvongs' : 'cakes';
  const imageClass = type === 'donuts' ? 'image_banhvongs' : 'image_cakes';

  return (
    <div className={containerClass}>
      <div className={sectionClass}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      
      <div className={wrapperClass}>
        {renderDecorativeImages()}
      </div>
      
      <div className={itemsClass}>
        {type === 'donuts' && <div className="spacer"></div>}
        
        {products.map((product) => (
          <div 
            key={product.id} 
            className={`item-wrapper ${slideOutStates[`${type}-${product.id}`] ? 'slide-out' : ''}`}
            onClick={(e) => handleCardClick(type, product.id, e)}
          >
            <img
              src={product.image}
              alt={product.name}
              className={imageClass}
            />
            <div className="info-overlay">
              <h3>{product.name}</h3>
              <p>{product.description.length > 80 ? 
                  `${product.description.substring(0, 40)}...` : 
                  product.description
              }</p>
              <div className="price">{product.price}</div>
              <div className="moreinfo">
                <a href="#vd" onClick={handleMoreInfoClick}>Xem Thêm</a>
              </div>
            </div>
          </div>
        ))}

        <div className={type === 'cakes' ? 'view-more-arrow' : ''}>
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
  );
}