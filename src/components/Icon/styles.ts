import { styled } from "@stitches/react";

import { defaultIconColor } from "../../assets/styles/colors";

export const StyledIcon = styled("svg", {
  margin: "0 auto",
  display: "inline-block",
  verticalAlign: "middle",
});

export const StyledIconPath = styled("path", {
  fill: defaultIconColor,
});
