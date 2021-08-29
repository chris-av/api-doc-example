import React from 'react';
import styled from 'styled-components';


const Header = () => {
  return (
    <HeaderStyled>
      <h1>Welcome to the President's API</h1>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #BED9A3;
  color: black;
  height: 300px;
`;


export default Header;
