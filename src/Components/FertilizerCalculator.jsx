import React, { useState } from 'react';
import './FertilizerCalculator.css';

const FertilizerCalculator = () => {
  const [fertilizers, setFertilizers] = useState([
    { price: 0, volume: 0, amountPerWatering: 0, weeksOfUse: 0, wateringInterval: 0 }
  ]);
  const [totalCost, setTotalCost] = useState(0);

  const addFertilizer = () => {
    setFertilizers([...fertilizers, { price: 0, volume: 0, amountPerWatering: 0, weeksOfUse: 0, wateringInterval: 0 }]);
  };

  const removeFertilizer = (index) => {
    const updatedFertilizers = fertilizers.filter((_, i) => i !== index);
    setFertilizers(updatedFertilizers);
  };

  const handleFertilizerChange = (index, field, value) => {
    const updatedFertilizers = [...fertilizers];
    updatedFertilizers[index][field] = value;
    setFertilizers(updatedFertilizers);
  };

  const calculateTotalCost = () => {
    let totalCost = 0;

    fertilizers.forEach((fertilizer) => {
      const totalAmount = (fertilizer.amountPerWatering * (fertilizer.weeksOfUse * 7)) / fertilizer.wateringInterval;
      const fertilizerCost = (fertilizer.price * totalAmount) / fertilizer.volume;
      totalCost += fertilizerCost;
    });

    setTotalCost(totalCost);
  };

  return (
    <div className="fertilizer-calculator">
      <h2>Fertilizer Usage and Cost Calculator</h2>

      {fertilizers.map((fertilizer, index) => (
        <div key={index} className="fertilizer-container">
          <h3>Fertilizer {index + 1}</h3>
          <div className="input-group">
            <label htmlFor={`price${index}`}>Price per unit (GEL):</label>
            <input
              type="number"
              id={`price${index}`}
              value={fertilizer.price}
              onChange={(e) => handleFertilizerChange(index, 'price', parseFloat(e.target.value))}
            />
          </div>
          <div className="input-group">
            <label htmlFor={`volume${index}`}>Volume (ml):</label>
            <input
              type="number"
              id={`volume${index}`}
              value={fertilizer.volume}
              onChange={(e) => handleFertilizerChange(index, 'volume', parseInt(e.target.value, 10))}
            />
          </div>
          <div className="input-group">
            <label htmlFor={`amountPerWatering${index}`}>Amount per watering (ml):</label>
            <input
              type="number"
              id={`amountPerWatering${index}`}
              value={fertilizer.amountPerWatering}
              onChange={(e) => handleFertilizerChange(index, 'amountPerWatering', parseInt(e.target.value, 10))}
            />
          </div>
          <div className="input-group">
            <label htmlFor={`weeksOfUse${index}`}>Weeks of use:</label>
            <input
              type="number"
              id={`weeksOfUse${index}`}
              value={fertilizer.weeksOfUse}
              onChange={(e) => handleFertilizerChange(index, 'weeksOfUse', parseInt(e.target.value, 10))}
            />
          </div>
          <div className="input-group">
            <label htmlFor={`wateringInterval${index}`}>Watering interval (days):</label>
            <input
              type="number"
              id={`wateringInterval${index}`}
              value={fertilizer.wateringInterval}
              onChange={(e) => handleFertilizerChange(index, 'wateringInterval', parseInt(e.target.value, 10))}
            />
          </div>
          <button onClick={() => removeFertilizer(index)}>Remove Fertilizer</button>
        </div>
      ))}

      <button onClick={addFertilizer}>Add Fertilizer</button>
      <button onClick={calculateTotalCost}>Calculate Total Cost</button>

      {totalCost !== 0 && (
        <div className="result">
          <h3>Total Cost: GEL{totalCost.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default FertilizerCalculator;
