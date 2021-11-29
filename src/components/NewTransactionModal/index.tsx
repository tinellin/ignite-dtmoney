import { FormEvent, useContext, useState } from 'react';

import Modal from 'react-modal';

import {
  TransactionModalWrapper,
  TransactionTypeWrapper,
  RadioBox,
} from './styles';

import { useTransactions } from '../../hooks/useTransactions';

import closeImg from '../../assets/images/close.svg';
import incomeImg from '../../assets/images/income.svg';
import outcomeImg from '../../assets/images/outcome.svg';

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  const { createTransaction } = useTransactions();

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    if (
      title.trim().length === 0 ||
      amount <= 0 ||
      category.trim().length === 0
    ) {
      return;
    }

    await createTransaction({ title, amount, category, type });

    //Resetar as informações do estado
    setTitle('');
    setAmount(0);
    setCategory('deposit');
    setType('');

    //Fechar o Modal
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className="react-close-modal" onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <TransactionModalWrapper onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          type="text"
          placeholder="Nome"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <TransactionTypeWrapper>
          <RadioBox
            type="button"
            onClick={() => {
              setType('deposit');
            }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType('withdraw');
            }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeWrapper>
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </TransactionModalWrapper>
    </Modal>
  );
}
