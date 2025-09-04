import React from 'react';

const SignOutScreen = ({ showScreen, showToast }) => {
  const handleSignOut = () => {
    showToast('Signed out successfully');
    showScreen('login');
  };

  const handleCancel = () => {
    showScreen('profile');
  };

  return (
    <div className="screen sign-out">
      <div className="header">
        <div className="vehicle-name">Sign Out</div>
      </div>

      <div style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
        textAlign: 'center'
      }}>
        
        <div style={{
          fontSize: '4rem',
          marginBottom: '2rem'
        }}>
          👋
        </div>

        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: '1rem',
          color: '#333'
        }}>
          Sign Out of EV Control?
        </h2>

        <p style={{
          fontSize: '1rem',
          color: '#666',
          marginBottom: '2rem',
          lineHeight: '1.5'
        }}>
          You'll need to sign in again to access your vehicle controls and account settings.
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
          maxWidth: '300px'
        }}>
          <button
            onClick={handleSignOut}
            style={{
              padding: '1rem',
              backgroundColor: '#e74c3c',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            🚪 Yes, Sign Out
          </button>

          <button
            onClick={handleCancel}
            style={{
              padding: '1rem',
              backgroundColor: '#95a5a6',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            ← Cancel
          </button>
        </div>

        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          fontSize: '0.8rem',
          color: '#666'
        }}>
          💡 <strong>Tip:</strong> Your data is automatically synced and will be available when you sign back in.
        </div>
      </div>
    </div>
  );
};

export default SignOutScreen;