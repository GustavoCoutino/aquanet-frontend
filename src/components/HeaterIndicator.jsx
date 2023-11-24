import { useState, useEffect } from "react";
const HeaterState = () => {
  const [heaterData, setHeaterData] = useState([]);

  useEffect(() => {
    const fetchHeaterData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getHeater/1");
        const data = await response.json();
        setHeaterData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchHeaterData();
  }, []);

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>ESTADO DEL CALENTADOR</h3>
      </div>
      <div className="charts">
        <table className="center-table spaced-columns">
          <thead>
            <tr>
              <th>Tiempo de activacion</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {heaterData.map((item, index) => (
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

export default HeaterState;
