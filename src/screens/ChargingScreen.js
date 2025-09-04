import React from 'react';

const ChargingScreen = () => {
  return (
    <div className="screen charging">
      <div className="header">
        <div className="vehicle-name">Charging Stations</div>
      </div>
      
      <div style={{ 
        padding: '1rem', 
        paddingBottom: '80px', 
        overflowY: 'auto', 
        background: '#f7f9fc' 
      }}>
        <div className="map-placeholder" style={{ marginBottom: '1rem' }}>
          🗺️ Interactive Map with Charging Stations
        </div>

        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1rem',
          marginBottom: '1rem',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}>
          <h3>Nearby Stations</h3>
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
                <div style={{ fontWeight: '600' }}>SuperCharge Station A</div>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>0.5 km away • 150kW</div>
              </div>
              <div style={{ color: '#2ecc71', fontWeight: '600' }}>Available</div>
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
                <div style={{ fontWeight: '600' }}>FastCharge Hub B</div>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>1.2 km away • 100kW</div>
              </div>
              <div style={{ color: '#e74c3c', fontWeight: '600' }}>2/4 Busy</div>
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '1rem',
              background: '#f8f9fa',
              borderRadius: '8px'
            }}>
              <div>
                <div style={{ fontWeight: '600' }}>EcoCharge Point C</div>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>2.1 km away • 75kW</div>
              </div>
              <div style={{ color: '#2ecc71', fontWeight: '600' }}>Available</div>
            </div>
          </div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1rem',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}>
          <h3>Charging History</h3>
          <div style={{ marginTop: '1rem' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '1rem',
              borderBottom: '1px solid #f0f0f0'
            }}>
              <div>
                <div style={{ fontWeight: '600' }}>Today, 14:30</div>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>SuperCharge Station A</div>
              </div>
              <div>
                <div style={{ fontWeight: '600' }}>45.2 kWh</div>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>$12.50</div>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '1rem',
              borderBottom: '1px solid #f0f0f0'
            }}>
              <div>
                <div style={{ fontWeight: '600' }}>Yesterday, 09:15</div>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>FastCharge Hub B</div>
              </div>
              <div>
                <div style={{ fontWeight: '600' }}>32.8 kWh</div>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>$9.20</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChargingScreen;