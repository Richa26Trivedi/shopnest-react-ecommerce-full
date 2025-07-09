import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 hover:shadow-lg transition-all">
        <img src={product.image} alt={product.name} className="h-40 object-contain mx-auto" />
        <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">{product.category}</p>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-blue-600 font-bold">₹{product.price}</span>
          <span className="text-yellow-500 text-sm">⭐ {product.rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
