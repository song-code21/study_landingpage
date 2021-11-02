import React from 'react';
import styled from 'styled-components';
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 600px;
    margin-left: 50px;
`;

const NameLogo = styled.h1`
    margin: 0;
    padding: 10px;
    font-size: 1.5rem;
`

const Contact = styled.div`
    width: auto;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
`

function Header() {
    const iconStyle = {
        color: "#862e9c",
        marginLeft: "10px",
        verticalAlign: "top"
    }
    return(
        <HeaderContainer>
            <NameLogo>CINDY SONG</NameLogo>
            <Contact>
                <span><AiFillPhone style={iconStyle}/> 82) 010-2760-9563</span>
                <span><AiTwotoneMail style={iconStyle} /> wkcjf131313@gmail.com</span>
            </Contact>
        </HeaderContainer>
    );
}

export default Header;