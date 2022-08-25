import { motion, useTransform, useViewportScroll } from "framer-motion";

import StyledBackgroundSplit from "./styles";

import useRefScrollProgress from "../../utils/useRefScrollProgress";

interface IBackgroundSplitProps {
  visuals: string[];
  isInView: boolean;
}

function BackgroundSplit({
  visuals,
  isInView,
}: IBackgroundSplitProps): React.ReactElement {
  const { scrollYProgress } = useViewportScroll();
  const [ref, start, end] = useRefScrollProgress();

  const delay = (end - start) / 8;

  const translateLeft = useTransform(
    scrollYProgress,
    [start + delay, end],
    ["0vw", "-100vw"]
  );
  const translateRight = useTransform(
    scrollYProgress,
    [start + delay, end],
    ["0vw", "100vw"]
  );

  return (
    <StyledBackgroundSplit ref={ref} isInView={isInView}>
      <motion.div
        style={{ x: translateLeft, backgroundImage: `url(${visuals[0]})` }}
      />
      <motion.div
        style={{ x: translateRight, backgroundImage: `url(${visuals[1]})` }}
      />
    </StyledBackgroundSplit>
  );
}

export default BackgroundSplit;
