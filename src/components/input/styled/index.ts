import React from 'react';
import styled, { StyledComponent } from 'styled-components';

interface CustomInputProps extends Partial<HTMLInputElement> {
  id: string;
  width?: number;
  heigth?: number;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxInput = styled.input.attrs({
  type: 'checkbox',
})``;

const RadioInput = styled.input.attrs({
  type: 'radio',
})``;

const TextInput = styled.input.attrs({
  type: 'text',
})``;

const PasswordInput = styled.input.attrs({
  type: 'password',
})``;

const InputComponents: Record<
  string,
  StyledComponent<'input', any, any, 'type'>
> = {
  checkbox: CheckboxInput,
  radio: RadioInput,
  text: TextInput,
  password: PasswordInput,
};

function useInputComponent(props: CustomInputProps, inputType = 'text') {
  const Component = InputComponents[inputType];

  return React.createElement(Component, { ...props });
}

export default useInputComponent;
