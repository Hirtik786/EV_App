import React, { useState, useEffect } from 'react';
import './App.css';

// Import all screens
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import PairingScreen from './screens/PairingScreen';
import DashboardScreen from './screens/DashboardScreen';
import VehicleStatusScreen from './screens/VehicleStatusScreen';
import RemoteControlsScreen from './screens/RemoteControlsScreen';
import ChargingScreen from './screens/ChargingScreen';
import LocationScreen from './screens/LocationScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';

// Import new profile-related screens
import VehicleManagementScreen from './screens/VehicleManagementScreen';
import SecuritySettingsScreen from './screens/SecuritySettingsScreen';
import NotificationPreferencesScreen from './screens/NotificationPreferencesScreen';
import AppPreferencesScreen from './screens/AppPreferencesScreen';
import HelpCenterScreen from './screens/HelpCenterScreen';
import ContactSupportScreen from './screens/ContactSupportScreen';
import RoadsideAssistanceScreen from './screens/RoadsideAssistanceScreen';
import TermsPrivacyScreen from './screens/TermsPrivacyScreen';
import SignOutScreen from './screens/SignOutScreen';

// Import components
import BottomNavigation from './components/BottomNavigation';
import Toast from './components/Toast';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ message: '', isError: false, show: false });
  
  const [vehicleState, setVehicleState] = useState({
    locked: true,
    charging: true,
    climateOn: true,
    temperature: 22,
    batteryLevel: 85,
    range: 340
  });

  // Auto-advance from splash screen
  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('onboarding1');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentScreen === 'dashboard') {
        setVehicleState(prev => {
          let newBatteryLevel = prev.batteryLevel;
          
          if (prev.charging && prev.batteryLevel < 100) {
            newBatteryLevel = Math.min(100, prev.batteryLevel + 0.1);
          } else if (!prev.charging && prev.batteryLevel > 0) {
            newBatteryLevel = Math.max(0, prev.batteryLevel - 0.05);
          }
          
          return {
            ...prev,
            batteryLevel: newBatteryLevel,
            range: Math.floor(newBatteryLevel * 4)
          };
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentScreen]);

  const showScreen = (screenId) => {
    setCurrentScreen(screenId);
  };

  const nextScreen = () => {
    const screenOrder = ['splash', 'onboarding1', 'onboarding2', 'onboarding3', 'login'];
    const currentIndex = screenOrder.indexOf(currentScreen);
    if (currentIndex < screenOrder.length - 1) {
      setCurrentScreen(screenOrder[currentIndex + 1]);
    }
  };

  const showToast = (message, isError = false) => {
    setToast({ message, isError, show: true });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 3000);
  };

  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);

  // Vehicle control functions
  const toggleLock = () => {
    setVehicleState(prev => ({
      ...prev,
      locked: !prev.locked
    }));
    showToast(vehicleState.locked ? 'Vehicle unlocked successfully' : 'Vehicle locked successfully');
  };

  const toggleCharging = () => {
    setVehicleState(prev => ({
      ...prev,
      charging: !prev.charging
    }));
    showToast(vehicleState.charging ? 'Charging stopped' : 'Charging started');
  };

  const toggleClimate = () => {
    setVehicleState(prev => ({
      ...prev,
      climateOn: !prev.climateOn
    }));
    showToast(vehicleState.climateOn ? 'Climate control deactivated' : 'Climate control activated');
  };

  const honkHorn = () => {
    showToast('Horn activated! 📯');
  };

  const updateTemperature = (temperature) => {
    setVehicleState(prev => ({
      ...prev,
      temperature
    }));
  };

  const renderScreen = () => {
    const screenProps = {
      vehicleState,
      showScreen,
      nextScreen,
      showToast,
      showLoading,
      hideLoading,
      toggleLock,
      toggleCharging,
      toggleClimate,
      honkHorn,
      updateTemperature
    };

    switch (currentScreen) {
      case 'splash':
        return <SplashScreen {...screenProps} />;
      case 'onboarding1':
      case 'onboarding2':
      case 'onboarding3':
        return <OnboardingScreen screen={currentScreen} {...screenProps} />;
      case 'login':
        return <LoginScreen {...screenProps} />;
      case 'pairing':
        return <PairingScreen {...screenProps} />;
      case 'dashboard':
        return <DashboardScreen {...screenProps} />;
      case 'vehicleStatus':
        return <VehicleStatusScreen {...screenProps} />;
      case 'remoteControls':
        return <RemoteControlsScreen {...screenProps} />;
      case 'charging':
        return <ChargingScreen {...screenProps} />;
      case 'location':
        return <LocationScreen {...screenProps} />;
      case 'notifications':
        return <NotificationsScreen {...screenProps} />;
      case 'profile':
        return <ProfileScreen {...screenProps} />;
      
      // New profile-related screens
      case 'vehicleManagement':
        return <VehicleManagementScreen {...screenProps} />;
      case 'securitySettings':
        return <SecuritySettingsScreen {...screenProps} />;
      case 'notificationPreferences':
        return <NotificationPreferencesScreen {...screenProps} />;
      case 'appPreferences':
        return <AppPreferencesScreen {...screenProps} />;
      case 'helpCenter':
        return <HelpCenterScreen {...screenProps} />;
      case 'contactSupport':
        return <ContactSupportScreen {...screenProps} />;
      case 'roadsideAssistance':
        return <RoadsideAssistanceScreen {...screenProps} />;
      case 'termsPrivacy':
        return <TermsPrivacyScreen {...screenProps} />;
      case 'signOut':
        return <SignOutScreen {...screenProps} />;
      
      default:
        return <DashboardScreen {...screenProps} />;
    }
  };

  const shouldShowBottomNav = () => {
    const screensWithBottomNav = [
      'dashboard',
      'vehicleStatus',
      'remoteControls',
      'charging',
      'location',
      'notifications',
      'profile'
    ];
    return screensWithBottomNav.includes(currentScreen);
  };

  return (
    <div className="app-container">
      {renderScreen()}
      
      {shouldShowBottomNav() && (
        <BottomNavigation 
          currentScreen={currentScreen}
          showScreen={showScreen}
        />
      )}
      
      <Toast 
        message={toast.message}
        isError={toast.isError}
        show={toast.show}
      />
      
      {isLoading && <LoadingSpinner />}
    </div>
  );
}

export default App;