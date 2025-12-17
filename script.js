document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("inputText");
  const button = document.getElementById("translateBtn");
  const output = document.getElementById("output");
  const year = document.getElementById("year");

  year.textContent = new Date().getFullYear();

  const dictionary = {
    teacher: "mwalimu",
    student: "mwanafunzi",
    friend: "rafiki",
    mother: "mama",
    father: "baba",
    child: "mtoto",
    school: "shule",
    home: "nyumbani",
    food: "chakula",
    water: "maji",
    love: "upendo",
    work: "kazi",
    at: "kwa",
    with: "pamoja na",
    and: "na",
    in: "ndani ya",
    on: "juu ya",
    for: "kwa",
    from: "kutoka",
    to: "kwa"
  };

  button.addEventListener("click", function () {
    const text = input.value.trim().toLowerCase();

    if (text === "") {
      output.textContent = "Please type a word";
      return;
    }

    if (dictionary[text]) {
      output.textContent = dictionary[text];
    } else {
      output.textContent = "Translation not found";
    }
  });
});
calebmugo16-sudo/Smartsearch-
