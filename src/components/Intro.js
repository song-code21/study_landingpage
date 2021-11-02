import React from 'react';
import styled from 'styled-components';
import ReactTypingEffect from 'react-typing-effect';

const IntroContiner = styled.div`
    font-size: 4.2rem;
    font-weight: 900;
    position: absolute;
    top: 35%;
    left: 60px;
    color: #862e9c;
    
    & > .context {
        /* background-color: rgba(29, 29, 29, 0.7); */
        display: inline-block;
        padding: 10px;
        border-radius: 5px;
        text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
        white-space: pre-wrap;
    }
`;

function Intro() {

    
    return (
        <IntroContiner>
        <ReactTypingEffect
            className="context"
            eraseDelay={500000}
            text={[`Hi! I'm Cindy. 
I am a programmer`]}
        />
        </IntroContiner>
    );
}

export default Intro;