import { useState } from 'react';
import { createServer, Model } from 'miragejs';

import Modal from 'react-modal';

import { GlobalStyle } from './styles/global';

import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';

import { TransactionProvider } from './contexts/TransactionsContext';

//Opções de acessibilidade do Modal
Modal.setAppElement('#root');

//Fake API
createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer de Web',
          amount: 6000,
          type: 'deposit',
          category: 'Desenvolvimento Web',
          createdAt: new Date('2021-05-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Iphone 11',
          amount: 4000,
          type: 'withdraw',
          category: 'Compras da Black Friday',
          createdAt: new Date('2021-11-26 21:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', (schema, request) => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  },
});

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <TransactionProvider>
        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
      </TransactionProvider>
    </>
  );
}
