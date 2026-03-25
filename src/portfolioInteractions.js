import Swiper from "swiper/bundle";

export function initPortfolioInteractions() {
  const cleanups = [];

  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");

  if (navToggle && navMenu) {
    const onToggleClick = () => navMenu.classList.add("show-menu");
    navToggle.addEventListener("click", onToggleClick);
    cleanups.push(() => navToggle.removeEventListener("click", onToggleClick));
  }

  if (navClose && navMenu) {
    const onCloseClick = () => navMenu.classList.remove("show-menu");
    navClose.addEventListener("click", onCloseClick);
    cleanups.push(() => navClose.removeEventListener("click", onCloseClick));
  }

  if (navMenu) {
    const navLinks = document.querySelectorAll(".nav__link");
    navLinks.forEach((link) => {
      const onLinkClick = () => navMenu.classList.remove("show-menu");
      link.addEventListener("click", onLinkClick);
      cleanups.push(() => link.removeEventListener("click", onLinkClick));
    });
  }

  const skillsSubsectionToggles = document.querySelectorAll(".skills__subsection-toggle");

  skillsSubsectionToggles.forEach((toggle) => {
    const icon = toggle.querySelector(".skills__toggle-icon");
    const grid = toggle.nextElementSibling;

    const onToggleClick = () => {
      if (grid && grid.classList.contains("skills__icons-grid")) {
        const isHidden = grid.classList.contains("skills__icons-hidden");
        
        // Toggle hidden class
        grid.classList.toggle("skills__icons-hidden");
        
        // Toggle icon rotation
        if (icon) {
          icon.classList.toggle("expanded");
        }
      }
    };

    toggle.addEventListener("click", onToggleClick);
    cleanups.push(() => toggle.removeEventListener("click", onToggleClick));
  });

  const tabs = document.querySelectorAll("[data-target]");
  const tabContents = document.querySelectorAll("[data-content]");

  tabs.forEach((tab) => {
    const onTabClick = () => {
      const target = document.querySelector(tab.dataset.target);
      if (!target) return;

      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("qualification__active");
      });
      target.classList.add("qualification__active");

      tabs.forEach((currentTab) => {
        currentTab.classList.remove("qualification__active");
      });
      tab.classList.add("qualification__active");
    };

    tab.addEventListener("click", onTabClick);
    cleanups.push(() => tab.removeEventListener("click", onTabClick));
  });

  const modalViews = document.querySelectorAll(".services__modal");
  const modalBtns = document.querySelectorAll(".services__button");
  const modalCloses = document.querySelectorAll(".services__modal-close");

  const openModalAt = (index) => {
    if (modalViews[index]) {
      modalViews[index].classList.add("active-modal");
    }
  };

  modalBtns.forEach((modalBtn, i) => {
    const onOpenModal = () => openModalAt(i);
    modalBtn.addEventListener("click", onOpenModal);
    cleanups.push(() => modalBtn.removeEventListener("click", onOpenModal));
  });

  modalCloses.forEach((modalClose) => {
    const onCloseModal = () => {
      modalViews.forEach((modalView) => {
        modalView.classList.remove("active-modal");
      });
    };

    modalClose.addEventListener("click", onCloseModal);
    cleanups.push(() => modalClose.removeEventListener("click", onCloseModal));
  });

  let swiperPortfolio;
  if (document.querySelector(".portfolio__container")) {
    swiperPortfolio = new Swiper(".portfolio__container", {
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
    });
  }

  const sections = document.querySelectorAll("section[id]");
  const onScrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");
      const navLink = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);

      if (!navLink) return;

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active-link");
      } else {
        navLink.classList.remove("active-link");
      }
    });
  };
  window.addEventListener("scroll", onScrollActive);
  cleanups.push(() => window.removeEventListener("scroll", onScrollActive));

  const onScrollHeader = () => {
    const nav = document.getElementById("header");
    if (!nav) return;

    if (window.scrollY >= 80) {
      nav.classList.add("scroll-header");
    } else {
      nav.classList.remove("scroll-header");
    }
  };
  window.addEventListener("scroll", onScrollHeader);
  cleanups.push(() => window.removeEventListener("scroll", onScrollHeader));

  const onScrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    if (!scrollUp) return;

    if (window.scrollY >= 560) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  };
  window.addEventListener("scroll", onScrollUp);
  cleanups.push(() => window.removeEventListener("scroll", onScrollUp));

  const typingNode = document.querySelector(".home__typing");
  let typingTimer;

  if (typingNode) {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const words = JSON.parse(
      typingNode.getAttribute("data-typing") || "[\"Frontend Developer\"]"
    );

    if (prefersReducedMotion || words.length < 2) {
      typingNode.textContent = words[0] || "Frontend Developer";
    } else {
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      const runTyping = () => {
        const currentWord = words[wordIndex];

        if (isDeleting) {
          charIndex -= 1;
        } else {
          charIndex += 1;
        }

        typingNode.textContent = currentWord.slice(0, charIndex);

        if (!isDeleting && charIndex === currentWord.length) {
          isDeleting = true;
          typingTimer = window.setTimeout(runTyping, 1200);
          return;
        }

        if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }

        const delay = isDeleting ? 48 : 78;
        typingTimer = window.setTimeout(runTyping, delay);
      };

      typingNode.textContent = "";
      runTyping();
      cleanups.push(() => window.clearTimeout(typingTimer));
    }
  }

  const floatingLayer = document.querySelector(".ui-floating-icons");
  const isCoarse = window.matchMedia("(pointer: coarse)").matches;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (floatingLayer && !isCoarse && !prefersReducedMotion) {
    const floatingIcons = Array.from(
      floatingLayer.querySelectorAll(".ui-float-icon")
    );

    const states = floatingIcons.map((icon, index) => ({
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

    const computeFloatingTargets = () => {
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

    let floatingRafId;
    const animateFloatingIcons = () => {
      const t = performance.now();

      states.forEach((state) => {
        const swayX = Math.sin(t * 0.00055 * state.speed + state.phase) * 10;
        const swayY = Math.cos(t * 0.00078 * state.speed + state.phase) * 12;

        state.x += (state.targetX + swayX - state.x) * 0.07;
        state.y += (state.targetY + swayY - state.y) * 0.07;
        state.rot += (state.rotTarget - state.rot) * 0.08;

        state.icon.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) rotate(${state.rot}deg)`;
      });

      floatingRafId = requestAnimationFrame(animateFloatingIcons);
    };

    computeFloatingTargets();
    animateFloatingIcons();

    window.addEventListener("resize", computeFloatingTargets);
    window.addEventListener("scroll", computeFloatingTargets, { passive: true });

    cleanups.push(() => {
      cancelAnimationFrame(floatingRafId);
      window.removeEventListener("resize", computeFloatingTargets);
      window.removeEventListener("scroll", computeFloatingTargets);
    });
  }

  if (!isCoarse && !prefersReducedMotion) {
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

    cleanups.push(() => {
      cancelAnimationFrame(rafId);
      document.body.classList.remove("cursor-magic-active");
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onPointerOver);
      document.removeEventListener("mouseout", onPointerOut);
      document.removeEventListener("mouseleave", onMouseLeave);
      ring.remove();
      dot.remove();
      document.querySelectorAll(".cursor-magic-spark").forEach((node) => node.remove());
    });

    tick();
  }

  const themeButton = document.getElementById("theme-button");
  const darkTheme = "dark-theme";
  const iconTheme = "uil-sun";

  if (themeButton) {
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? "dark" : "light";
    const getCurrentIcon = () =>
      themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

    if (selectedTheme) {
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );
      themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
        iconTheme
      );
    } else {
      document.body.classList.add(darkTheme);
      themeButton.classList.add(iconTheme);
    }

    const onThemeClick = () => {
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
      localStorage.setItem("selected-theme", getCurrentTheme());
      localStorage.setItem("selected-icon", getCurrentIcon());
    };

    themeButton.addEventListener("click", onThemeClick);
    cleanups.push(() => themeButton.removeEventListener("click", onThemeClick));
  }

  onScrollActive();
  onScrollHeader();
  onScrollUp();

  return () => {
    if (swiperPortfolio) {
      swiperPortfolio.destroy(true, true);
    }

    cleanups.forEach((cleanup) => cleanup());
  };
}
