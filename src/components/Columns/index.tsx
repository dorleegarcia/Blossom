import StyledColumns from "./styles";

interface IColumnsProps {
  isInverted?: boolean;
  children: React.ReactNode;
}

function Columns({
  children,
  isInverted = false,
}: IColumnsProps): React.ReactElement {
  return <StyledColumns isInverted={isInverted}>{children}</StyledColumns>;
}

export default Columns;
