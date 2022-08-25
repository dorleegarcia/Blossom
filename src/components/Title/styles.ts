import { styled } from "@stitches/react";

import {
  brandColor,
  brandColorGrey,
  brandColorBlack,
  brandColorBrown,
  brandColorWhite,
} from "../../assets/styles/colors";
import { mq } from "../../assets/styles/mediaqueries";
import { halfMaxLayoutWidth } from "../../assets/styles/global";

import TitleColors from "./types";

const StyledTitle = styled("div", {
  width: "100%",

  [mq[0]]: {
    width: "calc(50vw - 30px)",
    maxWidth: halfMaxLayoutWidth,
  },

  span: {
    fontWeight: 700,
    fontSize: "1.05em",
    whiteSpace: "nowrap",
    padding: "0px 10px 0px",
  },

  variants: {
    isAlignLeft: {
      true: {
        [mq[0]]: {
          textAlign: "left",
        },
      },
    },

    backgroundColor: {
      [TitleColors.WhiteGrey]: {
        span: {
          color: brandColorGrey,
          backgroundColor: brandColorWhite,
        },
      },

      [TitleColors.WhiteBlack]: {
        span: {
          color: brandColorBlack,
          backgroundColor: brandColorWhite,
        },
      },

      [TitleColors.WhiteBrown]: {
        span: {
          color: brandColorBrown,
          backgroundColor: brandColorWhite,
        },
      },

      [TitleColors.Mint]: {
        span: {
          color: brandColorWhite,
          backgroundColor: brandColor,
        },
      },

      [TitleColors.Brown]: {
        span: {
          color: brandColorWhite,
          backgroundColor: brandColorBrown,
        },
      },
    },
  },
});

export default StyledTitle;
