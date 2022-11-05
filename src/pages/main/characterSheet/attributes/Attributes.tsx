import Grid from 'components/grid/Grid';
import { InputWithLabel, InputWithLabelProps } from 'components/inputWithLabel';

import { Placement } from 'common/Label';
import { GridConfig, GridDisplay } from 'types/Grid';

function Attributes() {
  const gridConfig: GridConfig<InputWithLabelProps> = {
    defaultComponent: InputWithLabel,
    defaultProps: { inputType: 'checkbox', placement: Placement.left },
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
