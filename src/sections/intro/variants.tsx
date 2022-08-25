export const introSectionBlossomVariants = {
  step0: { opacity: 1, top: "50%", y: "-50%" },
  step1: { opacity: 1, top: "50%", y: "-50%" },
  step2: { opacity: 1, top: "10%", y: "-00%", transition: { duration: 0.8 } },
  step3: { opacity: 0, top: "10%", y: "-00%", transition: { duration: 0.4 } },
};

export const introSectionMixerVariants = (
  isMobile: boolean,
  isStatic: boolean
) => ({
  step0: {
    opacity: isMobile || isStatic ? 1 : 0,
    top: "50%",
    y: "-50%",
    scale: isMobile || isStatic ? 0.8 : 1.0,
  },
  step1: {
    opacity: isMobile || isStatic ? 0 : 1,
    top: "50%",
    y: "-50%",
    scale: isMobile || isStatic ? 1.0 : 1.0,
  },
  step2: {
    opacity: 1,
    top: "60%",
    y: "-50%",
    scale: isMobile ? 0.8 : 0.7,
    transition: { duration: 0.8 },
  },
  step3: {
    opacity: 1,
    top: "60%",
    y: "-00%",
    scale: isMobile ? 1.1 : 1.8,
    transition: { duration: 0.4 },
  },
});

export const introSectionTextVariants = {
  step0: { opacity: 0, top: "85%" },
  step1: { opacity: 0, top: "85%" },
  step2: { opacity: 1, top: "85%", transition: { duration: 0.8 } },
  step3: { opacity: 0, top: "85%", transition: { duration: 0.4 } },
};

export const introSectionTitleVariants = {
  step0: { opacity: 0, y: "20px" },
  step1: { opacity: 0, y: "20px" },
  step2: { opacity: 0, y: "20px" },
  step3: { opacity: 1, y: "00px", transition: { duration: 0.4, delay: 0.6 } },
};
