let currentSlide = 1;

const slider = document.querySelector(".slider");
const colors = ["#103156", "#154286"];
const firstSlide = document.querySelector(".first-slide");
const secondSlide = document.querySelector(".second-slide");

const title1 = firstSlide.querySelector("h1");
const subtitle1 = firstSlide.querySelector("p");
const button1 = firstSlide.querySelector(".connect-btn");
const sliderPhoto1 = firstSlide.querySelector(".first-slider-photo");

const title2 = secondSlide.querySelector("h1");
const subtitle2 = secondSlide.querySelector("p");
const button2 = secondSlide.querySelector(".connect-btn");
const sliderPhoto2 = secondSlide.querySelector(".second-slider-photo");

const nextSlide = document.querySelector(".next-btn");
const prevSlide = document.querySelector(".prev-btn");

const closeSecondSlide = () => {
  secondSlide.style.display = "none";
  firstSlide.style.display = "flex";
  currentSlide = 1;
  openFirstSlide();
  console.log(currentSlide);
};

const opacityTitle2 = () => {
  gsap.to(title2, {
    opacity: 0,
    duration: 0.2,
    ease: "none",
    onComplete: closeSecondSlide,
  });
};

const opacitySubtitle2 = () => {
  gsap.to(subtitle2, {
    opacity: 0,
    duration: 0.2,
    ease: "none",
    onComplete: opacityTitle2,
  });
};

const opacityButton2 = () => {
  gsap.to(button2, {
    opacity: 0,
    duration: 0.2,
    ease: "none",
    onComplete: opacitySubtitle2,
  });
};

const opacityPhoto2 = () => {
  gsap.to(sliderPhoto2, {
    opacity: 0,
    duration: 0.2,
    ease: "none",
    onComplete: opacityButton2,
  });
};

prevSlide.addEventListener("click", () => {
  gsap.to(prevSlide, {
    opacity: 0,
    duration: 0.2,
    ease: "none",
    onComplete: opacityPhoto2,
  });
  //   secondSlide.style.display = "none";
  //   firstSlide.style.display = "flex";
  //   closeSecondSlide();

  const stage2Slider3 = () => {
    gsap.to(slider, {
      duration: 0.5,
      background: "linear-gradient(to left bottom, #ffffff, #ffffff, #115085)",
      ease: "linear",
    });
  };

  gsap.to(slider, {
    duration: 0.5,
    background: "linear-gradient(to right bottom, #ffffff, #ffffff, #ffffff)",
    ease: "linear",
    onComplete: stage2Slider3,
  });
});

const openSecondSlide = () => {
  gsap.to(prevSlide, {
    duration: 0.5,
    opacity: 1,
    ease: "none",
  });
  const loadButton2 = () => {
    gsap.to(button2, {
      opacity: 1,
      duration: 0.5,
      ease: "none",
    });
  };
  const loadSubtitle2 = () => {
    gsap.to(subtitle2, {
      opacity: 1,
      duration: 0.5,
      ease: "none",
      onComplete: loadButton2,
    });
  };
  const loadTitle2 = () => {
    gsap.to(title2, {
      opacity: 1,
      duration: 0.5,
      ease: "none",
      onComplete: loadSubtitle2,
    });
  };
  gsap.to(sliderPhoto2, {
    opacity: 1,
    duration: 0.2,
    ease: "none",
    onComplete: loadTitle2,
  });

  const stage2Slider2 = () => {
    gsap.to(slider, {
      duration: 0.5,
      background: "linear-gradient(to right bottom, #ffffff, #ffffff, #115085)",
      ease: "linear",
    });
  };
  gsap.to(slider, {
    duration: 0.5,
    background: "linear-gradient(to left bottom, #ffffff, #ffffff, #ffffff)",
    ease: "linear",
    onComplete: stage2Slider2,
  });
};

const closeFirstSlide = () => {
  firstSlide.style.display = "none";
  secondSlide.style.display = "flex";
  currentSlide = 2;
  openSecondSlide();
  console.log(currentSlide);
};

const opacityTitle1 = () => {
  gsap.to(title1, {
    opacity: 0,
    duration: 0.2,
    ease: "none",
    onComplete: closeFirstSlide,
  });
};

const opacitySubtitle1 = () => {
  gsap.to(subtitle1, {
    opacity: 0,
    duration: 0.2,
    ease: "none",
    onComplete: opacityTitle1,
  });
};

const opacityButton1 = () => {
  gsap.to(button1, {
    opacity: 0,
    duration: 0.2,
    ease: "none",
    onComplete: opacitySubtitle1,
  });
};
const opacityPhoto1 = () => {
  gsap.to(sliderPhoto1, {
    opacity: 0,
    duration: 0.2,
    ease: "none",
    onComplete: opacityButton1,
  });
};

nextSlide.addEventListener("click", () => {
  gsap.to(nextSlide, {
    opacity: 0,
    duration: 0.2,
    ease: "none",
    onComplete: opacityPhoto1,
  });
});

const openFirstSlide = () => {
  gsap.to(nextSlide, {
    duration: 0.5,
    opacity: 1,
    ease: "none",
  });

  const loadButton1 = () => {
    gsap.to(button1, {
      duration: 0.5,
      opacity: 1,
      ease: "none",
    });
  };
  const loadSubtitle1 = () => {
    gsap.to(subtitle1, {
      duration: 0.5,
      opacity: 1,
      ease: "none",
      onComplete: loadButton1,
    });
  };
  const loadTitle1 = () => {
    gsap.to(title1, {
      duration: 0.5,
      opacity: 1,
      ease: "none",
      onComplete: loadSubtitle1,
    });
  };

  gsap.to(sliderPhoto1, {
    duration: 1,
    opacity: 1,
    ease: "none",
    onComplete: loadTitle1,
  });
};

openFirstSlide();

const changeSlides = () => {
  if (currentSlide === 1) {
    gsap.to(nextSlide, {
      opacity: 0,
      duration: 0.2,
      ease: "none",
      onComplete: opacityPhoto1,
    });
  } else if (currentSlide === 2) {
    gsap.to(prevSlide, {
      opacity: 0,
      duration: 0.2,
      ease: "none",
      onComplete: opacityPhoto2,
    });

    const stage2Slider3 = () => {
      gsap.to(slider, {
        duration: 0.5,
        background:
          "linear-gradient(to left bottom, #ffffff, #ffffff, #115085)",
        ease: "linear",
      });
    };

    gsap.to(slider, {
      duration: 0.5,
      background: "linear-gradient(to right bottom, #ffffff, #ffffff, #ffffff)",
      ease: "linear",
      onComplete: stage2Slider3,
    });
  }
};

setInterval(changeSlides, 10000);

const stage2Slider1 = () => {
  gsap.to(slider, {
    duration: 0.5,
    background: "linear-gradient(to left top, #ffffff, #ffffff, #ffffff)",
    ease: "linear",
    onComplete: stage3Slider1,
  });
};

const stage3Slider1 = () => {
  gsap.to(slider, {
    duration: 0.5,
    background: "linear-gradient(to left bottom, #ffffff, #ffffff, #115085)",
    ease: "linear",
  });
};

gsap.to(slider, {
  duration: 0.5,
  background: "linear-gradient(to left top, #ffffff, #ffffff, #115085)", // Изначальное положение в верхнем левом углу
  ease: "linear",
  onComplete: stage2Slider1,
});
