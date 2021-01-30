import styled from 'styled-components';

export const H3 = styled.h3`
  font-size: 24px;
  line-height: 26px;
  margin-bottom: 24px;
`;

export const DisplayContainer = styled.section`
  display: flex;
  width: 297px;
  height: 297px;
  margin: 0 auto;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  font-size: 54px;
  line-height: 64px;
  background: ${(props) =>
    props.theme.mode === 'light' ? '#FCFCFC' : '#252836'};
`;
