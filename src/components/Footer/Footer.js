import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'; // Import biểu tượng từ react-icons

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; DE COCO 2024</p>
        
        {/* Thông tin cửa hàng */}
        <div className="store-info">
          <h3>Cửa hàng</h3>
          <p>STORE 1: 79A Đặng Văn Ngữ, Đống Đa, Hà Nội</p>
          <p>STORE 2: 120 Cầu Giấy, Hà Nội</p>
          <p>Hộ kinh doanh Phan Văn Tú</p>
          <p>Địa chỉ: 115B, Phố Bà Triệu, phường Nguyễn Du, quận Hai Bà Trưng, thành phố Hà Nội</p>
          <p>Điện thoại: 0348268094</p>
          <p>Email: nguyenthihuyendieu0201@gmail.com</p>
          <p>Giấy chứng nhận đăng ký Hộ kinh doanh do Phòng Tài chính - Kế hoạch Uỷ ban Nhân dân quận Hai Bà Trưng cấp lần đầu ngày 11/7/2018. Mã ĐKKD: 01D8035465</p>
        </div>

        {/* Mạng xã hội */}
        <ul className="social-media">
          <li>
            <a href="https://www.facebook.com/decoco.accessories" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={20} style={{ marginLeft: '5px' }} />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@decoco.accessories" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={20} style={{ marginLeft: '5px' }} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/decoco.accessories" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} style={{ marginLeft: '5px' }} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
