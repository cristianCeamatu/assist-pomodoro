import styled from 'styled-components';

export const H3 = styled.h3`
  font-size: 24px;
  line-height: 26px;
  margin-bottom: 24px;
`;

export const DisplayContainer = styled.div`
  display: flex;
  width: 297px;
  height: 297px;
  margin: 0 auto 24px;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  font-size: 54px;
  line-height: 64px;
  background: ${(props) =>
    props.theme.mode === 'light' ? '#FCFCFC' : '#252836'};
`;

export const SettingsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  font-size: 14px;

  h3 {
    margin-bottom: 8px;
    line-height: 24px;
    color: ${(props) => (props.theme.mode === 'light' ? '#4F4F4F' : '')};
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    border-radius: 8px;
    line-height: 16px;

    li {
      padding: 8px;

      &:first-child {
        border-right: 1px solid #bdbdbd;
      }

      &:last-child {
        border-left: 1px solid #bdbdbd;
      }

      button {
        color: #11bcc7;
      }
    }
  }
`;
