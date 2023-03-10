import { Meta, Story } from '@storybook/react';
import LevelInput, { LevelInputProps } from './LevelInput';

export default {
  title: 'Atoms/Level input',
  component: LevelInput,
  args: {
    levels: 5,
  },
} as Meta<LevelInputProps>;

const Template: Story<LevelInputProps> = (args) => <LevelInput {...args} />;

export const Default = Template.bind({});
