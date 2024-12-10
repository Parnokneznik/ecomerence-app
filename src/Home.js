import React, { useState, useEffect } from 'react';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name} - {product.price_kc} Kč</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
