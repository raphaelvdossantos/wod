import Grid from 'components/grid/Grid';
import InputWithLabel, {
  InputWithLabelProps,
} from 'components/inputWithLabel/InputWithLabel';

import { Placement } from 'common/Label';
import { GridConfig } from 'types/Grid';

function Header() {
  const gridConfig: GridConfig<InputWithLabelProps> = {
    defaultComponent: InputWithLabel,
    defaultProps: { inputType: 'text', placement: Placement.top },
    rows: [
      [{ label: 'Name' }, { label: 'Concept' }, { label: 'Predator' }],
      [{ label: 'Cronicle' }, { label: 'Ambition' }, { label: 'Clan' }],
      [{ label: 'Lord' }, { label: 'Desire' }, { label: 'Generation' }],
    ],
  };

  return <Grid gridConfig={gridConfig}></Grid>;
}

export default Header;
