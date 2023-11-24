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

const WaterLevel = () => {
  const [ultrasonicData, setUltrasonicData] = useState([]);

  useEffect(() => {
    const fetchUltrasonicData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/getUltrasonic/6"
        );
        const data = await response.json();
        setUltrasonicData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchUltrasonicData();
  }, []);

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>NIVEL DE AGUA</h3>
      </div>
      <div className="charts">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={ultrasonicData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="log_date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="distancia" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
};

export default WaterLevel;
