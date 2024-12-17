import React from 'react';
import './Vongco.css'
import { Link } from 'react-router-dom';


const Vongco = () => {
    
    const products = [
        { id: 4, name: 'De Coco Mori', price: '80.000 đ', image: '/sp/sp 4.jpg', link: '/product/4' },
        { id: 7, name: 'De Coco Lalin', price: '90.000 đ', image: '/sp/sp 7.jpg', link: '/product/7' },
        { id: 8, name: "DECOCO ACC J'adore", price: '60.000 đ', image: '/sp/sp 8.jpg', link: '/product/8' },


    ];
    
    return (
        <div>
            <div className="Vongco-container">
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

export default Vongco;
