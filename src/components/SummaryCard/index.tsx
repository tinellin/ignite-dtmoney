import { SummaryCardWrapper } from './styles';
import incomeImg from '../../assets/images/income.svg';

type SummaryCardProps = {
  text: string;
  icon: string;
  total?: boolean;
  amount: number;
};

export function SummaryCard({
  text,
  icon,
  total = false,
  amount,
}: SummaryCardProps) {
  return (
    <SummaryCardWrapper total={total}>
      <header>
        <span>{text}</span>
        <img src={icon} alt={text} />
      </header>
      <strong>
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(amount)}
      </strong>
    </SummaryCardWrapper>
  );
}
