
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/admin/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    const data = await response.json();
    
    // Save token
    localStorage.setItem('token', data.token);
    
    // Optional: Save user info if needed
    localStorage.setItem('user', JSON.stringify(data.user));

    // Redirect to dashboard
    router.push('/dashboard');
  } catch (error) {
    console.error('Login error:', error);
    alert('Login failed: ' + error.message);
  }
};

  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white-50">
      
      {/*  Logo above the form */}
      <img
        src="/images/leaf 4.png"
        alt="Herbal Logo"
        className="w-50 h-50 object-contain mb-6 transition-transform duration-300 hover:scale-105"
      />

      {/* Login Form */}
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-2 text-black border border-gray-300 rounded-xl"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-2 text-black border border-gray-300 rounded-xl"
            required
          />
          <button
            type="submit"
            style={{ backgroundColor: '#042521' }}
            className="w-full text-white p-2 rounded-xl hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Don’t have an account?{' '}
          <a href="/signup" className="text-green-600 font-semibold hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}