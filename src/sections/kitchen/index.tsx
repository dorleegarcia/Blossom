import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Title from "../../components/Title";
import Section from "../../components/Section";
import SectionSpacer from "../../components/SectionSpacer";
import SectionContent from "../../components/SectionContent";

import {
  kitchenSectionMixerVariants,
  kitchenSectionTitleVariants,
} from "./variants";

import { SectionBackgroundImages } from "../../components/Section/types";
import { SectionContentAligns } from "../../components/SectionContent/types";

function KitchenSection() {
  const { t } = useTranslation();
  const controls = useAnimation();

  const [refSection, sectionInView] = useInView();
  const [refStep1, step1InView] = useInView();
  const [refStep2, step2InView] = useInView();

  useEffect(() => {
    if (!sectionInView) controls.start("step0");
    if (step1InView) controls.start("step1");
    if (step2InView) controls.start("step2");
  }, [controls, sectionInView, step1InView, step2InView]);

  return (
    <Section
      isBackgroundFixed
      ref={refSection}
      isInView={sectionInView}
      background={SectionBackgroundImages.Kitchen}
    >
      <SectionContent isLight isFixed>
        <motion.div
          initial="step0"
          animate={controls}
          variants={kitchenSectionMixerVariants}
        >
          <img
            src="/images/sections/intro/mixer.png"
            alt={t("global.alt.mixer")}
          />
        </motion.div>
      </SectionContent>

      <SectionContent isLight isFixed alignItems={SectionContentAligns.Right}>
        <motion.div
          initial="step0"
          animate={controls}
          variants={kitchenSectionTitleVariants}
        >
          <Title isAlignLeft title={t("kitchen.title")} />
        </motion.div>
      </SectionContent>

      <SectionSpacer ref={refStep1} />
      <SectionSpacer ref={refStep2} />
    </Section>
  );
}

export default KitchenSection;
