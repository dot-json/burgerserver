const revealCont = document.getElementById("revealWrapper");
const revealIcon = document.getElementById("revealIconWrapper");

function removeReveal() {
  document.body.style.overflow = "hidden";
  setInterval(() => {
    revealCont.classList.add("animPageLoaderWrapper");
    revealIcon.classList.add("animRevealIconWrapper");
  }, 500);
  setInterval(() => {
    document.body.style.overflow = "scroll";
    if (revealCont.parentElement != null) {
      revealCont.parentElement.removeChild(revealCont);
    }
    window.removeEventListener("load", removeReveal);
  }, 2400);
}

window.addEventListener("load", removeReveal);
