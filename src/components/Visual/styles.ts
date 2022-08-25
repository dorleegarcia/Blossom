import { styled } from "@stitches/react";

import { mq } from "../../assets/styles/mediaqueries";

export const StyledVisual = styled("div", {
  minHeight: 250,
  alignSelf: "stretch",
  position: "relative",

  [mq[0]]: {
    minHeight: 0,
  },
});

export const StyledVisualImg = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
