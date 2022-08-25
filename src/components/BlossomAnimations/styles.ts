import { styled } from "@stitches/react";

import {
  headerFixedHeight,
  headerMobileHeight,
} from "../../assets/styles/global";
import { mq } from "../../assets/styles/mediaqueries";

import {
  blossomAnimationsLeft1Keyframes,
  blossomAnimationsRight1tKeyframes,
  blossomAnimationsLeft2Keyframes,
  blossomAnimationsRight2tKeyframes,
} from "./keyframes";
import BlossomAnimationsHideStates from "./types";

export const StyledBlossomAnimations = styled("div", {
  top: 0,
  bottom: 0,
  zIndex: 5,
  width: "100%",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",

  variants: {
    isFixed: {
      true: {
        position: "fixed",
        top: headerMobileHeight,

        [mq[1]]: {
          top: headerFixedHeight,
        },
      },
    },

    isSmall: {
      true: {
        transform: "scale(0.75)",
      },
    },
  },
});

const blossomAnimationsCommonStyles = {
  left: 0,
  right: 0,
  opacity: 1,
  width: "100%",
  height: "15vh",
  position: "absolute",
  transition: "all 0.7s ease",

  mq0: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "40%",
    height: "100%",
  },
};

export const StyledBlossomAnimationsLeft = styled("div", {
  ...blossomAnimationsCommonStyles,
  top: "5vh",

  [mq[0]]: {
    ...blossomAnimationsCommonStyles.mq0,
    right: "auto",
  },

  variants: {
    isHide: {
      [BlossomAnimationsHideStates.Hide0]: {
        transform: "rotate(90deg) translate(0%, 0%)",

        [mq[0]]: {
          transform: "translate(0%, 0%)",
        },
      },

      [BlossomAnimationsHideStates.Hide25]: {
        transform: "rotate(75deg) translate(-25%, 0%)",

        [mq[0]]: {
          transform: "translate(-25%, 0%)",
        },
      },

      [BlossomAnimationsHideStates.Hide50]: {
        transform: "rotate(75deg) translate(-50%, 0%)",

        [mq[0]]: {
          transform: "translate(-50%, 0%)",
        },
      },

      [BlossomAnimationsHideStates.Hide75]: {
        transform: "rotate(75deg) translate(-75%, 0%)",

        [mq[0]]: {
          transform: "translate(-75%, 0px)",
        },
      },

      [BlossomAnimationsHideStates.Hide100]: {
        top: "-50%",

        [mq[0]]: {
          left: "-50%",
        },
      },
    },
  },
});

export const StyledBlossomAnimationsRight = styled("div", {
  ...blossomAnimationsCommonStyles,
  bottom: "10vh",

  [mq[0]]: {
    ...blossomAnimationsCommonStyles.mq0,
    left: "auto",
  },

  variants: {
    isHide: {
      [BlossomAnimationsHideStates.Hide0]: {
        transform: "rotate(90deg) translate(0%, 0%)",

        [mq[0]]: {
          transform: "translate(0%, 0%)",
        },
      },

      [BlossomAnimationsHideStates.Hide25]: {
        transform: "rotate(45deg) translate(25%, 0%)",

        [mq[0]]: {
          transform: "translate(25%, 0%)",
        },
      },

      [BlossomAnimationsHideStates.Hide50]: {
        transform: "rotate(45deg) translate(50%, 0%)",

        [mq[0]]: {
          transform: "translate(50%, 0%)",
        },
      },

      [BlossomAnimationsHideStates.Hide75]: {
        transform: "rotate(45deg) translate(75%, 0%)",

        [mq[0]]: {
          transform: "translate(75%, 0%)",
        },
      },

      [BlossomAnimationsHideStates.Hide100]: {
        bottom: "-50%",

        [mq[0]]: {
          right: "-50%",
        },
      },
    },
  },
});

const blossomAnimationsImageStyles = {
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  position: "absolute",
  animationDirection: "alternate",
  animation: "6s infinite ease-in-out",
};

export const StyledBlossomAnimationsImageLeft1 = styled("div", {
  ...blossomAnimationsImageStyles,
  animationName: `${blossomAnimationsLeft1Keyframes}`,
});

export const StyledBlossomAnimationsImageLeft2 = styled("div", {
  ...blossomAnimationsImageStyles,
  animationTime: "10s",
  animationName: `${blossomAnimationsLeft2Keyframes}`,
});

export const StyledBlossomAnimationsImageRight1 = styled("div", {
  ...blossomAnimationsImageStyles,
  animationDelay: "1s",
  animationName: `${blossomAnimationsRight1tKeyframes}`,
});

export const StyledBlossomAnimationsImageRight2 = styled("div", {
  ...blossomAnimationsImageStyles,
  animationTime: "8s",
  animationDelay: "1s",
  animationName: `${blossomAnimationsRight2tKeyframes}`,
});
