import { styled } from "@stitches/react";

import { brandColorBlack, brandColorWhite } from "../../assets/styles/colors";

export const polaroidStyles = {
  left: 0,
  right: 0,
  bottom: 0,
  width: 200,
  height: 280,
  display: "flex",
  alignItems: "flex-end",
  border: "10px solid white",
  position: "fixed" as const,
};

export const StyledPolaroidContent = styled("div", {
  width: "100%",
  textAlign: "left",
  color: brandColorBlack,
  transitionDelay: "0.5s",
  padding: "10px 10px 0px",
  backgroundColor: brandColorWhite,
  transform: "skew(0deg) rotateY(0deg)",

  variants: {
    isReversed: {
      true: {
        transform: "skew(180deg) rotateY(180deg)",
      },
    },
  },
});

export const StyledPolaroidContentTitle = styled("span", {
  fontWeight: 800,
  display: "block",
  textTransform: "uppercase",
});
