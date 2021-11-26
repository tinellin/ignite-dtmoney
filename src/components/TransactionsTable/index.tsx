import { useEffect } from 'react';
import { TransactionsTableWrapper } from './styles';

import { api } from '../../services/api';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then((res) => {
      console.log(res.data);
    });
  });

  return (
    <TransactionsTableWrapper>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>

          <tr>
            <td>Aluguel do apartamento</td>
            <td className="withdraw">- R$ 1.200,00</td>
            <td>Casa</td>
            <td>27/03/2021</td>
          </tr>
        </tbody>
      </table>
    </TransactionsTableWrapper>
  );
}
