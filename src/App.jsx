import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
// import About from "./pages/About";
// import GioiThieu from "./pages/GioiThieu";
// import MonAn from "./pages/MonAn";
// import NuocUong from "./pages/NuocUong";
// import KhuyenMai from "./pages/KhuyenMai";
// import LienHe from "./pages/LienHe";
// import DichVu from "./pages/DichVu";

export default function App() {
  return (
    <div>
      <Header />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/gioi-thieu" element={<GioiThieu />} />
          <Route path="/mon-an" element={<MonAn />} />
          <Route path="/nuoc-uong" element={<NuocUong />} />
          <Route path="/khuyen-mai" element={<KhuyenMai />} />
          <Route path="/lien-he" element={<LienHe />} />
          <Route path="/dich-vu" element={<DichVu />} /> */}
        </Routes>
      </div>
    </div>
  );
}