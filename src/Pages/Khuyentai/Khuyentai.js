import React from 'react';
import './Khuyentai.css'
import { Link } from 'react-router-dom';


const Khuyentai = () => {
    
    const products = [
        { id: 5, name: 'De Coco Starfish', price: '70.000 đ', image: '/sp/sp 5.jpg', link: '/product/5' },
        { id: 6, name: 'De Coco Narin', price: '90.000 đ', image: '/sp/sp 6.jpg', link: '/product/6' },

    ];
    
    return (
        <div>
            <div className="Khuyentai-container">
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
                        <img src="/banner(bst)/banner.png" alt="All products collection" />
                    </div>
                    <div className="category-right-bottom">
                        <div className="product-grid">
                            {products.map(product => (
                                <div key={product.id} className="product">
                                    <a href={product.link}>
                                        <img src={product.image} alt={product.name} />
                                    </a>
                                    <div className="product-info">
                                        <h3 className="product-name">{product.name}</h3>
                                        <span className="price">{product.price}</span>
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

export default Khuyentai;
