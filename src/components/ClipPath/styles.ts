import { styled } from "@stitches/react";

import {
  headerFixedHeight,
  headerMobileHeight,
} from "../../assets/styles/global";
import { mq } from "../../assets/styles/mediaqueries";

const StyledClipPath = styled("div", {
  opacity: 0,

  variants: {
    isInView: {
      true: {
        opacity: 1,
      },
    },
  },

  "> div": {
    // Motion div
    bottom: 0,
    width: "100%",
    position: "fixed",
    overflow: "hidden",
    left: "0 !important",
    top: headerMobileHeight,
    backgroundSize: "cover",
    backgroundPosition: "center",

    [mq[1]]: {
      top: headerFixedHeight,
    },
  },
});

export default StyledClipPath;
