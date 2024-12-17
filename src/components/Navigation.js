import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Trang chủ</Link></li>
        <li><Link to="/collections">Bộ sưu tập</Link></li>
        <li><Link to="/about-us">Về chúng tôi</Link></li>
        <li><Link to="/contact">Liên hệ</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
