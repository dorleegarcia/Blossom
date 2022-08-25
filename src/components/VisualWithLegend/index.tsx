import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  StyledVisualWithLegend,
  StyledVisualWithLegendList,
  StyledVisualWithLegendListItem,
  StyledVisualWithLegendListItemText,
} from "./styles";

import visualWithLegendItemVariants from "./variants";

interface IVisualWithLegendProps {
  children: React.ReactNode;
  isInView: boolean;
  legends: {
    text: string;
    isReversed: boolean;
    position: [number, number];
  }[];
}

function VisualWithLegend({
  legends,
  children,
  isInView,
}: IVisualWithLegendProps): React.ReactElement {
  const [animationState, setAnimationState] = useState<string>("hidden");

  useEffect(() => {
    isInView && setAnimationState("visible");
  }, [isInView]);

  return (
    <StyledVisualWithLegend>
      {children}

      <StyledVisualWithLegendList>
        {legends.map(({ text, isReversed, position }, index) => (
          <motion.div
            custom={index}
            animate={animationState}
            variants={visualWithLegendItemVariants}
            key={`visualWithLegendListItem-${index.toString()}`}
          >
            <StyledVisualWithLegendListItem
              isReversed={isReversed}
              style={{ top: `${position[0]}%`, left: `${position[1]}%` }}
            >
              <StyledVisualWithLegendListItemText>
                {text}
              </StyledVisualWithLegendListItemText>
            </StyledVisualWithLegendListItem>
          </motion.div>
        ))}
      </StyledVisualWithLegendList>
    </StyledVisualWithLegend>
  );
}

export default VisualWithLegend;
