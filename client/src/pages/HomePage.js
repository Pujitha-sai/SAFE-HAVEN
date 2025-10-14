import React, { useState, useEffect } from 'react';
import Profile from '../components/Profile';
import RegisterComplaint from '../components/RegisterComplaint';
import LegalConsultation from '../components/LegalConsultation';
import ComplaintStatus from '../components/ComplaintStatus';
import './styles/Home.css';

function HomePage() {
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    // Fetch user data or complaint status on mount if needed
  }, []);

  return (
    <div className="home-container">
      <header>
        <h1>SafeHaven</h1>
        <button className="logout-btn">Logout</button>
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
        </div>
      </div>
    </div>
  );
}

export default HomePage;