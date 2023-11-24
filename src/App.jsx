import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Home from "./Home.jsx";
import PhIndicator from "./components/PhIndicator.jsx";
import TemperatureIndicator from "./components/TemperatureIndicator.jsx";
import WaterLevel from "./components/WaterLevel.jsx";
import HeaterIndicator from "./components/HeaterIndicator.jsx";
import WaterPumpState from "./components/WaterPumpState.jsx";
import ValvulaIndicator from "./components/ValvulaIndicator.jsx";
import LuminosityIndicator from "./components/LuminosityIndicator.jsx";
import LedIndicator from "./components/LedIndicator.jsx";
import ServoIndicator from "./components/ServoIndicator.jsx";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState("Home");

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleSidebarItemClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  let componentToRender;
  switch (selectedComponent) {
    case "Home":
      componentToRender = <Home />;
      break;
    case "TemperatureIndicator":
      componentToRender = <TemperatureIndicator />;
      break;
    case "PhIndicator":
      componentToRender = <PhIndicator />;
      break;
    case "WaterLevel":
      componentToRender = <WaterLevel />;
      break;
    case "HeaterIndicator":
      componentToRender = <HeaterIndicator />;
      break;
    case "WaterPumpState":
      componentToRender = <WaterPumpState />;
      break;
    case "ValvulaIndicator":
      componentToRender = <ValvulaIndicator />;
      break;
    case "LuminosityIndicator":
      componentToRender = <LuminosityIndicator />;
      break;
    case "LedIndicator":
      componentToRender = <LedIndicator />;
      break;
    case "ServoIndicator":
      componentToRender = <ServoIndicator />;
      break;

    default:
      componentToRender = <Home />;
      break;
  }

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
        handleSidebarItemClick={handleSidebarItemClick}
      />
      {componentToRender}
    </div>
  );
}

export default App;
