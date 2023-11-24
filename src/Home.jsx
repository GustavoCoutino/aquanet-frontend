import { useEffect, useState } from "react";
import {
  BsFillArchiveFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import "./App.css";
function Home() {
  const [data, setData] = useState({
    heaterData: [],
    ledData: [],
    luminosityData: [],
    phIndicatorData: [],
    servoData: [],
    temperatureData: [],
    valveData: [],
    ultrasonicData: [],
    waterPumpData: [],
  });

  useEffect(() => {
    const fetchData = async (endpoint, key) => {
      try {
        const response = await fetch(`http://localhost:3000/api/${endpoint}`);
        const data = await response.json();
        setData((prevData) => ({
          ...prevData,
          [key]: data.data,
        }));
      } catch (error) {
        console.error(`Error fetching ${key} data:`, error);
      }
    };

    const endpoints = [
      { endpoint: "getHeater/1", key: "heaterData" },
      { endpoint: "getLED/1", key: "ledData" },
      { endpoint: "getLuz/1", key: "luminosityData" },
      { endpoint: "getPh/7", key: "phIndicatorData" },
      { endpoint: "getServo/2", key: "servoData" },
      { endpoint: "getTempLogs/1", key: "temperatureData" },
      { endpoint: "getValvula/3", key: "valveData" },
      { endpoint: "getUltrasonic/6", key: "ultrasonicData" },
      { endpoint: "getWaterPump/11", key: "waterPumpData" },
    ];

    endpoints.forEach(({ endpoint, key }) => {
      fetchData(endpoint, key);
    });
  }, []);

  const renderCard = (title, icon, data) => (
    <div className="card">
      <div className="card-inner">
        <h3>{title}</h3>
        {icon}
      </div>
      <h1>{data.length}</h1>
    </div>
  );

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        {renderCard(
          "TEMPERATURA",
          <BsFillArchiveFill className="card_icon" />,
          data.temperatureData
        )}
        {renderCard(
          "ULTRASONIDO",
          <BsPeopleFill className="card_icon" />,
          data.ultrasonicData
        )}
        {renderCard(
          "CALENTADOR",
          <BsFillBellFill className="card_icon" />,
          data.heaterData
        )}
        {renderCard(
          "INDICADOR DE PH",
          <BsFillBellFill className="card_icon" />,
          data.phIndicatorData
        )}
        {renderCard(
          "BOMBA DE AGUA",
          <BsFillBellFill className="card_icon" />,
          data.waterPumpData
        )}
        {renderCard(
          "VALVULA",
          <BsFillBellFill className="card_icon" />,
          data.valveData
        )}
        {renderCard(
          "LUZ",
          <BsFillBellFill className="card_icon" />,
          data.ledData
        )}
        {renderCard(
          "LUMINOSIDAD",
          <BsFillBellFill className="card_icon" />,
          data.luminosityData
        )}
        {renderCard(
          "SERVO",
          <BsFillBellFill className="card_icon" />,
          data.servoData
        )}
      </div>
    </main>
  );
}

export default Home;
