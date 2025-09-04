import React, { useState } from 'react';

const VehicleManagementScreen = ({ showScreen, showToast, vehicleState }) => {
  const [vehicleInfo, setVehicleInfo] = useState({
    name: 'My Tesla Model 3',
    vin: 'VIN123456789',
    year: '2023',
    color: 'Pearl White',
    trim: 'Long Range AWD'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    showToast('Vehicle information updated successfully');
  };

  const handleReset = () => {
    showToast('Vehicle settings reset to factory defaults');
  };

  const handleRemove = () => {
    showToast('Vehicle removed from account', true);
    showScreen('profile');
  };

  return (
    <div className="screen vehicle-management" style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto' // 👈 makes the screen scrollable
    }}>
      {/* Header with Back + Title */}
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
          Vehicle Management
        </div>
      </div>

      <div
        style={{
          padding: '1rem',
          paddingBottom: '80px',
          background: '#f7f9fc',
          minHeight: '100vh'
        }}
      >
        {/* Current Vehicle Info */}
        <div
          style={{
            background: 'white',
            borderRadius: '16px',
            padding: '1.5rem',
            marginBottom: '1rem',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
          }}
        >
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>Current Vehicle</h3>

          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>🚗</div>
            <div
              style={{
                color: vehicleState?.locked ? '#e74c3c' : '#2ecc71',
                fontSize: '0.9rem'
              }}
            >
              {vehicleState?.locked ? 'Locked' : 'Unlocked'} • Battery:{' '}
              {vehicleState?.batteryLevel || 85}%
            </div>
          </div>

          {Object.entries(vehicleInfo).map(([key, value]) => (
            <div
              key={key}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75rem 0',
                borderBottom: '1px solid #f0f0f0'
              }}
            >
              <span style={{ fontWeight: '500', textTransform: 'capitalize' }}>
                {key.replace(/([A-Z])/g, ' $1')}:
              </span>
              {isEditing && key !== 'vin' ? (
                <input
                  type="text"
                  value={value}
                  onChange={(e) =>
                    setVehicleInfo((prev) => ({ ...prev, [key]: e.target.value }))
                  }
                  style={{
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    padding: '0.25rem 0.5rem',
                    fontSize: '0.9rem'
                  }}
                />
              ) : (
                <span style={{ color: '#666' }}>{value}</span>
              )}
            </div>
          ))}

          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  backgroundColor: '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Edit Info
              </button>
            ) : (
              <>
                <button
                  onClick={handleSave}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    backgroundColor: '#2ecc71',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    backgroundColor: '#95a5a6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>

        {/* Vehicle Actions */}
        <div
          style={{
            background: 'white',
            borderRadius: '16px',
            padding: '1.5rem',
            marginBottom: '1rem',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
          }}
        >
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>Actions</h3>

          <button
            onClick={() => showScreen('pairing')}
            style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              marginBottom: '0.5rem'
            }}
          >
            🔄 Re-pair Vehicle
          </button>

          <button
            onClick={handleReset}
            style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: '#f39c12',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              marginBottom: '0.5rem'
            }}
          >
            ⚙️ Reset Vehicle Settings
          </button>

          <button
            onClick={handleRemove}
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
            🗑️ Remove Vehicle
          </button>
        </div>

        {/* Add New Vehicle */}
        <div
          style={{
            background: 'white',
            borderRadius: '16px',
            padding: '1.5rem',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
          }}
        >
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>
            Add Another Vehicle
          </h3>
          <p
            style={{
              color: '#666',
              marginBottom: '1rem',
              fontSize: '0.9rem'
            }}
          >
            Connect additional EVs to your account for seamless management.
          </p>
          <button
            onClick={() => showScreen('pairing')}
            style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: '#2ecc71',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            ➕ Add New Vehicle
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleManagementScreen;
