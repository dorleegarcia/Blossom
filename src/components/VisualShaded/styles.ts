import { styled } from "@stitches/react";

const StyledVisualShaded = styled("div", {
  maxWidth: 400,
  display: "block",
  position: "relative",

  "> div": {
    // Motion div
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
  },
});

export default StyledVisualShaded;
