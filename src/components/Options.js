import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  height: 50vh;
  background: #999;
  .row1 {
    display: flex;
    justify-content: space-between;
  }
  .row2 {
    display: flex;
    align-items: center;
    .two {
      display: flex;
      flex-direction: column;
    }
    .pos {
      display: flex;
    }
  }
  .row3 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
export default function Options() {
  return (
    <Wrapper>
      <div className="row1">
        <div className="change">change</div>
        <div className="save">save</div>
      </div>
      <div className="row2">
        <div className="two">
          <div className="r">
            <span>Radius</span>
            <div>
              <p className="btn minus">-</p>
              <input value="0" />
              <p className="btn plus">+</p>
            </div>
          </div>
          <div className="m">
            <span>Margin</span>
            <div>
              <p className="btn minus">-</p>
              <input value="0" />
              <p className="btn plus">+</p>
            </div>
          </div>
        </div>
        <div className="pos">
          <span>Position</span>
          <div className="opts">left</div>
        </div>
      </div>
      <div className="row3">
        <div className="label">Background Color</div>
        <div className="colors">
          <i className="color">blue</i>
          <i className="color">blue</i>
          <i className="color">blue</i>
          <i className="color">blue</i>
          <i className="color">blue</i>
          <i className="color">blue</i>
          <i className="color">blue</i>
        </div>
      </div>
    </Wrapper>
  );
}
