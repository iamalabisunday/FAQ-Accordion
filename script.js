"use strict";

// Element Section
const iconBtns = document.querySelectorAll(".icon-img");

// Loop through each one
iconBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Find the location of the click icon
    // const answer = btn.parentElement.nextElementSibling;
    const answer = btn.closest(".question-answer").querySelector(".answer");

    // If answer is hidden, show it
    if (answer.classList.contains("hidden")) {
      answer.classList.remove("hidden");
      btn.src = "./assets/images/icon-minus.svg";
    } else {
      // If it's already showing, hide it
      answer.classList.add("hidden");
      btn.src = "./assets/images/icon-plus.svg";
    }
  });
});
