import { ButtonVariant } from "./defs/types";
import { CustomButton } from "./styled";

interface ButtonProps {
  text: string;
  variant?: ButtonVariant;
  width?: string;
  height?: string;
}

function Button(props: ButtonProps) {
  const { text, variant, width, height } = props;

  return (
    <CustomButton
      variant={variant ?? ButtonVariant.normal}
      width={width}
      height={height}
    >
      {text}
    </CustomButton>
  );
}

export default Button;
