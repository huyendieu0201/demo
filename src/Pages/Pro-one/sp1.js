import React, { useState } from 'react';
import './Sp1.css'; // File CSS đi kèm

function Sp1() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('5'); // Khai báo state cho size
  const [mainImage, setMainImage] = useState('/sp/sp 1.jpg'); // Đặt ảnh mặc định

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const products = [
    { id: 2, title: "De Coco Rachel", price: "100.000 đ", img: '/sp/sp 2.jpg', link: '/product/2' },
    { id: 3, title: "De Coco Peti", price: "100.000 đ", img: '/sp/sp 3.jpg', link: '/product/3' },
    { id: 4, title: "De Coco Mori", price: "80.000 đ", img: '/sp/sp 4.jpg', link: '/product/4' },
    { id: 5, title: "De Coco Starfish", price: "70.000 đ", img: '/sp/sp 5.jpg', link: '/product/5' },
  ];

  const handleThumbnailClick = (imageSrc) => {
    setMainImage(imageSrc); // Cập nhật ảnh chính khi click vào thumbnail
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value); // Cập nhật size khi thay đổi
  };

  return (
    <main>
        <section className="page">

            <div className="product-page">

            <div className="product-image">
                <img
                src={mainImage} // Sử dụng ảnh chính từ state
                alt="Product"
                className="main-image"
                />
                <div className="product-thumbnails">
                <img
                    src="/sp/sp 1.jpg"
                    alt="Thumbnail 1"
                    onClick={() => handleThumbnailClick('/sp/sp 1.jpg')}
                    className="thumbnail"
                />
                <img
                    src="/sp/sp 1(1).jpg"
                    alt="Thumbnail 2"
                    onClick={() => handleThumbnailClick('/sp/sp 1(1).jpg')}
                    className="thumbnail"
                />
                <img
                    src="/sp/sp 1(2).jpg"
                    alt="Thumbnail 3"
                    onClick={() => handleThumbnailClick('/sp/sp 1(2).jpg')}
                    className="thumbnail"
                />
                </div>
            </div>

            <div className="product-details">
                <h1>De Coco Embrace</h1>
                <p className="price">100.000đ</p>

                <div className="size-select">
                <label>Size</label>
                <select value={size} onChange={handleSizeChange} className="size-dropdown">
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                </div>

                <div className="color-select">
                <label>Color: Gold</label>
                <div className="color-circle"></div>
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
        <section className="products">
            <div className="section-title" style={{ margin: "0 auto", width: "80%" }}>
            <span>Bạn có thể thích</span>
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

        </section>
    </main>
    

  );
}

export default Sp1;
