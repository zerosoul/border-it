import React from 'react';
import styled from 'styled-components';

import DemoImg from '../assets/img/demo.jpg';
const Wrapper = styled.section`
  height: 50vh;
  background: #444;
  display: flex;
  justify-content: center;
  align-items: center;
  .img {
    height: 100%;
  }
`;
export default function Canvas() {
  return (
    <Wrapper>
      <img className="img" src={DemoImg} alt="border it image" />
    </Wrapper>
  );
}
