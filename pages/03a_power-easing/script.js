gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 5,
  borderRadius: "50%",
  ease: "power4.inOut",
  onComplete: () => {
    gsap.to(".card", {});
  },
});
