import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav-bar">
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/customers">Clientes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
