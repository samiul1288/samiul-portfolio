import { gsap } from "./gsapSetup";

export function revealOnScroll(target, opts = {}) {
  const {
    y = 24,
    duration = 0.9,
    start = "top 85%",
    ease = "power3.out",
  } = opts;

  gsap.fromTo(
    target,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      ease,
      scrollTrigger: {
        trigger: target,
        start,
      },
    }
  );
}
