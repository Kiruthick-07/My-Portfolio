var nav = document.querySelector(".side-navbar")
function opennav(){
    nav.style.display="block"
}
function closenav(){
    nav.style.display="none"
}
 const phrases = [
      "I'm an Robotics Engineer.",
      "I'm an Frontend Developer.",
      "I'm an Video Editor."
    ];

    const el = document.getElementById("typewriter");
    let phraseIndex = 0;
    let letterIndex = 0;
    let currentPhrase = "";
    let isDeleting = false;

    function type() {
      currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        el.textContent = currentPhrase.substring(0, letterIndex--);
      } else {
        el.textContent = currentPhrase.substring(0, letterIndex++);
      }

      // Typing speed
      let speed = isDeleting ? 50 : 100;

      if (!isDeleting && letterIndex === currentPhrase.length) {
        speed = 1200; // Pause after full text
        isDeleting = true;
      } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 500;
      }

      setTimeout(type, speed);
    }

    type();
    window.onload = function() {
    if (window.location.hash) {
      history.replaceState(null, null, window.location.pathname);
      window.scrollTo(0, 0);
    }
  };