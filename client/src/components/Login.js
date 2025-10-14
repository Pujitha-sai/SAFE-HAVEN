import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import '../styles/Login.css';

function Login() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [error, setError] = useState(''); // Added to display errors on the UI
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors
    try {
      const response = await api.post('/auth/send-otp', { phone });
      console.log('Send OTP response:', response.data);
      setShowOtp(true);
    } catch (error) {
      console.error('Error sending OTP:', error.response?.data || error.message);
      setError(error.response?.data?.error || 'Failed to send OTP. Please try again.');
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors
    try {
      const response = await api.post('/auth/verify-otp', { phone, otp });
      console.log('Verify OTP response:', response.data);
      // Store the token (if needed for future authenticated requests)
      localStorage.setItem('token', response.data.token);
      navigate('/home', { replace: true }); // Use replace to avoid going back to login
    } catch (error) {
      console.error('Error verifying OTP:', error.response?.data || error.message);
      setError(error.response?.data?.error || 'Failed to verify OTP. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome to SafeHaven</h2>
      <p>Login to continue</p>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error messages */}
      <form>
        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your 10-digit phone number"
          />
        </div>
        {showOtp && (
          <div>
            <label>OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
            />
          </div>
        )}
        {!showOtp ? (
          <button onClick={handleSendOtp}>Send OTP</button>
        ) : (
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        )}
        <p>New user? <a href="/register">Register</a></p>
      </form>
    </div>
  );
}

export default Login;