import { useState, useEffect } from "react";

const ServoIndicator = () => {
  const [servoData, setServoData] = useState([]);
  const [clockData, setClockData] = useState([]);
  useEffect(() => {
    const fetchServoData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getServo/2");
        const data = await response.json();
        setServoData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchClockData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getDate/2");
        const data = await response.json();
        console.log(data);
        setClockData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchClockData();
    fetchServoData();
  }, []);

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>ACTIVACION DEL SERVOMOTOR</h3>
      </div>
      <div className="charts">
        <table className="center-table spaced-columns">
          <thead>
            <tr>
              <th>Hora de activacion</th>
            </tr>
          </thead>
          <tbody>
            {clockData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="center-table spaced-columns">
          <thead>
            <tr>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {servoData.map((item, index) => (
              <tr key={index}>
                <td>{item.estado === 1 ? "Activado" : "Desactivado"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default ServoIndicator;
