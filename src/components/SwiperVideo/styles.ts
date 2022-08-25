import { styled } from "@stitches/react";

import { mq } from "../../assets/styles/mediaqueries";
import { brandColorWhite } from "../../assets/styles/colors";

export const StyledSwiperVideo = styled("div", {
  width: "100%",
  paddingBottom: 20,
  paddingTop: "25vh",

  [mq[1]]: {
    paddingTop: "45vh",
  },

  ".swiper": {
    overflow: "visible",
  },

  ".swiper-pagination": {
    bottom: -30,

    [mq[0]]: {
      display: "none",
    },

    ".swiper-pagination-bullet": {
      width: 12,
      height: 12,
      opacity: 1,
      background: "transparent",
      border: `1px solid ${brandColorWhite}`,

      "&.swiper-pagination-bullet-active": {
        background: brandColorWhite,
      },
    },
  },
});

export const StyledSwiperVideoIcon = styled("div", {
  display: "block",
  paddingBottom: 20,
});
