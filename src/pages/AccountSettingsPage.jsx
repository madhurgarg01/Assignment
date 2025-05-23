import React from 'react';

const CameraIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 11.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 6.5 12 6.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"/>
    <circle cx="12" cy="11" r="2.5"/>
  </svg>
);

const AccountSettingsPage = () => {
  const user = {
    name: 'Marry Doe',
    email: 'Marry@Gmail.Com',
    profilePicUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29430?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=80&h=80&q=80'
  };

  return (
    <div className="page-container">
      <div className="page-content account-settings-page">
        <h2 className="account-settings-main-title">Account Settings</h2>
        
        <div className="profile-summary-box">
          <div className="profile-picture-container">
            <img src={user.profilePicUrl} alt="Profile" className="profile-picture" />
            <div className="camera-icon"><CameraIcon /></div>
          </div>
          <div className="profile-info">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        </div>

        <p className="account-description-text">
          Lorem ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
        
        <hr className="dotted-separator-line" />
      </div>
    </div>
  );
};

export default AccountSettingsPage;