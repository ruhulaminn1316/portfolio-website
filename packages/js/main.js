/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  /* mousewheel: true,
  keyboard: true, */
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== CONTENT-DRIVEN FLOATING ICONS ====================*/
function initContentDrivenFloatingIcons() {
  const layer = document.querySelector(".ui-floating-icons");
  if (!layer) return;

  const isCoarse = window.matchMedia("(pointer: coarse)").matches;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (isCoarse || prefersReducedMotion) return;

  const icons = Array.from(layer.querySelectorAll(".ui-float-icon"));
  if (!icons.length) return;

  const states = icons.map((icon, index) => ({
    icon,
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.35,
    targetX: window.innerWidth * 0.5,
    targetY: window.innerHeight * 0.35,
    rot: index % 2 === 0 ? -8 : 8,
    rotTarget: index % 2 === 0 ? -8 : 8,
    phase: Math.random() * Math.PI * 2,
    speed: 0.8 + (index % 5) * 0.16,
  }));

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  const computeTargets = () => {
    const sections = Array.from(document.querySelectorAll("main section"));
    if (!sections.length) return;

    states.forEach((state, index) => {
      const section = sections[index % sections.length];
      const anchor =
        section.querySelector(".section__title, .home__title, h1, h2, h3") ||
        section;
      const rect = anchor.getBoundingClientRect();

      const spread = ((index % 5) - 2) * 42;
      const depth = ((index % 4) - 1.5) * 30;
      const baseX = rect.left + rect.width / 2 + spread;
      const baseY = rect.top + rect.height / 2 + depth;

      state.targetX = clamp(baseX, 24, window.innerWidth - 78);
      state.targetY = clamp(baseY, 24, window.innerHeight - 78);
      state.rotTarget = (index % 2 === 0 ? -10 : 10) + ((index % 3) - 1) * 3;
    });
  };

  let rafId;
  const animate = () => {
    const t = performance.now();

    states.forEach((state) => {
      const swayX = Math.sin(t * 0.00055 * state.speed + state.phase) * 10;
      const swayY = Math.cos(t * 0.00078 * state.speed + state.phase) * 12;

      state.x += (state.targetX + swayX - state.x) * 0.07;
      state.y += (state.targetY + swayY - state.y) * 0.07;
      state.rot += (state.rotTarget - state.rot) * 0.08;

      state.icon.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) rotate(${state.rot}deg)`;
    });

    rafId = requestAnimationFrame(animate);
  };

  computeTargets();
  animate();

  window.addEventListener("resize", computeTargets);
  window.addEventListener("scroll", computeTargets, { passive: true });
}
initContentDrivenFloatingIcons();

/*==================== CURSOR MAGIC ====================*/
function initCursorMagic() {
  const isCoarse = window.matchMedia("(pointer: coarse)").matches;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (isCoarse || prefersReducedMotion) return;

  const ring = document.createElement("div");
  ring.className = "cursor-magic";
  const dot = document.createElement("div");
  dot.className = "cursor-magic__dot";
  document.body.append(ring, dot);

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let ringX = targetX;
  let ringY = targetY;
  let dotX = targetX;
  let dotY = targetY;
  let rafId;
  let lastSparkAt = 0;

  const interactiveSelector =
    "a, button, .button, .nav__link, .services__button, .qualification__button, .swiper-button-next, .swiper-button-prev, input, textarea";

  const createSpark = (x, y) => {
    const spark = document.createElement("span");
    spark.className = "cursor-magic-spark";
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    spark.style.setProperty("--spark-x", `${(Math.random() - 0.5) * 26}px`);
    spark.style.setProperty("--spark-y", `${(Math.random() - 0.5) * 26}px`);
    document.body.appendChild(spark);
    spark.addEventListener("animationend", () => spark.remove(), { once: true });
  };

  const tick = () => {
    ringX += (targetX - ringX) * 0.2;
    ringY += (targetY - ringY) * 0.2;
    dotX += (targetX - dotX) * 0.42;
    dotY += (targetY - dotY) * 0.42;

    const vx = targetX - ringX;
    const vy = targetY - ringY;
    const speed = Math.min(Math.hypot(vx, vy), 40);
    const stretch = 1 + speed * 0.005;

    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    ring.style.transform = `translate(-50%, -50%) scale(${stretch})`;
    dot.style.left = `${dotX}px`;
    dot.style.top = `${dotY}px`;

    rafId = requestAnimationFrame(tick);
  };

  const onMouseMove = (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
    document.body.classList.add("cursor-magic-active");

    const now = Date.now();
    if (now - lastSparkAt > 180) {
      createSpark(targetX, targetY);
      lastSparkAt = now;
    }
  };

  const onMouseDown = () => ring.classList.add("is-down");
  const onMouseUp = () => ring.classList.remove("is-down");
  const onMouseLeave = () => {
    document.body.classList.remove("cursor-magic-active");
    ring.classList.remove("is-hover", "is-down");
  };
  const onPointerOver = (event) => {
    if (event.target.closest(interactiveSelector)) {
      ring.classList.add("is-hover");
    }
  };
  const onPointerOut = (event) => {
    if (event.target.closest(interactiveSelector)) {
      ring.classList.remove("is-hover");
    }
  };

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mousedown", onMouseDown);
  document.addEventListener("mouseup", onMouseUp);
  document.addEventListener("mouseover", onPointerOver);
  document.addEventListener("mouseout", onPointerOut);
  document.addEventListener("mouseleave", onMouseLeave);

  tick();
}
initCursorMagic();

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
} else {
  // Default to dark mode for a full night UI on first visit.
  document.body.classList.add(darkTheme);
  themeButton.classList.add(iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
