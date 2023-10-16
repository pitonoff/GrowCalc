import React, { useState } from 'react';
import './EnergyCalculator.css';
import { useDispatch } from 'react-redux';
import { updateEnergyCost } from './actions'; // Import the action creator

const EnergyCalculator = () => {
  const [devices, setDevices] = useState([
    { name: '', hoursPerDay: '', days: '', devicePower: '', costOfDevice: '', warrantyPeriod: '' }
  ]);
  const [costPerKWh, setCostPerKWh] = useState('');
  const [totalCost, setTotalCost] = useState(0);
  const [totalEnergyConsumption, setTotalEnergyConsumption] = useState(0);

  const dispatch = useDispatch();

  const addDevice = () => {
    setDevices([...devices, { name: '', hoursPerDay: '', days: '', devicePower: '', costOfDevice: '', warrantyPeriod: '' }]);
  };

  const removeDevice = (index) => {
    const updatedDevices = devices.filter((_, i) => i !== index);
    setDevices(updatedDevices);
  };

  const handleDeviceChange = (index, field, value) => {
    const updatedDevices = [...devices];
    updatedDevices[index][field] = value;
    setDevices(updatedDevices);
  };

  const handleCostPerKWhChange = (value) => {
    // Allow only numbers and up to one decimal point
    const parsedValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    setCostPerKWh(isNaN(parsedValue) ? '' : parsedValue);
  };

  const calculateTotalCost = () => {
    // Check if any required field has a zero value
    if (devices.some(device => Object.values(device).some(val => val === '' || val === 0))) {
      alert('Please fill in all the required fields with valid values.');
      return;
    }

    let totalEnergy = 0;
    let totalCost = 0;

    devices.forEach((device) => {
      const totalHours = parseInt(device.hoursPerDay) * parseInt(device.days);
      const energyConsumption = (totalHours * parseInt(device.devicePower) * costPerKWh) / 1000; // Converting costPerKWh to cost per Wh
      const amortizedCost = parseFloat(device.costOfDevice) / (parseInt(device.warrantyPeriod) * 365 * 24);

      totalEnergy += energyConsumption;
      totalCost += energyConsumption + amortizedCost;
    });

    setTotalEnergyConsumption(totalEnergy);
    setTotalCost(totalCost);
    dispatch(updateEnergyCost(totalCost));
  };

  return (
    <div className="energy-calculator">
      <h2>Energy Consumption and Cost Calculator</h2>

      <div className="input-group">
        <label htmlFor="costPerKWh">Cost per kilowatt-hour (GEL/kWh):</label>
        <input
          type="number"
          step="0.01"
          id="costPerKWh"
          value={costPerKWh}
          onChange={(e) => handleCostPerKWhChange(e.target.value)}
        />
      </div>

      {devices.map((device, index) => (
        <div key={index} className="device-container">
          <h3>Device {index + 1}</h3>
          <div className="input-group">
            <label htmlFor={`name${index}`}>Device Name:</label>
            <input
              type="text"
              id={`name${index}`}
              value={device.name}
              onChange={(e) => handleDeviceChange(index, 'name', e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor={`hoursPerDay${index}`}>Hours per day:</label>
            <input
              type="text"
              id={`hoursPerDay${index}`}
              value={device.hoursPerDay}
              onChange={(e) => handleDeviceChange(index, 'hoursPerDay', e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor={`days${index}`}>Number of days:</label>
            <input
              type="text"
              id={`days${index}`}
              value={device.days}
              onChange={(e) => handleDeviceChange(index, 'days', e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor={`devicePower${index}`}>Device power (Watts):</label>
            <input
              type="text"
              id={`devicePower${index}`}
              value={device.devicePower}
              onChange={(e) => handleDeviceChange(index, 'devicePower', e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor={`costOfDevice${index}`}>Cost of the device (GEL):</label>
            <input
              type="text"
              id={`costOfDevice${index}`}
              value={device.costOfDevice}
              onChange={(e) => handleDeviceChange(index, 'costOfDevice', e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor={`warrantyPeriod${index}`}>Warranty period (in years):</label>
            <input
              type="text"
              id={`warrantyPeriod${index}`}
              value={device.warrantyPeriod}
              onChange={(e) => handleDeviceChange(index, 'warrantyPeriod', e.target.value)}
            />
          </div>
          <button onClick={() => removeDevice(index)}>Remove Device</button>
        </div>
      ))}

      <button onClick={addDevice}>Add Device</button>
      <button onClick={calculateTotalCost}>Calculate Total Cost</button>

      {totalCost !== 0 && (
        <div className="result">
          <h3>Total Cost: {totalCost.toFixed(2)} GEL</h3>
        </div>
      )}
    </div>
  );
};

export default EnergyCalculator;
