import { styled } from "@stitches/react";

import {
  gradientLight,
  gradientBlossom,
  brandColorWhite,
  defaultTextColor,
} from "../../assets/styles/colors";
import { mq } from "../../assets/styles/mediaqueries";
import { headerFixedHeight } from "../../assets/styles/global";

import { SectionBackgroundGradients, SectionBackgroundImages } from "./types";

const StyledSection = styled("section", {
  zIndex: 10,
  width: "100%",
  display: "flex",
  marginLeft: "auto",
  overflow: "hidden",
  marginRight: "auto",
  position: "relative",
  flexDirection: "column",
  color: defaultTextColor,
  backgroundColor: brandColorWhite,

  variants: {
    isInView: {
      true: {
        pointerEvents: "default",
      },
    },

    isBackgroundFixed: {
      true: {
        [mq[0]]: {
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },

    isFullHeight: {
      true: {
        justifyContent: "center",

        [mq[1]]: {
          minHeight: `calc(100vh - ${headerFixedHeight})`,
        },
      },
    },

    background: {
      [SectionBackgroundGradients.Blossom]: {
        backgroundImage: gradientBlossom,
      },

      [SectionBackgroundGradients.Light]: {
        backgroundImage: gradientLight,
      },

      [SectionBackgroundImages.Blossom]: {
        "&:before, &:after": {
          top: 0,
          content: "''",
          width: "100%",
          height: "100vh",
          position: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        },

        "&:before": {
          backgroundPosition: "center",
          backgroundImage: "url(/images/sections/intro/background.jpg)",
        },

        "&:after": {
          backgroundPosition: "center 15vh",
          backgroundImage: "url(/images/sections/intro/plants-front.png)",

          [mq[0]]: {
            backgroundPosition: "center 20vh",
          },
        },

        [mq[0]]: {
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: "url(/images/sections/intro/background.jpg)",

          "&:before": {
            display: "none",
          },
        },
      },

      [SectionBackgroundImages.Kitchen]: {
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundImage: "url(/images/sections/kitchen/background.jpg)",

        [mq[1]]: {
          backgroundPosition: "30% 65%",
        },

        [mq[2]]: {
          backgroundSize: "auto 150%",
          backgroundPosition: "30% bottom",
        },
      },

      [SectionBackgroundImages.Pola1]: {
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: "url(/images/sections/pola/background1.jpg)",
      },

      [SectionBackgroundImages.Pola2]: {
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: "url(/images/sections/pola/background2.jpg)",
      },

      [SectionBackgroundImages.ThymeDetail]: {
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: "url(/images/sections/thymeDetail/background.jpg)",
      },
    },
  },
});

export default StyledSection;
