import React, { useState } from 'react';
import CustomersTable from '../../components/CustomersTable'
import Modal from 'react-modal';
import CustomersTravelOrderTable from '../../components/CustomersTravelOrderTable'
import NavBar from '../../components/NavBar'

const CustomerList = () => {
  const [showTravelOrderModal, setShowTravelOrderModal] = useState(false);

  const handleTravelOrderButtonClick = () => {
    setShowTravelOrderModal(true);
  };

  const handleCloseModal = () => {
    setShowTravelOrderModal(false);
  };
  
  return (
    <div>
      <div>
        <NavBar />
        <div className="content">
            <h2>Clientes</h2>
            </div>
            <div className="customers-table-container">
              <CustomersTable />         
              <button onClick={handleTravelOrderButtonClick}>Vizualizar ordem de viagem</button>
              <Modal
                isOpen={showTravelOrderModal}
                onRequestClose={handleCloseModal}
                contentLabel="Modal de Ordem de Viagem"
              >
                <div className="modal-content">
                  <button onClick={handleCloseModal}>
                    Fechar
                  </button>
                  <h3>Vizualizar Ordem de Viagem</h3>
                  <CustomersTravelOrderTable />
                </div>
              </Modal>
            </div>     
          </div>
        </div>
  );
};

export default CustomerList;