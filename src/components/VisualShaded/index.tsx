import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import StyledVisualShaded from "./styles";
import visualShadedShadowVariants from "./variants";

interface IVisualShadedProps {
  visual: string;
  isInView: boolean;
  shadowVisual: string;
}

function VisualShaded({
  visual,
  isInView,
  shadowVisual,
}: IVisualShadedProps): React.ReactElement {
  const { t } = useTranslation();
  const [animationState, setAnimationState] = useState<string>("visible");

  useEffect(() => {
    isInView ? setAnimationState("hidden") : setAnimationState("visible");
  }, [isInView]);

  return (
    <StyledVisualShaded>
      <img src={visual} alt={t("global.alt.mixer")} />

      <motion.div
        animate={animationState}
        initial="hidden"
        variants={visualShadedShadowVariants}
      >
        <img src={shadowVisual} alt={t("global.alt.mixer")} />
      </motion.div>
    </StyledVisualShaded>
  );
}

export default VisualShaded;
