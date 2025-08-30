// OtherChoices.jsx
import React from "react";
import { posterdrink, posterbanh, postercookies } from "../../../assets/images";
import DrinksSlider from "../DrinksSlider/DrinksSlider";
import CookiesSection from "../CookiesSection/CookiesSection";
import CustomCake from "../CustomCake/CustomCake";
import "./OtherChoices.css";

export default function OtherChoices({ drinks }) {
  return (
    <div className="content_otherchoices">
      <div className="content_otherchoices_text">
        <div className="otherchoices_text">
          <h1>Chúng tôi mang đến hương vị ngọt ngào trong từng sản phẩm. 
          Từ ly nước mát lành, chiếc bánh xinh xắn đến cookies giòn tan - tất cả đều được làm bằng tình yêu với bánh ngọt.</h1>
        </div>   
        <div className="otherchoices_text_img">
          <img src={posterdrink} className="decor_img drink reveal"/>
          <img src={posterbanh} className="decor_img banh reveal"/>
          <img src={postercookies} className="decor_img cookies reveal"/>
        </div>
      </div>
      
      <DrinksSlider drinks={drinks} />
      <CustomCake />
      <CookiesSection />
    </div>
  );
}