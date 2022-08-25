import { styled } from "@stitches/react";

import { brandColorBlack } from "../../assets/styles/colors";

export const StyledBackgroundVideo = styled("div", {
  top: "50%",
  left: "50%",
  minWidth: "100%",
  minHeight: "100%",
  position: "absolute",
  transform: "translate(-50%, -50%)",

  "&:after": {
    top: 0,
    left: 0,
    opacity: 0.5,
    content: "''",
    width: "100%",
    height: "100%",
    position: "absolute",
    background: brandColorBlack,
  },
});

export const StyledBackgroundVideoTag = styled("video", {
  top: "50%",
  left: "50%",
  minWidth: "100%",
  minHeight: "100%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
});
