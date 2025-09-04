import React, { useState } from 'react';

const TermsPrivacyScreen = ({ showScreen, showToast }) => {
  const [activeTab, setActiveTab] = useState('terms');

  const documents = [
    { id: 'terms', name: 'Terms of Service', icon: '📄', updated: '2024-01-15' },
    { id: 'privacy', name: 'Privacy Policy', icon: '🔒', updated: '2024-01-10' },
    { id: 'cookies', name: 'Cookie Policy', icon: '🍪', updated: '2024-01-05' },
    { id: 'data', name: 'Data Usage', icon: '📊', updated: '2024-01-12' }
  ];

  const termsContent = [
    { section: 'Account Terms', content: 'By creating an account, you agree to provide accurate information and maintain the security of your credentials.' },
    { section: 'Service Usage', content: 'Our EV control services are provided as-is. You agree to use them responsibly and in accordance with applicable laws.' },
    { section: 'Vehicle Integration', content: 'You authorize us to connect with your vehicle\'s systems to provide remote control and monitoring services.' },
    { section: 'Limitation of Liability', content: 'Our liability is limited to the maximum extent permitted by law. We are not responsible for vehicle damage from service use.' }
  ];

  const privacyContent = [
    { section: 'Data Collection', content: 'We collect vehicle location, battery status, usage patterns, and account information to provide our services.' },
    { section: 'Data Usage', content: 'Your data is used to improve services, provide customer support, and ensure security. We do not sell personal data.' },
    { section: 'Data Sharing', content: 'Data is shared only with service providers, for legal compliance, or with your explicit consent.' },
    { section: 'Data Security', content: 'We use encryption, secure servers, and regular security audits to protect your information.' }
  ];

  const cookiesContent = [
    { section: 'Essential Cookies', content: 'Required for app functionality, authentication, and security. Cannot be disabled.' },
    { section: 'Analytics Cookies', content: 'Help us understand app usage and improve features. Can be disabled in settings.' },
    { section: 'Preference Cookies', content: 'Remember your settings and preferences for a personalized experience.' }
  ];

  const dataContent = [
    { section: 'Vehicle Data', content: 'Location, battery level, charging status, climate settings, and diagnostic information.' },
    { section: 'Usage Data', content: 'App interactions, feature usage, and performance metrics for service improvement.' },
    { section: 'Account Data', content: 'Profile information, preferences, and communication history for support purposes.' }
  ];

  const getContent = () => {
    switch(activeTab) {
      case 'terms': return termsContent;
      case 'privacy': return privacyContent;
      case 'cookies': return cookiesContent;
      case 'data': return dataContent;
      default: return termsContent;
    }
  };

  return (
    <div className="screen terms-privacy" style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto' // 👈 makes the screen scrollable
    }}>
      <div
  className="header"
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    background: '#667eea',
    color: 'white',
    padding: '1rem',
    position: 'relative'
  }}
>
  <button
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
    Legal & Privacy
  </div>
</div>


      <div style={{ padding: '1rem', paddingBottom: '80px', background: '#f7f9fc', minHeight: '100vh' }}>
        
        {/* Document Tabs */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '0.5rem',
          marginBottom: '1rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ display: 'flex', gap: '0.25rem' }}>
            {documents.map((doc) => (
              <button
                key={doc.id}
                onClick={() => setActiveTab(doc.id)}
                style={{
                  flex: 1,
                  padding: '0.75rem 0.5rem',
                  backgroundColor: activeTab === doc.id ? '#667eea' : 'transparent',
                  color: activeTab === doc.id ? 'white' : '#333',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}
              >
                {doc.icon} {doc.name}
              </button>
            ))}
          </div>
        </div>

        {/* Document Info */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1rem',
          marginBottom: '1rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
          }}>
            <h3>{documents.find(d => d.id === activeTab)?.name}</h3>
            <span style={{ fontSize: '0.8rem', color: '#666' }}>
              Updated: {documents.find(d => d.id === activeTab)?.updated}
            </span>
          </div>

          {/* Content */}
          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {getContent().map((item, index) => (
              <div key={index} style={{ marginBottom: '1.5rem' }}>
                <h4 style={{
                  color: '#667eea',
                  marginBottom: '0.5rem',
                  fontSize: '1rem'
                }}>
                  {item.section}
                </h4>
                <p style={{
                  fontSize: '0.9rem',
                  lineHeight: '1.5',
                  color: '#555'
                }}>
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            <button
              onClick={() => showToast('Document downloaded')}
              style={{
                flex: 1,
                padding: '0.75rem',
                backgroundColor: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              📥 Download PDF
            </button>
            <button
              onClick={() => showToast('Document shared')}
              style={{
                flex: 1,
                padding: '0.75rem',
                backgroundColor: '#2ecc71',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              📤 Share
            </button>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#666', textAlign: 'center' }}>
            By using our services, you agree to these terms and policies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPrivacyScreen;