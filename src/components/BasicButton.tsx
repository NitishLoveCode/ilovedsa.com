import Button, { ButtonProps } from "@mui/material/Button";

interface BasicButtonProps extends ButtonProps {
  text: string;
}

export function BasicButton({ text, children, ...rest }: BasicButtonProps) {
  return (
    <Button disableRipple {...rest}>
      {children}
      {text}
    </Button>
  );
}
