import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 102px;

  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    margin: 26px auto 32px;
    color: ${({ theme }) => theme.themes[theme.mode].aboutHeading};
  }

  @media screen and (min-width: 992px) {
    h1 {
      font-size: 40px;
      line-height: 50px;
    }
  }
`;
