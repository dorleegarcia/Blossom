import { TargetAndTransition } from "framer-motion";

const visualWithLegendItemVariants = {
  hidden: { opacity: 0 },
  visible: (transitionDelay: number): TargetAndTransition => ({
    opacity: 1,
    transition: {
      delay: transitionDelay * 1,
    },
  }),
};

export default visualWithLegendItemVariants;
