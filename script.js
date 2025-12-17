
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("generateBtn").addEventListener("click", translateWord);

function translateWord() {
  const w = document.getElementById("inputWord").value
    .toLowerCase()
    .trim();

  const dict = {
    // nouns
    teacher: "mwalimu",
    teachers: "walimu",
    student: "mwanafunzi",
    students: "wanafunzi",
    mother: "mama",
    father: "baba",
    friend: "rafiki",
    friends: "marafiki",
    school: "shule",
    home: "nyumbani",
    food: "chakula",
    water: "maji",
    book: "kitabu",
    books: "vitabu",
    phone: "simu",

    // verbs
    eat: "kula",
    drink: "kunywa",
    go: "kwenda",
    come: "kuja",
    work: "kazi",
    working: "kufanya kazi",
    worked: "alifanya kazi",
    study: "kusoma",
    studying: "anasoma",

    // articles & connectors
    at: "kwa",
    with: "pamoja na",
    and: "na",
    in: "ndani ya",
    on: "juu ya",
    to: "kwa",
    from: "kutoka",

    // possessives / suffix style
    my: "yangu",
    your: "yako",
    his: "yake",
    her: "yake",
    our: "yetu",
    their: "yao"
  };

  document.getElementById("result").textContent =
    dict[w] || "Translation not found";
}
