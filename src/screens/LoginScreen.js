import React, { useState } from 'react';

const LoginScreen = ({ showScreen, showToast, showLoading, hideLoading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      showLoading();
      setTimeout(() => {
        hideLoading();
        showScreen('pairing');
      }, 2000);
    } else {
      showToast('Please enter email and password', true);
    }
  };

  const handleSignup = () => {
    showToast('Signup screen would be implemented here');
  };

  return (
    <div className="screen login">
      <div className="login-form">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>
          Welcome Back
        </h2>
        <div className="form-group">
          <label>Email or Phone</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email or phone"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button className="btn btn-primary" onClick={handleLogin}>
          Sign In
        </button>
        <p style={{ textAlign: 'center', marginTop: '1rem', color: '#666' }}>
          Don't have an account?{' '}
          <button
            type="button"
            onClick={handleSignup}
            style={{
              background: 'none',
              border: 'none',
              color: '#667eea',
              cursor: 'pointer',
              textDecoration: 'underline',
              padding: 0,
              font: 'inherit',
            }}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
