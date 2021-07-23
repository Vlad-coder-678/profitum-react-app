import React from "react";
import styled from "styled-components";

import ResumeCard from "./ResumeCard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 2rem;

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

const ResumeSection = ({
  resume,
  toggle,
  setNeededDoc,
  setNeededAlt,
  lang,
}) => {
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
            <ResumeCard
              key={index}
              resumeOfEmployee={item}
              toggle={toggle}
              setDoc={setNeededDoc}
              setAlt={setNeededAlt}
              lang={lang}
            />
          ))}
        </ContentLeft>
        <ContentRight>
          {rightContent.map((item, index) => (
            <ResumeCard
              key={index}
              resumeOfEmployee={item}
              toggle={toggle}
              setDoc={setNeededDoc}
              setAlt={setNeededAlt}
              lang={lang}
            />
          ))}
        </ContentRight>
      </ContentBigScreen>
      <ContentSmallScreen>
        <Content>
          {resume.map((item, index) => (
            <ResumeCard
              key={index}
              resumeOfEmployee={item}
              toggle={toggle}
              setDoc={setNeededDoc}
              setAlt={setNeededAlt}
              lang={lang}
            />
          ))}
        </Content>
      </ContentSmallScreen>
    </Wrapper>
  );
};

export default ResumeSection;
