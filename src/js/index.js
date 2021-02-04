import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

// generator złota
const goldCounterButton = document.querySelector(".section__button--clicker");
const goldCounter = document.querySelector(".counter--gold");
const coin = document.querySelector(".section__coin--js");

const militaryPower = document.querySelector(".counter--power");

// liczniki jednostek
const peasantsQuantity = document.querySelector(".counter--peasant");
const merceneariesQuantity = document.querySelector(".counter--merceneary");
const priestsQuantity = document.querySelector(".counter--priest");
const knightsQuantity = document.querySelector(".counter--knight");
const paladinsQuantity = document.querySelector(".counter--paladin");
const dragonsQuantity = document.querySelector(".counter--dragon");

// przyciski kupowania jednostek
const peasantsButton = document.querySelector(".section__button--peasant");
const merceneariesButton = document.querySelector(
  ".section__button--merceneary"
);
const priestsButton = document.querySelector(".section__button--priest");
const knightsButton = document.querySelector(".section__button--knight");
const paladinsButton = document.querySelector(".section__button--paladin");
const dragonsButton = document.querySelector(".section__button--dragon");

const peasantsPrice = document.querySelector(".price--peasant");

// liczniki złota i siły
let gold = 0;
let military = 0;

// liczniki stanu jednostek
let peasants = 0;
let mercenearies = 0;
let priests = 0;
let knights = 0;
let paladins = 0;
let dragons = 0;

// liczniki ceny jednostek
let peasantsPriceCounter = 10;

// generator złota na kliknięcie
goldCounterButton.addEventListener("click", () => {
  gold++;
  goldCounter.innerHTML = gold;
});

// generowanie złota co sekundę
function goldPerSecond() {
  gold += peasants * 1;
  goldCounter.innerHTML = gold;
}
setInterval(goldPerSecond, 1000);
goldPerSecond();

// kupowanie jednostek i mechanika stojąca za tym
peasantsButton.addEventListener("click", () => {
  if (gold >= peasantsPriceCounter) {
    // dodawanie jednostek
    peasants++;
    peasantsQuantity.innerHTML = peasants;
    // odejmowanie złota
    gold -= peasantsPriceCounter;
    goldCounter.innerHTML = gold;
    // podnoszenie ceny i zaokrąglanie
    peasantsPriceCounter *= 1.15;
    peasantsPriceCounter = peasantsPriceCounter.toFixed(0);
    // aktualizacja stanu jednostek
    peasantsPrice.innerHTML = peasantsPriceCounter;
    // dodawanie siły
    military += 1;
    militaryPower.innerHTML = military;
  }
});
