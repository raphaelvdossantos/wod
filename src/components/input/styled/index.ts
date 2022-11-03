import React from "react";
import styled, { StyledComponent } from "styled-components";

interface InputProps {
  id: string;
  width?: string;
  heigth?: string;
  disabled?: boolean;
}

const CheckboxInput = styled.input.attrs({
  type: "checkbox",
})``;

const RadioInput = styled.input.attrs({
  type: "radio",
})``;

const TextInput = styled.input.attrs({
  type: "text",
})``;

const PasswordInput = styled.input.attrs({
  type: "password",
})``;

const InputComponents: Record<
  string,
  StyledComponent<"input", any, any, "type">
> = {
  checkbox: CheckboxInput,
  radio: RadioInput,
  text: TextInput,
  password: PasswordInput,
};

function useInputComponent(props: Partial<InputProps>, componentType = "text") {
  const Component = InputComponents[componentType];

  return React.createElement(Component, { ...props });
}

export default useInputComponent;
