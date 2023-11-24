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

const TemperatureIndicator = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  useEffect(() => {
    const fetchTemperatureData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getPh/7");
        const data = await response.json();
        setTemperatureData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTemperatureData();
  }, []);
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>NIVEL DE PH</h3>
      </div>
      <div className="charts">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={temperatureData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="log_date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="nivel_ph" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
};

export default TemperatureIndicator;
