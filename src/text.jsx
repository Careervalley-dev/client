import React from 'react';

const EventRegistrationConfirmation = ({ user, event, formattedDate }) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '30px', boxSizing: 'border-box', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <img
        src="https://res.cloudinary.com/du3i8e0se/image/upload/v1722532332/CV_logo_yfndbw.png"
        alt="Logo"
        style={{ display: 'block', margin: '0 auto', width: '250px' }}
      />
      <div style={{ marginTop: '30px', textAlign: 'center', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ color: '#2a655a', marginBottom: '20px', fontSize: '24px', fontWeight: '600' }}>
          Event Registration Confirmation
        </h2>
        <p style={{ color: '#2a655a', lineHeight: '1.6', margin: '0', fontSize: '20px' }}>
          <strong style={{ color: '#2a655a' }}>Hi ${user.name}</strong>,
        </p>
        <p style={{ color: '#2a655a', lineHeight: '1.6', margin: '0 0 20px', fontSize: '16px' }}>
          You have successfully registered for our event "<strong style={{ color: '#2a655a' }}>${event.title}</strong>".
        </p>
        <p style={{ color: '#2a655a', lineHeight: '1.6', marginBottom: '20px', fontSize: '16px' }}>
          Here are the event details:
        </p>
        <ul style={{ listStyle: 'none', padding: '0', color: '#2a655a', lineHeight: '1.6', textAlign: 'center', fontSize: '16px' }}>
          <li style={{ marginBottom: '10px' }}>
            <strong style={{ color: '#2a655a' }}>Date:</strong> ${formattedDate}
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong style={{ color: '#2a655a' }}>Time:</strong> ${event.time}
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong style={{ color: '#2a655a' }}>Location:</strong> ${event.location}
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong style={{ color: '#2a655a' }}>Event Type:</strong> ${event.eventType}
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong style={{ color: '#2a655a' }}>Program Type:</strong> ${event.programType}
          </li>
        </ul>
        <p style={{ color: '#2a655a', lineHeight: '1.6', marginTop: '20px', fontSize: '16px' }}>
          We look forward to your participation.
        </p>
        <p style={{ color: '#2a655a', lineHeight: '1.6', marginTop: '20px', fontSize: '16px' }}>
          Thank you!
        </p>
        <p style={{ color: '#2a655a', lineHeight: '1.6', marginTop: '20px', fontSize: '16px' }}>
          The Career Valley Team
        </p>
      </div>
    </div>
  );
};

export default EventRegistrationConfirmation;
