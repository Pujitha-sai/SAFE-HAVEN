import React, { useState, useEffect } from 'react';
import api from '../services/api';

function ComplaintStatus() {
  const [complaintStatus, setComplaintStatus] = useState({ id: 'ABC123', status: 'Under Investigation', timeline: [] });

  useEffect(() => {
    // Fetch complaint status from backend
    const fetchStatus = async () => {
      try {
        const response = await api.get('/complaints/status/ABC123');
        setComplaintStatus(response.data);
      } catch (error) {
        console.error('Error fetching complaint status:', error);
      }
    };
    fetchStatus();
  }, []);

  return (
    <div className="status-container">
      <h3>Recent Complaint Status</h3>
      <p>Complaint ID: {complaintStatus.id}</p>
      <p>Current Status: {complaintStatus.status}</p>
      <div>
        <h4>Timeline:</h4>
        <ul>
          {complaintStatus.timeline.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>
      <button className="emergency-btn">Emergency Contacts</button>
    </div>
  );
}

export default ComplaintStatus;