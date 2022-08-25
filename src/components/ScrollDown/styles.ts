import { styled } from "@stitches/react";

import { mq } from "../../assets/styles/mediaqueries";
import { brandColorWhite } from "../../assets/styles/colors";

import scrollDownKeyframes from "./keyframes";

const StyledScrollDown = styled("div", {
  left: 0,
  right: 0,
  width: 25,
  zIndex: 5,
  height: 35,
  bottom: 20,
  display: "none",
  margin: "0 auto",
  borderRadius: 10,
  position: "fixed",
  alignItems: "center",
  justifyContent: "center",
  border: `2px solid ${brandColorWhite}`,

  [mq[0]]: {
    display: "inline-flex",
  },

  svg: {
    animation: `${scrollDownKeyframes} 0.8s ease-in-out infinite alternate`,
  },
});

export default StyledScrollDown;
