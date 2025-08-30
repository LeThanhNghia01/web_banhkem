// CookiesSection.jsx
import React from "react";
import { cookies } from "../../../assets/images";
import "./CookiesSection.css";
export default function CookiesSection() {
  return (
    <div className="content_cookies">
      <a href="#vd" className="linkcookies">🍪 Combo bánh quy</a>
      <img src={cookies} className="img_cookies" />
    </div>
  );
}