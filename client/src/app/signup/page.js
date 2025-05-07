'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🌿 Temporarily simulate successful signup
    setMessage('Signup successful! You can now login.');

    // ⏳ Redirect to login page after 2 seconds
    setTimeout(() => {
      router.push('/');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white-50">
      <img
        src="/images/leaf 4.png"
        alt="Herbal Logo"
        className="w-50 h-50 object-contain mb-6 transition-transform duration-300 hover:scale-105"
      />
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-xl"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-xl"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-xl"
            required
          />
          <button
            type="submit"
            style={{ backgroundColor: '#042521' }}
            className="w-full bg-green-600 text-white p-2 rounded-xl hover:bg-green-700 transition hover:opacity-90"
          >
            Sign Up
          </button>
        </form>

        {message && <p className="text-center text-green-600 mt-4 font-medium">{message}</p>}

        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/" className="text-green-600 font-semibold hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
