// CustomCake.jsx
import React from "react";
import "./CustomCake.css";
export default function CustomCake() {
  const videoUrl = "https://res.cloudinary.com/dfngbzim8/video/upload/v1756197653/quytrinh1_is290r.mp4";

  return (
    <div className="content_customcake">
      <div className="content_customcake_video">
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
      </div>
      <a href="#vd" className="linkcutomscake">🍰 Bánh theo yêu cầu</a>
    </div>
  );
}