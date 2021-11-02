import React from 'react';
import styled from 'styled-components';

const NavItemContainer = styled.div`
    width: 300px;
    height: 50px;
    padding-top: 20px;
    border-bottom: 1px solid #000;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    transition: 1.2s;
    :hover {
        background: rgba(0,0,0,.7);
        color: #f8f9fa;
    }
    `;


function NavItem({navItem}) {
    return(
        <NavItemContainer>
            <span>{navItem}</span>
        </NavItemContainer>
    );
}

export default NavItem;