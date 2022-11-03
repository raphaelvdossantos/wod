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
`;

export { CustomTextArea };
