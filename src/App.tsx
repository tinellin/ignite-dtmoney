import { useState } from 'react';
import { createServer } from 'miragejs';

import { GlobalStyle } from './styles/global';

import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date(),
        },
      ];
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
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
    </>
  );
}
