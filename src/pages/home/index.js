import React from 'react';
import NavBar from '../../components/NavBar';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <h1>Gerenciamento de Clientes</h1>
        <Link to="/customers">Veja os Clientes</Link>
      </div>
    </div>
  );
}

export default Home;
