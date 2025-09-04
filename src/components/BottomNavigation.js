import React from 'react';

const BottomNavigation = ({ currentScreen, showScreen }) => {
  const navItems = [
    { id: 'dashboard', icon: '🏠', text: 'Home' },
    { id: 'vehicleStatus', icon: '📊', text: 'Status' },
    { id: 'remoteControls', icon: '🎛️', text: 'Controls' },
    { id: 'charging', icon: '⚡', text: 'Charging' },
    { id: 'notifications', icon: '🔔', text: 'Alerts' },
    { id: 'profile', icon: '👤', text: 'Profile' }
  ];

  return (
    <div className="bottom-nav">
      {navItems.map((item) => (
        <div
          key={item.id}
          className={`nav-item ${currentScreen === item.id ? 'active' : ''}`}
          onClick={() => showScreen(item.id)}
        >
          <div className="nav-icon">{item.icon}</div>
          <div className="nav-text">{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default BottomNavigation;