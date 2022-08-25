/* eslint-disable react/display-name */
import React from "react";

import StyledSectionSpacer from "./styles";

interface ISectionSpacerProps {
  children?: React.ReactNode;
}

const SectionSpacer = React.forwardRef(
  ({ children }: ISectionSpacerProps, ref) => (
    <StyledSectionSpacer ref={ref as React.RefObject<HTMLDivElement>}>
      {children}
    </StyledSectionSpacer>
  )
);

export default SectionSpacer;
