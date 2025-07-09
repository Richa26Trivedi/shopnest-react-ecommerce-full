import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Signup = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleSignup = (e) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.password) return toast.error('All fields required');
    toast.success('Signed up (UI only)');
  };

  return (
    <form onSubmit={handleSignup} className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        className="w-full mb-3 p-2 border rounded"
        value={user.name}
        onChange={e => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-3 p-2 border rounded"
        value={user.email}
        onChange={e => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-3 p-2 border rounded"
        value={user.password}
        onChange={e => setUser({ ...user, password: e.target.value })}
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded">Sign Up</button>
    </form>
  );
};

export default Signup;
