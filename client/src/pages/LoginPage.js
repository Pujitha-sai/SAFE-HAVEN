import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import './styles/Login.css';

function LoginPage() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const history = useHistory();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/send-otp', { phone });
      setShowOtp(true);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/verify-otp', { phone, otp });
      history.push('/home');
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome to SafeHaven</h2>
      <p>Login to continue</p>
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

export default LoginPage;