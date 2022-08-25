import { styled } from "@stitches/react";

export const StyledBackgroundSlide = styled("div", {
  top: 0,
  right: 0,
  bottom: 0,
  opacity: 0,
  width: "200vw",
  maxHeight: "100vh",
  position: "absolute",

  variants: {
    isInView: {
      true: {
        opacity: 1,
        position: "fixed",
      },
    },
  },

  "> div": {
    // Motion div
    top: 0,
    bottom: 0,
    width: "100vw",
    position: "absolute",

    "&:first-of-type": {
      left: 0,
    },

    "&:last-of-type": {
      right: 0,
    },
  },
});

export const StyledBackgroundSlideImg = styled("img", {
  width: "100vw",
  height: "100vh",
  maxWidth: "none",
  objectFit: "cover",
});
