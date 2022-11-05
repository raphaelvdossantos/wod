import { GridConfig } from 'types/Grid';
import GridRow from './Row';

interface GridProps<T> {
  gridConfig: GridConfig<T>;
}

function Grid<T extends object>(props: GridProps<T>) {
  const {
    gridConfig: { data, defaultComponent, defaultProps },
  } = props;

  return (
    <div>
      {data.map((item) => (
        <GridRow
          cells={item}
          defaultProps={defaultProps}
          component={defaultComponent}
        />
      ))}
    </div>
  );
}

export default Grid;
