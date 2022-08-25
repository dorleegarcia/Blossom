/* eslint-disable react/display-name */
import React from "react";

import StyledSection from "./styles";
import { SectionBackgroundGradients, SectionBackgroundImages } from "./types";

interface ISectionProps {
  isInView?: boolean;
  isFullHeight?: boolean;
  children?: React.ReactNode;
  isBackgroundFixed?: boolean;
  background?: SectionBackgroundImages | SectionBackgroundGradients;
}

const Section = React.forwardRef(
  (
    {
      children,
      isInView = false,
      isFullHeight = false,
      isBackgroundFixed = false,
      background = SectionBackgroundGradients.Light,
    }: ISectionProps,
    ref
  ) => (
    <StyledSection
      isInView={isInView}
      background={background}
      isFullHeight={isFullHeight}
      isBackgroundFixed={isBackgroundFixed}
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      {children}
    </StyledSection>
  )
);

export default Section;
