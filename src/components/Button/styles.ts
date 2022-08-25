import { styled } from "@stitches/react";

import {
  brandColor,
  brandColorWhite,
  brandColorBrown,
} from "../../assets/styles/colors";

const StyledButton = styled("a", {
  marginTop: 15,
  fontWeight: 900,
  borderRadius: 30,
  color: brandColor,
  fontSize: "0.9em",
  whiteSpace: "nowrap",
  padding: "15px 30px",
  textDecoration: "none",
  display: "inline-block",
  textTransform: "uppercase",
  backgroundColor: brandColorWhite,
  transition: "0.7s cubic-bezier(0.785, 0.135, 0.15, 0.86)",

  "&:hover": {
    transform: "scale(1.1)",
  },

  variants: {
    isSecondary: {
      true: {
        color: brandColorWhite,
        backgroundColor: brandColorBrown,
      },
    },
  },
});

export default StyledButton;
