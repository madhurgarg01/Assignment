import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: 'Marry Doe',
    phoneNumber: 'Marry Doe', // As per screenshot prefill
    email: 'Marry Doe',       // As per screenshot prefill
    password: 'Marry Doe',    // As per screenshot prefill
    companyName: 'Marry Doe', // As per screenshot prefill
    agency: 'Yes',
  });

  const placeholders = {
    fullName: 'Enter full name',
    phoneNumber: 'Enter phone number',
    email: 'Enter email address',
    password: 'Enter password',
    companyName: 'Enter company name',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    navigate('/account-settings');
  };

  return (
    <div className="page-container">
      <div className="page-content signup-page">
        <h1>Create your PopX account</h1>
        <form onSubmit={handleSubmit} style={{width: '100%'}}>
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">Full Name<span className="required-asterisk">*</span></label>
            <input
              type="text" id="fullName" name="fullName" className="form-input"
              value={formData.fullName} onChange={handleChange} placeholder={placeholders.fullName} required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber" className="form-label">Phone number<span className="required-asterisk">*</span></label>
            <input
              type="tel" id="phoneNumber" name="phoneNumber" className="form-input"
              value={formData.phoneNumber} onChange={handleChange} placeholder={placeholders.phoneNumber} required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email address<span className="required-asterisk">*</span></label>
            <input
              type="email" id="email" name="email" className="form-input"
              value={formData.email} onChange={handleChange} placeholder={placeholders.email} required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password<span className="required-asterisk">*</span></label>
            <input
              type="password" id="password" name="password" className="form-input"
              value={formData.password} onChange={handleChange} placeholder={placeholders.password} required
            />
          </div>
          <div className="form-group">
            <label htmlFor="companyName" className="form-label">Company name</label>
            <input
              type="text" id="companyName" name="companyName" className="form-input"
              value={formData.companyName} onChange={handleChange} placeholder={placeholders.companyName}
            />
          </div>
          
          <div className="radio-group">
            <p className="form-label">Are you an Agency?<span className="required-asterisk">*</span></p>
            <div className="radio-options">
              <label>
                <input type="radio" name="agency" value="Yes" checked={formData.agency === 'Yes'} onChange={handleChange} /> Yes
              </label>
              <label>
                <input type="radio" name="agency" value="No" checked={formData.agency === 'No'} onChange={handleChange} /> No
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;