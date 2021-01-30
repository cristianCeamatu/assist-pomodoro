import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) =>
      props.theme.mode === 'dark' ? '#1F1D2B' : ''};
    color: ${(props) => (props.theme.mode === 'dark' ? '#f2f2f2' : '#333333')}
  }
`;
