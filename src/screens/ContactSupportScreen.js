import React, { useState } from 'react';

const ContactSupportScreen = ({ showScreen, showToast }) => {
  const [activeTab, setActiveTab] = useState('chat');
  const [message, setMessage] = useState('');
  const [issue, setIssue] = useState('');

  const supportOptions = [
    { id: 'chat', name: 'Live Chat', icon: '💬', available: true },
    { id: 'email', name: 'Email', icon: '📧', available: true },
    { id: 'phone', name: 'Phone', icon: '📞', available: false },
    { id: 'ticket', name: 'Support Ticket', icon: '🎫', available: true }
  ];

  const quickIssues = [
    'App not connecting to vehicle',
    'Charging issues',
    'Remote controls not working',
    'Account/billing question',
    'Feature request',
    'Other'
  ];

  const handleSubmit = () => {
    if (!message.trim()) {
      showToast('Please enter your message', true);
      return;
    }
    showToast('Support request submitted successfully!');
    setMessage('');
    showScreen('profile');
  };

  return (
    <div className="screen contact-support" style={{
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
          padding: '1rem'
        }}
      >
        <button
          className="back-button"
          onClick={() => showScreen('helpCenter')}
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
          Contact Support
        </div>
      </div>


      <div style={{ padding: '1rem', paddingBottom: '80px', background: '#f7f9fc', minHeight: '100vh' }}>

        {/* Support Options */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1rem',
          marginBottom: '1rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            {supportOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveTab(option.id)}
                disabled={!option.available}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  backgroundColor: activeTab === option.id ? '#667eea' : '#f8f9fa',
                  color: activeTab === option.id ? 'white' : (option.available ? '#333' : '#999'),
                  border: 'none',
                  borderRadius: '8px',
                  cursor: option.available ? 'pointer' : 'not-allowed',
                  fontSize: '0.8rem'
                }}
              >
                {option.icon} {option.name}
              </button>
            ))}
          </div>

          {activeTab === 'chat' && (
            <div>
              <div style={{
                backgroundColor: '#e8f4fd',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👋</div>
                <p style={{ fontSize: '0.9rem', color: '#333' }}>
                  Average response time: 2-3 minutes
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Quick Issue Selection */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1rem',
          marginBottom: '1rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>What can we help you with?</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {quickIssues.map((issueOption, index) => (
              <button
                key={index}
                onClick={() => setIssue(issueOption)}
                style={{
                  padding: '0.75rem',
                  backgroundColor: issue === issueOption ? '#667eea' : '#f8f9fa',
                  color: issue === issueOption ? 'white' : '#333',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '0.9rem'
                }}
              >
                {issueOption}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1rem',
          marginBottom: '1rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Describe your issue</h3>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Please provide details about your issue..."
            style={{
              width: '100%',
              height: '120px',
              padding: '1rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              resize: 'none',
              fontSize: '0.9rem'
            }}
          />
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '0.5rem'
          }}>
            <span style={{ fontSize: '0.8rem', color: '#666' }}>
              {message.length}/500 characters
            </span>
          </div>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          style={{
            width: '100%',
            padding: '1rem',
            backgroundColor: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Submit Support Request
        </button>

        {/* Contact Info */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1rem',
          marginTop: '1rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Other Ways to Reach Us</h3>
          <div style={{ fontSize: '0.9rem', color: '#666' }}>
            <p style={{ marginBottom: '0.5rem' }}>📧 support@evcontrol.com</p>
            <p style={{ marginBottom: '0.5rem' }}>📞 1-800-EV-HELP (Mon-Fri 9AM-6PM)</p>
            <p>🌐 evcontrol.com/support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupportScreen;