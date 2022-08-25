import StyledContent from "./styles";

interface IContentProps {
  isCenter?: boolean;
  isPaddingLarge?: boolean;
  children: React.ReactNode;
}

function Content({
  children,
  isCenter = false,
  isPaddingLarge = false,
}: IContentProps): React.ReactElement {
  return (
    <StyledContent isCenter={isCenter} isPaddingLarge={isPaddingLarge}>
      {children}
    </StyledContent>
  );
}

export default Content;
