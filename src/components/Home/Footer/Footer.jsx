// Footer.jsx
import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-text">Y</span>
            <h3>YUM Bakery</h3>
          </div>
          <p>
            Mang đến hương vị ngọt ngào trong từng sản phẩm. 
            Từ bánh vòng thơm lừng đến bánh kem tinh tế.
          </p>
        </div>

        <div className="footer-section">
          <h4>Sản Phẩm</h4>
          <ul>
            <li><a href="#">🍩 Bánh Vòng</a></li>
            <li><a href="#">🍰 Bánh Kem</a></li>
            <li><a href="#">🥤 Thức Uống</a></li>
            <li><a href="#">🍪 Bánh Quy</a></li>
            <li><a href="#">🎂 Bánh Theo Yêu Cầu</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Dịch Vụ</h4>
          <ul>
            <li><a href="#">Đặt Hàng Online</a></li>
            <li><a href="#">Giao Hàng Tận Nơi</a></li>
            <li><a href="#">Tư Vấn Bánh Cưới</a></li>
            <li><a href="#">Catering Events</a></li>
            <li><a href="#">Khuyến Mãi</a></li>
          </ul>
        </div>
      </div>

      <div className="newsletter">
        <h4>🍯 Đăng Ký Nhận Tin Khuyến Mãi</h4>
        <p>Nhận thông tin về sản phẩm mới và ưu đãi đặc biệt từ YUM Bakery</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Nhập email của bạn..." />
          <button>Đăng Ký</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 YUM Bakery. Tất cả quyền được bảo lưu.</p>
        <div>
          <a href="#">Chính Sách Bảo Mật</a>
          <a href="#">Điều Khoản Sử Dụng</a>
          <a href="#">Hỗ Trợ</a>
        </div>
      </div>
    </footer>
  );
}