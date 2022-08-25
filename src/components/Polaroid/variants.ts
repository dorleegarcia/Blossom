const polaroidVariants = {
  hidden: {
    opacity: 0,
    scale: 5,
    left: "60%",
    top: "50%",
    y: "-50%",
    rotateY: 0,
    skew: 0,
  },

  visible: {
    opacity: 1,
    scale: 1,
    left: "60%",
    top: "50%",
    y: "-50%",
    rotateY: 0,
    skew: 0,
    transition: { duration: 0.8 },
  },

  reversed: {
    opacity: 1,
    scale: 1,
    left: "10%",
    top: "50%",
    y: "-50%",
    rotateY: 180,
    skew: 180,
    transition: { duration: 1.2 },
  },
};

export default polaroidVariants;
