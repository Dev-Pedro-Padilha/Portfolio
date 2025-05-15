import React, {useContext} from "react";
import "./Header.css";
import {useNavigate} from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div>
        <button className="toggle-btn" onClick={toggleSidebar}>
          ☰ {/* Ícone do menu */}
        </button>
      </div>

      <div className="header-user-info">
        <img
          src=""
          alt="Foto do Usuário"
          className="user-photo"
        />
        <div className="user-meta">
            <div className="user-name">Pedro</div>
            <div className="user-title">Titulo</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
