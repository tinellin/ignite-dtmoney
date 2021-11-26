import styled from "styled-components";
import { darken, transparentize } from "polished"

export const TransactionModalWrapper = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-size: 1rem;
    font-weight: 400;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border: none;
    border-radius: 0.25rem;
    
    background: var(--green);
    color: #fff;
    font-size: 1rem;
    font-weight: 500;

    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeWrapper = styled.div`
  margin: 1rem 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

type RadioBoxProps = {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: "#33CC95",
  red: "#E52E4D"
}

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  justify-content:center;
  align-items: center;

  height: 4rem;
  padding: 0 1.5rem;

  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${props => props.isActive ? transparentize(0.85, colors[props.activeColor]) : 'transparent'};

  transition: border-color 0.2s;

  img {
    width: 20px;
    height: 20px;
  }

  span {
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }

  &:hover {
    border-color: ${darken(0.3, "#d7d7d7")};
  }
`