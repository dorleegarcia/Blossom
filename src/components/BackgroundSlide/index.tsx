import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import backgroundSlideVariants from "./variant";
import { StyledBackgroundSlide, StyledBackgroundSlideImg } from "./styles";

interface IBackgroundSlideProps {
  visuals: string[];
  isInView: boolean;
  isSlided: boolean;
}

function BackgroundSlide({
  visuals,
  isInView,
  isSlided,
}: IBackgroundSlideProps): React.ReactElement {
  const { t } = useTranslation();
  const [animationState, setAnimationState] = useState<string>("default");

  useEffect(() => {
    isSlided ? setAnimationState("slided") : setAnimationState("default");
  }, [isSlided]);

  return (
    <StyledBackgroundSlide isInView={isInView}>
      <motion.div animate={animationState} variants={backgroundSlideVariants}>
        <StyledBackgroundSlideImg src={visuals[0]} alt={t("global.alt.bowl")} />
      </motion.div>

      <motion.div animate={animationState} variants={backgroundSlideVariants}>
        <StyledBackgroundSlideImg src={visuals[1]} alt={t("global.alt.bowl")} />
      </motion.div>
    </StyledBackgroundSlide>
  );
}

export default BackgroundSlide;
