import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  StyledVisualSplit,
  StyledVisualSplitRight,
  StyledVisualSplitLeft,
} from "./styles";
import { visualSplitLeftVariants, visualSplitRightVariants } from "./variants";

interface IVisualSplitProps {
  isInView: boolean;
  visualRight: string;
  visualLeft: string;
}

function VisualSplit({
  isInView,
  visualRight,
  visualLeft,
}: IVisualSplitProps): React.ReactElement {
  const [animationState, setAnimationState] = useState<string>("hidden");

  useEffect(() => {
    isInView ? setAnimationState("visible") : setAnimationState("hidden");
  }, [isInView]);

  return (
    <StyledVisualSplit>
      <motion.div
        initial="hidden"
        animate={animationState}
        variants={visualSplitLeftVariants}
      >
        <StyledVisualSplitRight
          style={{ backgroundImage: `url(${visualRight})` }}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate={animationState}
        variants={visualSplitRightVariants}
      >
        <StyledVisualSplitLeft
          style={{ backgroundImage: `url(${visualLeft})` }}
        />
      </motion.div>
    </StyledVisualSplit>
  );
}

export default VisualSplit;
