import styled from 'styled-components';

const StyledRow = styled.div<{gap?: string}>`
  display: flex;
  justify-content: space-between;
  gap: ${(props) => props?.gap ?? "1rem"};
`;

export { StyledRow };
