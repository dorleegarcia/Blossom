import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  visualWithBlossomLeftVariants,
  visualWithBlossomRightVariants,
} from "./variants";
import StyledIVisualWithBlossom from "./styles";

interface IVisualWithBlossomProps {
  isInView: boolean;
  visualLeft: string;
  visualRight: string;
  children: React.ReactNode;
}

function VisualWithBlossom({
  children,
  isInView,
  visualLeft,
  visualRight,
}: IVisualWithBlossomProps): React.ReactElement {
  const { t } = useTranslation();
  const [animationState, setAnimationState] = useState<string>("hidden");

  useEffect(() => {
    isInView ? setAnimationState("visible") : setAnimationState("hidden");
  }, [isInView]);

  return (
    <StyledIVisualWithBlossom>
      <motion.div
        animate={animationState}
        variants={visualWithBlossomLeftVariants}
      >
        <img src={visualLeft} alt={t("global.alt.plants")} />
      </motion.div>

      <motion.div
        animate={animationState}
        variants={visualWithBlossomRightVariants}
      >
        <img src={visualRight} alt={t("global.alt.plants")} />
      </motion.div>

      {children}
    </StyledIVisualWithBlossom>
  );
}

export default VisualWithBlossom;
