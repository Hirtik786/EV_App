import React from 'react';

const DashboardScreen = ({ 
  vehicleState, 
  showScreen, 
  toggleLock, 
  toggleCharging, 
  toggleClimate, 
  honkHorn 
}) => {
  return (
    <div className="screen dashboard">
      <div className="header">
        <div className="vehicle-name">My EV5000</div>
        <div className="last-updated">Last updated: 2 minutes ago</div>
      </div>
      
      <div className="dashboard-content">
        <div className="battery-card">
          <div className="battery-level">
            <div>
              <div className="battery-percentage">
                {Math.floor(vehicleState.batteryLevel)}%
              </div>
              <div style={{ color: '#666' }}>State of Charge</div>
            </div>
            <div className="battery-icon">🔋</div>
          </div>
          <div className="battery-details">
            <div className="battery-detail">
              <div className="battery-detail-value">{vehicleState.range}</div>
              <div className="battery-detail-label">km range</div>
            </div>
            <div className="battery-detail">
              <div className="battery-detail-value">
                {vehicleState.charging ? '⚡' : '🔌'}
              </div>
              <div className="battery-detail-label">
                {vehicleState.charging ? 'Charging' : 'Not Charging'}
              </div>
            </div>
          </div>
        </div>

        <div className="vehicle-graphic">
          <div className="car-icon">🚗</div>
          <div className="status-indicators">
            <div className={`status-indicator ${vehicleState.locked ? 'active' : 'inactive'}`}>
              <div>🔒</div>
              <div style={{ fontSize: '0.8rem' }}>
                {vehicleState.locked ? 'Locked' : 'Unlocked'}
              </div>
            </div>
            <div className="status-indicator inactive">
              <div>🚪</div>
              <div style={{ fontSize: '0.8rem' }}>Doors</div>
            </div>
            <div className={`status-indicator ${vehicleState.climateOn ? 'active' : 'inactive'}`}>
              <div>❄️</div>
              <div style={{ fontSize: '0.8rem' }}>Climate</div>
            </div>
          </div>
        </div>

        <div className="quick-actions">
          <button className="quick-action" onClick={toggleLock}>
            <div className="quick-action-icon">
              {vehicleState.locked ? '🔒' : '🔓'}
            </div>
            <div className="quick-action-text">
              {vehicleState.locked ? 'Locked' : 'Unlocked'}
            </div>
          </button>
          <button className="quick-action" onClick={toggleClimate}>
            <div className="quick-action-icon">
              {vehicleState.climateOn ? '❄️' : '🌡️'}
            </div>
            <div className="quick-action-text">Climate</div>
          </button>
          <button className="quick-action" onClick={honkHorn}>
            <div className="quick-action-icon">📯</div>
            <div className="quick-action-text">Horn</div>
          </button>
          <button className="quick-action" onClick={toggleCharging}>
            <div className="quick-action-icon">
              {vehicleState.charging ? '⚡' : '🔌'}
            </div>
            <div className="quick-action-text">Charging</div>
          </button>
        </div>

        <div className="location-preview">
          <h3 style={{ marginBottom: '1rem' }}>Vehicle Location</h3>
          <div className="map-placeholder">
            📍 123 Electric Ave, Smart City
          </div>
          <button 
            className="btn btn-primary" 
            onClick={() => showScreen('location')}
            style={{ marginTop: '1rem', marginBottom: '6rem' }}
          >
            View Full Map
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;