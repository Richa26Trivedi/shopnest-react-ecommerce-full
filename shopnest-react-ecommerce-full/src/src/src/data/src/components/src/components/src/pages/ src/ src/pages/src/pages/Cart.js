import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(saved);
  }, []);

  const updateQty = (id, change) => {
    const updated = cart.map(item =>
      item.id === id ? { ...item, qty: Math.max(1, item.qty + change) } : item
    );
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cart.filter(item => item.id !== id);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
    toast.info('Removed from cart');
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y">
            {cart.map(item => (
              <li key={item.id} className="flex justify-between py-4">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>₹{item.price} x {item.qty}</p>
                  <div className="space-x-2 mt-1">
                    <button onClick={() => updateQty(item.id, -1)} className="px-2 bg-gray-200">-</button>
                    <button onClick={() => updateQty(item.id, 1)} className="px-2 bg-gray-200">+</button>
                    <button onClick={() => removeItem(item.id)} className="text-red-500 ml-4">Remove</button>
                  </div>
                </div>
                <p className="font-bold">₹{item.price * item.qty}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-right">
            <p className="text-xl font-bold">Total: ₹{total}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
