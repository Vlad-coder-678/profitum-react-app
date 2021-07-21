import React from "react";
import styled from "styled-components";

import { Button } from "../components/Button";

import { servicesData } from "../data/servicesData";
import { ACCENT_COLOR } from "../constants";

const WrapperPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 4rem;
  background-color: #ddd;
  overflow: hidden;
`;

const Card = styled.div`
  width: 85%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem 2rem;
  position: relative;
  box-shadow: 5px 5px 0px 0px ${ACCENT_COLOR};

  &:nth-child(2n-1) {
    align-self: flex-end;
  }
  &:nth-child(2n) {
    align-self: flex-start;
  }
`;

const CardTop = styled.div`
  order: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const TopContent = styled.div`
  order: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemDesc = styled.p`
  text-align: start;
  ul {
    margin: 0.5rem 1rem;
  }
`;

const TopImage = styled.div`
  order: 1;
`;

const WrapperImgManager = styled.div`
  width: 150px;
  height: 200px;
  margin: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardTitle = styled.h2`
  order: 1;
  text-align: center;
  margin: 1rem 0.5rem;
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CardBottom = styled.div`
  order: 3;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const BottomContent = styled.div`
  margin-bottom: 4rem;
`;

const ItemResult = styled.div`
  ul {
    margin: 0.5rem 1rem;
  }
  ol {
    margin: 0.5rem 1rem;
  }
`;

const BottomImage = styled.div``;

const WrapperImgService = styled.div`
  width: 350px;
  height: 250px;
  margin: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    width: 230px;
    height: 150px;
  }
`;

const WrapperButton = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  margin: 0.5rem;

  @media screen and (max-width: 768px) {
    bottom: 0rem;
    right: 0rem;
  }
`;

const ServicesPage = () => {
  return (
    <WrapperPage id={"servicesPage"}>
      {servicesData.map((item, index) => {
        return (
          <Card key={index} id={item.idCard}>
            <CardTop>
              <TopContent>
                <ItemDesc>{item.desc}</ItemDesc>
              </TopContent>
              <TopImage>
                <WrapperImgManager>
                  <img src={item.manager.image} alt={item.manager.alt} />
                </WrapperImgManager>
              </TopImage>
            </CardTop>
            <CardTitle>{item.title}</CardTitle>
            <CardBottom>
              <BottomImage>
                <WrapperImgService>
                  <img src={item.image} alt={item.alt} />
                </WrapperImgService>
              </BottomImage>
              <BottomContent>
                <ItemResult>{item.result}</ItemResult>
              </BottomContent>
            </CardBottom>
            <WrapperButton>
              <Button primary={true} big={false}>
                {item.labelServicesPage}
              </Button>
            </WrapperButton>
          </Card>
        );
      })}
    </WrapperPage>
  );
};

export default ServicesPage;
