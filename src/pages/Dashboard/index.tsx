import { useContext } from 'react';

import { DashboardWrapper, Summary } from './styles';

import { SummaryCard } from '../../components/SummaryCard';
import { TransactionsTable } from '../../components/TransactionsTable';

import incomeImg from '../../assets/images/income.svg';
import outcomeImg from '../../assets/images/outcome.svg';
import totalImg from '../../assets/images/total.svg';

import { TransactionContext } from '../../contexts/TransactionsContext';

export function Dashboard() {
  const { transactions } = useContext(TransactionContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else if (transaction.type === 'withdraw') {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    { deposits: 0, withdraws: 0, total: 0 }
  );

  return (
    <DashboardWrapper>
      <Summary>
        <SummaryCard
          text="Entradas"
          icon={incomeImg}
          amount={summary.deposits}
        />
        <SummaryCard
          text="Saídas"
          icon={outcomeImg}
          amount={summary.withdraws}
        />
        <SummaryCard
          text="Total"
          icon={totalImg}
          total
          amount={summary.total}
        />
      </Summary>
      <TransactionsTable />
    </DashboardWrapper>
  );
}
