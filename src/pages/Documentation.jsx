import React, {
  useState, createRef, useEffect,
  useLayoutEffect
} from 'react';
import styled from 'styled-components';

import SideBar from '../components/SideBar';
import Header from '../components/Header';
import Section from '../components/Section';

const App = () => {
  const [ activeSection, setActiveSection ] = useState('');
  const [ scrollLoc, setScrollLoc ] = useState(null);

  const sec1 = createRef();
  const sec2 = createRef();

  useLayoutEffect(() => {
    function updateScrollLoc() {
      const val = window.scrollY;
      setScrollLoc(val);
    }

    window.addEventListener('scroll', updateScrollLoc);
    return () => window.removeEventListener('scroll', updateScrollLoc);

  }, [scrollLoc]);


  useEffect(() => {
    if (scrollLoc < sec1.current.offsetTop) setActiveSection('');
    if (scrollLoc >= sec2.current.offsetTop) setActiveSection('Cabinet');
    if (scrollLoc >= sec1.current.offsetTop & scrollLoc < sec2.current.offsetTop) setActiveSection('Presidents');
  }, [scrollLoc, sec1, sec2]);


  return (
    <>
      <SideBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <AppStyled>
        <Header />
        <Section name="Presidents" ref={sec1} />
        <Section name="Cabinet" ref={sec2} />
        <Section name="random" />
        <Section name="random" />
        <Section name="random" />
        <Section name="random" />
        <Section name="random" />
        <Section name="random" />
      </AppStyled>
    </>
  );
}

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 250px;
  width: 100%; 
  p { text-align: center; }
`;


export default App;

