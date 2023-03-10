import { Placement } from 'common/Label';
import Input from 'components/input/Input';
import { CustomInput } from 'types/Input';
import { Wrapper } from './styled';

export interface InputWithLabelProps extends Partial<HTMLInputElement> {
  label: string;
  placement?: Placement;
  inputType?: CustomInput;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
