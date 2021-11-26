import { DashboardWrapper, Summary } from './styles';

import { SummaryCard } from '../../components/SummaryCard';
import { TransactionsTable } from '../../components/TransactionsTable';

import incomeImg from '../../assets/images/income.svg';
import outcomeImg from '../../assets/images/outcome.svg';
import totalImg from '../../assets/images/total.svg';

export function Dashboard() {
  return (
    <DashboardWrapper>
      <Summary>
        <SummaryCard text="Entradas" icon={incomeImg} />
        <SummaryCard text="Saídas" icon={outcomeImg} />
        <SummaryCard text="Total" icon={totalImg} total />
      </Summary>
      <TransactionsTable />
    </DashboardWrapper>
  );
}
