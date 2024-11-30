// src/components/Navbar.js
import React from 'react';
import './Navbar.css';  // Estilos para la barra de navegación

function Navbar() {
  return (
    <div className="navbar">
      <img
        className="navbar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Navbar;
