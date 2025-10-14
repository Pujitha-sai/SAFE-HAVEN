import React, { useState, useEffect } from 'react';
import Profile from './Profile';
import RegisterComplaint from './RegisterComplaint';
import LegalConsultation from './LegalConsultation';
import ComplaintStatus from './ComplaintStatus';
import '../styles/Home.css';

function Home() {
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    console.log('Home page loaded');
  }, []);

  return (
    <div className="home-container">
      <header>
        <h1>SafeHaven</h1>
        <button className="logout-btn" onClick={() => {
          localStorage.removeItem('token');
          window.location.href = '/login';
        }}>Logout</button>
      </header>
      <h2>You Are Not Alone</h2>
      <p>We're here to help you find safety, support, and justice. Your safety is our priority.</p>

      <div className="buttons">
        <button onClick={() => setActiveSection('profile')}>My Profile</button>
        <button onClick={() => setActiveSection('complaint')}>Register Complaint</button>
        <button onClick={() => setActiveSection('legal')}>Legal Help</button>
      </div>

      {activeSection === 'profile' && <Profile />}
      {activeSection === 'complaint' && <RegisterComplaint />}
      {activeSection === 'legal' && <LegalConsultation />}
      <ComplaintStatus />
      
      <div className="emergency-contacts">
        <h3>Emergency Helplines</h3>
        <div>
          <p>Police: 100 / 112 (Emergency police assistance)</p>
          <p>Women's Helpline (All India): 1091 (24/7 women's helpline for immediate assistance)</p>
          <p>Domestic Violence Helpline: 181 (National helpline for domestic violence cases)</p>
          <button className="emergency-btn">Emergency Contacts</button>
        </div>
      </div>
    </div>
  );
}

export default Home;