// Home.jsx
import React from "react";
import "./Home.css";
import { slideBanh1, slideBanh2, slideBanh3, bg } from "../../assets/images";

export default function Home() {
  return (
    <div 
      className="banner_section" 
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="banner">
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

      <div className="banner_images">
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
    </div>
  );
}