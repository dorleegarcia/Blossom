import { styled } from "@stitches/react";

import { mq } from "../../assets/styles/mediaqueries";

const StyledActions = styled("div", {
  paddingTop: 15,
  display: "block",

  [mq[1]]: {
    paddingTop: 30,
  },
});

export default StyledActions;
