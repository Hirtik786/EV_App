import React from 'react';

const LocationScreen = () => {
  return (
    <div className="screen location">
      <div className="header">
        <div className="vehicle-name">Vehicle Location</div>
      </div>
      
      <div style={{ 
        padding: '1rem', 
        paddingBottom: '80px', 
        overflowY: 'auto', 
        background: '#f7f9fc' 
      }}>
        <div className="map-placeholder" style={{ height: '250px', marginBottom: '1rem' }}>
          🗺️ Live GPS Tracking Map<br />
          📍 Current Location: 123 Electric Ave
        </div>

        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1rem',
          marginBottom: '1rem',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}>
          <h3>Trip History</h3>
          <div style={{ marginTop: '1rem' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '1rem',
              background: '#f8f9fa',
              borderRadius: '8px',
              marginBottom: '0.5rem'
            }}>
              <div>
                <div style={{ fontWeight: '600' }}>Home to Office</div>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>Today, 08:30 - 09:00</div>
              </div>
              <div>
                <div style={{ fontWeight: '600' }}>15.2 km</div>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>18.5 kWh/100km</div>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '1rem',
              background: '#f8f9fa',
              borderRadius: '8px',
              marginBottom: '0.5rem'
            }}>
              <div>
                <div style={{ fontWeight: '600' }}>Shopping Mall Visit</div>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>Yesterday, 14:15 - 16:45</div>
              </div>
              <div>
                <div style={{ fontWeight: '600' }}>8.7 km</div>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>16.2 kWh/100km</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationScreen;