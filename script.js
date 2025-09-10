// Typing Effect

const typingElement = document.getElementById("typing");

const words = ["a Web Developer", "a Designer", "a Programmer"];

let wordIndex = 0;

let charIndex = 0;

let isDeleting = false;

function typeEffect() {

  let currentWord = words[wordIndex];

  let displayText = currentWord.substring(0, charIndex);

  typingElement.textContent = displayText;

  if (!isDeleting && charIndex < currentWord.length) {

    charIndex++;

    setTimeout(typeEffect, 150);

  } else if (isDeleting && charIndex > 0) {

    charIndex--;

    setTimeout(typeEffect, 100);

  } else {

    isDeleting = !isDeleting;

    if (!isDeleting) {

      wordIndex = (wordIndex + 1) % words.length;

    }

    setTimeout(typeEffect, 700);

  }

}

typeEffect();

// Form Handling

const form = document.getElementById("contactForm");

const msg = document.getElementById("formMsg");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  msg.textContent = "✅ Message Sent Successfully!";

  msg.style.color = "green";

  form.reset();

});

// Smooth Scroll

document.querySelectorAll("nav a").forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    e.preventDefault();

    document.querySelector(this.getAttribute("href"))

      .scrollIntoView({ behavior: "smooth" });

  });

});