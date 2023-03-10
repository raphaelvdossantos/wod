import { CustomInput } from 'types/Input';
import useInputComponent from './styled';

export interface InputProps extends Partial<HTMLInputElement> {
  id: string;
  inputType?: CustomInput;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: InputProps) {
  const { inputType } = props;
  return useInputComponent(props, inputType);
}

export default Input;
