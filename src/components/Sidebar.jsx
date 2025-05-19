import React, {useContext} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { FaCreditCard, FaTools, FaClipboardList, FaCubes, FaUsers, FaThLarge, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";


const Sidebar = ({ isOpen }) => {

  const navigate = useNavigate();

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-user">
        <img src="" alt="User" className="sidebar-avatar"></img>
        <div className="sidebar-user-info">
          <strong>Pedro</strong>
          <small>Engenharia</small>
        </div>
      </div>

      <div className="sidebar-links">

        <NavLink to="info" className={({ isActive }) => isActive ? "active" : ""}>
          <p><FaCreditCard /> Informações</p>
        </NavLink>
        <NavLink to="projetos" className={({ isActive }) => isActive ? "active" : ""}>
          <p><FaCreditCard /> Projetos</p>
        </NavLink>
        <NavLink to="https://github.com/Dev-Pedro-Padilha/ViewProducao" className={({ isActive }) => isActive ? "active" : ""}>
          <p><FaCreditCard /> Sistema de Visualização de Produção</p>
        </NavLink>

        <NavLink to="https://github.com/Dev-Pedro-Padilha/DAOC" className={({ isActive }) => isActive ? "active" : ""}>
          <p><FaCreditCard /> Projeto para a cadeira DAOC</p>
        </NavLink>

        <NavLink to="https://github.com/Dev-Pedro-Padilha/login-flutter" className={({ isActive }) => isActive ? "active" : ""}>
          <p><FaCreditCard /> Tela de Login e Home com Flutter</p>
        </NavLink>
      </div>

    </div>
  );
};

export default Sidebar;
