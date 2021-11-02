import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';

const NavItemsContainer = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 180px;
`;

function NavItems() {
    const items = ["About Me", "Skills", "Projects", "contact"]
    return(
        <NavItemsContainer>
            {items.map(item => <NavItem navItem={item}/>)}
        </NavItemsContainer>
    );
}

export default NavItems;