import InputWithLabel, { InputWithLabelProps } from './InputWithLabel';

import { Meta, Story } from '@storybook/react';
import { Placement } from 'common/Label';

const defaultArgs: InputWithLabelProps = {
  label: 'This is a input label',
  inputType: 'text',
  placement: Placement.left,
};

export default {
  title: 'Atoms/Input with label',
  component: InputWithLabel,
  args: defaultArgs,
} as Meta<InputWithLabelProps>;

const Template: Story<InputWithLabelProps> = (args) => (
  <InputWithLabel {...args} />
);

export const Default = Template.bind({});

export const CheckboxInput = Template.bind({});
CheckboxInput.args = {
  ...defaultArgs,
  inputType: 'checkbox',
};

export const RightPlacedInputLabel = Template.bind({});
RightPlacedInputLabel.args = {
  ...defaultArgs,
  placement: Placement.right,
};
