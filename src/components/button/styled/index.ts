import styled from "styled-components";
import { ButtonVariant } from "../defs/types";

interface CustomButtonProps {
  variant: ButtonVariant;
  width?: string;
  height?: string;
}

const CustomButton = styled.button<CustomButtonProps>`
  border: none;
  border-radius: 3px;
  width: ${(props) => props.width ?? "50px"};
  height: ${(props) => props.height ?? "25px"};

  cursor: pointer;
`;

export { CustomButton };
