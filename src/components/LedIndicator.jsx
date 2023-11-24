import { useState, useEffect } from "react";

const LedIndicator = () => {
  const [ledData, setLedData] = useState([]);
  useEffect(() => {
    const fetchWaterPumpData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getLED/1");
        const data = await response.json();
        setLedData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchWaterPumpData();
  }, []);

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>ESTADO DE LUCES LED</h3>
      </div>
      <div className="charts">
        <table className="center-table spaced-columns">
          <thead>
            <tr>
              <th>Tiempo de activación</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {ledData.map((item, index) => (
              <tr key={index}>
                <td>{item.log_date}</td>
                <td>{item.estado === 1 ? "Activado" : "Desactivado"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default LedIndicator;
