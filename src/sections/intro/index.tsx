import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Title from "../../components/Title";
import Section from "../../components/Section";
import ScrollDown from "../../components/ScrollDown";
import BlossomText from "../../components/BlossomText";
import VisualShaded from "../../components/VisualShaded";
import SectionSpacer from "../../components/SectionSpacer";
import SectionContent from "../../components/SectionContent";
import BlossomAnimations from "../../components/BlossomAnimations";

import useWindowWidth from "../../utils/useWindowWidth";

import {
  introSectionBlossomVariants,
  introSectionMixerVariants,
  introSectionTextVariants,
  introSectionTitleVariants,
} from "./variants";

import {
  SectionBackgroundGradients,
  SectionBackgroundImages,
} from "../../components/Section/types";
import TitleColors from "../../components/Title/types";
import { BlossomTextColors } from "../../components/BlossomText/types";
import { SectionContentJustify } from "../../components/SectionContent/types";
import BlossomAnimationsHideStates from "../../components/BlossomAnimations/types";

interface IIntroSectionProps {
  isStatic: boolean;
}

function IntroSection({ isStatic }: IIntroSectionProps) {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [isWindowWidthMobile, setWindowWidthMobile] = useState(true);

  const [refSection, sectionInView] = useInView();
  const [refStep1, step1InView] = useInView();
  const [refStep2, step2InView] = useInView();
  const [refStep3, step3InView] = useInView();

  useEffect(() => {
    if (!sectionInView) controls.start("step0");
    if (step1InView) controls.start("step1");
    if (step2InView) controls.start("step2");
    if (step3InView) controls.start("step3");
  }, [controls, sectionInView, step1InView, step2InView, step3InView]);

  useWindowWidth(setWindowWidthMobile);

  return (
    <Section
      isBackgroundFixed
      ref={refSection}
      isInView={sectionInView}
      background={
        step2InView || step3InView
          ? SectionBackgroundGradients.Blossom
          : SectionBackgroundImages.Blossom
      }
    >
      <SectionContent isLight isFixed>
        <motion.div
          initial="step0"
          animate={controls}
          variants={introSectionMixerVariants(isWindowWidthMobile, isStatic)}
        >
          <VisualShaded
            isInView={step2InView || step3InView}
            visual="/images/sections/intro/mixer.png"
            shadowVisual="/images/sections/intro/mixer-hide.png"
          />
        </motion.div>

        <motion.div
          initial="step0"
          animate={controls}
          variants={introSectionBlossomVariants}
        >
          <h1>
            {t("intro.title")}
            <BlossomText color={BlossomTextColors.White} withQuestionMark />
          </h1>
        </motion.div>

        <motion.div
          initial="step0"
          animate={controls}
          variants={introSectionTextVariants}
        >
          <p>{t("intro.text")}</p>
        </motion.div>
      </SectionContent>

      <SectionContent
        isLight
        isFixed
        justifyContent={SectionContentJustify.Top}
      >
        <motion.div
          initial="step0"
          animate={controls}
          variants={introSectionTitleVariants}
        >
          <Title
            title={t("intro.subtitle")}
            backgroundColor={TitleColors.Mint}
          />
        </motion.div>
      </SectionContent>

      <SectionSpacer />

      {!isWindowWidthMobile && !isStatic && (
        <>
          <SectionSpacer ref={refStep1} />
          <SectionSpacer ref={refStep2} />
          <SectionSpacer ref={refStep3} />
        </>
      )}

      <BlossomAnimations
        isFixed
        isHide={
          !sectionInView
            ? BlossomAnimationsHideStates.Hide100
            : step3InView
            ? BlossomAnimationsHideStates.Hide50
            : step2InView
            ? BlossomAnimationsHideStates.Hide25
            : BlossomAnimationsHideStates.Hide0
        }
      />

      {sectionInView && <ScrollDown />}
    </Section>
  );
}

export default IntroSection;
