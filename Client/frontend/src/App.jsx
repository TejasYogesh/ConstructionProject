import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
  const [user, setUser ] = useState(null);

  const handleLogin = (userData) => {
    setUser (userData);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Dashboard user={user} /> : <Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;
