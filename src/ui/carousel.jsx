import styled from 'styled-components';
//importing images//
import trip1img from '../assets/gallery/tour1.png';

const StyledCarouselContainer = styled.div`
  position: relative;
  margin-top: 4rem;
  background-color: #14382d;
  height: 55rem;
  width: 100%;
`;

const StyledHeaderForComponent = styled.h2`
  font-size: 2rem;

  font-family: 'Josefin Sans', sans-serif;
  display: flex;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
`;

const StyledCarousel = styled.div`
  position: relative;
  width: 100%;
  height: 33rem;
  background-color: white;
  margin-top: 3rem;
`;
const StyledButton = styled.button`
  position: absolute;
  height: 5rem;
  width: 5rem;
  border: none;

  color: #000000;
  border-radius: 5rem;
  &.left {
    left: 0rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;
  }
  &.right {
    right: 0rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;
  }
`;

const StyledImage = styled.img`
  position: absolute;
  z-index: 3;
`;

const StyledMakeReservation = styled.button`
  height: 5rem;
  padding: 0 2rem 0 2rem;
  position: absolute;
  right: 2rem;
  bottom: 4rem;
  font-size: 2rem;
  border-radius: 1rem;
`;

function Carousel() {
  return (
    <StyledCarouselContainer>
      <StyledHeaderForComponent>Upcomming Trips</StyledHeaderForComponent>
      <StyledCarousel>
        <StyledButton className="left">{`<`}</StyledButton>
        <StyledButton className="right">{`>`}</StyledButton>
        <StyledImage src={trip1img} alt="tour info"></StyledImage>
      </StyledCarousel>
      <StyledMakeReservation>Make Reservation</StyledMakeReservation>
    </StyledCarouselContainer>
  );
}

export default Carousel;
