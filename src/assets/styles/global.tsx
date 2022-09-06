import { globalCss } from "@stitches/react";

import defaultFont from "./fonts";
import { mq } from "./mediaqueries";
import { defaultTextColor } from "./colors";

export const maxLayoutWidth = "68rem";
export const halfMaxLayoutWidth = "34rem";

export const headerHeight = "7.5rem";
export const headerFixedHeight = "4.3125rem";
export const headerMobileHeight = "3.75rem";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: "1.6em",
    color: defaultTextColor,
    fontFamily: defaultFont,

    [mq[1]]: {
      fontSize: 16,
      overflowY: "overlay", // To fix Pola section on Edge
    },

    [mq[2]]: {
      fontSize: 18,
    },
  },

  "#root": {
    paddingTop: 0,

    [mq[1]]: {
      paddingTop: 0,
    },
  },

  h1: {
    fontSize: 40,
    fontWeight: 300,
    marginBottom: 20,
    maxWidth: "100%",
    lineHeight: "1em",

    [mq[1]]: {
      fontSize: 60,
      marginBottom: 30,
    },

    [mq[2]]: {
      fontSize: 70,
    },
  },

  h2: {
    fontSize: 30,
    fontWeight: 400,
    marginBottom: 20,
    lineHeight: "1.6em",

    [mq[1]]: {
      fontSize: 40,
      maxWidth: 600,
      marginBottom: 30,
    },

    [mq[2]]: {
      fontSize: 50,
    },
  },

  h3: {
    fontSize: 25,
    fontWeight: 400,
    marginBottom: 20,
    lineHeight: "1.6em",

    [mq[1]]: {
      fontSize: 30,
      marginBottom: 30,
    },

    [mq[2]]: {
      fontSize: 35,
    },
  },

  h4: {
    fontSize: 18,
    fontWeight: 800,
    marginBottom: 15,

    [mq[1]]: {
      fontSize: 20,
      maxWidth: 600,
    },

    [mq[2]]: {
      fontSize: 30,
    },
  },

  img: {
    maxWidth: "100%",
    display: "block",
  },

  p: {
    paddingBottom: 15,
  },

  ".mixer-blossom": {
    "~ footer": {
      zIndex: 10,
      position: "relative",
    },
  },
});

export default globalStyles;
