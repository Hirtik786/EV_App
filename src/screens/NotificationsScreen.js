import React from 'react';

const NotificationsScreen = () => {
  const notifications = [
    {
      id: 1,
      icon: '⚡',
      type: 'battery',
      title: 'Charging Started',
      time: '2 minutes ago'
    },
    {
      id: 2,
      icon: '⚠️',
      type: 'maintenance',
      title: 'Low Tire Pressure - Rear Left',
      time: '1 hour ago'
    },
    {
      id: 3,
      icon: '🔒',
      type: 'security',
      title: 'Vehicle Locked Successfully',
      time: '3 hours ago'
    },
    {
      id: 4,
      icon: '🔧',
      type: 'maintenance',
      title: 'Scheduled Service Due in 300 km',
      time: '1 day ago'
    },
    {
      id: 5,
      icon: '🔋',
      type: 'battery',
      title: 'Charging Complete - 100% SoC',
      time: '2 days ago'
    }
  ];

  return (
    <div className="screen notifications">
      <div className="header">
        <div className="vehicle-name">Notifications</div>
      </div>
      
      {notifications.map((notification) => (
        <div key={notification.id} className="notification-item">
          <div className={`notification-icon ${notification.type}`}>
            {notification.icon}
          </div>
          <div className="notification-content">
            <div className="notification-title">{notification.title}</div>
            <div className="notification-time">{notification.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationsScreen;