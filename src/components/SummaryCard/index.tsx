import { SummaryCardWrapper } from './styles';
import incomeImg from '../../assets/images/income.svg';

type SummaryCardProps = {
  text: string;
  icon: string;
  total?: boolean;
};

export function SummaryCard({ text, icon, total = false }: SummaryCardProps) {
  return (
    <SummaryCardWrapper total={total}>
      <header>
        <span>{text}</span>
        <img src={icon} alt={text} />
      </header>
      <strong>R$ 50000</strong>
    </SummaryCardWrapper>
  );
}
