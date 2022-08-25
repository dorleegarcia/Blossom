import { styled } from "@stitches/react";

import { mq } from "../../assets/styles/mediaqueries";
import { brandColorGrey } from "../../assets/styles/colors";

const StyledFooter = styled("footer", {
  minHeight: 300,
  backgroundColor: brandColorGrey,

  [mq[1]]: {
    minHeight: 600,
  },
});

export default StyledFooter;
