import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState(productsData);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    let filtered = productsData;
    if (category !== 'All') {
      filtered = filtered.filter((p) => p.category === category);
    }
    if (searchTerm.trim()) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setProducts(filtered);
  }, [searchTerm, category]);

  const categories = ['All', ...new Set(productsData.map((p) => p.category))];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {products.length === 0 && <p>No products found</p>}
      </div>
    </div>
  );
};

export default Home;
