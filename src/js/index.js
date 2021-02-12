import "../scss/main.scss";
import {
  classDelete,
  classAdd,
  colorChangeAll,
  colorChangeAllActive,
  cityColorChangeReverse,
  cityColorChange,
  colorChangeReverseCity,
} from "./modules/functions";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

// generator złota
const goldCounterButton = document.querySelector(".section__button--clicker");
const goldCounter = document.querySelector(".counter--gold");
export const coin = document.querySelector(".section__coin--js");

// obrazki jednostek
const peasantsImage = document.querySelector(".peasants__image");
const merceneariesImage = document.querySelector(".mercenearies__image");
const priestsImage = document.querySelector(".priests__image");
const knightsImage = document.querySelector(".knights__image");
const paladinsImage = document.querySelector(".paladins__image");
const dragonsImage = document.querySelector(".dragons__image");

// liczniki jednostek
const peasantsQuantity = document.querySelector(".counter--peasant");
const peasantsUpgrade = document.querySelector(".peasants--upgrade");
const merceneariesQuantity = document.querySelector(".counter--merceneary");
const priestsQuantity = document.querySelector(".counter--priest");
const knightsQuantity = document.querySelector(".counter--knight");
const paladinsQuantity = document.querySelector(".counter--paladin");
const dragonsQuantity = document.querySelector(".counter--dragon");

// przyciski kupowania jednostek
export const peasantsButton = document.querySelector(
  ".section__button--peasant"
);
export const merceneariesButton = document.querySelector(
  ".section__button--merceneary"
);
export const priestsButton = document.querySelector(".section__button--priest");
export const knightsButton = document.querySelector(".section__button--knight");
export const paladinsButton = document.querySelector(
  ".section__button--paladin"
);
export const dragonsButton = document.querySelector(".section__button--dragon");

// ceny jednostek
const peasantsPrice = document.querySelector(".price--peasant");
const merceneariesPrice = document.querySelector(".price--merceneary");
const priestsPrice = document.querySelector(".price--priest");
const knightsPrice = document.querySelector(".price--knight");
const paladinsPrice = document.querySelector(".price--paladin");
const dragonsPrice = document.querySelector(".price--dragons");

// miasto
export const cityButton = document.querySelector(".section__button--city");
const cityButtonContent = document.querySelector(".section__content--js");
const cityPrice = document.querySelector(".price--city");
const cityPower = document.querySelector(".power--city");
const militaryPower = document.querySelector(".counter--power");
const cityCounters = document.querySelector(".section__paragraph--lv1");

export let cityPriceCounter = 1000;
export let cityPowerCounter = 100;

cityButtonContent.innerHTML = " Upgrade City to Lv. 2";
cityPrice.innerHTML = cityPriceCounter;
cityPower.innerHTML = cityPowerCounter;

// ulepszanie miasta
let templateCityImg = `<img class="section__image section__image--city" src="cityLv1.svg" alt="" />`;
const cityImgContainer = document.querySelector(".section__container--image");
const cityImg = document.querySelector(".section__image--city");

cityImgContainer.innerHTML = templateCityImg;

// liczniki złota i siły
export let gold = 0;
export let military = 0;
const goldPerSecondContainer = document.querySelector(
  ".counter--gold-per-second"
);

// liczniki stanu jednostek
let peasants = 0;
let mercenearies = 0;
let priests = 0;
let knights = 0;
let paladins = 0;
let dragons = 0;

// liczniki ceny jednostek
export let peasantsPriceCounter = 10;
export let merceneariesPriceCounter = 100;
export let priestsPriceCounter = 100;
export let knightsPriceCounter = 300;
export let paladinsPriceCounter = 1000;
export let dragonsPriceCounter = 3000;

// generowanie złota co sekundę
function goldPerSecond() {
  gold += peasants * 2;
  gold += mercenearies * 2;
  gold += priests * 10;
  gold += knights * 5;
  gold += paladins * 25;
  gold += dragons * 40;
  goldCounter.innerHTML = gold;
  // zmiana koloru przycisku
  colorChangeAllActive();
  // usuwanie animacji
  setTimeout(classDelete(coin, "section__coin--animated"), 100);
  setTimeout(classDelete(peasantsImage, "animated"), 1000);
  setTimeout(classDelete(merceneariesImage, "animated"), 1000);
  setTimeout(classDelete(priestsImage, "animated"), 1000);
  setTimeout(classDelete(knightsImage, "animated"), 1000);
  setTimeout(classDelete(paladinsImage, "animated"), 1000);
  setTimeout(classDelete(dragonsImage, "animated"), 1000);
}

// generator złota na kliknięcie
goldCounterButton.addEventListener("click", () => {
  gold++;
  goldCounter.innerHTML = gold;
  // zmiana koloru przycisku
  colorChangeAllActive();
  // animacja monety
  coin.classList.add("section__coin--animated");
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
    // aktualizacja licznika złota co sekundę
    let goldPerSecondCounter =
      peasants * 2 +
      mercenearies * 2 +
      priests * 10 +
      knights * 5 +
      paladins * 25 +
      dragons * 40;
    goldPerSecondContainer.innerHTML = goldPerSecondCounter;
    // podnoszenie ceny i zaokrąglanie
    peasantsPriceCounter *= 1.15;
    peasantsPriceCounter = peasantsPriceCounter.toFixed(0);
    // aktualizacja stanu jednostek
    peasantsPrice.innerHTML = peasantsPriceCounter;
    // dodawanie siły
    military += 1;
    militaryPower.innerHTML = military;
    // zmiana koloru przycisku
    colorChangeAll();
    // animacja obrazka
    peasantsImage.classList.add("animated");
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
    // aktualizacja licznika złota co sekundę
    let goldPerSecondCounter =
      peasants * 2 +
      mercenearies * 2 +
      priests * 10 +
      knights * 5 +
      paladins * 25 +
      dragons * 40;
    goldPerSecondContainer.innerHTML = goldPerSecondCounter;
    // podnoszenie ceny i zaokrąglanie
    merceneariesPriceCounter *= 1.3;
    merceneariesPriceCounter = merceneariesPriceCounter.toFixed(0);
    // aktualizacja stanu jednostek
    merceneariesPrice.innerHTML = merceneariesPriceCounter;
    // dodawanie siły
    military += 10;
    militaryPower.innerHTML = military;
    // zmiana koloru przycisku
    colorChangeAll();
    // animacja obrazka
    merceneariesImage.classList.add("animated");
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
    // aktualizacja licznika złota co sekundę
    let goldPerSecondCounter =
      peasants * 2 +
      mercenearies * 2 +
      priests * 10 +
      knights * 5 +
      paladins * 25 +
      dragons * 40;
    goldPerSecondContainer.innerHTML = goldPerSecondCounter;
    // podnoszenie ceny i zaokrąglanie
    priestsPriceCounter *= 1.3;
    priestsPriceCounter = priestsPriceCounter.toFixed(0);
    // aktualizacja stanu jednostek
    priestsPrice.innerHTML = priestsPriceCounter;
    // dodawanie siły
    military += 2;
    militaryPower.innerHTML = military;
    // zmiana koloru przycisku
    colorChangeAll();
    // animacja obrazka
    priestsImage.classList.add("animated");
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
    // aktualizacja licznika złota co sekundę
    let goldPerSecondCounter =
      peasants * 2 +
      mercenearies * 2 +
      priests * 10 +
      knights * 5 +
      paladins * 25 +
      dragons * 40;
    goldPerSecondContainer.innerHTML = goldPerSecondCounter;
    // podnoszenie ceny i zaokrąglanie
    knightsPriceCounter *= 1.35;
    knightsPriceCounter = knightsPriceCounter.toFixed(0);
    // aktualizacja stanu jednostek
    knightsPrice.innerHTML = knightsPriceCounter;
    // dodawanie siły
    military += 25;
    militaryPower.innerHTML = military;
    // zmiana koloru przycisku
    colorChangeAll();
    // animacja obrazka
    knightsImage.classList.add("animated");
    // umiejętność
    if (knights % 1 === 0) {
      function knightsAbility() {
        let randomizerKnights = Math.floor(Math.random() * 2) + 1;
        if (randomizerKnights === 1) {
          gold += 30;
        }
      }
      setInterval(knightsAbility, 5000);
    }
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
    // aktualizacja licznika złota co sekundę
    let goldPerSecondCounter =
      peasants * 2 +
      mercenearies * 2 +
      priests * 10 +
      knights * 5 +
      paladins * 25 +
      dragons * 40;
    goldPerSecondContainer.innerHTML = goldPerSecondCounter;
    // podnoszenie ceny i zaokrąglanie
    paladinsPriceCounter *= 1.45;
    paladinsPriceCounter = paladinsPriceCounter.toFixed(0);
    // aktualizacja stanu jednostek
    paladinsPrice.innerHTML = paladinsPriceCounter;
    // dodawanie siły
    military += 30;
    militaryPower.innerHTML = military;
    // zmiana koloru przycisku
    colorChangeAll();
    // animacja obrazka
    paladinsImage.classList.add("animated");
    if (paladins % 1 === 0) {
      function paladinsAbility() {
        let upgrade = 2 + paladins;
        let goldPerSecondCounter =
          peasants * upgrade +
          mercenearies * 2 +
          priests * 10 +
          knights * 5 +
          paladins * 25 +
          dragons * 40;
        goldPerSecondContainer.innerHTML = goldPerSecondCounter;
        peasantsUpgrade.innerHTML = upgrade;
      }
      paladinsAbility();
    }
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
    // aktualizacja licznika złota co sekundę
    let goldPerSecondCounter =
      peasants * 2 +
      mercenearies * 2 +
      priests * 10 +
      knights * 5 +
      paladins * 25 +
      dragons * 40;
    goldPerSecondContainer.innerHTML = goldPerSecondCounter;
    // podnoszenie ceny i zaokrąglanie
    dragonsPriceCounter *= 1.55;
    dragonsPriceCounter = dragonsPriceCounter.toFixed(0);
    // aktualizacja stanu jednostek
    dragonsPrice.innerHTML = dragonsPriceCounter;
    // dodawanie siły
    military += 100;
    militaryPower.innerHTML = military;
    // zmiana koloru przycisku
    colorChangeAll();
    // animacja obrazka
    dragonsImage.classList.add("animated");
  }
});

cityButton.addEventListener("click", () => {
  if (
    cityButtonContent.classList.contains("city--lv1") &&
    gold >= cityPriceCounter &&
    military >= cityPowerCounter
  ) {
    // animacja obrazka
    templateCityImg = `<img class="section__image section__image--city-upgrade" src="cityLv1.svg" alt="" />`;
    cityImgContainer.innerHTML = templateCityImg;
    cityButtonContent.innerHTML = "Upgrade City to Lv. 3";
    // animacja paragrafu
    cityCounters.classList.remove("section__paragraph--lv1");
    cityCounters.classList.add("section__paragraph--lv1-deanimated");
    // animacja treści przycisku
    cityButtonContent.classList.remove("section__content");
    cityButtonContent.classList.add("section__content--deanimated");
    // funkcja
    function cityRender() {
      // zmiana tesktu i obrazka
      cityButtonContent.classList.remove("city--lv1");
      cityButtonContent.classList.add("city--lv2");
      cityCounters.classList.remove("section__paragraph--lv1-deanimated");
      cityCounters.classList.add("section__paragraph--lv1");
      cityButtonContent.classList.remove("section__content--deanimated");
      cityButtonContent.classList.add("section__content");

      templateCityImg = `<img class="section__image section__image--city" src="cityLv2.svg" alt="" />`;
      cityImgContainer.innerHTML = templateCityImg;
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
      colorChangeReverseCity();
    }
    setTimeout(cityRender, 2000);
  } else if (
    cityButtonContent.classList.contains("city--lv2") &&
    gold >= cityPriceCounter &&
    military >= cityPowerCounter
  ) {
    // zmiana tesktu i obrazka
    cityButtonContent.classList.remove("city--lv2");
    cityButtonContent.classList.add("city--lv3");
    cityButtonContent.innerHTML = "Upgrade City to Lv. 4";
    templateCityImg = `<img class="section__image section__image--city" src="cityLv3.svg" alt="" />`;
    cityImgContainer.innerHTML = templateCityImg;
    // odejmowanie złota
    gold -= cityPriceCounter;
    goldCounter.innerHTML = gold;
    // zmiana ceny miasta
    cityPriceCounter = 15000;
    cityPowerCounter = 1000;
    cityPrice.innerHTML = cityPriceCounter;
    cityPower.innerHTML = cityPowerCounter;
    // zmiana koloru przycisku
    cityColorChangeReverse(cityPriceCounter, cityPowerCounter, cityButton);
    colorChangeReverseCity();
  } else if (
    cityButtonContent.classList.contains("city--lv3") &&
    gold >= cityPriceCounter &&
    military >= cityPowerCounter
  ) {
    // zmiana tesktu i obrazka
    cityButtonContent.classList.remove("city--lv3");
    cityButtonContent.classList.add("city--lv4");
    cityButtonContent.innerHTML = "Upgrade City to Lv. 5";
    templateCityImg = `<img class="section__image section__image--city" src="cityLv4.svg" alt="" />`;
    cityImgContainer.innerHTML = templateCityImg;
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
    colorChangeReverseCity();
  } else if (
    cityButtonContent.classList.contains("city--lv4") &&
    gold >= cityPriceCounter &&
    military >= cityPowerCounter
  ) {
    // zmiana tesktu i obrazka
    cityButtonContent.classList.remove("city--lv4");
    cityButtonContent.classList.add("city--lv5");
    cityButtonContent.innerHTML = "City Fully upgraded";
    templateCityImg = `<img class="section__image section__image--city" src="cityLv5.svg" alt="" />`;
    cityImgContainer.innerHTML = templateCityImg;
    // zmiana ceny miasta
    const cityFinalLevel = document.querySelector(".section__paragraph--city");
    cityFinalLevel.innerHTML = "No Upgrades Left";
  }
});
