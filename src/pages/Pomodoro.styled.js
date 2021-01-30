import styled from 'styled-components';

export const GridSection = styled.section`
  display: grid;
  grid-template-columns: 1fr, 1fr;
  /* grid-template-rows: repeat(4, 1fr); */
  grid-auto-rows: minmax(min-content, max-content);
`;
