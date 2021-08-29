import React, { forwardRef } from 'react';
import styled from 'styled-components';



const Section = forwardRef(({ name }, ref) => (
  <SectionStyled ref={ref} id={name.toLowerCase()}>
    This is the <code>{ name }</code> section
  </SectionStyled>
))


const SectionStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  height: 400px;
  border: 1px solid grey;
  code {
    margin: 0 5px;
    background-color: #F6F2F2;
    color: black;
  }
`;


export default Section;

