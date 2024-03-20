document.querySelectorAll(".nav-link").forEach((link) => {
  console.log(link);
    if (link.href === window.location.href) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }
});

