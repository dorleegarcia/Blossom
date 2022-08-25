import { styled } from "@stitches/react";
import { brandColorWhite, brandColor } from "../../assets/styles/colors";

import spinKeyframes from "./keyframes";

export const StyledLoading = styled("div", {
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute" as const,
  backgroundColor: brandColor,
});

export const StyledLoadingSpin = styled("div", {
  width: 40,
  height: 40,
  borderRadius: "50%",
  border: `6px solid ${brandColorWhite}`,
  animation: `${spinKeyframes} 1s linear infinite`,
  borderTop: `6px solid ${brandColor}`,
});
