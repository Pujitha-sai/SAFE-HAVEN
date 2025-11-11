import React from 'react';

function LegalConsultation() {
  const lawyers = [
    { id: 'APS', name: 'Adv. Priya Sharma', expertise: 'Domestic Violence, Family Law', experience: '15 years', location: 'Mumbai', contact: '+91 98XXXXXX' },
    { id: 'AMP', name: 'Adv. Meera Patel', expertise: 'Criminal Law, Women’s Rights', experience: '12 years', location: 'Delhi', contact: '+91 98XXXXXX' },
    { id: 'AAD', name: 'Adv. Anjali Desai', expertise: 'Workplace Harassment, Civil Rights', experience: '10 years', location: 'Bangalore', contact: '+91 98XXXXXX' },
  ];

  return (
    <div className="legal-container">
      <h3>Legal Consultation</h3>
      <div className="lawyers">
        {lawyers.map((lawyer) => (
          <div key={lawyer.id} className="lawyer-card">
            <h4>{lawyer.name}</h4>
            <p>Expertise: {lawyer.expertise}</p>
            <p>Experience: {lawyer.experience}</p>
            <p>Location: {lawyer.location}</p>
            <p>Contact: {lawyer.contact}</p>
            <button>Request Consultation</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LegalConsultation;