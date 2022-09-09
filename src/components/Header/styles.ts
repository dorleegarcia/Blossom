import { styled } from "@stitches/react";

import { mq } from "../../assets/styles/mediaqueries";
import { brandColorWhite } from "../../assets/styles/colors";
import { headerHeight, headerMobileHeight } from "../../assets/styles/global";

const StyledHeader = styled("header", {
  top: 0,
  left: 0,
  zIndex: 1000,
  width: "100%",
  position: "fixed",
  height: 0,
  transform: "translateY(0rem)",
  paddingTop: 0,
  backgroundColor: brandColorWhite,
  transition: "transform .4s ease-in-out",

  [mq[1]]: {
    height: 0,
    paddingTop: 0,
  },

  variants: {
    isSticky: {
      true: {
        [mq[1]]: {
          paddingTop: `calc(${headerHeight} -3.1875rem)`,
          transform: "translateY(-3.1875rem)",
        },
      },
    },
  },
});

export default StyledHeader;
