import React from "react";
import styled from "styled-components";
import { LangContext } from "../App";
import { contactsData } from "../data/contactsData";

const SectionContacts = styled.section`
  padding: 4rem 2rem 1rem;
  position: relative;
`;

const Title = styled.h2`
  width: 100%;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;

const Contacts = () => {
  const lang = React.useContext(LangContext);

  return (
    <SectionContacts id="contacts">
      <Title>Контакты:</Title>
      <Content>{contactsData[lang]}</Content>
    </SectionContacts>
  );
};

export default Contacts;
