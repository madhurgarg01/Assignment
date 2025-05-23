import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
    navigate('/account-settings');
  };

  return (
    <div className="page-container">
      <div className="page-content signin-page">
        <h1>Signin to your PopX account</h1>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <form onSubmit={handleSubmit} style={{width: '100%'}}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email" id="email" name="email" className="form-input"
              value={formData.email} onChange={handleChange} placeholder="Enter email address" required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password" id="password" name="password" className="form-input"
              value={formData.password} onChange={handleChange} placeholder="Enter password" required
            />
          </div>
          <button type="submit" className="btn btn-login-custom">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;