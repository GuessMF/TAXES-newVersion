const header = document.querySelector("header");

// Successful Bussines
const successfulWrapper = document.querySelector(
  ".successful-business__wrapper"
);
const successfulWrapperTitle = successfulWrapper.querySelector("h2");
const successfulWrapperUL = successfulWrapper.querySelector("ul");
const successfulBottom = document.querySelector(".successful-business__bottom");
const successfulBottomTitles = successfulBottom.querySelectorAll("h3");
const successfulBottomHR = successfulBottom.querySelector("hr");

gsap.to(successfulWrapperTitle, {
  scale: 1,
  scrollTrigger: {
    trigger: successfulWrapper,
    start: "top 75%",
    end: "top 95%",
    scrub: 2,
  },
});
gsap.to(successfulWrapperUL, {
  y: 0,
  scrollTrigger: {
    trigger: successfulWrapper,
    start: "top 65%",
    end: "top 85%",
    scrub: 2,
  },
});
gsap.to(successfulBottomTitles[0], {
  x: 0,
  scrollTrigger: {
    trigger: successfulWrapper,
    start: "top 55%",
    end: "top 75%",
    scrub: 2,
  },
});

gsap.to(successfulBottomTitles[1], {
  x: 0,
  scrollTrigger: {
    trigger: successfulWrapper,
    start: "top 55%",
    end: "top 75%",
    scrub: 2,
  },
});

gsap.to(successfulBottomHR, {
  y: 0,
  scrollTrigger: {
    trigger: successfulWrapper,
    start: "top 55%",
    end: "top 75%",
    scrub: 2,
  },
});

// Our Services
const ourServices = document.querySelector(".our-services");
const ourServicesTitle = ourServices.querySelector("h2");
const ourServicesSubtitle = ourServices.querySelector("p");
const ourServicesTop = document.querySelector(".services__top");
const serviceBlocksTop = ourServicesTop.querySelectorAll(".service__block");
const ourServicesBottom = document.querySelector(".services__bottom");
const serviceBlocksBottom =
  ourServicesBottom.querySelectorAll(".service__block");

gsap.to(ourServicesTitle, {
  scale: 1,
  scrollTrigger: {
    trigger: ourServices,
    start: "top 75%",
    end: "top 85%",
    scrub: 2,
  },
});

gsap.to(ourServicesSubtitle, {
  y: 0,
  scrollTrigger: {
    trigger: ourServices,
    start: "top 65%",
    end: "top 75%",
    scrub: 2,
  },
});

gsap.to(serviceBlocksTop[1], {
  y: 0,
  scrollTrigger: {
    trigger: ourServicesTop,
    start: "top 65%",
    end: "top 75%",
    scrub: 2,
  },
});

gsap.to(serviceBlocksTop[0], {
  x: 0,
  scrollTrigger: {
    trigger: ourServicesTop,
    start: "top 55%",
    end: "top 75%",
    scrub: 2,
  },
});
gsap.to(serviceBlocksTop[2], {
  x: 0,
  scrollTrigger: {
    trigger: ourServicesTop,
    start: "top 55%",
    end: "top 75%",
    scrub: 2,
  },
});

gsap.to(serviceBlocksBottom[0], {
  scale: 1,
  scrollTrigger: {
    trigger: ourServicesBottom,
    start: "top 65%",
    end: "top 75%",
    scrub: 2,
  },
});
gsap.to(serviceBlocksBottom[1], {
  scale: 1,
  scrollTrigger: {
    trigger: ourServicesBottom,
    start: "top 65%",
    end: "top 75%",
    scrub: 2,
  },
});

// About US
const aboutUs = document.querySelector(".about-us__section");
const numbersBlock = document.querySelector(".about-us__block");

const aboutUsPhoto = document.querySelector(".about-us__photo");

const firstNum = document.querySelector(".first-number h5");
const secondNum = document.querySelector(".second-number h5");
const thirdNum = document.querySelector(".third-number h5");

const counterFirstNumber = () => {
  let count = 0;
  let interval = setInterval(() => {
    firstNum.textContent = ++count;
    if (count >= 19) {
      clearInterval(interval);
    }
  }, 50);
};

const counterSecondNumber = () => {
  let count = 0;
  let interval = setInterval(() => {
    secondNum.textContent = ++count;
    if (count >= 10) {
      clearInterval(interval);
    }
  }, 50);
};
const counterThirdNumber = () => {
  let count = 0;
  let interval = setInterval(() => {
    thirdNum.textContent = ++count;
    if (count >= 99) {
      clearInterval(interval);
    }
  }, 20);
};

//
const startCounters = () => {
  // gsap.to(aboutUsPhoto, {
  //   opacity: 1,
  //   ease: "linear",
  // });
  counterFirstNumber();
  counterSecondNumber();
  counterThirdNumber();
};

const refreshNumbers = () => {
  firstNum.textContent = 0;
  secondNum.textContent = 0;
  thirdNum.textContent = 0;
};

gsap.to(numbersBlock, {
  scrollTrigger: {
    trigger: aboutUs,
    start: "top 100%",
    end: "top 100%",
    scrub: 0.1,
  },
  onComplete: refreshNumbers,
});

gsap.to(numbersBlock, {
  scale: 1,
  scrollTrigger: {
    trigger: aboutUs,
    start: "top 50%",
    end: "top 50%",
    scrub: 1,
  },
  onComplete: startCounters,
});

gsap.to(aboutUsPhoto, {
  opacity: 1,
  scrollTrigger: {
    trigger: aboutUs,
    start: "top 50%",
    end: "top 50%",
    scrub: 2,
  },
});

//   gsap.to(rightIMG, {
//     x: 0,
//     scrollTrigger: {
//       trigger: centerIMG,
//       start: "center bottom",
//       end: "center bottom",
//       scrub: 0.5,
//     },
//   });

// ScrollTrigger.create({
//   trigger: block,
//   start: "top 25%",
//   end: "bottom 75%",
//   onUpdate: (self) => {
//     const progress = self.progress;
//     const bottomHalfHeight = 100 - progress * 100;
//     block.style.clipPath = `inset(0px 0px ${bottomHalfHeight}%)`;
//   },
// });
