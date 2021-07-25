import React, { useState } from 'react';
import styled from 'styled-components'; 
import "./Navigation.css"
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';


const NavIcon = styled(Link)`
margin-left: 4rem;
padding-top: 3rem;
  font-size: 2rem;
  height: 80px;
  width:40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CloseNavIcon=styled(Link)`

margin-left: 12rem;
color:red;
  font-size: 2rem;
  height: 80px;
  width:40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

`

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition-property: left;
  transition-duration: 1s;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: 'red' }}>

          <NavIcon className="toggle-icon" to='#'>
            <FaIcons.FaBars  onClick={showSidebar} />
          </NavIcon>
        
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
         <CloseNavIcon to="#">
         <AiIcons.AiOutlineClose onClick={showSidebar} />
           </CloseNavIcon>
              
         
            {SidebarData.map((item, index) => {
              return <SubMenu showSidebar={showSidebar}  item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
