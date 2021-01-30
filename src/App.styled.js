import styled from 'styled-components';

export const Wrapper = styled.div`
  letter-spacing: 0.01em;
  text-align: center;

  main {
    max-width: 1240px;
    width: 100%;
    margin: 0 auto;

    @media only screen and (min-width: 992px) {
      ${({ theme }) => {
        const { mode, themes } = theme;
        return `
          background: ${themes[mode].bg};
          border: ${themes[mode].border};
        `;
      }};
      box-shadow: 0px 10px 34px rgba(50, 70, 91, 0.15);
      border-radius: 4px;
      margin: 35px auto;
      box-sizing: border-box;
    }
  }
`;
