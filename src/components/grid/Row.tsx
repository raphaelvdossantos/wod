import { Cell } from 'types/Grid';
import { StyledRow } from './styled';

interface RowProps<T> {
  cells: Cell<T>[];
  defaultProps?: Partial<T>;
  component?: React.FC<T>;
}

function Row<T extends object>(props: RowProps<T>) {
  const { component: Component, cells, defaultProps } = props;
  return (
    <StyledRow>
      {cells.map((cell) =>
        Component ? <Component {...(defaultProps as T)} {...cell} /> : null
      )}
    </StyledRow>
  );
}

export default Row;
