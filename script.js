/**
 * PORTFOLIO STUDIO — CORE INTERACTION ENGINE
 * Author: Nihal Mahore (@nihal-hnm)
 * Features: Dark/Light Mode, Cursor Spotlight, Filter System, Accordion, Clipboard API
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. DOM Elements
  const themeToggleBtn = document.getElementById("theme-toggle");
  const projectToggleBtn = document.getElementById("project-toggle-btn");
  const projectAccordion = document.getElementById("project-accordion");
  const filterPills = document.querySelectorAll(".filter-pill");
  const logItems = document.querySelectorAll(".log-item");
  const copyEmailBtn = document.getElementById("copy-email-btn");
  const copyEmailFooterBtn = document.getElementById("copy-email-footer-btn");
  const backToTopBtn = document.getElementById("back-to-top-btn");
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  const currentYearSpan = document.getElementById("current-year");
  const navItems = document.querySelectorAll(".nav-item");

  // Set Current Year
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 2. Dark / Light Theme Toggle & Persistence
  // --------------------------------------------------------------------------
  const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const applyTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("portfolio-theme", theme);
  };

  // Initialize Theme
  applyTheme(getPreferredTheme());

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const isDark = document.documentElement.classList.contains("dark");
      applyTheme(isDark ? "light" : "dark");
    });
  }

  // --------------------------------------------------------------------------
  // 3. Dynamic Cursor Spotlight Follower
  // --------------------------------------------------------------------------
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;
  let isMoving = false;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isMoving) {
      isMoving = true;
      requestAnimationFrame(updateSpotlight);
    }
  });

  function updateSpotlight() {
    // Smooth linear interpolation (lerp)
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;

    document.documentElement.style.setProperty("--mouse-x", `${currentX}px`);
    document.documentElement.style.setProperty("--mouse-y", `${currentY}px`);

    if (Math.abs(mouseX - currentX) > 0.5 || Math.abs(mouseY - currentY) > 0.5) {
      requestAnimationFrame(updateSpotlight);
    } else {
      isMoving = false;
    }
  }

  // --------------------------------------------------------------------------
  // 4. Project Highlights Accordion Toggle
  // --------------------------------------------------------------------------
  if (projectToggleBtn && projectAccordion) {
    projectToggleBtn.addEventListener("click", () => {
      const isExpanded = projectToggleBtn.getAttribute("aria-expanded") === "true";
      const nextState = !isExpanded;

      projectToggleBtn.setAttribute("aria-expanded", String(nextState));

      if (nextState) {
        projectAccordion.classList.add("expanded");
        projectToggleBtn.querySelector("span").textContent = "Hide Architecture Decisions";
      } else {
        projectAccordion.classList.remove("expanded");
        projectToggleBtn.querySelector("span").textContent = "View Architecture Decisions";
      }
    });
  }

  // --------------------------------------------------------------------------
  // 5. Engineering Changelog Status Filtering
  // --------------------------------------------------------------------------
  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      filterPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");

      const selectedFilter = pill.getAttribute("data-filter");

      logItems.forEach((item) => {
        const itemStatus = item.getAttribute("data-status");
        if (selectedFilter === "all" || itemStatus === selectedFilter) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 6. Copy-to-Clipboard Email System
  // --------------------------------------------------------------------------
  let toastTimeout;

  const showToast = (message) => {
    if (!toast) return;
    toastMessage.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 3200);
  };

  const handleCopyEmail = (email) => {
    if (!email) return;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          showToast(`Copied ${email} to clipboard!`);
        })
        .catch(() => {
          fallbackCopyText(email);
        });
    } else {
      fallbackCopyText(email);
    }
  };

  const fallbackCopyText = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      showToast(`Copied ${text} to clipboard!`);
    } catch (err) {
      showToast("Could not copy automatically. Email: " + text);
    }
    document.body.removeChild(textArea);
  };

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      const email = copyEmailBtn.getAttribute("data-email");
      handleCopyEmail(email);
    });
  }

  if (copyEmailFooterBtn) {
    copyEmailFooterBtn.addEventListener("click", () => {
      const email = copyEmailFooterBtn.getAttribute("data-email");
      handleCopyEmail(email);
    });
  }

  // --------------------------------------------------------------------------
  // 7. Back-to-Top Button
  // --------------------------------------------------------------------------
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // --------------------------------------------------------------------------
  // 8. Navigation Active State Spy
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll("section[id], div[id='contact']");

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -70% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navItems.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((sec) => observer.observe(sec));
});

// --------------------------------------------------------------------------
// 9. Couch Critics Image Multi-Path Resolver (Ensures image always loads)
// --------------------------------------------------------------------------
function handleCouchImageError(img) {
  if (!img) return;
  const candidatePaths = [
    "images/couch_critics_live.png",
    "./images/couch_critics_live.png",
    "couch_critics_live.png",
    "./couch_critics_live.png",
    "public/images/couch_critics_live.png",
    "./public/images/couch_critics_live.png",
    "images/couch_critics.png",
    "couch_critics.png",
    "public/images/couch_critics.png",
    "images/couch_critics.jpg",
    "couch_critics.jpg",
    "public/images/couch_critics.jpg"
  ];

  let currentIdx = parseInt(img.dataset.failIndex || "0", 10);
  if (currentIdx < candidatePaths.length) {
    img.dataset.failIndex = (currentIdx + 1).toString();
    img.src = candidatePaths[currentIdx];
  }
}

window.handleCouchImageError = handleCouchImageError;
