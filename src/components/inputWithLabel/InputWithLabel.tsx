import { Placement } from 'common/Label';
import Input from 'components/input/Input';
import { HTMLInputTypeAttribute } from 'react';
import { Wrapper } from './styled';

export interface InputWithLabelProps {
  label: string;
  placement?: Placement;
  inputType?: HTMLInputTypeAttribute;
}

function InputWithLabel(props: InputWithLabelProps) {
  const { label, placement, inputType } = props;
  return (
    <Wrapper labelPlacement={placement}>
      <label htmlFor={label}>{label}</label>
      <Input id={label} inputType={inputType ?? 'text'} />
    </Wrapper>
  );
}

export default InputWithLabel;
