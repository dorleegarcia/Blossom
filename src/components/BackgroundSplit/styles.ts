import { styled } from "@stitches/react";

import {
  headerFixedHeight,
  headerMobileHeight,
} from "../../assets/styles/global";
import { mq } from "../../assets/styles/mediaqueries";

const StyledBackgroundSplit = styled("div", {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  position: "absolute",

  variants: {
    isInView: {
      true: {
        top: headerMobileHeight,
        position: "fixed",

        [mq[1]]: {
          top: headerFixedHeight,
        },
      },
    },
  },

  "> div": {
    // Motion div
    top: 0,
    bottom: 0,
    width: "50%",
    height: "100%",
    position: "absolute",
    backgroundSize: "cover",

    "&:first-of-type": {
      left: 0,
      backgroundPosition: "right center",
    },

    "&:last-of-type": {
      right: 0,
      backgroundPosition: "left center",
    },
  },
});

export default StyledBackgroundSplit;
