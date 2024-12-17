import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const location = useLocation(); // Lấy đường dẫn hiện tại

  return (
    <header>
      <div className="logo">
        <a href="https://example.com">
          <img src="/logo.webp" alt="DE COCO" />
        </a>
      </div>
      <nav className="menu">
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Trang chủ</Link>
          </li>
          <li className={location.pathname === '/collections' ? 'active' : ''}>
            <Link to="/collections">Bộ sưu tập</Link>
          </li>
          <li className={location.pathname === '/about-us' ? 'active' : ''}>
            <Link to="/about-us">Về chúng tôi </Link>
          </li>
        </ul>
      </nav>
      <div className="others">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>
            <FaSearch size={16} />
          </button>
        </div>
        <Link to="/user" className="icon-link" title="User">
          <FaUser size={20} style={{ marginLeft: '5px' }} />
        </Link>
        <Link to="/cart" className="icon-link" title="Shopping Bag">
          <FaShoppingCart size={20} style={{ marginLeft: '5px' }} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
