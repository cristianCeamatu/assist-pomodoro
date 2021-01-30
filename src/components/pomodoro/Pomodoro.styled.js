import styled from 'styled-components';

export const H3 = styled.h3`
  font-size: 24px;
  line-height: 26px;
  margin-bottom: 24px;

  @media screen and (min-width: 992px) {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    margin-bottom: 0;
    font-size: 40px;
    line-height: 50px;
  }
`;

export const DisplayContainer = styled.div`
  width: 257px;
  height: 257px;
  margin: 0 auto 24px;
  font-size: 54px;
  line-height: 64px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.theme.mode === 'light' ? '#FCFCFC' : '#252836'};
  position: relative;
  width: 297px;
  height: 297px;
  border-radius: 100%;

  svg {
    width: 297px;
    height: 297px;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%);
    width: 100%;
    height: 100%;

    circle:first-child {
      stroke: '#FCFCFC';
    }
  }

  h1 {
    font-size: 54px;
    line-height: 64px;
  }

  @media screen and (min-width: 992px) {
    grid-column: 1 / span 1;
    grid-row: 1 / span 3;
    width: 539px;
    height: 539px;
    font-size: 88px;
    line-height: 98px;
    margin-bottom: 0;
  }
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

  @media screen and (min-width: 992px) {
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;

    h3 {
      font-size: 26px;
      line-height: 36px;
    }

    ul {
      font-size: 26px;
      line-height: 28px;
      padding: 12px;

      button {
        font-size: 26px;
        line-height: 28px;
      }
    }
  }
`;

export const ButtonsContainer = styled.div`
  padding: 40px 20px 34px;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  button {
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.015em;
    border-radius: 8px;
    width: 335px;
    height: 62px;

    &.gradient {
      background: ${(props) =>
        props.theme.mode === 'light'
          ? 'linear-gradient(91.84deg, #2F80ED 0.5%, rgba(238, 58, 220, 0.6) 89.88%)'
          : 'linear-gradient(91.84deg, #11BCC7 0.5%, rgba(238, 58, 220, 0.6) 89.88%)'};
      box-shadow: ${(props) =>
        props.theme.mode === 'light'
          ? '0px 4px 24px rgba(93, 11, 131, 0.25)'
          : '0px 4px 40px rgba(93, 11, 131, 0.25)'};
    }

    &.default {
      background: ${(props) =>
        props.theme.mode === 'light' ? '#FCFCFC' : '#252836'};
      border: ${(props) =>
        props.theme.mode === 'light'
          ? '2px solid #828282'
          : '2px solid #E0E0E0'};
      filter: ${(props) =>
        props.theme.mode === 'light'
          ? 'drop-shadow(0px 4px 24px rgba(47, 128, 237, 0.25))'
          : ''};
      color: ${(props) =>
        props.theme.mode === 'light' ? '#828282' : '#F2F2F2'};
    }
  }

  @media screen and (min-width: 992px) {
    grid-column: 2 / span 1;
    grid-row: 3 / span 1;

    button {
      width: 496px;
      height: 82px;
      font-size: 28px;
      line-height: 30px;
    }
  }
`;
