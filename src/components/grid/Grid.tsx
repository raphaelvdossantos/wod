import { GridConfig } from 'types/Grid';
import GridRow from './Row';

interface GridProps<T> {
  gridConfig: GridConfig<T>;
}

function Grid<T extends object>(props: GridProps<T>) {
  const {
    gridConfig: { rows, defaultComponent, defaultProps },
  } = props;

  return (
    <div>
      {rows.map((row) => (
        <GridRow
          cells={row}
          defaultProps={defaultProps}
          component={defaultComponent}
        />
      ))}
    </div>
  );
}

export default Grid;
