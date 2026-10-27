(function () {
  "use strict";

  var storageKey = "guru-theme";
  var root = document.documentElement;
  var theme = "dark";

  try {
    var savedTheme = window.localStorage.getItem(storageKey);
    if (savedTheme === "light" || savedTheme === "dark") {
      theme = savedTheme;
    }
  } catch (error) {
    // Keep the dark default when browser storage is unavailable.
  }

  root.dataset.theme = theme;

  function updateTheme(themeToggle) {
    var isLight = root.dataset.theme === "light";
    var nextTheme = isLight ? "dark" : "light";
    var themeColor = document.querySelector('meta[name="theme-color"]');

    themeToggle.setAttribute("aria-label", "Switch to " + nextTheme + " mode");
    themeToggle.setAttribute("title", "Switch to " + nextTheme + " mode");
    themeToggle.setAttribute("aria-pressed", String(isLight));

    if (themeColor) {
      themeColor.setAttribute("content", isLight ? "#ffffff" : "#151821");
    }
  }

  function initializeToggle() {
    var themeToggle = document.querySelector(".theme-toggle");

    if (!themeToggle) {
      return;
    }

    updateTheme(themeToggle);

    themeToggle.addEventListener("click", function () {
      var nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = nextTheme;

      try {
        window.localStorage.setItem(storageKey, nextTheme);
      } catch (error) {
        // The toggle still works for this page view without persistence.
      }

      updateTheme(themeToggle);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeToggle);
  } else {
    initializeToggle();
  }
}());
