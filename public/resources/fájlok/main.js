const revealCont = document.getElementById("revealWrapper");
const revealIcon = document.getElementById("revealIconWrapper");

// setInterval(() => {
//   revealCont.parentElement.removeChild(revealCont);
// }, 3000);

//while (revealCont.offsetHeight != 0) {}

function removeReveal() {
  setInterval(() => {
    revealCont.classList.add("animPageLoaderWrapper");
    revealIcon.classList.add("animRevealIconWrapper");
  }, 500);
  setInterval(() => {
    revealCont.parentElement.removeChild(revealCont);
  }, 4000);
}

window.addEventListener("load", removeReveal);
