// components/animations/variants.js
// 🔥 Animations Framer Motion avec noms unifiés et sûrs

export const animFadeInUp = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export const animFadeInDown = {
  hidden: { y: -40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export const animFadeInLeft = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export const animFadeInRight = {
  hidden: { x: 100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export const animZoomIn = {
  hidden: { scale: 0.9, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export const animZoomOut = {
  hidden: { scale: 1.1, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export const animRotateIn = {
  hidden: { rotate: -15, opacity: 0 },
  show: {
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export const animSlideInLeft = {
  hidden: { x: -120, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

export const animSlideInRight = {
  hidden: { x: 120, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

export const animSlideInUp = {
  hidden: { y: 80, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

export const animSlideInDown = {
  hidden: { y: -80, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

export const animPopIn = {
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
}

export const animRotateScale = {
  hidden: { scale: 0.8, rotate: -10, opacity: 0 },
  show: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export const animStaggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

export const animHoverLift = {
  whileHover: {
    y: -6,
    scale: 1.03,
    transition: { type: "spring", stiffness: 200, damping: 10 },
  },
}

export const animFadeOut = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
}

export const animInfiniteSlide = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 25,
      ease: "linear",
    },
  },
}
