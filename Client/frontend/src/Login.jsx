import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [siteNumber, setSiteNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (username && password && siteNumber) {
      try {
        const response = await fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password, siteNumber }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log(data.message);
          onLogin({ username, siteNumber });
        } else {
          const error = await response.json();
          console.error('Error:', error.message);
        }
      } catch (err) {
        console.error('Network error:', err);
      }
    }
  };
  

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-white text-2xl mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4 p-2 w-full rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 w-full rounded"
        />
        <input
          type="text"
          placeholder="Construction Site Number"
          value={siteNumber}
          onChange={(e) => setSiteNumber(e.target.value)}
          className="mb-4 p-2 w-full rounded"
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;