import { HTMLInputTypeAttribute } from 'react';
import useInputComponent from './styled';

interface InputProps {
  id: string;
  inputType?: HTMLInputTypeAttribute;
  disabled?: boolean;
}

function Input(props: InputProps) {
  const { inputType } = props;
  return useInputComponent(props, inputType);
}

export default Input;
