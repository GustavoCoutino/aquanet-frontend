import { useState, useEffect } from "react";

const ValvulaIndicator = () => {
  const [valvulaData, setValvulaData] = useState([]);
  useEffect(() => {
    const fetchWaterPumpData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getValvula/3");
        const data = await response.json();
        setValvulaData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchWaterPumpData();
  }, []);

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>ESTADO DE VALVULA</h3>
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
            {valvulaData.map((item, index) => (
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

export default ValvulaIndicator;
