import React, { useState } from 'react';
import './EnergyCalculator.css';

const EnergyCalculator = () => {
  const [devices, setDevices] = useState([
    { hoursPerDay: 0, days: 0, devicePower: 0, costOfDevice: 0, warrantyPeriod: 0 }
  ]);
  const [costPerKWh, setCostPerKWh] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [totalEnergyConsumption, setTotalEnergyConsumption] = useState(0);

  const addDevice = () => {
    setDevices([...devices, { hoursPerDay: 0, days: 0, devicePower: 0, costOfDevice: 0, warrantyPeriod: 0 }]);
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

  const calculateTotalCost = () => {
    let totalEnergy = 0;
    let totalCost = 0;

    devices.forEach((device) => {
      const totalHours = device.hoursPerDay * device.days;
      const energyConsumption = (totalHours * device.devicePower * costPerKWh) / 1000; // Converting costPerKWh to cost per Wh
      const amortizedCost = device.costOfDevice / (device.warrantyPeriod * 365 * 24);

      totalEnergy += energyConsumption;
      totalCost += energyConsumption + amortizedCost;
    });

    setTotalEnergyConsumption(totalEnergy);
    setTotalCost(totalCost);
  };

  return (
    <div className="energy-calculator">
      <h2>Energy Consumption and Cost Calculator</h2>

      <div className="input-group">
        <label htmlFor="costPerKWh">Cost per kilowatt-hour (GEL/kWh):</label>
        <input
          type="number"
          id="costPerKWh"
          step="0.01"
          value={costPerKWh}
          onChange={(e) => setCostPerKWh(parseFloat(e.target.value))}
        />
      </div>

      {devices.map((device, index) => (
  <div key={index} className="device-container">
    <h3>Device {index + 1}</h3>
    <div className="input-group">
      <label htmlFor={`hoursPerDay${index}`}>Hours per day:</label>
      <input
        type="number"
        id={`hoursPerDay${index}`}
        value={device.hoursPerDay}
        onChange={(e) => handleDeviceChange(index, 'hoursPerDay', parseInt(e.target.value, 10))}
      />
    </div>
    <div className="input-group">
      <label htmlFor={`days${index}`}>Number of days:</label>
      <input
        type="number"
        id={`days${index}`}
        value={device.days}
        onChange={(e) => handleDeviceChange(index, 'days', parseInt(e.target.value, 10))}
      />
    </div>
    <div className="input-group">
      <label htmlFor={`devicePower${index}`}>Device power (Watts):</label>
      <input
        type="number"
        id={`devicePower${index}`}
        value={device.devicePower}
        onChange={(e) => handleDeviceChange(index, 'devicePower', parseInt(e.target.value, 10))}
      />
    </div>
    <div className="input-group">
      <label htmlFor={`costOfDevice${index}`}>Cost of the device (GEL):</label>
      <input
        type="number"
        id={`costOfDevice${index}`}
        value={device.costOfDevice}
        onChange={(e) => handleDeviceChange(index, 'costOfDevice', parseFloat(e.target.value))}
      />
    </div>
    <div className="input-group">
      <label htmlFor={`warrantyPeriod${index}`}>Warranty period (in years):</label>
      <input
        type="number"
        id={`warrantyPeriod${index}`}
        value={device.warrantyPeriod}
        onChange={(e) => handleDeviceChange(index, 'warrantyPeriod', parseInt(e.target.value, 10))}
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
