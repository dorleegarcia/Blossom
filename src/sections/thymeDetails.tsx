import Section from "../components/Section";

import { SectionBackgroundImages } from "../components/Section/types";

function ThymeDetailSection() {
  return (
    <Section
      isFullHeight
      isBackgroundFixed
      background={SectionBackgroundImages.ThymeDetail}
    />
  );
}

export default ThymeDetailSection;
