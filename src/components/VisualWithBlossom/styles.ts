import { styled } from "@stitches/react";

import { mq } from "../../assets/styles/mediaqueries";

const StyledIVisualWithBlossom = styled("div", {
  padding: "0 60px",
  maxWidth: "550px",
  position: "relative",

  [mq[0]]: {
    marginTop: -75,
    padding: "0 140px",
  },

  "> div:nth-of-type(1), > div:nth-of-type(2)": {
    // Motion div
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },

  "> div:nth-of-type(3)": {
    zIndex: 5,
    position: "relative",
  },
});

export default StyledIVisualWithBlossom;
