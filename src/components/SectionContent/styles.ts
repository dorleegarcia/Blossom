import { styled } from "@stitches/react";

import {
  brandColorBlack,
  brandColorWhite,
  defaultTextColor,
} from "../../assets/styles/colors";
import {
  headerFixedHeight,
  headerMobileHeight,
  maxLayoutWidth,
} from "../../assets/styles/global";
import { mq } from "../../assets/styles/mediaqueries";

import { SectionContentAligns, SectionContentJustify } from "./types";

const StyledSectionContent = styled("div", {
  width: "100%",
  display: "flex",
  marginLeft: "auto",
  textAlign: "center",
  marginRight: "auto",
  padding: "30px 15px",
  flexDirection: "column",
  color: defaultTextColor,
  maxWidth: maxLayoutWidth,
  backgroundColor: "transparent",

  [mq[0]]: {
    paddingLeft: 30,
    paddingRight: 30,
  },

  [mq[1]]: {
    paddingTop: 80,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 80,
  },

  [mq[2]]: {
    paddingTop: 120,
    paddingBottom: 120,
  },

  variants: {
    isInView: {
      true: {
        zIndex: 20,
      },
    },

    isDarker: {
      true: {
        color: brandColorBlack,
      },
    },

    isLight: {
      true: {
        color: brandColorWhite,
      },
    },

    isFixed: {
      true: {
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        position: "fixed",
        top: headerMobileHeight,
        height: `calc(100vh - ${headerMobileHeight})`,

        [mq[1]]: {
          margin: "auto",
          top: headerFixedHeight,
          height: `calc(100vh - ${headerFixedHeight})`,
        },

        "> div": {
          position: "absolute",
          maxWidth: "calc(100% - 30px)",

          [mq[0]]: {
            maxWidth: "100%",
          },
        },
      },
    },

    alignItems: {
      [SectionContentAligns.Center]: {
        alignItems: "center",
      },
      [SectionContentAligns.Left]: {
        alignItems: "flex-start",
      },
      [SectionContentAligns.Right]: {
        alignItems: "flex-end",
      },
    },

    justifyContent: {
      [SectionContentJustify.Center]: {
        justifyContent: "center",
      },
      [SectionContentJustify.Top]: {
        justifyContent: "flex-start",
      },
      [SectionContentJustify.Bottom]: {
        justifyContent: "flex-end",
      },
    },
  },
});

export default StyledSectionContent;
