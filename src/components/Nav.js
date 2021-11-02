import React from 'react';
import styled, {css} from 'styled-components';
import { GiHamburgerMenu } from "react-icons/gi";
import NavItems from './NavItems';

const NavContainer = styled.div`
    float: right;
`;
const ToggleBtn = styled.div`
    font-size: 1.6rem;
    cursor: pointer;
    margin-top: 10px;
    margin-right: 40px;
    float: right;
    color: #862e9c;
`;
const NavContent = styled.div`
    height: 100vh;
    width: 22vw;
    background: #f7f7f799;
    display: none;
    ${props =>
    props.isOpen &&
    css`
    display: block;
    `}
`;

function Nav({handleClick, isOpen}) {
    return(
        <NavContainer>
            <ToggleBtn onClick={handleClick}>
                <GiHamburgerMenu />
            </ToggleBtn>
            <NavContent isOpen={isOpen}>
                <NavItems />
            </NavContent>
        </NavContainer>
    );
}

export default Nav;