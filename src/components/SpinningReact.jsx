import React from 'react';
import styled from 'styled-components';

import logo from '../logo.svg';

const SpinningReact = () => {
  return (
    <SpinningReactStyled>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Government API</p>
    </SpinningReactStyled>
  );
}

const SpinningReactStyled = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none 0px;

  p { z-index: 5; margin-top: 20px; }
  
  .App-logo {
    width: 100%;
    max-width: 100px;
    pointer-events: none;
    border: none 0px;

  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

`;

export default SpinningReact
