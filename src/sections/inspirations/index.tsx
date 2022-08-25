import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Button from "../../components/Button";
import Actions from "../../components/Actions";
import Section from "../../components/Section";
import BlossomText from "../../components/BlossomText";
import SectionContent from "../../components/SectionContent";
import VisualWithBlossom from "../../components/VisualWithBlossom";
import BlossomAnimations from "../../components/BlossomAnimations";

import {
  inspirationsSectionMixerVariants,
  inspirationsSectionTitleVariants,
} from "./variants";

import useWindowWidth from "../../utils/useWindowWidth";

import { SectionBackgroundGradients } from "../../components/Section/types";
import BlossomAnimationsHideStates from "../../components/BlossomAnimations/types";

function InspirationsSection() {
  const { t } = useTranslation();
  const controls = useAnimation();

  const [isWindowWidthMobile, setWindowWidthMobile] = useState(true);

  const [refSection, sectionInView] = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    sectionInView ? controls.start("visible") : controls.start("hidden");
  }, [controls, sectionInView]);

  useWindowWidth(setWindowWidthMobile);

  return (
    <Section
      isFullHeight
      ref={refSection}
      isInView={sectionInView}
      background={SectionBackgroundGradients.Light}
    >
      <SectionContent>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={inspirationsSectionTitleVariants}
        >
          <h2>
            <BlossomText />
          </h2>
        </motion.div>

        <VisualWithBlossom
          isInView={sectionInView}
          visualLeft="/images/sections/inspirations/plants-left.png"
          visualRight="/images/sections/inspirations/plants-right.png"
        >
          <motion.div
            initial="hidden"
            animate={controls}
            variants={inspirationsSectionMixerVariants}
          >
            <img
              alt={t("global.alt.mixer")}
              src="/images/sections/inspirations/mixer.png"
            />
          </motion.div>
        </VisualWithBlossom>

        <Actions>
          <Button
            isSecondary
            href={t("inspirations.actions.inspire.link")}
            label={t("inspirations.actions.inspire.label")}
          />
        </Actions>
      </SectionContent>

      {!isWindowWidthMobile && (
        <BlossomAnimations
          isSmall
          isHide={
            !sectionInView
              ? BlossomAnimationsHideStates.Hide100
              : BlossomAnimationsHideStates.Hide75
          }
        />
      )}
    </Section>
  );
}

export default InspirationsSection;
