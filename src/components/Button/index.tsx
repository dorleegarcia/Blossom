import StyledButton from "./styles";

interface IButtonProps {
  href: string;
  label: string;
  isSecondary?: boolean;
}

function Button({
  href,
  label,
  isSecondary = false,
}: IButtonProps): React.ReactElement {
  return (
    <StyledButton href={href} target="_blank" isSecondary={isSecondary}>
      {label}
    </StyledButton>
  );
}
export default Button;
