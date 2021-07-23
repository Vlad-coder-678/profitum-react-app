import React from "react";
import styled from "styled-components";

import { LangContext } from "../App";
import { contactsData } from "../data/contactsData";
import { Button } from "../components/Button";

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
  user-select: text;

  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Contacts = () => {
  const lang = React.useContext(LangContext);

  return (
    <SectionContacts id="contacts">
      <Title>Контакты:</Title>
      <Content>{contactsData[lang]}</Content>
      <WrapperButton>
        <Button
          primary={true}
          big={false}
          href={"https://calendly.com/profitumLtd"}
        >
          Заполнить форму
        </Button>
      </WrapperButton>
    </SectionContacts>
  );
};

export default Contacts;
