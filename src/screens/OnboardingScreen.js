import React from 'react';

const OnboardingScreen = ({ screen, nextScreen }) => {
  const getScreenContent = () => {
    switch (screen) {
      case 'onboarding1':
        return {
          icon: '🔧',
          title: 'Complete Control',
          description: 'Monitor and control every aspect of your electric vehicle from anywhere in the world',
          buttonText: 'Next'
        };
      case 'onboarding2':
        return {
          icon: '⚡',
          title: 'Smart Charging',
          description: 'Find charging stations, monitor battery health, and optimize your charging schedule',
          buttonText: 'Next'
        };
      case 'onboarding3':
        return {
          icon: '🔒',
          title: 'Advanced Security',
          description: 'Secure remote access with biometric authentication and real-time security monitoring',
          buttonText: 'Get Started'
        };
      default:
        return {
          icon: '🔧',
          title: 'Complete Control',
          description: 'Monitor and control every aspect of your electric vehicle from anywhere in the world',
          buttonText: 'Next'
        };
    }
  };

  const content = getScreenContent();

  return (
    <div className="screen onboarding">
      <div className="onboarding-icon">{content.icon}</div>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
      <button className="btn btn-primary" onClick={nextScreen}>
        {content.buttonText}
      </button>
    </div>
  );
};

export default OnboardingScreen;