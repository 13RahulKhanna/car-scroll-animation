gsap.registerPlugin(ScrollTrigger);

gsap.from(".headline span", {
  opacity: 0,
  y: 40,
  stagger: 0.05,
  duration: 0.8,
  ease: "power3.out"
});

gsap.to(".stat", {
  opacity: 1,
  y: -10,
  stagger: 0.2,
  delay: 0.6
});
gsap.to(".car", {
  y: -260,
  x: 120,
  scale: 1.1,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1.2
  }
});
gsap.to(".car-glow", {
  y: -180,
  x: 60,
  scale: 1.25,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1.5
  }
});
gsap.to(".headline", {
  opacity: 0.4,
  scrollTrigger: {
    trigger: ".hero",
    start: "center center",
    end: "bottom top",
    scrub: true
  }
});
