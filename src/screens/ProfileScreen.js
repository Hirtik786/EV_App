import React from 'react';

const ProfileScreen = ({ showScreen }) => {
  const menuSections = [
    {
      id: 'vehicle-settings',
      items: [
        { icon: '🚗', text: 'Vehicle Management', screen: 'vehicleManagement' },
        { icon: '🔒', text: 'Security Settings', screen: 'securitySettings' },
        { icon: '🔔', text: 'Notification Preferences', screen: 'notificationPreferences' },
        { icon: '⚙️', text: 'App Preferences', screen: 'appPreferences' }
      ]
    },
    {
      id: 'support',
      items: [
        { icon: '❓', text: 'Help Center', screen: 'helpCenter' },
        { icon: '💬', text: 'Contact Support', screen: 'contactSupport' },
        { icon: '🚨', text: 'Roadside Assistance', screen: 'roadsideAssistance' }
      ]
    },
    {
      id: 'account',
      items: [
        { icon: '📄', text: 'Terms & Privacy Policy', screen: 'termsPrivacy' },
        { icon: '📱', text: 'App Version 2.1.0', noArrow: true },
        { icon: '🚪', text: 'Sign Out', screen: 'signOut' }
      ]
    }
  ];

  const handleMenuClick = (item) => {
    if (item.screen) {
      showScreen(item.screen);
    }
  };

  return (
    <div className="screen profile">
      <div className="header">
        <div className="vehicle-name">Profile & Settings</div>
      </div>

      <div className="profile-header">
        <div className="profile-avatar">JD</div>
        <h2>John Doe</h2>
        <p style={{ color: '#666' }}>john.doe@email.com</p>
      </div>

      {menuSections.map((section) => (
        <div key={section.id} className="menu-section">
          {section.items.map((item, index) => (
            <div 
              key={index} 
              className="menu-item"
              onClick={() => handleMenuClick(item)}
              style={{
                cursor: item.screen ? 'pointer' : 'default',
                opacity: item.screen ? 1 : 0.7
              }}
            >
              <div className="menu-icon">{item.icon}</div>
              <div className="menu-text">{item.text}</div>
              {!item.noArrow && <div className="menu-arrow">›</div>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProfileScreen;