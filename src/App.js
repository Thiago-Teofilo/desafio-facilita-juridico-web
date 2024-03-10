import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerList from './pages/customers';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customers" element={<CustomerList />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
