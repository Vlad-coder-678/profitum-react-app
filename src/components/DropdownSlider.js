import React from "react";
import styled, { css } from "styled-components";
import Resume from "./Resume";

import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";

const DropdownContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  height: 100%;
  display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  transition: 0.3s ease-in-out;
  overflow: hidden;
  cursor: default;
  z-index: 999;
`;
const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled(FaTimes)`
  color: #fff;
  :hover {
    color: #cd853f;
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 4rem;
  cursor: default;
  @media screen and (max-screen: 480px) {
    flex-direction: row;
  }
`;

const Slider = styled.div`
  cursor: default;
`;

const Slide = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  cursor: default;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const WrapImage = styled.div`
  flex-basis: 30%;
  height: 85vh;
  margin-right: 15px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const Content = styled.div`
  flex-basis: 55%;
  color: #fff;
  font-size: 1rem;
  text-decoration: none;
  list-style: none;
`;

const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #000d1a;
  cursor: pointer;
  background: #fff;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-selected: none;
  transition: 0.3s;
  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;

const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;

const DropdownSlider = ({ isOpen, toggle, setCurr, active, teamData }) => {
  const length = teamData.length;

  // React.useEffect((active) => {
  //   setCurr(active);
  // }, [active]);

  const handleClickClose = () => {
    toggle();
    setCurr(null);
  };

  const nextSlide = () => {
    setCurr(active === length - 1 ? 0 : active + 1);
  };

  const prevSlide = () => {
    setCurr(active === 0 ? length - 1 : active - 1);
  };

  if (!Array.isArray(teamData) || teamData.length <= 0) {
    return null;
  }

  return (
    <DropdownContainer isOpen={isOpen}>
      <Icon onClick={handleClickClose}>
        <CloseIcon />
      </Icon>

      <SliderWrapper>
        {teamData.map((item, index) => (
          <Slider key={index}>
            {index === active && (
              <Slide>
                <WrapImage>
                  <img src={item.imageSlider} alt={item.alt} />
                </WrapImage>
                <Content>
                  <h1>{item.title}</h1>
                  <p>{item.desc}</p>
                  <Resume resume={item.resume} />
                </Content>
              </Slide>
            )}
          </Slider>
        ))}
      </SliderWrapper>

      <SliderButtons>
        <PrevArrow onClick={prevSlide} />
        <NextArrow onClick={nextSlide} />
      </SliderButtons>
    </DropdownContainer>
  );
};

export default DropdownSlider;
