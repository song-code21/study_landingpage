import React from 'react';
import {AiOutlineCopyright} from "react-icons/ai";
import styled from 'styled-components';

const FooterContainer = styled.footer`
    position: absolute;
    top: 84%;
    left: 60px;
`

function Footer() {
    return(
        <FooterContainer>
            <span>
                Copyright<AiOutlineCopyright/>2021 Cindy<br/>
                ALL RIGHTS RESERVED
            </span>
        </FooterContainer>
    );
}

export default Footer;