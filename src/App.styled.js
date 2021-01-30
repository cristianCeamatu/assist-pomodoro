import styled from 'styled-components';

export const Wrapper = styled.div`
  letter-spacing: 0.01em;
  text-align: center;

  main {
    max-width: 1240px;
    width: 100%;
    margin: 0 auto;

    @media only screen and (min-width: 992px) {
      background: ${(props) =>
        props.theme.mode === 'light' ? '#fff' : '#1F1D2B'};
      border: ${(theme) =>
        theme.mode === 'light' ? 'none' : '1px solid #828282'};
      box-shadow: 0px 10px 34px rgba(50, 70, 91, 0.15);
      border-radius: 4px;
      margin: 35px auto;
      box-sizing: border-box;
    }
  }
`;
