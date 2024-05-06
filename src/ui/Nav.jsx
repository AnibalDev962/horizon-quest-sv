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
  gap: 2rem;
  color: white;
  margin-right: 1.5rem;
`;

const StyledButton = styled.button`
  background-color: black;
  cursor: pointer;
  color: grey;
  border: none;
  &:hover {
    color: #00ffb3;
  }
`;

function Nav() {
  const { windowSize } = useAppEffects();
  console.log(windowSize);
  /* const [windowSize, setWindowSize] = useState(getWindowSize()); */

  /*   useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);
    console.log(windowSize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowSize]);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
 */
  return (
    <StyledNav>
      <img
        src={logo}
        alt="company logo"
        style={{ height: '5rem', marginLeft: '1rem' }}
      ></img>
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
