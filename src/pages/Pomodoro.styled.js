import styled from 'styled-components';

export const GridSection = styled.section`
  max-width: 420px;
  margin: 0 auto;

  @media screen and (min-width: 992px) {
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr, 1fr;
    grid-auto-rows: minmax(min-content, max-content);
    align-items: stretch;
    padding-bottom: 102px;
  }
`;
