"use strict";
const questions = [
  "Что мне взять с собой на каток?",
  "Что мне взять с собой на каток?",
  "Что мне взять с собой в школу?",
  "Что мне взять с собой в бассейн?",
];

const answers = ["Коньки.", "Яблоки.", "Учебники.", "Полотенце."];

function randomArrayValue(link) {
  return link[Math.floor(Math.random() * link.length)];
}

let q = randomArrayValue(questions);
let a = randomArrayValue(answers);
document.write("- " + q + "<br>" + "- " + a);
