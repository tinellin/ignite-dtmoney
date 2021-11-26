import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  //Variáveis de cores
  :root {
    --background: #f0f2f5;
    
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33CC95;
    
    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #FFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (padrão Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased; //Deixar os textos mais nítidos em telas atuais.
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    max-width: 576px;
    width: 100%;
    background: var(--background);

    padding: 3rem;
    border-radius: 0.25rem;

    position: relative;
  }

  .react-close-modal {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    border: none;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.75);
    }
  }
`
