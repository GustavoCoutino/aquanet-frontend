import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LuminosityIndicator = () => {
  const [luzData, setLuzData] = useState([]);
  useEffect(() => {
    const fetchTemperatureData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getLuz/1");
        const data = await response.json();
        setLuzData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTemperatureData();
  }, []);
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>NIVEL DE LUZ AMBIENTAL</h3>
      </div>
      <div className="charts">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={luzData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="log_date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="luminosidad" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
};

export default LuminosityIndicator;
