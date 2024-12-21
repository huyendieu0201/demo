import React, { useState } from 'react';
import Slider from "react-slick"; // Import react-slick
import './Sp6.css'; // File CSS đi kèm
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sp6() {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('/sp/sp 6.jpg');

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value > 0 ? value : 1); // Đảm bảo số lượng >= 1
  };

  const products = [
    { id: 2, title: "De Coco Rachel", price: "100.000 đ", img: '/sp/sp 2.jpg', link: '/product/2' },
    { id: 3, title: "De Coco Peti", price: "100.000 đ", img: '/sp/sp 3.jpg', link: '/product/3' },
    { id: 1, title: "De Coco Embrace", price: "100.000 đ", img: '/sp/sp 1.jpg', link: '/product/1' },
    { id: 5, title: "De Coco Starfish", price: "70.000 đ", img: '/sp/sp 5.jpg', link: '/product/5' },
    { id: 4, title: "De Coco Mori", price: "80.000 đ", img: '/sp/sp 4.jpg', link: '/product/4' },
    { id: 8, title: "De Coco ACC J'adore", price: "60.000 đ", img: '/sp/sp 8.jpg', link: '/product/8' },
  ];

  const handleThumbnailClick = (imageSrc) => {
    setMainImage(imageSrc);
  };


  // Cài đặt cho carousel
  const carouselSettings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500, // Tốc độ chuyển đổi (ms)
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Với màn hình <= 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768, // Với màn hình <= 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480, // Với màn hình <= 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <main>
      <section className="page">
        <div className="product-page">
          <div className="product-image">
            <img
              src={mainImage}
              alt="Product"
              className="main-image"
            />
            <div className="product-thumbnails">
              <img
                src="/sp/sp 6.jpg"
                alt="Thumbnail 1"
                onClick={() => handleThumbnailClick('/sp/sp 6.jpg')}
                className="thumbnail"
              />
              <img
                src="/sp/sp 6(1).jpg"
                alt="Thumbnail 2"
                onClick={() => handleThumbnailClick('/sp/sp 6(1).jpg')}
                className="thumbnail"
              />
              <img
                src="/sp/sp 2(2).jpg"
                alt="Thumbnail 3"
                onClick={() => handleThumbnailClick('/sp/sp 2(2).jpg')}
                className="thumbnail"
              />
            </div>
          </div>

          <div className="product-details">
            <h1>De Coco Narin</h1>
            <p className="price">90.000đ</p>

            <div className="color-select-sp4">
              <label>Color: Silver</label>
              <div className="color-circle-sp4"></div>
            </div>

            <div className="quantity-select">
              <label>Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
              />
            </div>

            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-now" disabled>
              Buy Now
            </button>

            <div className="product-info-sp">
              <h2>THÔNG TIN SẢN PHẨM NHẪN DE COCO</h2>
              <p>• Chất liệu: Titanium không đen gỉ, an toàn với mọi loại da và có thể đeo được hằng ngày.</p>
              <p>• Màu sắc: Silver/ Gold</p>
              <p>• Phong cách: thanh lịch, đơn giản, nhẹ nhàng.</p>
              <p>• Giá thành cực kỳ phải chăng so với thị trường.</p>
              <p>• Nhẫn được gia công tỉ mỉ tạo nên một sản phẩm tinh tế, hoàn hảo.</p>

              <h2>HƯỚNG DẪN SỬ DỤNG NHẪN DE COCO</h2>
              <p>Có thể dùng thoải mái không cần tránh nước. Để bền màu và sáng bạn nên lưu ý:</p>
              <p>• Sau vài lần sử dụng, lau nhẹ nhàng bằng khăn giấy khô, không dùng chất tẩy rửa để lau chùi.</p>
              <p>• Khi không dùng tới, để ở nơi khô ráo, hộp kín tránh ánh sáng gắt làm bạc màu của sản phẩm.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-title" style={{ margin: "0 auto", width: "80%" }}>
          <span>Bạn có thể thích</span>
        </div>

      <section className="sp-products">
        <Slider {...carouselSettings}>
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
        </Slider>
      </section>
    </main>
  );
}

export default Sp6;
