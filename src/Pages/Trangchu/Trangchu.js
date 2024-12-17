import React, { useState, useEffect } from 'react';
import './Trangchu.css';

const Trangchu = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Chỉ số ảnh hiện tại
  const images = [
    'vn-11134210-7qukw-lib2e35lnrgy86.webp',
    'vn-11134210-7qukw-lib2e35lp61e19.webp',
    'vn-11134210-7qukw-lib2e35lrz6aa7.webp',
  ]; // Danh sách các ảnh banner
  const products = [
    { id: 1, title: "De Coco Embrace", price: "100.000 đ", img: '/sp/sp 1.jpg', badge: 'Best Seller', link: '/product/1' },
    { id: 2, title: "De Coco Rachel", price: "100.000 đ", img: '/sp/sp 2.jpg', badge: 'Best Seller', link: '/product/2' },
    { id: 3, title: "De Coco Peti", price: "100.000 đ", img: '/sp/sp 3.jpg', badge: 'Best Seller', link: '/product/3' },
    { id: 4, title: "De Coco Mori", price: "80.000 đ", img: '/sp/sp 4.jpg', badge: 'Best Seller', link: '/product/4' },
  ];

  const instagramImages = [
    '/fl1.jpg', '/fl2.jpg', '/fl3.jpg', '/fl4.jpg',
    '/fl5.jpg', '/fl6.jpg', '/fl7.jpg', '/fl8.jpg', '/fl9.jpg'
  ];

  // Chuyển đổi ảnh tự động sau mỗi 3 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000 milliseconds = 3 giây

    // Xóa interval khi component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main>
      {/* Banner Section */}
      <section className="banner">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Banner ${index + 1}`}
            className={index === activeIndex ? 'active' : ''}
          />
        ))}
      </section>

      <section className="products">
        <div className="section-title" style={{ margin: "0 auto", width: "80%" }}>
          <span>Best Seller</span>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product">
              <a href={product.link}>
                <img src={product.img} alt={product.title} />
              </a>
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <span className="price">{product.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all" style={{ textAlign: "center", marginTop: "20px" }}>
          <a href="http://localhost:3000/collections" className="btn-view-all">
            Tất cả sản phẩm
          </a>
        </div>

        {/* Instagram Section */}
        <div className="instagram-section" style={{ marginTop: "50px" }}>
          <h2 style={{ fontWeight: "normal" }}>FOLLOW</h2>
          <h3 style={{ fontWeight: "normal" }}>DE COCO ON INSTAGRAM</h3>
          <a
            href="https://www.instagram.com/decoco.accessories"
            target="_blank"
            rel="noopener noreferrer"
            className="linkStyle"
          >
            @decoco.accessories
          </a>

          <div 
            className="instagram-carousel"
            onMouseMove={(e) => {
              const carousel = e.currentTarget.querySelector('.instagram-images');
              const { clientX } = e;
              const width = carousel.offsetWidth;
              const scrollWidth = carousel.scrollWidth;
              const scrollLeft = (scrollWidth - width) * (clientX / width);
              carousel.scrollLeft = scrollLeft;
            }}
          >
            <div className="instagram-images">
              {instagramImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Instagram ${index + 1}`}
                  onError={(e) => (e.target.src = '/placeholder.jpg')}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Trangchu;
