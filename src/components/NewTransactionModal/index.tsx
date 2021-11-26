import { useState } from 'react';

import Modal from 'react-modal';

import {
  TransactionModalWrapper,
  TransactionTypeWrapper,
  RadioBox,
} from './styles';

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
  const [type, setType] = useState('deposit');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className="react-close-modal">
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <TransactionModalWrapper>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Nome" />
        <input type="number" placeholder="Preço" />

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
        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </TransactionModalWrapper>
    </Modal>
  );
}
