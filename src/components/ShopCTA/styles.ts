import { styled } from "@stitches/react";

import { mq } from "../../assets/styles/mediaqueries";
import { brandColorBrown, brandColorWhite } from "../../assets/styles/colors";

export const StyledShopCTA = styled("a", {
  right: -30,
  zIndex: 15,
  bottom: "10vh",
  fontWeight: 600,
  fontSize: "1.4em",
  position: "fixed",
  textDecoration: "none",
  color: brandColorWhite,
  textTransform: "uppercase",
  padding: "6px 40px 5px 30px",
  backgroundColor: brandColorBrown,
  transition: "0.7s cubic-bezier(0.785, 0.135, 0.15, 0.86)",

  [mq[0]]: {
    right: -10,
    top: "30vh",
    bottom: "auto",
    padding: "12px 35px 10px 35px",
  },

  "&:hover": {
    transform: "translate(-10px, 0px)",
  },
});

export const StyledShopCTAImage = styled("div", {
  width: 50,
  bottom: -5,
  height: 50,
  position: "absolute",
  right: "calc(100% - 30px)",

  [mq[0]]: {
    width: 100,
    height: 100,
    bottom: -10,
  },
});
