import React from 'react';
import styled from 'styled-components';

const App = () => {
  return (
    <Container>
      <h1>Home Page</h1>
      <p>This project is to demo a typical side bar for a mock API page</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%; 
  text-align: center;
  margin: 20px 0;
`;


export default App;

