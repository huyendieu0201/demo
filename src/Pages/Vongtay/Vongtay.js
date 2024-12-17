import React from 'react';
import './Vongtay.css'
import { Link } from 'react-router-dom';


const Vongtay = () => {
    
    const products = [
        { id: 2, name: 'De Coco Rachel', price: '100.000 đ', image: '/sp/sp 2.jpg', link: '/product/2' },
        { id: 3, name: 'De Coco Peti', price: '100.000 đ', image: '/sp/sp 3.jpg', link: '/product/3' },
    ];
    
    return (
        <div>
            <div className="Vongtay-container">
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

export default Vongtay;
