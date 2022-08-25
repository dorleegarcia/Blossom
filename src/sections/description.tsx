import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

import Title from "../components/Title";
import Button from "../components/Button";
import Actions from "../components/Actions";
import Section from "../components/Section";
import SectionContent from "../components/SectionContent";
import VisualWithLegend from "../components/VisualWithLegend";

import useWindowWidth from "../utils/useWindowWidth";

import { SectionBackgroundGradients } from "../components/Section/types";

function DescriptionSection() {
  const { t } = useTranslation();
  const [refSection, sectionInView] = useInView({
    threshold: 0.8,
  });

  const [isWindowWidthMobile, setWindowWidthMobile] = useState(true);

  useWindowWidth(setWindowWidthMobile);

  return (
    <Section
      ref={refSection}
      isInView={sectionInView}
      background={SectionBackgroundGradients.Blossom}
    >
      <SectionContent isLight>
        <Title title={t("description.title")} />

        <VisualWithLegend
          isInView={sectionInView}
          legends={[
            {
              position: isWindowWidthMobile ? [-5, 85] : [6, 80],
              text: t("description.legends", { returnObjects: true })[0],
              isReversed: false,
            },
            {
              position: isWindowWidthMobile ? [0, -80] : [45, -65],
              text: t("description.legends", { returnObjects: true })[1],
              isReversed: true,
            },
            {
              position: isWindowWidthMobile ? [66, 80] : [80, 85],
              text: t("description.legends", { returnObjects: true })[2],
              isReversed: false,
            },
          ]}
        >
          <img
            src="/images/sections/description/mixer.png"
            alt={t("global.alt.mixer")}
          />
        </VisualWithLegend>

        <Actions>
          <Button
            href={t("description.actions.shop.link")}
            label={t("description.actions.shop.label")}
          />
        </Actions>
      </SectionContent>
    </Section>
  );
}

export default DescriptionSection;
