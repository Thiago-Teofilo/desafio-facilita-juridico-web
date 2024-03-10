import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddCustomer from '../components/AddCustomer';

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('name'); // Padrão: ordenar por nome
  const [showAddCustomerForm, setShowAddCustomerForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleFormButtonClick = () => {
    setShowAddCustomerForm(true);
  };

  useEffect(() => {
    setIsLoading(true);

    axios.get(process.env.REACT_APP_API_URL + '/customers')
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

  // Filtra os clientes com base no termo de pesquisa
  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.tel.includes(searchTerm)
  );

  // Ordena os clientes com base no campo selecionado
  const sortedCustomers = filteredCustomers.sort((a, b) =>
    a[sortField].localeCompare(b[sortField])
  );

  return (
    <div>
      <div className="search-input">
        <input
          type="text"
          placeholder="Pesquisar"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <button 
          className='open-form-btn'
          onClick={handleFormButtonClick}>
            Novo cliente
        </button>
        {showAddCustomerForm && <AddCustomer />}
      </div>
      {isLoading ? <p>Carregando...</p> : null}
      <table className="rwd-table">
        <thead>
          <tr>
            <th onClick={() => setSortField('name')}>Nome</th>
            <th onClick={() => setSortField('email')}>Email</th>
            <th onClick={() => setSortField('tel')}>Telefone</th>
            <th onClick={() => setSortField('cordx')}>Cordenada X</th>
            <th onClick={() => setSortField('cordy')}>Cordenada Y</th>
          </tr>
        </thead>
        <tbody>
          {sortedCustomers.map((customer) => (
            <tr key={customer.uuid}>
              <td data-th="Nome">{customer.name}</td>
              <td data-th="Email">{customer.email}</td>
              <td data-th="Telefone">{customer.tel}</td>
              <td data-th="Cordenada X">{Number(customer.cordx).toFixed(2)}</td>
              <td data-th="Cordenada Y">{Number(customer.cordy).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
