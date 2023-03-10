import Grid from 'components/grid/Grid';

import { GridConfig, GridDisplay } from 'types/Grid';
import LevelInput, { LevelInputProps } from 'components/levelInput/LevelInput';

function Attributes() {
  const gridConfig: GridConfig<LevelInputProps> = {
    defaultComponent: LevelInput,
    defaultProps: { levels: 5 },
    data: [
      [{ label: 'Strength' }, { label: 'Dexterity' }, { label: 'Stamina' }],
      [
        { label: 'Charisma' },
        { label: 'Manipulation' },
        { label: 'Composure' },
      ],
      [{ label: 'Intelligence' }, { label: 'Wits' }, { label: 'Resolve' }],
    ],
    display: GridDisplay.columns,
  };

  return <Grid gridConfig={gridConfig}></Grid>;
}

export default Attributes;
