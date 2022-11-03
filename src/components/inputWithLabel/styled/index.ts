import { Placement } from 'common/Label';
import styled from 'styled-components';

interface WrapperProps {
  labelPlacement?: Placement;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${(props) => props.labelPlacement ?? 'row'};
`;

export { Wrapper };
