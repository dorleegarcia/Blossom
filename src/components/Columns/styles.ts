import { styled } from "@stitches/react";

import { mq } from "../../assets/styles/mediaqueries";

const StyledColumns = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",

  [mq[0]]: {
    flexDirection: "row",
  },

  variants: {
    isInverted: {
      true: {
        [mq[0]]: {
          flexDirection: "row-reverse",
        },
      },
    },
  },

  "> div, > span ": {
    width: "100%",
    maxWidth: "100%",
    minWidth: "100%",

    [mq[0]]: {
      width: "50%",
      maxWidth: "50%",
      minWidth: "50%",
    },
  },
});

export default StyledColumns;
