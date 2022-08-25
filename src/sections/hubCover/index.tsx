import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

import Title from "../../components/Title";
import Section from "../../components/Section";
import ClipPath from "../../components/ClipPath";
import SectionSpacer from "../../components/SectionSpacer";
import SectionContent from "../../components/SectionContent";

import useRefScrollProgress from "../../utils/useRefScrollProgress";

import {
  HubCoverSectionMixerVariants,
  HubCoverSectionTitleVariants,
  HubCoverSectionTitle2Variants,
  HubCoverSectionTitle3Variants,
} from "./variants";

import TitleColors from "../../components/Title/types";
import { SectionBackgroundGradients } from "../../components/Section/types";
import { SectionContentJustify } from "../../components/SectionContent/types";

function HubCoverSection() {
  const { t } = useTranslation();
  const controls = useAnimation();
  const { scrollYProgress } = useViewportScroll();

  const [refSection, sectionInView] = useInView();

  const [refStep1, step1InView] = useInView();
  const [refStep2, step2InView] = useInView();
  const [refStep4, step4InView] = useInView();
  const [refStep5, step5InView] = useInView();
  const [refStep7, step7InView] = useInView();

  const [refStep3, startStep3, endStep3] = useRefScrollProgress();
  const [refStep6, startStep6, endStep6] = useRefScrollProgress();
  const [refStep8, startStep8, endStep8] = useRefScrollProgress();

  const y = useTransform(
    scrollYProgress,
    [startStep3, endStep3],
    ["40%", "1.6%"]
  );
  const scale = useTransform(
    scrollYProgress,
    [startStep3, endStep3],
    ["0.7", "1.5"]
  );
  const clipPath = useTransform(
    scrollYProgress,
    [startStep6, endStep6, startStep8, endStep8],
    [
      "circle(0% at 50% 50%)",
      "circle(14% at 50% 50%)",
      "circle(20% at 50% 50%)",
      "circle(100% at 50% 50%)",
    ]
  );

  useEffect(() => {
    if (!sectionInView) controls.start("step0");
    if (step1InView) controls.start("step1");
    if (step2InView) controls.start("step2");
    if (step4InView) controls.start("step3");
    if (step5InView) controls.start("step4");
    if (step7InView) controls.start("step5");
  }, [
    controls,
    sectionInView,
    step1InView,
    step2InView,
    step4InView,
    step5InView,
    step7InView,
  ]);

  return (
    <Section
      isBackgroundFixed
      ref={refSection}
      isInView={sectionInView}
      background={SectionBackgroundGradients.Blossom}
    >
      <SectionContent isFixed>
        <motion.div
          initial="step0"
          animate={controls}
          variants={HubCoverSectionMixerVariants}
          style={{ left: 0, right: 0 }}
        >
          <motion.div style={{ scale, y }}>
            <img
              alt={t("global.alt.mixer")}
              src="/images/sections/hubCover/hubCover.png"
            />
          </motion.div>
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
          variants={HubCoverSectionTitleVariants}
        >
          <Title
            title={t("hubCover.title")}
            backgroundColor={TitleColors.Mint}
          />
        </motion.div>
      </SectionContent>

      <SectionContent isLight isFixed>
        <motion.div
          initial="step0"
          animate={controls}
          variants={HubCoverSectionTitle2Variants}
        >
          <Title
            isSubtitle
            title={t("hubCover.subtitle", { returnObjects: true })[0]}
          />
        </motion.div>

        <ClipPath
          clipPath={clipPath}
          isInView={sectionInView}
          backgroundImage="/images/sections/bowl/background.jpg"
        />

        <motion.div
          initial="step0"
          animate={controls}
          variants={HubCoverSectionTitle3Variants}
        >
          <Title
            isSubtitle
            backgroundColor={TitleColors.WhiteBrown}
            title={t("hubCover.subtitle", { returnObjects: true })[1]}
          />
        </motion.div>
      </SectionContent>

      <SectionSpacer ref={refStep1} />
      <div ref={refStep3}>
        <SectionSpacer ref={refStep2} />
      </div>
      <SectionSpacer ref={refStep4} />
      <SectionSpacer ref={refStep5} />
      <SectionSpacer ref={refStep6} />
      <SectionSpacer />
      <SectionSpacer ref={refStep7} />
      <SectionSpacer ref={refStep8} />
      <SectionSpacer />
    </Section>
  );
}

export default HubCoverSection;
