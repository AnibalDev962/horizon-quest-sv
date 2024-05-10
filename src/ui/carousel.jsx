import styled, { keyframes } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
//import temp data basa
import { carouselData } from '../data/tempcarpuselData';

const StyledCarouselContainer = styled.div`
  position: relative;

  margin-top: 4rem;
  background-color: #000000;
  height: 60rem;
  max-width: 130rem;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: baseline;
  flex-direction: column;

  @media only screen and (min-width: 600px) {
  }

  @media only screen and (min-width: 1000px) {
  }
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
  @media only screen and (min-width: 600px) {
    font-size: 3rem;
  }
`;

const StyledCarousel = styled.div`
  position: relative;

  height: 35rem;
  width: 35rem;

  margin-top: 3rem;

  @media only screen and (min-width: 600px) {
    height: 45rem;
    width: 45rem;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;
const StyledButton = styled.button`
  position: absolute;
  height: 5rem;
  width: 5rem;
  border: none;
  z-index: 100;
  background-color: white;
  font-size: 3rem;
  border-radius: 5rem;
  transition: all 0.3s;

  &:hover {
    transition: all 0.3s;
    color: #00ffb3;
    background-color: black;
  }

  &.left {
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;

    @media only screen and (min-width: 600px) {
      left: -7rem;
    }
  }
  &.right {
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;

    @media only screen and (min-width: 600px) {
      right: -7rem;
    }
  }
`;
/* 
const StyledImage = styled.img`
  position: absolute;
  z-index: 3;
`; */

const StyledMakeReservation = styled.button`
  height: 5rem;
  padding: 0 2rem 0 2rem;
  position: absolute;
  border: none;
  right: 2rem;
  bottom: 4rem;
  font-size: 2rem;
  border-radius: 1rem;
  &:hover {
    transition: all 0.3s;
    color: #00ffb3;
    border: none;
    background-color: black;
  }
`;

const StyledImagesContainer = styled.div`
  width: '100%';
  height: '100%';
  overflow: hidden;

  border-radius: '20px';
  overflow: 'hidden';
`;

/* eslint react/prop-types: 0 */
function Carousel() {
  const listItems = useRef();

  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const listNode = listItems.current;
    console.log(listNode);

    const imgNode = listNode.querySelectorAll('li > img')[currIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [currIndex]);

  const scrollToImage = (direction) => {
    console.log(currIndex);

    if (direction === 'prev') {
      setCurrIndex((curr) => {
        const isFirstSlide = currIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      });
    } else {
      const isLastSlide = currIndex === carouselData.length - 1;
      if (!isLastSlide) {
        setCurrIndex((curr) => curr + 1);
      }
    }
  };

  const selectTrip = function (tripId) {
    console.log(tripId);
    //1gather what trip it is
    //2 store in an object
    //3 make user navigate to view full details page
  };

  return (
    <StyledCarouselContainer>
      <StyledHeaderForComponent>Upcomming Trips</StyledHeaderForComponent>
      <StyledCarousel>
        <StyledImagesContainer>
          <StyledButton
            onClick={() => scrollToImage('prev')}
            className="left"
          >{`<`}</StyledButton>
          <StyledButton
            onClick={() => scrollToImage('next')}
            className="right"
          >{`>`}</StyledButton>
          <ul ref={listItems}>
            {carouselData.map((item) => {
              return (
                <li
                  key={item.name}
                  style={{
                    whiteSpace: 'nowrap',
                    listStyle: 'none',
                    display: 'inline',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ height: '100%', width: '100%' }}
                  ></img>
                </li>
              );
            })}
          </ul>
        </StyledImagesContainer>
      </StyledCarousel>
      {/* <Animateddiv /> */}
      <StyledMakeReservation>View trip Details</StyledMakeReservation>
    </StyledCarouselContainer>
  );
}

export default Carousel;
/////////////////////////////////////////////////

const rotatANimation = keyframes`
  from{
    transform:rotate(0deg);
  }
  to{
    transform:rotate(360deg);
  }
`;

export const Animateddiv = styled.div`
  position: absolute;
  z-index: 100;
  top: 0rem;
  height: 10rem;
  width: 20rem;
  background-color: #ebded2;
  animation: ${rotatANimation} infinite 2s linear;
`;
