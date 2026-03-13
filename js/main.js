document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector("#card-target");

  const info = {
    nimi: "Paula Lipsanen",
    titteli: "IT Student",
    email: "paula.lipsanen@student.lab.fi",
    github: "github.com/plipsanen",
  };

  const tumma = "#333333";

  // --- YKSI RYHMÄ KAIKILLE ELEMENTEILLE ---
  const group = document.createElement("a-entity");
  group.setAttribute("position", "0 0 0");
  target.appendChild(group);

  // --- OMA KUVA (optimoitu kuvasuhde) ---
  const photo = document.createElement("a-image");
  photo.setAttribute("src", "#card-photo");
  photo.setAttribute("position", "-0.35 -0.70 0.001");
  photo.setAttribute("height", "0.55");
  photo.setAttribute("width", "0.80");
  photo.setAttribute("material", "transparent: true; alphaTest: 0.01");
  group.appendChild(photo);

  // --- NIMI + TITTELI ---
  const nimiBg = document.createElement("a-image");
  nimiBg.setAttribute("src", "#bg-punainen");
  nimiBg.setAttribute("position", "0.22 -0.58 0");
  nimiBg.setAttribute("width", "0.80");
  nimiBg.setAttribute("height", "0.60");
  group.appendChild(nimiBg);

  const nimi = document.createElement("a-text");
  nimi.setAttribute("value", info.nimi);
  nimi.setAttribute("position", "0.22 -0.55 0.001");
  nimi.setAttribute("color", tumma);
  nimi.setAttribute("width", "0.75");
  nimi.setAttribute("align", "center");
  nimi.setAttribute("baseline", "center");
  group.appendChild(nimi);

  const titteli = document.createElement("a-text");
  titteli.setAttribute("value", info.titteli);
  titteli.setAttribute("position", "0.22 -0.63 0.001");
  titteli.setAttribute("color", tumma);
  titteli.setAttribute("width", "0.6");
  titteli.setAttribute("align", "center");
  titteli.setAttribute("baseline", "center");
  group.appendChild(titteli);

  // --- SÄHKÖPOSTI ---
  const emailBg = document.createElement("a-image");
  emailBg.setAttribute("src", "#bg-keltainen");
  emailBg.setAttribute("position", "0.22 -0.75 0");
  emailBg.setAttribute("width", "0.80");
  emailBg.setAttribute("height", "0.30");
  group.appendChild(emailBg);

  const email = document.createElement("a-text");
  email.setAttribute("value", "✉ " + info.email);
  email.setAttribute("position", "0.22 -0.75 0.001");
  email.setAttribute("color", tumma);
  email.setAttribute("width", "0.75");
  email.setAttribute("align", "center");
  email.setAttribute("baseline", "center");
  group.appendChild(email);

  // --- GITHUB ---
  const githubBg = document.createElement("a-image");
  githubBg.setAttribute("src", "#bg-turkoosi");
  githubBg.setAttribute("position", "0.22 -0.88 0");
  githubBg.setAttribute("width", "0.80");
  githubBg.setAttribute("height", "0.30");
  group.appendChild(githubBg);

  const github = document.createElement("a-text");
  github.setAttribute("value", "⌨ " + info.github);
  github.setAttribute("position", "0.22 -0.88 0.001");
  github.setAttribute("color", tumma);
  github.setAttribute("width", "0.75");
  github.setAttribute("align", "center");
  github.setAttribute("baseline", "center");
  group.appendChild(github);
});
