import styled from "styled-components";

type SummaryCardWrapperProps = {
  total: boolean;
}

export const SummaryCardWrapper = styled.div<SummaryCardWrapperProps>`
  background: ${props => props.total ? "var(--green)" : "var(--shape)"};

  border-radius: 0.25rem;
  padding: 1.5rem;
  color: ${props => props.total ? "#FFF" : "var(--text-title)"};

  header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

  strong {
  display: block;

  margin-top: 1rem;
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 500;
}
`