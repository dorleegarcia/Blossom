import { styled } from "@stitches/react";

import { mq } from "../../assets/styles/mediaqueries";
import { brandColorGrey } from "../../assets/styles/colors";

const StyledSwiperRecipes = styled("div", {
  width: "80%",
  paddingBottom: 60,
  overflow: "visible",
  position: "relative",

  [mq[0]]: {
    width: "100%",
    paddingTop: 60,
    overflow: "hidden",
  },

  "&:before": {
    top: 0,
    right: 0,
    width: 160,
    height: "100%",
    content: "''",
    display: "block",
    position: "absolute",
    background: "url(/images/sections/recipes/plants.png) no-repeat top center",
    backgroundSize: "100% auto",
  },

  ".swiper": {
    overflow: "visible",
  },

  ".swiper-slide": {
    width: "100%",
    position: "relative",

    [mq[0]]: {
      width: "33%",
    },
  },

  ".swiper-pagination": {
    bottom: -60,

    ".swiper-pagination-bullet": {
      width: 12,
      height: 12,
      opacity: 1,
      background: "transparent",
      border: `1px solid ${brandColorGrey}`,

      "&.swiper-pagination-bullet-active": {
        background: brandColorGrey,
      },
    },
  },
});

export default StyledSwiperRecipes;
