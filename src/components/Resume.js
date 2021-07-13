import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 75vh;
  overflow: hidden;
  cursor: default;
  background-color: rgba(0, 0, 0, 0.6);
  margin-top: 1rem;
`;

const Titles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: rows;
  justify-content: space-between;
`;

const Title = styled.h4`
  border-bottom: 1px solid #ddd;
  font-size: 0.7rem;
  cursor: pointer;
  margin: 0.5rem 0.5rem;
  &:hover {
    color: #cd853f;
    border-bottom: 1px solid #cd853f;
  }
  &:active {
    color: #cd853f;
    border-bottom: 1px solid #cd853f;
  }
`;

const Items = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Item = styled.pre`
  font-size: 0.8rem;
  padding: 1rem;
  margin: 0 auto;
  text-align: justify;
  text-decoration: none;
  color: #fff;
`;

const Resume = ({ resume }) => {
  const [active, setActive] = React.useState(0);

  const handleClick = (event) => {
    setActive(Number(event.target.id));
  };

  return (
    <Wrapper>
      <Titles resume={resume}>
        {resume.map((item, id) => (
          <Title key={id} id={id} onClick={handleClick}>
            {item.title}
          </Title>
        ))}
      </Titles>

      {resume.map(
        (item, index) =>
          index === active && (
            <Items key={index}>
              <Item>{item.desc}</Item>
            </Items>
          )
      )}
    </Wrapper>
  );
};

export default Resume;
