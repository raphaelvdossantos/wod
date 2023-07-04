import { Cell } from 'types/Grid';
import { StyledRow } from './styled';

interface RowProps<T> {
  cells: Cell<T>[];
  defaultProps?: Partial<T>;
  component?: React.FC<T>;
  gap?: string;
}

function Row<T extends object>(props: RowProps<T>) {
  const { component: Component, cells, defaultProps, gap } = props;
  return (
    <StyledRow gap={gap}>
      {cells.map((cell) =>
        Component ? <Component {...(defaultProps as T)} {...cell} /> : null
      )}
    </StyledRow>
  );
}

export default Row;
