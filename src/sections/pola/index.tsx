import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Title from "../../components/Title";
import Section from "../../components/Section";
import Polaroid from "../../components/Polaroid";
import SectionSpacer from "../../components/SectionSpacer";
import SectionContent from "../../components/SectionContent";
import BackgroundSlide from "../../components/BackgroundSlide";

import {
  polaSection1TitleVariants,
  polaSection2TitleVariants,
} from "./variants";

import {
  SectionContentAligns,
  SectionContentJustify,
} from "../../components/SectionContent/types";
import TitleColors from "../../components/Title/types";
import { SectionBackgroundImages } from "../../components/Section/types";

function PolaSection() {
  const { t } = useTranslation();
  const controls = useAnimation();

  const [refSection1, section1InView] = useInView();
  const [refSection2, section2InView] = useInView();

  const [refStep1, step1InView] = useInView();
  const [refStep2, step2InView] = useInView();
  const [refStep3, step3InView] = useInView();
  const [refStep4, step4InView] = useInView();
  const [refStep5, step5InView] = useInView();

  useEffect(() => {
    if (!section1InView || !section2InView) controls.start("step0");
    if (step1InView) controls.start("step1");
    if (step2InView) controls.start("step2");
    if (step3InView) controls.start("step3");
    if (step4InView) controls.start("step4");
    if (step5InView) controls.start("step5");
  }, [
    controls,
    section1InView,
    section2InView,
    step1InView,
    step2InView,
    step3InView,
    step4InView,
    step5InView,
  ]);

  return (
    <>
      <Section
        isBackgroundFixed
        ref={refSection1}
        isInView={section1InView}
        background={SectionBackgroundImages.Pola1}
      >
        <BackgroundSlide
          isSlided={step3InView || step4InView || step5InView}
          isInView={step2InView || step3InView || step4InView || step5InView}
          visuals={[
            "/images/sections/pola/background2.jpg",
            "/images/sections/pola/background1.jpg",
          ]}
        />

        <SectionSpacer />
        <SectionSpacer ref={refStep1} />
        <SectionSpacer ref={refStep2} />
        <SectionSpacer ref={refStep3} />
      </Section>

      <Section
        ref={refSection2}
        isInView={section2InView}
        background={SectionBackgroundImages.Pola2}
        isBackgroundFixed
      >
        <SectionContent
          isDarker
          isFixed
          alignItems={SectionContentAligns.Left}
          justifyContent={SectionContentJustify.Top}
        >
          <motion.div
            animate={controls}
            initial="step0"
            variants={polaSection1TitleVariants}
          >
            <Title
              isSubtitle
              isAlignLeft
              backgroundColor={TitleColors.WhiteBlack}
              title={t("pola.subtitle", { returnObjects: true })[0]}
            />
          </motion.div>
        </SectionContent>

        <SectionContent
          isLight
          isFixed
          alignItems={SectionContentAligns.Right}
          justifyContent={SectionContentJustify.Bottom}
        >
          <motion.div
            initial="step0"
            animate={controls}
            variants={polaSection2TitleVariants}
          >
            <Title
              isAlignLeft
              isSubtitle
              title={t("pola.subtitle", { returnObjects: true })[1]}
            />
          </motion.div>
        </SectionContent>

        <SectionSpacer ref={refStep4} />
        <SectionSpacer ref={refStep5} />

        <Polaroid
          title={t("pola.pola.title")}
          subtitle={t("pola.pola.subtitle")}
          isReversed={step3InView || step4InView || step5InView}
          isInView={step2InView || step3InView || step4InView || step5InView}
        />
      </Section>
    </>
  );
}

export default PolaSection;
