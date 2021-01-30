import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 20px;
  line-height: 16px;
  font-style: normal;
  background: ${(props) =>
    props.theme.mode === 'light' ? '#ffffff' : '#252736'};

  box-shadow: 0px 4px 6px rgba(31, 29, 43, 0.05);

  .nav-brand {
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.01em;
  }

  ul li a {
    background: ${(props) =>
      props.theme.mode === 'light' ? '#11bcc7' : '#252736'};
    box-shadow: ${(props) =>
      props.theme.mode === 'light'
        ? '0px 4px 8px rgba(17, 188, 199, 0.15)'
        : ''};
    border: ${(props) =>
      props.theme.mode === 'light' ? '' : '1px solid #ffffff'};
    box-sizing: border-box;
    border-radius: 4px;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #ffffff;
    padding: 6px 11px 6px 12px;
  }
`;
