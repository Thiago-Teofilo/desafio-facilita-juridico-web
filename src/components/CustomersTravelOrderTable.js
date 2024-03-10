import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomersTravelOrderTable = () => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    axios.get(process.env.REACT_APP_API_URL + '/travel-order')
      .then((response) => response.data.customers)
      .then((data) => {
        setCustomers(data);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error('Erro ao carregar dados:', error);
        setIsLoading(false); 
      });
  }, []);

  return (
    <div>
      {isLoading ? <p>Carregando...</p> : (
        <table className="rwd-table">
          <thead>
            <tr>
              <th>Sequencia</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Distância</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.uuid}>
                <td data-th="Sequencia">{customer.auxNumber}</td>
                <td data-th="Nome">{customer.name}</td>
                <td data-th="Email">{customer.email}</td>
                <td data-th="Telefone">{customer.tel}</td>
                <td data-th="Distância">{Number(customer.range).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CustomersTravelOrderTable;
