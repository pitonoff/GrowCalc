import React from 'react';
import './InfoBlock.css';

const InfoBlock = () => {
  return (
    <div className='info-block'>
      <h1>Energy Consumption Calculator Usage Instructions:</h1>
      <h4>Step 1: Input Your Appliances</h4>
      <ul>
        <li>Click the "Add Appliance" button to add appliances you want to calculate energy consumption for.</li>
        <li>For each appliance, enter its name, power consumption (in watts), and average daily usage (in hours).</li>
      </ul>
      <h4>Step 2: Calculate Total Daily Energy Consumption</h4>
      <ul>
        <li>Click the "Calculate" button to calculate the cycle energy consumption for each appliance and the total energy consumption for all appliances. And increments amortization of unit.</li>
      </ul>
      <h4>Step 3: View Results</h4>
      <ul>
        <li>The calculated daily energy consumption for each appliance and the total daily energy consumption will be displayed.</li>
      </ul>
      <h1>Fertilizer Cost Calculator Usage Instructions:</h1>
      <h4>Step 1: Adding Fertilizers</h4>
      <ul>
        <li>Click the "Add Fertilizer" button to add a fertilizer entry.</li>
        <li>For each fertilizer, enter the price per unit (in GEL), volume (in ml), amount per watering (in ml), weeks of use, and watering interval (in days).</li>
      </ul>
      <h4>Step 2: Removing Fertilizers</h4>
      <ul>
        <li>Click the "Remove Fertilizer" button for a specific fertilizer to remove it from the list.</li>
      </ul>
      <h4>Step 3: Calculating Total Cost</h4>
      <ul>
        <li>Click the "Calculate Total Cost" button to calculate the total cost of all the added fertilizers.</li>
      </ul>
      <h4>Step 4: Viewing Total Cost</h4>
      <ul>
        <li>The total cost of using the added fertilizers will be displayed.</li>
      </ul>
    </div>
  )
}

export default InfoBlock
