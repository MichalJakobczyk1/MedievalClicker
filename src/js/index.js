import "../scss/main.scss";
// import {
//   goldCounterButton,
//   goldCounter,
//   coin,
//   militaryPower,
//   peasantsQuantity,
//   merceneariesQuantity,
//   priestsQuantity,
//   knightsQuantity,
//   paladinsQuantity,
//   dragonsQuantity,
//   peasantsButton,
//   merceneariesButton,
//   priestsButton,
//   knightsButton,
//   paladinsButton,
//   dragonsButton,
//   peasantsPrice,
//   gold,
//   goldPerSecond,
//   military,
//   peasants,
//   mercenearies,
//   priests,
//   knights,
//   paladins,
//   dragons,
//   peasantsPriceCounter,
//   colorChange,
//   colorChangeReverse,
// } from "./modules/functions&variables";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

// generator złota
const goldCounterButton = document.querySelector(".section__button--clicker");
const goldCounter = document.querySelector(".counter--gold");
const coin = document.querySelector(".section__coin--js");

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

// ceny jednostek
const peasantsPrice = document.querySelector(".price--peasant");
const merceneariesPrice = document.querySelector(".price--merceneary");
const priestsPrice = document.querySelector(".price--priest");
const knightsPrice = document.querySelector(".price--knight");
const paladinsPrice = document.querySelector(".price--paladin");
const dragonsPrice = document.querySelector(".price--dragons");

// miasto
const cityButton = document.querySelector(".section__button--city");
const cityPrice = document.querySelector(".price--city");
const cityPower = document.querySelector(".power--city");
const militaryPower = document.querySelector(".counter--power");

let cityPriceCounter = 1000;
let cityPowerCounter = 100;

cityButton.innerHTML = " Upgrade City to Lv. 2";
cityPrice.innerHTML = cityPriceCounter;
cityPower.innerHTML = cityPowerCounter;

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
let merceneariesPriceCounter = 100;
let priestsPriceCounter = 100;
let knightsPriceCounter = 300;
let paladinsPriceCounter = 1000;
let dragonsPriceCounter = 3000;

// zmiana koloru przycisku
function colorChange(priceCounter, button) {
  if (gold >= priceCounter) {
    button.classList.remove("section__button--buy");
    button.classList.add("section__button--available");
  }
}
function colorChangeReverse(priceCounter, button) {
  if (gold <= priceCounter) {
    button.classList.remove("section__button--available");
    button.classList.add("section__button--buy");
  }
}
function cityColorChange(priceCounter, powerCounter, button) {
  if (gold >= priceCounter && military >= powerCounter) {
    button.classList.remove("section__button--buy");
    button.classList.add("section__button--available");
  }
}
function cityColorChangeReverse(priceCounter, powerCounter, button) {
  if (gold <= priceCounter && military <= powerCounter) {
    button.classList.remove("section__button--available");
    button.classList.add("section__button--buy");
  }
}

// generowanie złota co sekundę
function goldPerSecond() {
  gold += peasants * 1;
  gold += mercenearies * 2;
  gold += priests * 10;
  gold += knights * 5;
  gold += paladins * 25;
  gold += dragons * 40;
  goldCounter.innerHTML = gold;
  // zmiana koloru przycisku
  colorChange(peasantsPriceCounter, peasantsButton);
  colorChange(merceneariesPriceCounter, merceneariesButton);
  colorChange(priestsPriceCounter, priestsButton);
  colorChange(knightsPriceCounter, knightsButton);
  colorChange(paladinsPriceCounter, paladinsButton);
  colorChange(dragonsPriceCounter, dragonsButton);
  cityColorChange(cityPriceCounter, cityPowerCounter, cityButton);
}

// generator złota na kliknięcie
goldCounterButton.addEventListener("click", () => {
  gold++;
  goldCounter.innerHTML = gold;
  // zmiana koloru przycisku
  colorChange(peasantsPriceCounter, peasantsButton);
  colorChange(merceneariesPriceCounter, merceneariesButton);
  colorChange(priestsPriceCounter, priestsButton);
  colorChange(knightsPriceCounter, knightsButton);
  colorChange(paladinsPriceCounter, paladinsButton);
  colorChange(dragonsPriceCounter, dragonsButton);
  cityColorChange(cityPriceCounter, cityPowerCounter, cityButton);
});

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
    // zmiana koloru przycisku
    colorChangeReverse(peasantsPriceCounter, peasantsButton);
    colorChangeReverse(merceneariesPriceCounter, merceneariesButton);
    colorChangeReverse(priestsPriceCounter, priestsButton);
    colorChangeReverse(knightsPriceCounter, knightsButton);
    colorChangeReverse(paladinsPriceCounter, paladinsButton);
    colorChangeReverse(dragonsPriceCounter, dragonsButton);
    cityColorChange(cityPriceCounter, cityPowerCounter, cityButton);
  }
});

merceneariesButton.addEventListener("click", () => {
  if (gold >= merceneariesPriceCounter) {
    // dodawanie jednostek
    mercenearies++;
    merceneariesQuantity.innerHTML = mercenearies;
    // odejmowanie złota
    gold -= merceneariesPriceCounter;
    goldCounter.innerHTML = gold;
    // podnoszenie ceny i zaokrąglanie
    merceneariesPriceCounter *= 1.3;
    merceneariesPriceCounter = merceneariesPriceCounter.toFixed(0);
    // aktualizacja stanu jednostek
    merceneariesPrice.innerHTML = merceneariesPriceCounter;
    // dodawanie siły
    military += 10;
    militaryPower.innerHTML = military;
    // zmiana koloru przycisku
    colorChangeReverse(peasantsPriceCounter, peasantsButton);
    colorChangeReverse(merceneariesPriceCounter, merceneariesButton);
    colorChangeReverse(priestsPriceCounter, priestsButton);
    colorChangeReverse(knightsPriceCounter, knightsButton);
    colorChangeReverse(paladinsPriceCounter, paladinsButton);
    colorChangeReverse(dragonsPriceCounter, dragonsButton);
    cityColorChange(cityPriceCounter, cityPowerCounter, cityButton);
  }
});

priestsButton.addEventListener("click", () => {
  if (gold >= priestsPriceCounter) {
    // dodawanie jednostek
    priests++;
    priestsQuantity.innerHTML = priests;
    // odejmowanie złota
    gold -= priestsPriceCounter;
    goldCounter.innerHTML = gold;
    // podnoszenie ceny i zaokrąglanie
    priestsPriceCounter *= 1.3;
    priestsPriceCounter = priestsPriceCounter.toFixed(0);
    // aktualizacja stanu jednostek
    priestsPrice.innerHTML = priestsPriceCounter;
    // dodawanie siły
    military += 2;
    militaryPower.innerHTML = military;
    // zmiana koloru przycisku
    colorChangeReverse(peasantsPriceCounter, peasantsButton);
    colorChangeReverse(merceneariesPriceCounter, merceneariesButton);
    colorChangeReverse(priestsPriceCounter, priestsButton);
    colorChangeReverse(knightsPriceCounter, knightsButton);
    colorChangeReverse(paladinsPriceCounter, paladinsButton);
    colorChangeReverse(dragonsPriceCounter, dragonsButton);
    cityColorChange(cityPriceCounter, cityPowerCounter, cityButton);
  }
});

knightsButton.addEventListener("click", () => {
  if (gold >= knightsPriceCounter) {
    // dodawanie jednostek
    knights++;
    knightsQuantity.innerHTML = knights;
    // odejmowanie złota
    gold -= knightsPriceCounter;
    goldCounter.innerHTML = gold;
    // podnoszenie ceny i zaokrąglanie
    knightsPriceCounter *= 1.35;
    knightsPriceCounter = knightsPriceCounter.toFixed(0);
    // aktualizacja stanu jednostek
    knightsPrice.innerHTML = knightsPriceCounter;
    // dodawanie siły
    military += 25;
    militaryPower.innerHTML = military;
    // zmiana koloru przycisku
    colorChangeReverse(peasantsPriceCounter, peasantsButton);
    colorChangeReverse(merceneariesPriceCounter, merceneariesButton);
    colorChangeReverse(priestsPriceCounter, priestsButton);
    colorChangeReverse(knightsPriceCounter, knightsButton);
    colorChangeReverse(paladinsPriceCounter, paladinsButton);
    colorChangeReverse(dragonsPriceCounter, dragonsButton);
    cityColorChange(cityPriceCounter, cityPowerCounter, cityButton);
  }
});

paladinsButton.addEventListener("click", () => {
  if (gold >= paladinsPriceCounter) {
    // dodawanie jednostek
    paladins++;
    paladinsQuantity.innerHTML = paladins;
    // odejmowanie złota
    gold -= paladinsPriceCounter;
    goldCounter.innerHTML = gold;
    // podnoszenie ceny i zaokrąglanie
    paladinsPriceCounter *= 1.45;
    paladinsPriceCounter = paladinsPriceCounter.toFixed(0);
    // aktualizacja stanu jednostek
    paladinsPrice.innerHTML = paladinsPriceCounter;
    // dodawanie siły
    military += 30;
    militaryPower.innerHTML = military;
    // zmiana koloru przycisku
    colorChangeReverse(peasantsPriceCounter, peasantsButton);
    colorChangeReverse(merceneariesPriceCounter, merceneariesButton);
    colorChangeReverse(priestsPriceCounter, priestsButton);
    colorChangeReverse(knightsPriceCounter, knightsButton);
    colorChangeReverse(paladinsPriceCounter, paladinsButton);
    colorChangeReverse(dragonsPriceCounter, dragonsButton);
    cityColorChange(cityPriceCounter, cityPowerCounter, cityButton);
  }
});

dragonsButton.addEventListener("click", () => {
  if (gold >= dragonsPriceCounter) {
    // dodawanie jednostek
    dragons++;
    dragonsQuantity.innerHTML = dragons;
    // odejmowanie złota
    gold -= dragonsPriceCounter;
    goldCounter.innerHTML = gold;
    // podnoszenie ceny i zaokrąglanie
    dragonsPriceCounter *= 1.55;
    dragonsPriceCounter = dragonsPriceCounter.toFixed(0);
    // aktualizacja stanu jednostek
    dragonsPrice.innerHTML = dragonsPriceCounter;
    // dodawanie siły
    military += 100;
    militaryPower.innerHTML = military;
    // zmiana koloru przycisku
    colorChangeReverse(peasantsPriceCounter, peasantsButton);
    colorChangeReverse(merceneariesPriceCounter, merceneariesButton);
    colorChangeReverse(priestsPriceCounter, priestsButton);
    colorChangeReverse(knightsPriceCounter, knightsButton);
    colorChangeReverse(paladinsPriceCounter, paladinsButton);
    colorChangeReverse(dragonsPriceCounter, dragonsButton);
    cityColorChange(cityPriceCounter, cityPowerCounter, cityButton);
  }
});

// ulepszanie miasta
let templateCityImg = `<img class="section__image section__image--city" src="cityLv1.svg" alt="" />`;
const cityImg = document.querySelector(".section__container--image");

cityImg.innerHTML = templateCityImg;

cityButton.addEventListener("click", () => {
  if (
    (cityButton.innerHTML =
      "Upgrade City to Lv. 2" &&
      gold >= cityPriceCounter &&
      military >= cityPowerCounter)
  ) {
    // zmiana tesktu i obrazka
    cityButton.innerHTML = "Upgrade City to Lv. 3";
    templateCityImg = `<img class="section__image section__image--city" src="cityLv2.svg" alt="" />`;
    cityImg.innerHTML = templateCityImg;
    // odejmowanie złota
    gold -= cityPriceCounter;
    goldCounter.innerHTML = gold;
    // zmiana ceny miasta
    cityPriceCounter = 5000;
    cityPowerCounter = 300;
    cityPrice.innerHTML = cityPriceCounter;
    cityPower.innerHTML = cityPowerCounter;
    // zmiana koloru przycisku
    cityColorChangeReverse(cityPriceCounter, cityPowerCounter, cityButton);
  } else if (
    (cityButton.innerHTML =
      "Upgrade City to Lv. 3" &&
      gold >= cityPriceCounter &&
      military >= cityPowerCounter)
  ) {
    // zmiana tesktu i obrazka
    cityButton.innerHTML = "Upgrade City to Lv. 4";
    templateCityImg = `<img class="section__image section__image--city" src="cityLv3.svg" alt="" />`;
    cityImg.innerHTML = templateCityImg;
    // odejmowanie złota
    gold -= cityPriceCounter;
    goldCounter.innerHTML = gold;
    // zmiana ceny miasta
    cityPriceCounter = 15000;
    cityPowerCounter = 700;
    cityPrice.innerHTML = cityPriceCounter;
    cityPower.innerHTML = cityPowerCounter;
    // zmiana koloru przycisku
    cityColorChangeReverse(cityPriceCounter, cityPowerCounter, cityButton);
  } else if (
    (cityButton.innerHTML =
      "Upgrade City to Lv. 4" &&
      gold >= cityPriceCounter &&
      military >= cityPowerCounter)
  ) {
    // zmiana tesktu i obrazka
    cityButton.innerHTML = "Upgrade City to Lv. 5";
    templateCityImg = `<img class="section__image section__image--city" src="cityLv4.svg" alt="" />`;
    cityImg.innerHTML = templateCityImg;
    // odejmowanie złota
    gold -= cityPriceCounter;
    goldCounter.innerHTML = gold;
    // zmiana ceny miasta
    cityPriceCounter = 100000;
    cityPowerCounter = 2500;
    cityPrice.innerHTML = cityPriceCounter;
    cityPower.innerHTML = cityPowerCounter;
    // zmiana koloru przycisku
    cityColorChangeReverse(cityPriceCounter, cityPowerCounter, cityButton);
  } else if (
    (cityButton.innerHTML =
      "Upgrade City to Lv. 5" &&
      gold >= cityPriceCounter &&
      military >= cityPowerCounter)
  ) {
    // zmiana tesktu i obrazka
    cityButton.innerHTML = "City Fully upgraded";
    templateCityImg = `<img class="section__image section__image--city" src="cityLv5.svg" alt="" />`;
    cityImg.innerHTML = templateCityImg;
    // zmiana ceny miasta
    const cityFinalLevel = document.querySelector(".section__paragraph--city");
    cityFinalLevel.innerHTML = "No Upgrades Left";
  }
});
