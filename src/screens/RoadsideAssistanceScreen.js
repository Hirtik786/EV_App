import React, { useState } from 'react';

const RoadsideAssistanceScreen = ({ showScreen, showToast }) => {
  const [emergency, setEmergency] = useState(false);
  const [serviceType, setServiceType] = useState('');
  const [location, setLocation] = useState('');

  const services = [
    { id: 'towing', name: 'Towing Service', icon: '🚛', urgent: true },
    { id: 'jumpstart', name: 'Jump Start', icon: '🔋', urgent: false },
    { id: 'tire', name: 'Flat Tire', icon: '🛞', urgent: false },
    { id: 'lockout', name: 'Vehicle Lockout', icon: '🔐', urgent: false },
    { id: 'charging', name: 'Mobile Charging', icon: '⚡', urgent: true },
    { id: 'accident', name: 'Accident Recovery', icon: '🚨', urgent: true }
  ];

  const requestService = () => {
    if (!serviceType) {
      showToast('Please select a service type', true);
      return;
    }
    showToast('Roadside assistance dispatched! ETA: 25 minutes');
    showScreen('profile');
  };

  return (
    <div className="screen roadside-assistance" style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto' // 👈 makes the screen scrollable
    }}>
      <div className="header">
        <button 
          onClick={() => showScreen('profile')}
          style={{
            position: 'absolute',
            left: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >
          ←
        </button>
        <div className="vehicle-name">Roadside Assistance</div>
      </div>

      <div style={{ padding: '1rem', paddingBottom: '80px', background: '#f7f9fc', minHeight: '100vh' }}>
        
        {/* Emergency Toggle */}
        <div style={{
          background: emergency ? '#fff5f5' : 'white',
          borderRadius: '16px',
          padding: '1rem',
          marginBottom: '1rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
          border: emergency ? '2px solid #e74c3c' : '1px solid #e0e0e0'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.5rem'
          }}>
            <span style={{ fontWeight: '600' }}>🚨 Emergency Situation</span>
            <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
              <input
                type="checkbox"
                checked={emergency}
                onChange={() => setEmergency(!emergency)}
                style={{ opacity: 0, width: 0, height: 0 }}
              />
              <span style={{
                position: 'absolute',
                cursor: 'pointer',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: emergency ? '#e74c3c' : '#ccc',
                borderRadius: '24px'
              }}>
                <span style={{
                  position: 'absolute',
                  height: '20px',
                  width: '20px',
                  left: emergency ? '26px' : '2px',
                  bottom: '2px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  transition: '0.3s'
                }} />
              </span>
            </label>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#666' }}>
            Toggle if you're in immediate danger or stranded
          </p>
        </div>

        {emergency && (
          <div style={{
            background: '#e74c3c',
            color: 'white',
            borderRadius: '16px',
            padding: '1rem',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🚨</div>
            <h3>Emergency Priority Service</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              Your request will be prioritized. Help is on the way!
            </p>
            <button
              onClick={() => showToast('Emergency services contacted!')}
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: 'white',
                color: '#e74c3c',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              📞 Call 911
            </button>
          </div>
        )}

        {/* Service Selection */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1rem',
          marginBottom: '1rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>What do you need help with?</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setServiceType(service.id)}
                style={{
                  padding: '1rem',
                  backgroundColor: serviceType === service.id ? '#667eea' : '#f8f9fa',
                  color: serviceType === service.id ? 'white' : '#333',
                  border: service.urgent ? '2px solid #f39c12' : '1px solid #ddd',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  fontSize: '0.8rem'
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
                  {service.icon}
                </div>
                {service.name}
                {service.urgent && (
                  <div style={{ fontSize: '0.7rem', marginTop: '0.25rem', color: '#f39c12' }}>
                    Priority
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Location */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1rem',
          marginBottom: '1rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>📍 Your Location</h3>
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '0.9rem' }}>Using GPS location...</p>
            <p style={{ fontSize: '0.8rem', color: '#666' }}>
              123 Main Street, City, ST 12345
            </p>
          </div>
          <input
            type="text"
            placeholder="Add additional location details..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '0.9rem'
            }}
          />
        </div>

        {/* Vehicle Info */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1rem',
          marginBottom: '1rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>🚗 Vehicle Information</h3>
          <div style={{ fontSize: '0.9rem', color: '#666' }}>
            <p>Tesla Model 3 - White</p>
            <p>License: ABC123</p>
            <p>Battery: 15% (52 miles remaining)</p>
          </div>
        </div>

        {/* Request Service Button */}
        <button
          onClick={requestService}
          style={{
            width: '100%',
            padding: '1rem',
            backgroundColor: emergency ? '#e74c3c' : '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '1rem',
            marginBottom: '1rem'
          }}
        >
          {emergency ? '🚨 Request Emergency Service' : '🛠️ Request Roadside Assistance'}
        </button>

        {/* Cost Info */}
        <div style={{
          background: '#f8f9fa',
          borderRadius: '8px',
          padding: '0.75rem',
          fontSize: '0.8rem',
          color: '#666',
          textAlign: 'center'
        }}>
          <p>💰 Covered by your warranty • No charge for first 50 miles</p>
        </div>
      </div>
    </div>
  );
};

export default RoadsideAssistanceScreen;