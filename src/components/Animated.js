import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #888;
`;
const LineHorizont = styled.div`
  width: 100%;
  height: 1px;
  position: absolute;
  top: 50%;
  left: 0;
  background-color: red;
`;
const LineVertical = styled.div`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  background-color: red;
`;

const Point = css`
  width: 5px;
  height: 5px;
  position: absolute;
  transform: translate(-50%, -50%);
  transform-origin: center;
  background-color: red;
`;

const Point1 = styled.div`
  ${Point}
  top: 50%;
  left: 50%;
`;
const Points = [];
const fibs = [0, 1];
const string = "Take the power";
const String = styled.div`
  color: #000d1a;
  font-size: 24px;
`;
// const WrapString = styled.div`
//   border: 2px solid red;
// `;

// fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
// Points[i] = <div className={`point${i}`}></div>;
// const styleString = () => {
//   for (let i = 0; i <= string.length; i++) {
//     // `.string${i} { top: 5${i}%; left: 5${i}%; }`
//   }
// };
// const CSS = css`
//   ${styleString}
// `;

const Animated = () => {
  //   console.log(Points);
  return (
    <Wrapper>
      {/* <CSS /> */}
      {/* {Points} */}
      {/* <WrapString>
        {string.split("").map((item, id) => (
          <String className={`string${id}`}>{item}</String>
        ))}
      </WrapString> */}
      <Point1></Point1>
      <LineHorizont></LineHorizont>
      <LineVertical></LineVertical>
    </Wrapper>
  );
};

export default Animated;
