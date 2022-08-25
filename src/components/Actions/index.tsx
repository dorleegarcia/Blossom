import StyledActions from "./styles";

interface IActionsProps {
  children: React.ReactNode;
}

function Actions({ children }: IActionsProps): React.ReactElement {
  return <StyledActions>{children}</StyledActions>;
}

export default Actions;
