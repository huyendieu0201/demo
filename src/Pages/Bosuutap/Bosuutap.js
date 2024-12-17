import React from 'react';
import './Bosuutap.css'
import { Link } from 'react-router-dom';


const Bosuutap = () => {
    
    const products = [
        { id: 1, name: 'De Coco Embrace', price: '100.000 đ', image: '/sp/sp 1.jpg', link: '/product/1' },
        { id: 2, name: 'De Coco Rachel', price: '100.000 đ', image: '/sp/sp 2.jpg', link: '/product/2' },
        { id: 3, name: 'De Coco Peti', price: '100.000 đ', image: '/sp/sp 3.jpg', link: '/product/3' },
        { id: 4, name: 'De Coco Mori', price: '80.000 đ', image: '/sp/sp 4.jpg', link: '/product/4' },
        { id: 5, name: 'De Coco Starfish', price: '70.000 đ', image: '/sp/sp 5.jpg', link: '/product/5' },
        { id: 6, name: 'De Coco Narin', price: '90.000 đ', image: '/sp/sp 6.jpg', link: '/product/6' },
        { id: 7, name: 'De Coco Lalin', price: '90.000 đ', image: '/sp/sp 7.jpg', link: '/product/7' },
        { id: 8, name: "DECOCO ACC J'adore", price: '60.000 đ', image: '/sp/sp 8.jpg', link: '/product/8' },
    ];
    
    return (
        <div>
            <ul className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="http://localhost:3000/">Trang chủ</a>
                </li>
                <li className="breadcrumb-item">Trang sức</li>
            </ul>
            <div className="bosuutap-container">
                <div className="category-left">
                    <ul>
                        <li><Link to="/category/nhan">Nhẫn</Link></li>
                        <li><Link to="/category/vongtay">Vòng tay</Link></li>
                        <li><Link to="/category/vongco">Vòng cổ</Link></li>
                        <li><Link to="/category/khuyentai">Khuyên tai</Link></li>
                    </ul>
                </div>
                <div className="category-right">
                    <div className="category-right-top">
                        <img src="/banner(bst)/collection 1.webp" alt="All products collection" />
                    </div>
                    <div className="category-right-bottom">
                        <div className="product-grid">
                            {products.map(product => (
                                <div key={product.id} className="product">
                                    <a href={product.link}>
                                        <img src={product.image} alt={product.name} />
                                    </a>
                                    <div className="product-info-bst">
                                        <h3 className="product-name">{product.name}</h3>
                                        <span className="product-price">{product.price}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Bosuutap;
