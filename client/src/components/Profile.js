import React, { useState } from 'react';

function Profile() {
  const [user, setUser] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    emergencyContact: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to backend API
    console.log('Profile updated:', user);
  };

  return (
    <div className="profile-container">
      <h3>My Profile</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={handleChange}
            placeholder="Enter your address"
          />
        </div>
        <div>
          <label>Emergency Contact</label>
          <input
            type="tel"
            name="emergencyContact"
            value={user.emergencyContact}
            onChange={handleChange}
            placeholder="Enter emergency contact number"
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Profile;