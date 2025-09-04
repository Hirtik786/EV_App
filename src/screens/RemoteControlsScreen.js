import React from 'react';

const RemoteControlsScreen = ({ 
  vehicleState, 
  toggleLock, 
  toggleCharging, 
  toggleClimate, 
  honkHorn, 
  updateTemperature,
  showToast 
}) => {
  const handleStartVehicle = () => {
    showToast('Vehicle started remotely');
  };

  const handleToggleWindows = () => {
    showToast('Window controls activated');
  };

  const handleFlashLights = () => {
    showToast('Lights flashed! 💡');
  };

  const handleToggleHeatedSeats = () => {
    showToast('Heated seats toggled');
  };

  return (
    <div className="screen remote-controls">
      <div className="header">
        <div className="vehicle-name">Remote Controls</div>
      </div>
      
      <div className="control-grid">
        <button className="control-button" onClick={toggleLock}>
          <div className="control-icon">{vehicleState.locked ? '🔒' : '🔓'}</div>
          <div className="control-text">Lock/Unlock</div>
        </button>
        
        <button className="control-button" onClick={toggleCharging}>
          <div className="control-icon">{vehicleState.charging ? '⚡' : '🔌'}</div>
          <div className="control-text">Start/Stop Charging</div>
        </button>
        
        <button className="control-button" onClick={handleStartVehicle}>
          <div className="control-icon">🚗</div>
          <div className="control-text">Start Vehicle</div>
        </button>
        
        <button className="control-button" onClick={handleToggleWindows}>
          <div className="control-icon">🪟</div>
          <div className="control-text">Windows</div>
        </button>
        
        <button className="control-button" onClick={honkHorn}>
          <div className="control-icon">📯</div>
          <div className="control-text">Honk Horn</div>
        </button>
        
        <button className="control-button" onClick={handleFlashLights}>
          <div className="control-icon">💡</div>
          <div className="control-text">Flash Lights</div>
        </button>
      </div>

      <div className="climate-control">
        <h3 style={{ marginBottom: '1rem' }}>Climate Control</h3>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '1rem' 
        }}>
          <span>Temperature</span>
          <span>{vehicleState.temperature}°C</span>
        </div>
        <input
          type="range"
          min="16"
          max="30"
          value={vehicleState.temperature}
          className="temp-slider"
          onChange={(e) => updateTemperature(parseInt(e.target.value))}
        />
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginTop: '0.5rem' 
        }}>
          <button 
            className="btn btn-primary" 
            onClick={toggleClimate}
            style={{ width: '48%' }}
          >
            Toggle A/C
          </button>
          <button 
            className="btn btn-primary" 
            onClick={handleToggleHeatedSeats}
            style={{ width: '48%' }}
          >
            Heated Seats
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoteControlsScreen;