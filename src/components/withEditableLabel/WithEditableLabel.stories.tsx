import WithEditableLabel, { WithEditableLabelProps } from './WithEditableLabel';

import { Meta, Story } from '@storybook/react';

export default {
  title: 'Atoms/Input with editable label',
  component: WithEditableLabel,
  args: {
    children: <input type='checkbox' />,
    id: 'story',
  },
} as Meta<WithEditableLabelProps>;

const Template: Story<WithEditableLabelProps> = (args) => (
  <WithEditableLabel {...args} />
);

export const Default = Template.bind({});
