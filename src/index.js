function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "Your demure expression, the unfailing grace with which you meet the small misfortunes which we meet each day.",

    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
