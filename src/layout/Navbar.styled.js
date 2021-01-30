import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 24px 20px;
  line-height: 16px;
  font-style: normal;
  ${({ theme }) => {
    const { mode, themes } = theme;
    return `
          background: ${themes[mode].navBg};
        `;
  }};

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1240px;
    width: 100%;
    margin: 0 auto;
  }

  box-shadow: 0px 4px 6px rgba(31, 29, 43, 0.05);

  .nav-brand {
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.01em;
  }

  ul li a {
    ${({ theme }) => {
      const { mode, themes } = theme;
      return `
          background: ${themes[mode].navButtonBg};
          box-shadow: ${themes[mode].navButtonShadow};
          border: ${themes[mode].navButtonBorder};
        `;
    }};

    color: #fff;
    box-sizing: border-box;
    border-radius: 4px;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    padding: 6px 11px 6px 12px;
  }

  @media screen and (min-width: 992px) {
    .nav-brand {
      font-size: 32px;
      line-height: 32px;
    }

    ul li a {
      font-size: 24px;
      line-height: 26px;
    }
  }
`;
