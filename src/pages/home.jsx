//UI//
import Nav from '../ui/Nav';
import Carousel from '../ui/carousel';
//logo or img//
import Logo from '../assets/logo+name.jpeg';
import Img1 from '../assets/gallery/lake1.jpg';
import Img2 from '../assets/gallery/volcano1.jpg';
import Img3 from '../assets/gallery/volcano2.jpg';
//
import styled from 'styled-components';

const StyledHeroContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90dvh;
  max-width: 130rem;
  margin: 0 auto;
  flex-direction: column;
  overflow: hidden;

  margin-bottom: 6rem;
`;

const StyledImg = styled.img`
  height: 16rem;
  transform: translateY(-0rem);
  @media only screen and (min-width: 600px) {
    height: 18rem;
    transform: translateY(-2rem);
  }
`;

const StyledH1 = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-family: 'Josefin Sans', 'sans-serif';
  color: grey;
  transform: translateY(-0rem);
  @media only screen and (min-width: 600px) {
    font-size: 2.5rem;
    transform: translateY(-2rem);
  }
`;

const StyledGalleryForHero = styled.div`
  position: relative;

  height: 20rem;
  width: 20rem;
  transform: translateY(3rem);

  @media only screen and (min-width: 600px) {
    transform: scale(1.2) translateY(2rem);
  }
  margin-bottom: 2rem;
`;

const StyledImages = styled.img`
  position: absolute;
  height: 15rem;

  &.img1 {
    height: 10rem;
    top: 0rem;
    right: -6rem;
    z-index: 10;
  }
  &.img2 {
    height: 10rem;
    top: 6rem;
    right: 2rem;
    z-index: 11;
  }
  &.img3 {
    height: 10rem;
    top: 11rem;
    left: 0rem;
    z-index: 11;
  }
`;

function Home() {
  return (
    <div>
      <Nav />
      <StyledHeroContainer>
        <StyledImg src={Logo}></StyledImg>
        <StyledH1>
          &apos;Experience the world with us, one unforgettable tour at a
          time!&apos;
        </StyledH1>
        <StyledGalleryForHero>
          <StyledImages src={Img1} className="img1" />
          <StyledImages src={Img2} className="img2" />
          <StyledImages src={Img3} className="img3" />
        </StyledGalleryForHero>
      </StyledHeroContainer>
      <Carousel />
    </div>
  );
}

export default Home;
