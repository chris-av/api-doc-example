import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

import SpinningReact from './SpinningReact';

const SideBar = ({ activeSection, setActiveSection }) => {
  return (
    <SideBarStyled>
      <SpinningReact />
      <div style={{ marginBottom: "30px" }}></div>
      <aside>
        <ul>

          <li 
            className={activeSection === 'Presidents' ? 'active' : ''} 
            onClick={() => setActiveSection('Presidents')}
          ><Link to="#presidents">Presidents</Link></li>
          <li 
            className={activeSection === 'Cabinet' ? 'active' : ''} 
            onClick={() => setActiveSection('Cabinet')}
          ><Link to="#cabinet">Cabinet Members</Link></li>

        </ul>
      </aside>
    </SideBarStyled>
  );
}

const SideBarStyled = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  height: 100%;
  height: 100vw;
  padding-top: 80px;
  width: 250px;
  border-right: solid grey 1px;
  aside {
    background-color: inherit;
    display: flex;
    justify-content: center;
    z-index: 1;
    overflow: scroll;
    width: 100%;
    padding: 10px 0;
    ul { list-style: none; background-color: inherit;  }
    ul li { margin: 10px 0; background-color: inherit; cursor: pointer; }
    ul li a { text-decoration: none; color: white; }
    ul li:hover { color: #cde593; }
  }

  .active a { color: #cde593; }

`;

export default SideBar;
