import { styled } from "@stitches/react";

export const StyledVisualSplit = styled("div", {
  bottom: 0,
  width: "100%",
  height: "100%",
  position: "fixed",
});

const visualSplitCommonStyles = {
  height: "100vh",
  maxWidth: "50%",
  position: "absolute",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom right",
};

export const StyledVisualSplitRight = styled("div", {
  ...visualSplitCommonStyles,
  left: 0,
  width: "75vh",
  backgroundSize: "auto 80%",
});

export const StyledVisualSplitLeft = styled("div", {
  ...visualSplitCommonStyles,
  right: 0,
  width: "100%",
  backgroundSize: "auto 90%",
});
