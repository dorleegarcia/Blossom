export const kitchenSectionMixerVariants = {
  step0: {
    opacity: 0,
    top: "60%",
    x: "-00%",
    scale: 1.8,
    width: 400,
    transition: { duration: 0 },
  },

  step1: {
    opacity: 1,
    top: "60%",
    x: "-00%",
    scale: 1.8,
    width: 400,
    transition: { duration: 0 },
  },

  step2: {
    opacity: 1,
    top: "30%",
    x: "-75%",
    scale: 1.0,
    width: 400,
    transition: { duration: 0.8 },
  },
};

export const kitchenSectionTitleVariants = {
  step0: { opacity: 0, y: "20px" },
  step1: { opacity: 0, y: "20px" },
  step2: { opacity: 1, y: "00px", transition: { duration: 0.4, delay: 0.6 } },
};
