import styled from "styled-components";

interface CustomTextAreaProps {
  width?: string;
  height?: string;
}

const CustomTextArea = styled.textarea<CustomTextAreaProps>`
  resize: none;
  padding: 5px;
  width: ${(props) => props.width ?? "500px"};
  height: ${(props) => props.height ?? "75px"};
  
  background: #d7d2d2;
  border: 2px solid #550008;
  border-radius: 3px;
`;

export { CustomTextArea };
