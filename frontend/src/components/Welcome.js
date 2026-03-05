import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Welcome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <div className="welcome-container">
        <h1>Welcome!</h1>
        <p>You have successfully logged in.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Welcome;