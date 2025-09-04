import React, { useState } from 'react';

const AppPreferencesScreen = ({ showScreen, showToast }) => {
  const [preferences, setPreferences] = useState({
    theme: 'auto', // auto, light, dark
    language: 'en',
    units: 'metric', // metric, imperial
    autoRefresh: true,
    refreshInterval: '30', // seconds
    hapticFeedback: true,
    soundEffects: true,
    animations: true,
    dataUsage: 'wifi', // wifi, always, never
    cacheSize: '100', // MB
    autoSync: true,
    backgroundUpdates: true,
    lowPowerMode: false
  });

  const [storageUsage] = useState({
    appData: 25, // MB
    cacheData: 75, // MB
    totalAvailable: 1000 // MB
  });

  const handlePreferenceChange = (key, value) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
    showToast(`${key.replace(/([A-Z])/g, ' $1')} updated to ${value}`);
  };

  const handleToggle = (key) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
    showToast(`${key.replace(/([A-Z])/g, ' $1')} ${preferences[key] ? 'disabled' : 'enabled'}`);
  };

  const clearCache = () => {
    showToast('Cache cleared successfully');
  };

  const resetToDefaults = () => {
    setPreferences({
      theme: 'auto',
      language: 'en',
      units: 'metric',
      autoRefresh: true,
      refreshInterval: '30',
      hapticFeedback: true,
      soundEffects: true,
      animations: true,
      dataUsage: 'wifi',
      cacheSize: '100',
      autoSync: true,
      backgroundUpdates: true,
      lowPowerMode: false
    });
    showToast('Preferences reset to defaults');
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'it', name: 'Italiano' },
    { code: 'pt', name: 'Português' },
    { code: 'zh', name: '中文' },
    { code: 'ja', name: '日本語' }
  ];

  return (
    <div className="screen app-preferences">
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
          App Preferences
        </div>
      </div>


      <div style={{ padding: '1rem', paddingBottom: '80px', background: '#f7f9fc', minHeight: '100vh' }}>

        {/* Appearance */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1.5rem',
          marginBottom: '1rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>🎨 Appearance</h3>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Theme</label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[
                { value: 'light', label: '☀️ Light', icon: '☀️' },
                { value: 'dark', label: '🌙 Dark', icon: '🌙' },
                { value: 'auto', label: '🔄 Auto', icon: '🔄' }
              ].map((theme) => (
                <button
                  key={theme.value}
                  onClick={() => handlePreferenceChange('theme', theme.value)}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    backgroundColor: preferences.theme === theme.value ? '#667eea' : '#f8f9fa',
                    color: preferences.theme === theme.value ? 'white' : '#333',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}
                >
                  {theme.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Language</label>
            <select
              value={preferences.language}
              onChange={(e) => handlePreferenceChange('language', e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem'
              }}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>{lang.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Units</label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[
                { value: 'metric', label: 'Metric (km, °C)' },
                { value: 'imperial', label: 'Imperial (mi, °F)' }
              ].map((unit) => (
                <button
                  key={unit.value}
                  onClick={() => handlePreferenceChange('units', unit.value)}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    backgroundColor: preferences.units === unit.value ? '#667eea' : '#f8f9fa',
                    color: preferences.units === unit.value ? 'white' : '#333',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  {unit.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Data & Sync */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1.5rem',
          marginBottom: '1rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>🔄 Data & Sync</h3>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span>Auto Refresh</span>
              <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                <input
                  type="checkbox"
                  checked={preferences.autoRefresh}
                  onChange={() => handleToggle('autoRefresh')}
                  style={{ opacity: 0, width: 0, height: 0 }}
                />
                <span style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: preferences.autoRefresh ? '#667eea' : '#ccc',
                  borderRadius: '24px',
                  transition: '0.3s'
                }}>
                  <span style={{
                    position: 'absolute',
                    height: '20px',
                    width: '20px',
                    left: preferences.autoRefresh ? '26px' : '2px',
                    bottom: '2px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    transition: '0.3s'
                  }} />
                </span>
              </label>
            </div>
          </div>

          {preferences.autoRefresh && (
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Refresh Interval</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {['15', '30', '60', '300'].map((interval) => (
                  <button
                    key={interval}
                    onClick={() => handlePreferenceChange('refreshInterval', interval)}
                    style={{
                      flex: 1,
                      padding: '0.5rem',
                      backgroundColor: preferences.refreshInterval === interval ? '#667eea' : '#f8f9fa',
                      color: preferences.refreshInterval === interval ? 'white' : '#333',
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.8rem'
                    }}
                  >
                    {interval === '300' ? '5m' : `${interval}s`}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span>Auto Sync</span>
              <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                <input
                  type="checkbox"
                  checked={preferences.autoSync}
                  onChange={() => handleToggle('autoSync')}
                  style={{ opacity: 0, width: 0, height: 0 }}
                />
                <span style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: preferences.autoSync ? '#667eea' : '#ccc',
                  borderRadius: '24px'
                }}>
                  <span style={{
                    position: 'absolute',
                    height: '20px',
                    width: '20px',
                    left: preferences.autoSync ? '26px' : '2px',
                    bottom: '2px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    transition: '0.3s'
                  }} />
                </span>
              </label>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span>Background Updates</span>
              <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                <input
                  type="checkbox"
                  checked={preferences.backgroundUpdates}
                  onChange={() => handleToggle('backgroundUpdates')}
                  style={{ opacity: 0, width: 0, height: 0 }}
                />
                <span style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: preferences.backgroundUpdates ? '#667eea' : '#ccc',
                  borderRadius: '24px'
                }}>
                  <span style={{
                    position: 'absolute',
                    height: '20px',
                    width: '20px',
                    left: preferences.backgroundUpdates ? '26px' : '2px',
                    bottom: '2px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    transition: '0.3s'
                  }} />
                </span>
              </label>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Data Usage</label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[
                { value: 'wifi', label: 'Wi-Fi Only' },
                { value: 'always', label: 'Always' },
                { value: 'never', label: 'Manual' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handlePreferenceChange('dataUsage', option.value)}
                  style={{
                    flex: 1,
                    padding: '0.5rem',
                    backgroundColor: preferences.dataUsage === option.value ? '#667eea' : '#f8f9fa',
                    color: preferences.dataUsage === option.value ? 'white' : '#333',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.8rem'
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* User Experience */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1.5rem',
          marginBottom: '1rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>📱 User Experience</h3>

          {[
            { key: 'hapticFeedback', label: 'Haptic Feedback', desc: 'Vibrate when interacting with controls' },
            { key: 'soundEffects', label: 'Sound Effects', desc: 'Play sounds for actions and notifications' },
            { key: 'animations', label: 'Animations', desc: 'Enable smooth transitions and effects' },
            { key: 'lowPowerMode', label: 'Low Power Mode', desc: 'Reduce animations and background activity' }
          ].map((item) => (
            <div key={item.key} style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span>{item.label}</span>
                <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                  <input
                    type="checkbox"
                    checked={preferences[item.key]}
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
                    backgroundColor: preferences[item.key] ? '#667eea' : '#ccc',
                    borderRadius: '24px'
                  }}>
                    <span style={{
                      position: 'absolute',
                      height: '20px',
                      width: '20px',
                      left: preferences[item.key] ? '26px' : '2px',
                      bottom: '2px',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      transition: '0.3s'
                    }} />
                  </span>
                </label>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#666' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Storage */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1.5rem',
          marginBottom: '1rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>💾 Storage</h3>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>App Data</span>
              <span style={{ color: '#666' }}>{storageUsage.appData} MB</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Cache</span>
              <span style={{ color: '#666' }}>{storageUsage.cacheData} MB</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: '600' }}>
              <span>Total Used</span>
              <span style={{ color: '#333' }}>{storageUsage.appData + storageUsage.cacheData} MB</span>
            </div>
          </div>

          <div style={{
            height: '8px',
            backgroundColor: '#f0f0f0',
            borderRadius: '4px',
            marginBottom: '1rem',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              width: `${((storageUsage.appData + storageUsage.cacheData) / storageUsage.totalAvailable) * 100}%`,
              backgroundColor: '#667eea',
              borderRadius: '4px'
            }} />
          </div>

          <button
            onClick={clearCache}
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#f39c12',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            🗑️ Clear Cache ({storageUsage.cacheData} MB)
          </button>
        </div>

        {/* Reset */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1.5rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>🔄 Reset</h3>
          <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
            Reset all app preferences to their default values. This action cannot be undone.
          </p>
          <button
            onClick={resetToDefaults}
            style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: '#e74c3c',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            ↩️ Reset to Defaults
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppPreferencesScreen;