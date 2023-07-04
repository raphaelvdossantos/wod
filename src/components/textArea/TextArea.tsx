import { CustomTextArea } from './styled';

interface TextAreaProps {
  width?: string;
  height?: string;
  id?: string;
}

function TextArea(props: TextAreaProps) {
  return <CustomTextArea {...props}/>;
}

export default TextArea;
