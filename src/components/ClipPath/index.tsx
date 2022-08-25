import { motion, MotionValue } from "framer-motion";

import StyledClipPath from "./styles";

interface IClipPathProps {
  isInView: boolean;
  backgroundImage: string;
  clipPath: MotionValue<string>;
}

function ClipPath({
  clipPath,
  isInView,
  backgroundImage,
}: IClipPathProps): React.ReactElement {
  return (
    <StyledClipPath isInView={isInView}>
      <motion.div
        style={{ clipPath, backgroundImage: `url(${backgroundImage})` }}
      />
    </StyledClipPath>
  );
}

export default ClipPath;
