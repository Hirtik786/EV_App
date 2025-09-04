import React, { useState } from 'react';

const VehicleStatusScreen = () => {
  const [activeTab, setActiveTab] = useState('battery-tab');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'battery-tab':
        return (
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Battery Details</h3>
            <div className="status-grid">
              <div className="status-item">
                <div className="status-value">85%</div>
                <div className="status-label">Current SoC</div>
              </div>
              <div className="status-item">
                <div className="status-value">42°C</div>
                <div className="status-label">Temperature</div>
              </div>
              <div className="status-item">
                <div className="status-value">96.8%</div>
                <div className="status-label">Health</div>
              </div>
              <div className="status-item">
                <div className="status-value">340km</div>
                <div className="status-label">Range</div>
              </div>
            </div>
          </div>
        );
      case 'tires-tab':
        return (
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Tire Pressure</h3>
            <div className="status-grid">
              <div className="status-item">
                <div className="status-value">2.3 bar</div>
                <div className="status-label">Front Left</div>
              </div>
              <div className="status-item">
                <div className="status-value">2.3 bar</div>
                <div className="status-label">Front Right</div>
              </div>
              <div className="status-item">
                <div className="status-value">1.9 bar</div>
                <div className="status-label" style={{ color: '#e67e22' }}>Rear Left ⚠️</div>
              </div>
              <div className="status-item">
                <div className="status-value">2.2 bar</div>
                <div className="status-label">Rear Right</div>
              </div>
            </div>
          </div>
        );
      case 'doors-tab':
        return (
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Door Status</h3>
            <div className="status-grid">
              <div className="status-item">
                <div className="status-value">🔒</div>
                <div className="status-label">Front Left</div>
              </div>
              <div className="status-item">
                <div className="status-value">🔒</div>
                <div className="status-label">Front Right</div>
              </div>
              <div className="status-item">
                <div className="status-value">🔒</div>
                <div className="status-label">Rear Left</div>
              </div>
              <div className="status-item">
                <div className="status-value">🔒</div>
                <div className="status-label">Rear Right</div>
              </div>
            </div>
          </div>
        );
      case 'systems-tab':
        return (
          <div>
            <h3 style={{ marginBottom: '1rem' }}>System Health</h3>
            <div className="status-grid">
              <div className="status-item">
                <div className="status-value">✅</div>
                <div className="status-label">Motor</div>
              </div>
              <div className="status-item">
                <div className="status-value">✅</div>
                <div className="status-label">Brakes</div>
              </div>
              <div className="status-item">
                <div className="status-value">⚠️</div>
                <div className="status-label">Tire Pressure</div>
              </div>
              <div className="status-item">
                <div className="status-value">✅</div>
                <div className="status-label">Lights</div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="screen vehicle-status">
      <div className="header">
        <div className="vehicle-name">Vehicle Status</div>
      </div>
      
      <div className="tabs">
        <div 
          className={`tab ${activeTab === 'battery-tab' ? 'active' : ''}`}
          onClick={() => setActiveTab('battery-tab')}
        >
          Battery
        </div>
        <div 
          className={`tab ${activeTab === 'tires-tab' ? 'active' : ''}`}
          onClick={() => setActiveTab('tires-tab')}
        >
          Tires
        </div>
        <div 
          className={`tab ${activeTab === 'doors-tab' ? 'active' : ''}`}
          onClick={() => setActiveTab('doors-tab')}
        >
          Doors
        </div>
        <div 
          className={`tab ${activeTab === 'systems-tab' ? 'active' : ''}`}
          onClick={() => setActiveTab('systems-tab')}
        >
          Systems
        </div>
      </div>

      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default VehicleStatusScreen;