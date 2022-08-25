import { styled } from "@stitches/react";

import { mq } from "../../assets/styles/mediaqueries";
import { brandColorWhite, brandColorBlack } from "../../assets/styles/colors";

export const StyledRecipe = styled("div", {
  width: "auto",
  borderRadius: 20,
  overflow: "hidden",
  position: "relative",
  transform: "scale(0.75)",
  transition: "0.7s cubic-bezier(0.785, 0.135, 0.15, 0.86)",

  ".swiper-slide-active &": {
    transform: "scale(1)",
  },
});

export const StyledRecipeBackground = styled("div", {
  width: "100%",
  display: "block",
  position: "relative",

  "&:after": {
    top: 0,
    left: 0,
    content: "''",
    opacity: 0.45,
    width: "100%",
    height: "100%",
    display: "block",
    position: "absolute",
    background: brandColorBlack,
  },
});

export const StyledRecipeBackgroundImg = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const StyledRecipeContent = styled("div", {
  left: 30,
  right: 30,
  top: "50%",
  textAlign: "center",
  position: "absolute",
  color: brandColorWhite,
  width: "calc(100% - 60px)",
  transform: "translateY(-50%)",

  [mq[1]]: {
    left: 50,
    right: 50,
    width: "calc(100% - 100px)",
  },
});

export const StyledRecipeContentText = styled("p", {
  display: "none",

  ".swiper-slide-active &": {
    display: "block",
  },

  "+ a": {
    display: "none",

    ".swiper-slide-active &": {
      display: "block",
    },
  },
});
