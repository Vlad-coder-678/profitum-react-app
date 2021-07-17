import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentBigScreen = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ContentSmallScreen = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    max-width: 400px;
  }
`;

const Content = styled.div``;

const ContentLeft = styled.div`
  flex-basis: 45%;
  display: flex;
  flex-direction: column;
`;

const ContentRight = styled.div`
  flex-basis: 45%;
  display: flex;
  flex-direction: column;
`;

const CardResume = styled.div`
  width: 95%;
  background-color: #fff;
  margin: 0.5rem 1rem;
  border-radius: 10px;
  text-align: start;
  padding: 1rem 1.5rem;
  align-self: start;

  @media screen and (max-width: 768px) {
    width: auto;
    padding: 1rem;
    margin: 1rem;
  }
`;

const Title = styled.h4`
  font-size: 1rem;
  color: #cd853f;
  margin-bottom: 1.5rem;
`;

const WrapContent = styled.div`
  margin: 1rem 0;
`;
const WrapDate = styled.p`
  font-size: 0.9rem;
  margin: 0.5rem 0;
`;
const WrapLoc = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    font-weight: 600;
  }
`;
const WrapVoc = styled.p`
  font-size: 0.9rem;
  margin: 0.5rem 0;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
const WrapDesc = styled.p`
  margin: 0.5rem 0;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const WrapDoc = styled.div`
  position: relative;
  width: 100%;
  height: 400px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Resume = ({ resume }) => {
  const leftContent = [];
  const rightContent = [];

  for (let i = 0; i < resume.length; i++) {
    i % 2 === 0 ? leftContent.push(resume[i]) : rightContent.push(resume[i]);
  }

  if (!Array.isArray(resume) || resume.length <= 0) {
    return null;
  }
  return (
    <Wrapper>
      <ContentBigScreen>
        <ContentLeft>
          {leftContent.map((item, index) => (
            <CardResume key={index}>
              <Title>{item.title}</Title>
              {item.content.map((item, index) => (
                <WrapContent key={index}>
                  <WrapLoc>{item.location}</WrapLoc>
                  <WrapDate>{item.date}</WrapDate>
                  <WrapVoc>{item.vocation}</WrapVoc>
                  <WrapDesc>{item.desc}</WrapDesc>
                  {item.doc ? (
                    <WrapDoc>
                      <img src={item.doc} alt={item.alt} />
                    </WrapDoc>
                  ) : null}
                </WrapContent>
              ))}
            </CardResume>
          ))}
        </ContentLeft>
        <ContentRight>
          {rightContent.map((item, index) => (
            <CardResume key={index}>
              <Title>{item.title}</Title>
              {item.content.map((item, index) => (
                <WrapContent key={index}>
                  <WrapLoc>{item.location}</WrapLoc>
                  <WrapDate>{item.date}</WrapDate>
                  <WrapVoc>{item.vocation}</WrapVoc>
                  <WrapDesc>{item.desc}</WrapDesc>
                  {item.doc ? (
                    <WrapDoc>
                      <img src={item.doc} alt={item.alt} />
                    </WrapDoc>
                  ) : null}
                </WrapContent>
              ))}
            </CardResume>
          ))}
        </ContentRight>
      </ContentBigScreen>
      <ContentSmallScreen>
        <Content>
          {resume.map((item, index) => (
            <CardResume key={index}>
              <Title>{item.title}</Title>
              {item.content.map((item, index) => (
                <WrapContent key={index}>
                  <WrapLoc>{item.location}</WrapLoc>
                  <WrapDate>{item.date}</WrapDate>
                  <WrapVoc>{item.vocation}</WrapVoc>
                  <WrapDesc>{item.desc}</WrapDesc>
                  {item.doc ? (
                    <WrapDoc>
                      <img src={item.doc} alt={item.alt} />
                    </WrapDoc>
                  ) : null}
                </WrapContent>
              ))}
            </CardResume>
          ))}
        </Content>
      </ContentSmallScreen>
    </Wrapper>
  );
};

export default Resume;
