// Show button when scrolling down
window.onscroll = function() {
  const goTopBtn = document.getElementById("goTopBtn");
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    goTopBtn.classList.add("show");
  } else {
    goTopBtn.classList.remove("show");
  }
};

// Scroll to top function
function goToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
