import React, { useState } from 'react';

const NotificationPreferencesScreen = ({ showScreen, showToast }) => {
  const [preferences, setPreferences] = useState({
    pushNotifications: true,
    emailNotifications: false,
    smsNotifications: false,
    // Battery notifications
    batteryLow: true,
    batteryFull: true,
    chargingComplete: true,
    chargingStarted: false,
    // Security notifications
    vehicleLocked: false,
    vehicleUnlocked: true,
    securityAlert: true,
    sentryMode: true,
    // Maintenance notifications
    serviceReminders: true,
    softwareUpdates: true,
    tirePressure: true,
    // Location notifications
    arrivalDeparture: false,
    speedingAlerts: true,
    // Marketing
    promotionalOffers: false,
    productUpdates: true
  });

  const [quietHours, setQuietHours] = useState({
    enabled: true,
    startTime: '22:00',
    endTime: '07:00'
  });

  const handleToggle = (preference) => {
    setPreferences(prev => ({ ...prev, [preference]: !prev[preference] }));
    showToast(`${preference.replace(/([A-Z])/g, ' $1')} ${preferences[preference] ? 'disabled' : 'enabled'}`);
  };

  const handleQuietHoursToggle = () => {
    setQuietHours(prev => ({ ...prev, enabled: !prev.enabled }));
    showToast(`Quiet hours ${quietHours.enabled ? 'disabled' : 'enabled'}`);
  };

  const handleTimeChange = (field, value) => {
    setQuietHours(prev => ({ ...prev, [field]: value }));
  };

  const notificationSections = [
    {
      title: '📢 Notification Methods',
      items: [
        { key: 'pushNotifications', label: 'Push Notifications', desc: 'Receive notifications on this device' },
        { key: 'emailNotifications', label: 'Email Notifications', desc: 'Send notifications to your email' },
        { key: 'smsNotifications', label: 'SMS Notifications', desc: 'Send critical alerts via text message' }
      ]
    },
    {
      title: '🔋 Battery & Charging',
      items: [
        { key: 'batteryLow', label: 'Low Battery Alert', desc: 'Notify when battery is below 20%' },
        { key: 'batteryFull', label: 'Battery Full', desc: 'Notify when battery reaches 100%' },
        { key: 'chargingComplete', label: 'Charging Complete', desc: 'Notify when charging session ends' },
        { key: 'chargingStarted', label: 'Charging Started', desc: 'Notify when charging begins' }
      ]
    },
    {
      title: '🔒 Security & Access',
      items: [
        { key: 'vehicleLocked', label: 'Vehicle Locked', desc: 'Notify when vehicle is locked' },
        { key: 'vehicleUnlocked', label: 'Vehicle Unlocked', desc: 'Notify when vehicle is unlocked' },
        { key: 'securityAlert', label: 'Security Alerts', desc: 'Notify of potential security threats' },
        { key: 'sentryMode', label: 'Sentry Mode Events', desc: 'Notify when sentry mode is triggered' }
      ]
    },
    {
      title: '🔧 Maintenance & Updates',
      items: [
        { key: 'serviceReminders', label: 'Service Reminders', desc: 'Remind about scheduled maintenance' },
        { key: 'softwareUpdates', label: 'Software Updates', desc: 'Notify about available updates' },
        { key: 'tirePressure', label: 'Tire Pressure', desc: 'Alert when tire pressure is low' }
      ]
    },
    {
      title: '📍 Location & Travel',
      items: [
        { key: 'arrivalDeparture', label: 'Arrival/Departure', desc: 'Notify when arriving or leaving locations' },
        { key: 'speedingAlerts', label: 'Speeding Alerts', desc: 'Alert when speed limits are exceeded' }
      ]
    },
    {
      title: '📱 App & Marketing',
      items: [
        { key: 'promotionalOffers', label: 'Promotional Offers', desc: 'Receive special offers and deals' },
        { key: 'productUpdates', label: 'Product Updates', desc: 'Learn about new features and improvements' }
      ]
    }
  ];

  return (
    <div className="screen notification-preferences" style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto' // 👈 makes the screen scrollable
    }}>
      {/* ✅ Updated Header */}
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
          Notification Preferences
        </div>
      </div>

      <div style={{ padding: '1rem', paddingBottom: '80px', background: '#f7f9fc', minHeight: '100vh' }}>
        
        {/* Quiet Hours */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1.5rem',
          marginBottom: '1rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>🌙 Quiet Hours</h3>
          
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span>Enable Quiet Hours</span>
              <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                <input
                  type="checkbox"
                  checked={quietHours.enabled}
                  onChange={handleQuietHoursToggle}
                  style={{ opacity: 0, width: 0, height: 0 }}
                />
                <span style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: quietHours.enabled ? '#667eea' : '#ccc',
                  borderRadius: '24px'
                }} />
              </label>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#666' }}>
              Silence non-critical notifications during specified hours
            </p>
          </div>

          {quietHours.enabled && (
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem' }}>From</label>
                <input
                  type="time"
                  value={quietHours.startTime}
                  onChange={(e) => handleTimeChange('startTime', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px'
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem' }}>To</label>
                <input
                  type="time"
                  value={quietHours.endTime}
                  onChange={(e) => handleTimeChange('endTime', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px'
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Notification Sections */}
        {notificationSections.map((section, sectionIndex) => (
          <div key={sectionIndex} style={{
            background: 'white',
            borderRadius: '16px',
            padding: '1.5rem',
            marginBottom: '1rem',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>{section.title}</h3>
            
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} style={{ marginBottom: itemIndex === section.items.length - 1 ? 0 : '1rem' }}>
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
                      borderRadius: '24px',
                      transition: '0.3s'
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
        ))}

        {/* Test Notification */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1.5rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>🧪 Test Notifications</h3>
          <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
            Send a test notification to verify your settings are working correctly.
          </p>
          <button
            onClick={() => showToast('Test notification sent! 🔔')}
            style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            📤 Send Test Notification
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPreferencesScreen;
