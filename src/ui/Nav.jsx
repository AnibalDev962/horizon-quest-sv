import styled from 'styled-components';
/* import { useEffect, useState } from 'react'; */
//assests
import logo from '../assets/logo+name+black.png';
import { CiMenuBurger } from 'react-icons/ci';

//context//
import { useAppEffects } from '../context/AppEffectsContext';

//styled components//
const StyledNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  height: 7rem;
  max-width: 130rem;
  margin: 0 auto;
`;

const StyledDesktopNav = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  color: white;
  margin-right: 1.5rem;
  transition: all 0.3s;

  @media only screen and (min-width: 1200px) {
    gap: 2rem;
  }
`;

const StyledButton = styled.button`
  background-color: black;
  cursor: pointer;
  color: grey;
  border: none;
  &:hover {
    color: #00ffb3;
    transition: all 0.3s;
  }
`;

const StyledLogo = styled.img`
  height: 5rem;
  margin-left: 1rem;
  @media only screen and (min-width: 1000px) {
    height: 6rem;
  }
`;

function Nav() {
  const { windowSize } = useAppEffects();
  console.log(windowSize);

  return (
    <StyledNav>
      <StyledLogo src={logo} alt="company logo"></StyledLogo>
      {windowSize.innerWidth < 600 ? (
        <CiMenuBurger
          style={{ marginRight: '2rem', color: 'white', fontSize: '3rem' }}
        />
      ) : (
        <StyledDesktopNav>
          <StyledButton>English</StyledButton>
          <StyledButton>Home</StyledButton>
          <StyledButton>Log in</StyledButton>
          <StyledButton>Sign Up</StyledButton>
          <StyledButton>Trips</StyledButton>
          <StyledButton>Contact Us</StyledButton>
        </StyledDesktopNav>
      )}
    </StyledNav>
  );
}

export default Nav;
