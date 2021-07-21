import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Button } from "../components/Button";
import logo_about from "../images/logo_about.jpg";
import { aboutCompanyData } from "../data/aboutCompanyData";
import { LangContext } from "../App";

const SectionAbout = styled.section``;

const Container = styled.div`
  padding: 4rem 1rem 0.5rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: contain;
    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  p {
    margin: 1rem 0rem;
  }
  a {
    margin: 1rem 0rem;
  }
`;

const AboutCompany = () => {
  const lang = React.useContext(LangContext);

  return (
    <SectionAbout id="about">
      <Container>
        <ColumnLeft>
          <motion.img
            src={logo_about}
            alt={"home"}
            initial={{ opacity: 0, transform: "scale(0.9)" }}
            animate={{ opacity: 1, transform: "scale(1)" }}
            transition={{ duration: 1 }}
          />
        </ColumnLeft>
        <ColumnRight reverse={false}>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {aboutCompanyData.title[lang]}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {aboutCompanyData.text[lang]}
          </motion.div>
          <Button primary="true" to={"/homes"}>
            Связаться с нами
          </Button>
        </ColumnRight>
      </Container>
    </SectionAbout>
  );
};

export default AboutCompany;
