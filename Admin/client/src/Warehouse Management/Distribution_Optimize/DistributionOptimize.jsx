import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DistributionOptimize.css'; // Import CSS file

const DistributionOptimize = () => {
  const [distribution, setDistribution] = useState([]);
  const [fertilizerReqs, setFertilizerReqs] = useState([]);

  useEffect(() => {
    const fetchDistribution = async () => {
      try {
        const [distributionResponse, fertilizerReqResponse] = await Promise.all([
          axios.get('http://localhost:8000/api/optimizeDistribution', {
            params: { totalQuantity: 1000 } // Example total quantity
          }),
          axios.get('http://localhost:8000/api/geFertilizerReqs') // Fetch fertilizer requests
        ]);

        setDistribution(distributionResponse.data.data);
        setFertilizerReqs(fertilizerReqResponse.data.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchDistribution();
  }, []);

  // Function to calculate total quantity requested for a warehouse
  const getTotalQuantityForWarehouse = (warehousename) => {
    return fertilizerReqs
      .filter(req => req.warehousename === warehousename)
      .reduce((total, req) => total + req.quantity, 0);
  };

  return (
    <div className="distribution-container">
      <h2>Optimized Fertilizer Distribution</h2>
      <table className="distribution-table">
        <thead>
          <tr>
            <th>Route</th> {/* New Route column */}
            <th>Warehouse Name</th>
            <th>Distance (km)</th>
            <th>Total Quantity (units)</th>
          </tr>
        </thead>
        <tbody>
          {distribution.map((warehouse, index) => (
            <tr key={index}>
              <td>{`Route ${index + 1}`}</td> {/* Show Route 1, Route 2, etc. */}
              <td>{warehouse.warehousename}</td>
              <td>{warehouse.distance}</td>
              <td>{getTotalQuantityForWarehouse(warehouse.warehousename)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DistributionOptimize;
  