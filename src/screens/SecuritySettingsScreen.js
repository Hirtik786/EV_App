import React, { useState } from 'react';

const SecuritySettingsScreen = ({ showScreen, showToast }) => {
  const [settings, setSettings] = useState({
    twoFactorAuth: true,
    biometricLogin: false,
    autoLock: true,
    lockTimeout: '5', // minutes
    locationTracking: true,
    remoteAccess: true,
    securityAlerts: true,
    visionSystem: false
  });

  const [pinCode, setPinCode] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [showPinSetup, setShowPinSetup] = useState(false);

  const handleToggle = (setting) => {
    setSettings(prev => ({ ...prev, [setting]: !prev[setting] }));
    showToast(`${setting.replace(/([A-Z])/g, ' $1')} ${settings[setting] ? 'disabled' : 'enabled'}`);
  };

  const handleTimeoutChange = (timeout) => {
    setSettings(prev => ({ ...prev, lockTimeout: timeout }));
    showToast(`Auto-lock timeout set to ${timeout} minutes`);
  };

  const handlePinSetup = () => {
    if (pinCode.length !== 4) {
      showToast('PIN must be 4 digits', true);
      return;
    }
    if (pinCode !== confirmPin) {
      showToast('PINs do not match', true);
      return;
    }
    showToast('PIN updated successfully');
    setShowPinSetup(false);
    setPinCode('');
    setConfirmPin('');
  };

  return (
    <div className="screen security-settings">
      <div
        className="header"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          background: '#667eea',
          color: 'white',
          padding: '1rem'
        }}
      >
        <button
          className="back-button"
          onClick={() => showScreen('profile')}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            fontWeight: '600'
          }}
        >
          ⬅ Back
        </button>
        <div
          className="vehicle-name"
          style={{ fontWeight: '600', fontSize: '1.2rem' }}
        >
          Security Settings
        </div>
      </div>


      <div style={{ padding: '1rem', paddingBottom: '80px', background: '#f7f9fc', minHeight: '100vh' }}>

        {/* Authentication */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1.5rem',
          marginBottom: '1rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>🔐 Authentication</h3>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span>Two-Factor Authentication</span>
              <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                <input
                  type="checkbox"
                  checked={settings.twoFactorAuth}
                  onChange={() => handleToggle('twoFactorAuth')}
                  style={{ opacity: 0, width: 0, height: 0 }}
                />
                <span style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: settings.twoFactorAuth ? '#667eea' : '#ccc',
                  borderRadius: '24px',
                  transition: '0.3s',
                  '&:before': {
                    position: 'absolute',
                    content: '""',
                    height: '20px',
                    width: '20px',
                    left: settings.twoFactorAuth ? '26px' : '2px',
                    bottom: '2px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    transition: '0.3s'
                  }
                }} />
              </label>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#666' }}>
              Add an extra layer of security with SMS or authenticator app
            </p>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span>Biometric Login</span>
              <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                <input
                  type="checkbox"
                  checked={settings.biometricLogin}
                  onChange={() => handleToggle('biometricLogin')}
                  style={{ opacity: 0, width: 0, height: 0 }}
                />
                <span style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: settings.biometricLogin ? '#667eea' : '#ccc',
                  borderRadius: '24px'
                }} />
              </label>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#666' }}>
              Use fingerprint or face recognition to unlock
            </p>
          </div>

          <button
            onClick={() => setShowPinSetup(!showPinSetup)}
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            🔢 Change PIN Code
          </button>

          {showPinSetup && (
            <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <input
                type="password"
                placeholder="Enter 4-digit PIN"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value.slice(0, 4))}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  marginBottom: '0.5rem'
                }}
              />
              <input
                type="password"
                placeholder="Confirm PIN"
                value={confirmPin}
                onChange={(e) => setConfirmPin(e.target.value.slice(0, 4))}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  marginBottom: '0.5rem'
                }}
              />
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={handlePinSetup}
                  style={{
                    flex: 1,
                    padding: '0.5rem',
                    backgroundColor: '#2ecc71',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  Save
                </button>
                <button
                  onClick={() => setShowPinSetup(false)}
                  style={{
                    flex: 1,
                    padding: '0.5rem',
                    backgroundColor: '#95a5a6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* App Security */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1.5rem',
          marginBottom: '1rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>📱 App Security</h3>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span>Auto-Lock App</span>
              <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                <input
                  type="checkbox"
                  checked={settings.autoLock}
                  onChange={() => handleToggle('autoLock')}
                  style={{ opacity: 0, width: 0, height: 0 }}
                />
                <span style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: settings.autoLock ? '#667eea' : '#ccc',
                  borderRadius: '24px'
                }} />
              </label>
            </div>
          </div>

          {settings.autoLock && (
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Lock Timeout</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {['1', '5', '15', '30'].map((timeout) => (
                  <button
                    key={timeout}
                    onClick={() => handleTimeoutChange(timeout)}
                    style={{
                      flex: 1,
                      padding: '0.5rem',
                      backgroundColor: settings.lockTimeout === timeout ? '#667eea' : '#f8f9fa',
                      color: settings.lockTimeout === timeout ? 'white' : '#333',
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.8rem'
                    }}
                  >
                    {timeout}m
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Vehicle Security */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1.5rem',
          marginBottom: '1rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>🚗 Vehicle Security</h3>

          {[
            { key: 'locationTracking', label: 'Location Tracking', desc: 'Allow app to track vehicle location' },
            { key: 'remoteAccess', label: 'Remote Access', desc: 'Enable remote control features' },
            { key: 'securityAlerts', label: 'Security Alerts', desc: 'Notify when security events occur' },
            { key: 'visionSystem', label: 'Sentry Mode', desc: 'Monitor surroundings when parked' }
          ].map((item) => (
            <div key={item.key} style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span>{item.label}</span>
                <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                  <input
                    type="checkbox"
                    checked={settings[item.key]}
                    onChange={() => handleToggle(item.key)}
                    style={{ opacity: 0, width: 0, height: 0 }}
                  />
                  <span style={{
                    position: 'absolute',
                    cursor: 'pointer',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: settings[item.key] ? '#667eea' : '#ccc',
                    borderRadius: '24px'
                  }} />
                </label>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#666' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Emergency */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1.5rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>🚨 Emergency</h3>

          <button
            onClick={() => showToast('Emergency contact updated')}
            style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: '#e74c3c',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              marginBottom: '0.5rem'
            }}
          >
            📞 Set Emergency Contact
          </button>

          <button
            onClick={() => showToast('Security report sent')}
            style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: '#f39c12',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            🔒 Report Security Issue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettingsScreen;