import React, { useState } from 'react';

function RegisterComplaint() {
  const [complaint, setComplaint] = useState({
    type: '',
    state: '',
    date: '',
    location: '',
    description: '',
  });

  const handleChange = (e) => {
    setComplaint({ ...complaint, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to backend API
    console.log('Complaint registered:', complaint);
  };

  return (
    <div className="complaint-container">
      <h3>Register a Complaint</h3>
      <p>Please provide details about the incident. All information will be kept confidential.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Type of Complaint</label>
          <select name="type" value={complaint.type} onChange={handleChange}>
            <option value="">Select type of complaint</option>
            <option value="abuse">Abuse</option>
            <option value="domesticViolence">Domestic Violence</option>
            <option value="harassment">Harassment</option>
          </select>
        </div>
        <div>
          <label>State</label>
          <select name="state" value={complaint.state} onChange={handleChange}>
            <option value="">Select your state</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Delhi">Delhi</option>
            <option value="Karnataka">Karnataka</option>
          </select>
        </div>
        <div>
          <label>Date of Incident</label>
          <input
            type="date"
            name="date"
            value={complaint.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={complaint.location}
            onChange={handleChange}
            placeholder="Enter location of incident"
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={complaint.description}
            onChange={handleChange}
            placeholder="Please provide details about the incident"
          />
        </div>
        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}

export default RegisterComplaint;