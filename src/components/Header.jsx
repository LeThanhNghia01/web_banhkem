import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import { banh1 } from "../assets/images";
import "../components/Header.css";

export default function Header() {
  // Thêm state để quản lý menu mobile
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="home">
          <Link to="/" className="logo_home0">
            <img src={banh1} className="img_logo_home" alt="YUM"/>
            YUM
          </Link>
          
          {/* Nút hamburger */}
          <div
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>
        </div>
        
        {/* Navigation links với class động */}
        <div className={`nav_links ${menuOpen ? 'active' : ''}`}>
          <Link to="/gioi-thieu" onClick={() => setMenuOpen(false)}>GIỚI THIỆU</Link>
          <Link to="/mon-an" onClick={() => setMenuOpen(false)}>MÓN ĂN</Link>
          <Link to="/nuoc-uong" onClick={() => setMenuOpen(false)}>NƯỚC UỐNG</Link>
          <Link to="/khuyen-mai" onClick={() => setMenuOpen(false)}>KHUYẾN MÃI</Link>
          <Link to="/lien-he" onClick={() => setMenuOpen(false)}>LIÊN HỆ</Link>
          <Link to="/dich-vu" onClick={() => setMenuOpen(false)}>DỊCH VỤ</Link>
        </div>
      </div>
    </nav>
  );
}