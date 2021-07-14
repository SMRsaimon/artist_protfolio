import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 2.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 16px;

  &:hover {
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SubMenu = ({ item,showSidebar }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {

    setSubnav(!subnav)
    
    

  };

  return (
    <>
      <SidebarLink  to={!item.subNav && item.path} onClick={item.subNav? showSubnav:showSidebar}>
        <div>
         
          <SidebarLabel >{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink onClick={showSidebar} to={item.path} key={index}>
             
              <SidebarLabel > {item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
