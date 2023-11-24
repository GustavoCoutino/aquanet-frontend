import React from "react";
import {
  BsCart3,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar, handleSidebarItemClick }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="sidebar-icon" />
          <h1>Indicadores</h1>
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleSidebarItemClick("Home")}>
            <BsCart3 /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleSidebarItemClick("TemperatureIndicator")}
          >
            <BsCart3 /> Cambio Temperatura
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleSidebarItemClick("PhIndicator")}>
            <BsCart3 /> Nivel de pH
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleSidebarItemClick("WaterLevel")}>
            <BsCart3 /> Nivel de agua
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleSidebarItemClick("HeaterIndicator")}>
            <BsCart3 /> Estado del Calentador
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleSidebarItemClick("WaterPumpState")}>
            <BsCart3 /> Estado de la bomba de agua
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleSidebarItemClick("ValvulaIndicator")}
          >
            <BsCart3 /> Estado de válvula
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleSidebarItemClick("LuminosityIndicator")}
          >
            <BsCart3 /> Nivel de luz ambiental
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleSidebarItemClick("LedIndicator")}>
            <BsCart3 /> Estado de luces LED
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleSidebarItemClick("ServoIndicator")}>
            <BsCart3 /> Activacion del Servomotor
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
