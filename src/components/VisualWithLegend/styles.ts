import { styled } from "@stitches/react";

import { mq } from "../../assets/styles/mediaqueries";
import { brandColorWhite } from "../../assets/styles/colors";

export const StyledVisualWithLegend = styled("div", {
  maxWidth: 130,
  margin: "30px auto",
  position: "relative",
  display: "inline-block",

  [mq[0]]: {
    maxWidth: 280,
  },
});

export const StyledVisualWithLegendList = styled("div", {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  position: "absolute",
});

export const StyledVisualWithLegendListItem = styled("div", {
  display: "flex",
  position: "absolute",
  flexDirection: "row",
  alignItems: "center",

  "&:before": {
    width: "25px",
    height: "1px",
    content: "''",
    display: "block",
    marginRight: "5px",
    backgroundColor: brandColorWhite,

    [mq[0]]: {
      width: "75px",
    },
  },

  "&:after": {
    left: "-20px",
    width: "15px",
    height: "15px",
    content: "''",
    display: "block",
    borderRadius: "50%",
    position: "absolute",
    border: `1px solid ${brandColorWhite}`,
    background:
      "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 35%, rgba(255,255,255,0.4) 36%, rgba(255,255,255,0.4) 37%)",

    [mq[0]]: {
      left: "-15px",
      width: "20px",
      height: "20px",
    },
  },

  variants: {
    isReversed: {
      true: {
        flexDirection: "row-reverse",

        "&:after": {
          left: "auto",
          right: "-15px",
        },
      },
    },
  },
});

export const StyledVisualWithLegendListItemText = styled("span", {
  width: "100px",
  lineHeight: "1.5em",

  [mq[0]]: {
    width: "200px",
  },
});
