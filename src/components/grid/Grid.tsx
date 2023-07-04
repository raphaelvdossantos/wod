import { GridConfig } from 'types/Grid';
import GridRow from './Row';

interface GridProps<T> {
  gridConfig: GridConfig<T>;
  gap?: string
}

function Grid<T extends object>(props: GridProps<T>) {
  const {
    gridConfig: { data, defaultComponent, defaultProps },
    gap
  } = props;

  return (
    <div>
      {data.map((item) => (
        <GridRow
          cells={item}
          defaultProps={defaultProps}
          component={defaultComponent}
          gap={gap}
        />
      ))}
    </div>
  );
}

export default Grid;
