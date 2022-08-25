import { styled } from "@stitches/react";

import { mq } from "../../assets/styles/mediaqueries";
import { brandColorGrey, brandColorWhite } from "../../assets/styles/colors";

import { BlossomTextSizes, BlossomTextColors } from "./types";

export const StyledBlossomText = styled("div", {
  maxWidth: "80vw",
  margin: "10px auto",

  variants: {
    size: {
      [BlossomTextSizes.Small]: {
        width: 300,

        [mq[0]]: {
          width: 330,
        },
      },

      [BlossomTextSizes.Medium]: {
        width: 400,

        [mq[0]]: {
          width: 450,
        },

        [mq[1]]: {
          width: 550,
        },
      },
    },
  },
});

export const StyledBlossomTextSVG = styled("svg", {
  width: "100%",
  height: "auto",

  variants: {
    color: {
      [BlossomTextColors.White]: {
        fill: brandColorWhite,
      },

      [BlossomTextColors.Grey]: {
        fill: brandColorGrey,
      },
    },
  },
});
