import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.themes[theme.mode].bodyBg};
    color: ${({ theme }) => theme.themes[theme.mode].color};
  }
`;
