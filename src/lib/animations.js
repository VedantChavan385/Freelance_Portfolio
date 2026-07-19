export const EASING = {
  smooth: [0.16, 1, 0.3, 1],
  card: [0.22, 1, 0.36, 1],
};

export const TRANSITIONS = {
  default: { duration: 0.8, ease: EASING.smooth },
  card: { duration: 0.8, ease: EASING.card },
};

export const VARIANTS = {
  fadeUp: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: EASING.smooth,
      },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: EASING.smooth,
      },
    },
  },
  cardEntrance: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: EASING.card,
      },
    },
  },
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  },
};
