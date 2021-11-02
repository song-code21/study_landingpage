import Header from './components/Header';
import styled from 'styled-components';
import profileImg from '../src/profileImg.png';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Nav from './components/Nav';
import React, { useState } from 'react';


const AppContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap');
  background: url(${profileImg});
  width: 100vw;
  height: 100vh;
  font-family: 'Roboto Slab';
  position: relative;
`;

function App() {
  const [isOpen, setisOpen] = useState(false);
  const handleClick = () => {
    setisOpen(!isOpen)
  };
  return (
      <AppContainer>
      <Nav handleClick={handleClick} isOpen={isOpen}/>
      <Header />
      <Intro />
      <Footer />
      </AppContainer>
  );
}

export default App;
