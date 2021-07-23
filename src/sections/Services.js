import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components/macro";

import { servicesData } from "../data/servicesData";
import { Button } from "../components/Button";
import { LangContext } from "../App";

import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const ServicesSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const ServicesWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ServicesSlide = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const ServicesSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;

const ServicesImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const ServicesContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;
  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }
  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;

  @media screen and (max-width: 768px) {
    bottom: 30px;
    right: 30px;
  }
`;

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
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

const Services = () => {
  const [curr, setCurr] = useState(0);
  const lang = React.useContext(LangContext);
  const length = servicesData.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurr((curr) => (curr === length - 1 ? 0 : curr + 1));
    };

    timeout.current = setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [curr, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurr(curr === length - 1 ? 0 : curr + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurr(curr === 0 ? length - 1 : curr - 1);
  };

  if (!Array.isArray(servicesData) || servicesData.length <= 0) {
    return null;
  }

  return (
    <ServicesSection id="services">
      <ServicesWrapper>
        {servicesData.map((slide, index) => (
          <ServicesSlide key={index}>
            {index === curr && (
              <ServicesSlider>
                <ServicesImage src={slide.image} alt={slide.alt[lang]} />
                <ServicesContent>
                  <h1>{slide.title[lang]}</h1>
                  <Button href={slide.pathHomePage}>
                    {slide.labelHomePage[lang]}
                    <Arrow />
                  </Button>
                </ServicesContent>
              </ServicesSlider>
            )}
          </ServicesSlide>
        ))}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </ServicesWrapper>
    </ServicesSection>
  );
};

export default Services;
