import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-content welcome-page">
        <h2>Welcome to PopX</h2>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <button className="btn btn-primary" onClick={() => navigate('/signup')}>
          Create Account
        </button>
        <button className="btn btn-secondary" onClick={() => navigate('/signin')}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;