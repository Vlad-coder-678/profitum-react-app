import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Button } from "./Button";
import logo_about from "../images/logo_about.jpg";

const SectionAbout = styled.section``;

const Container = styled.div`
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
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
  return (
    <SectionAbout>
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
            О компании
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Profitum - стремительно развивающаяся компания, в основе которой
            лежит опыт и плодотворное сотрудничество с ведущими участниками
            российского рынка.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Profitum - молодая стремительно развивающаяся инвестиционная
            компания. Наше сотрудничество связано с внедрением в компании своих
            технологий анализа и ведения бизнеса.
          </motion.p>
          <Button primary="true" to={"/homes"}>
            Связаться с нами
          </Button>
        </ColumnRight>
      </Container>
    </SectionAbout>
  );
};

export default AboutCompany;
