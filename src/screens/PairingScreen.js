import React, { useState } from 'react';

const PairingScreen = ({ showScreen, showToast, showLoading, hideLoading }) => {
  const [vin, setVin] = useState('');

  const handleScanQR = () => {
    showLoading();
    setTimeout(() => {
      hideLoading();
      showToast('QR Code scanned successfully!');
      setVin('EV5000ABC123456789');
    }, 2000);
  };

  const handlePairVehicle = () => {
    if (vin) {
      showLoading();
      setTimeout(() => {
        hideLoading();
        showToast('Vehicle paired successfully!');
        showScreen('dashboard');
      }, 2000);
    } else {
      showToast('Please enter VIN or scan QR code', true);
    }
  };

  return (
    <div className="screen pairing">
      <div className="pairing-card">
        <h2 style={{ marginBottom: '1rem', color: '#333' }}>Pair Your Vehicle</h2>
        <p style={{ marginBottom: '2rem', color: '#666' }}>
          Scan the QR code or enter your vehicle's VIN
        </p>
        <div className="qr-scanner" onClick={handleScanQR}>
          📱
        </div>
        <div className="form-group">
          <label>Vehicle VIN</label>
          <input
            type="text"
            value={vin}
            onChange={(e) => setVin(e.target.value)}
            placeholder="Enter VIN manually"
          />
        </div>
        <button className="btn btn-primary" onClick={handlePairVehicle}>
          Pair Vehicle
        </button>
      </div>
    </div>
  );
};

export default PairingScreen;