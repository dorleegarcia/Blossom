import { styled } from "@stitches/react";

import { mq } from "../../assets/styles/mediaqueries";
import { headerHeight, headerMobileHeight } from "../../assets/styles/global";

const StyledSectionSpacer = styled("div", {
  height: `calc(100vh - ${headerMobileHeight})`,

  [mq[1]]: {
    height: `calc(100vh - ${headerHeight})`,
  },
});

export default StyledSectionSpacer;
