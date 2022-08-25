import { styled } from "@stitches/react";

import { mq } from "../../assets/styles/mediaqueries";

const StyledContent = styled("div", {
  variants: {
    isCenter: {
      true: {
        textAlign: "center",
      },
    },

    isPaddingLarge: {
      true: {
        padding: 30,

        [mq[0]]: {
          padding: 50,
        },

        [mq[1]]: {
          padding: 100,
        },
      },
    },
  },
});

export default StyledContent;
