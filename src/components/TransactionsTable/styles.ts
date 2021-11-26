import styled from "styled-components";

export const TransactionsTableWrapper = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    
    th {
      color: var(--text-title);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.8rem;
    }

    td {
      padding: 1.15rem 2rem;
      
      border: 0;
      border-radius: 0.25rem;
      
      background: var(--shape);
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`