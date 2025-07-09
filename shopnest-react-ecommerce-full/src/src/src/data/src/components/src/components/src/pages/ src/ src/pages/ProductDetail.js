import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';
import { toast } from 'react-toastify';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success('Added to cart!');
  };

  if (!product) return <p className="p-6">Product not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 grid md:grid-cols-2 gap-6">
      <img src={product.image} alt={product.name} className="w-full h-96 object-contain" />
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-300">{product.category}</p>
        <div className="my-2 text-yellow-500">⭐ {product.rating}</div>
        <p className="my-4">{product.description}</p>
        <p className="text-xl font-bold text-blue-600 mb-4">₹{product.price}</p>
        <button
          onClick={addToCart}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
