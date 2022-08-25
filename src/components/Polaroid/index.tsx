import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  polaroidStyles,
  StyledPolaroidContent,
  StyledPolaroidContentTitle,
} from "./styles";
import polaroidVariants from "./variants";

interface IPolaroidProps {
  title: string;
  subtitle: string;
  isInView: boolean;
  isReversed: boolean;
}

function Polaroid({
  title,
  subtitle,
  isInView = false,
  isReversed = false,
}: IPolaroidProps): React.ReactElement {
  const [animationState, setAnimationState] = useState<string>("hidden");

  useEffect(() => {
    isReversed
      ? setAnimationState("reversed")
      : isInView
      ? setAnimationState("visible")
      : setAnimationState("hidden");
  }, [isInView, isReversed]);

  return (
    <motion.div
      initial="hidden"
      style={polaroidStyles}
      animate={animationState}
      variants={polaroidVariants}
    >
      <StyledPolaroidContent isReversed={isReversed}>
        <StyledPolaroidContentTitle>{title}</StyledPolaroidContentTitle>
        {subtitle}
      </StyledPolaroidContent>
    </motion.div>
  );
}

export default Polaroid;
