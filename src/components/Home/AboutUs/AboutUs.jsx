// AboutUs.jsx
import React from "react";
import { nuoc, socola, donutduoi, donuttren, banhnho } from "../../../assets/images";
import "./AboutUs.css";
export default function AboutUs() {
  return (
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
  );
}