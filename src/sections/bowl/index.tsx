import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Title from "../../components/Title";
import Section from "../../components/Section";
import VisualSplit from "../../components/VisualSplit";
import SectionSpacer from "../../components/SectionSpacer";
import SectionContent from "../../components/SectionContent";
import BackgroundSplit from "../../components/BackgroundSplit";

import {
  bowlSectionTitle1Variants,
  bowlSectionTitle2Variants,
  bowlSectionTitle3Variants,
} from "./variants";

import TitleColors from "../../components/Title/types";
import { SectionBackgroundGradients } from "../../components/Section/types";
import { SectionContentAligns } from "../../components/SectionContent/types";

function BowlSection() {
  const { t } = useTranslation();
  const controls = useAnimation();

  const [refSection, sectionInView] = useInView();
  const [refStep1, step1InView] = useInView();
  const [refStep2, step2InView] = useInView();
  const [refStep3, step3InView] = useInView();
  const [refStep4, step4InView] = useInView();

  useEffect(() => {
    if (!sectionInView) controls.start("step0");
    if (step1InView) controls.start("step1");
    if (step2InView) controls.start("step2");
    if (step3InView) controls.start("step3");
    if (step4InView) controls.start("step4");
  }, [
    controls,
    sectionInView,
    step1InView,
    step2InView,
    step3InView,
    step4InView,
  ]);

  return (
    <Section
      ref={refSection}
      isBackgroundFixed
      isInView={sectionInView}
      background={SectionBackgroundGradients.Light}
    >
      <VisualSplit
        isInView={step3InView || step4InView}
        visualRight="/images/sections/bowl/bowl.png"
        visualLeft="/images/sections/bowl/plants.png"
      />

      <SectionContent isLight isFixed isInView={sectionInView}>
        <motion.div
          initial="step0"
          animate={controls}
          variants={bowlSectionTitle1Variants}
        >
          <Title
            backgroundColor={TitleColors.WhiteBrown}
            title={t("bowl.title", { returnObjects: true })[0]}
          />
        </motion.div>
      </SectionContent>

      <SectionContent isFixed alignItems={SectionContentAligns.Right}>
        <motion.div
          initial="step0"
          animate={controls}
          variants={bowlSectionTitle2Variants}
        >
          <Title
            isAlignLeft
            backgroundColor={TitleColors.Brown}
            title={t("bowl.title", { returnObjects: true })[1]}
          />
        </motion.div>

        <motion.div
          initial="step0"
          animate={controls}
          variants={bowlSectionTitle3Variants}
        >
          <Title
            isSubtitle
            isAlignLeft
            backgroundColor={TitleColors.Brown}
            title={t("bowl.subtitle", { returnObjects: true })[0]}
          />
        </motion.div>
      </SectionContent>

      <BackgroundSplit
        isInView={step1InView || step2InView || step3InView}
        visuals={[
          "/images/sections/bowl/zoomedBowl/bowl-left.jpg",
          "/images/sections/bowl/zoomedBowl/bowl-right.jpg",
        ]}
      />

      <SectionSpacer ref={refStep1} />
      <SectionSpacer ref={refStep2} />
      <SectionSpacer />
      <SectionSpacer ref={refStep3} />
      <SectionSpacer />
      <SectionSpacer ref={refStep4} />
    </Section>
  );
}

export default BowlSection;
