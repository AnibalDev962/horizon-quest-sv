import styled from 'styled-components';
import logo from '../assets/logo+name+black.png';

//icons//
import { CiMenuBurger } from 'react-icons/ci';

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  height: 7rem;
  width: 100%;
`;

function Nav() {
  return (
    <StyledNav>
      <img
        src={logo}
        alt="company logo"
        style={{ height: '5rem', marginLeft: '1rem' }}
      ></img>
      <CiMenuBurger
        style={{ marginRight: '2rem', color: 'white', fontSize: '3rem' }}
      />
    </StyledNav>
  );
}

export default Nav;
