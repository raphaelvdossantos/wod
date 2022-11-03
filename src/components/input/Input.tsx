import { HTMLInputTypeAttribute } from "react";
import useInputComponent from "./styled";

interface InputProps {
  id: string;
  inputType?: HTMLInputTypeAttribute;
  disabled?: boolean;
}

function Input(props: InputProps) {
  return useInputComponent(props);
}

export default Input;
