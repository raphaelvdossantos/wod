import Grid from 'components/grid/Grid';

import { GridConfig, GridDisplay } from 'types/Grid';
import Discipline, { DispciplineProps } from '../discipline/Discipline';

function Disciplines() {
  const gridConfig: GridConfig<DispciplineProps> = {
    defaultComponent: Discipline,
    defaultProps: { levels: 5 },
    data: [
      [{ id: 'str' }, { id: 'dex' }],
      [{ id: 'cha' }, { id: 'man' }],
      [{ id: 'int' }, { id: 'wit' }],
    ],
    display: GridDisplay.columns,
  };

  return <Grid gridConfig={gridConfig}></Grid>;
}

export default Disciplines;
