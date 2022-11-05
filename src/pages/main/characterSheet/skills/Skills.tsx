import Grid from 'components/grid/Grid';
import { InputWithLabel, InputWithLabelProps } from 'components/inputWithLabel';

import { Placement } from 'common/Label';
import { GridConfig, GridDisplay } from 'types/Grid';

function Skills() {
  const gridConfig: GridConfig<InputWithLabelProps> = {
    defaultComponent: InputWithLabel,
    defaultProps: { inputType: 'checkbox', placement: Placement.left },
    data: [
      [{ label: 'Athletics' }, { label: 'Animal Ken' }, { label: 'Academics' }],
      [{ label: 'Brawl' }, { label: 'Etiquette' }, { label: 'Awareness' }],
      [{ label: 'Craft' }, { label: 'Insight' }, { label: 'Finance' }],
      [
        { label: 'Drive' },
        { label: 'Intimidation' },
        { label: 'Investigation' },
      ],
      [{ label: 'Firearms' }, { label: 'Leadership' }, { label: 'Medicine' }],
      [{ label: 'Melee' }, { label: 'Performance' }, { label: 'Occult' }],
      [{ label: 'Larceny' }, { label: 'Persuasion' }, { label: 'Politics' }],
      [{ label: 'Stealth' }, { label: 'Streetwise' }, { label: 'Science' }],
      [{ label: 'Survival' }, { label: 'Subterfuge' }, { label: 'Technology' }],
    ],
    display: GridDisplay.columns,
  };

  return <Grid gridConfig={gridConfig}></Grid>;
}

export default Skills;
