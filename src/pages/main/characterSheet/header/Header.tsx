import Grid from 'components/grid/Grid';
import { InputWithLabel, InputWithLabelProps } from 'components/inputWithLabel';

import { Placement } from 'common/Label';
import { GridConfig, GridDisplay } from 'types/Grid';

function Header() {
  const gridConfig: GridConfig<InputWithLabelProps> = {
    defaultComponent: InputWithLabel,
    defaultProps: { inputType: 'text', placement: Placement.top },
    data: [
      [{ label: 'Name' }, { label: 'Concept' }, { label: 'Predator' }],
      [{ label: 'Cronicle' }, { label: 'Ambition' }, { label: 'Clan' }],
      [{ label: 'Lord' }, { label: 'Desire' }, { label: 'Generation' }],
    ],
    display: GridDisplay.rows,
  };

  return <Grid gridConfig={gridConfig}></Grid>;
}

export default Header;
