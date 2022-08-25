import StyledSectionContent from "./styles";
import { SectionContentAligns, SectionContentJustify } from "./types";

interface ISectionContentProps {
  children: React.ReactNode;
  isFixed?: boolean;
  isLight?: boolean;
  isDarker?: boolean;
  isInView?: boolean;
  alignItems?: SectionContentAligns;
  justifyContent?: SectionContentJustify;
}

function SectionContent({
  children,
  isFixed = false,
  isLight = false,
  isDarker = false,
  isInView = false,
  alignItems = SectionContentAligns.Center,
  justifyContent = SectionContentJustify.Center,
}: ISectionContentProps): React.ReactElement {
  return (
    <StyledSectionContent
      isInView={isInView}
      isFixed={isFixed}
      isLight={isLight}
      isDarker={isDarker}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </StyledSectionContent>
  );
}

export default SectionContent;
