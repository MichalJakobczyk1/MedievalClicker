import "../scss/main.scss";
import {
  classDelete,
  classAdd,
  colorChangeAll,
  colorChangeAllActive,
  cityColorChangeReverse,
  cityColorChange,
  colorChangeReverseCity,
  upgradeAnimation,
  colorChangeUpgradesAll,
  boughtUpgrade,
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
const peasantsImage = document.querySelector(".section__image--peasants");
const merceneariesImage = document.querySelector(
  ".section__image--mercenearies"
);
const priestsImage = document.querySelector(".section__image--priests");
const knightsImage = document.querySelector(".section__image--knights");
const paladinsImage = document.querySelector(".section__image--paladins");
const dragonsImage = document.querySelector(".section__image--dragons");

// liczniki jednostek
const peasantsQuantity = document.querySelector(".counter--peasant");
const peasantsUpgrade = document.querySelector(".peasants--upgrade");
const merceneariesQuantity = document.querySelector(".counter--merceneary");
const priestsQuantity = document.querySelector(".counter--priest");
const priestsUpgrade = document.querySelector(".priests--js");
const priestsMilitaryUpgrade = document.querySelector(".priests--upgrade");
priestsMilitaryUpgrade.innerHTML = 2;
const priestsDescritpion = document.querySelector(".priests--description");
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
export const cityButtonContent = document.querySelector(
  ".section__content--js"
);
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
export let priests = 0;
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
}

// generator złota na kliknięcie
goldCounterButton.addEventListener("click", () => {
  gold++;
  goldCounter.innerHTML = gold;
  // zmiana koloru przycisku
  colorChangeAllActive();
  colorChangeUpgradesAll();
  // animacja monety
  coin.classList.add("section__coin--animated");
  if (tileClicker1.classList.contains("section__tile--bought")) {
    gold += peasantsQuantity;
    goldCounter.innerHTML = gold;
    colorChangeAllActive();
    colorChangeUpgradesAll();
  }
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
    function peasantsDeanimation() {
      peasantsImage.classList.remove("animated");
    }
    setTimeout(peasantsDeanimation, 500);
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
    merceneariesPriceCounter *= 1.25;
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
    function merceneariesDeanimation() {
      merceneariesImage.classList.remove("animated");
    }
    setTimeout(merceneariesDeanimation, 500);
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
    function priestsDeanimation() {
      priestsImage.classList.remove("animated");
    }
    setTimeout(priestsDeanimation, 500);
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
    function knightsDeanimation() {
      knightsImage.classList.remove("animated");
    }
    setTimeout(knightsDeanimation, 500);
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
    function paladinsDeanimation() {
      paladinsImage.classList.remove("animated");
    }
    setTimeout(paladinsDeanimation, 500);
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
      setInterval(goldPerSecond, 1000);
      goldPerSecond();
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
    function dragonsDeanimation() {
      dragonsImage.classList.remove("animated");
    }
    setTimeout(dragonsDeanimation, 500);
    if (dragons % 1 === 0) {
      military += dragons * 2 * priests;
      militaryPower.innerHTML = military;
      priestsUpgrade.innerHTML = "Battle Priests";
      priestsDescritpion.innerHTML =
        " Battle Priests are special units which march to the war under the wings od dragon destruction.";
      priestsMilitaryUpgrade.innerHTML = dragons * 2 + 2;
    }
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
      cityPriceCounter = 8000;
      cityPowerCounter = 350;
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
    cityPriceCounter = 20000;
    cityPowerCounter = 1250;
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
    cityPowerCounter = 5000;
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

// przyciski ulepszeń
const upgradeAll1 = document.querySelector(".section__button--all1");
const upgradeAll2 = document.querySelector(".section__button--all2");
const upgradeClicker1 = document.querySelector(".section__button--clicker1");
const upgradeClicker2 = document.querySelector(".section__button--clicker2");
const upgradePeasants1 = document.querySelector(".section__button--peasants1");
const upgradePeasants2 = document.querySelector(".section__button--peasants2");
const upgradeMercenearies1 = document.querySelector(
  ".section__button--mercenearies1"
);
const upgradeMercenearies2 = document.querySelector(
  ".section__button--mercenearies2"
);
const upgradePriests1 = document.querySelector(".section__button--priests1");
const upgradePriests2 = document.querySelector(".section__button--priests2");
const upgradeKnights1 = document.querySelector(".section__button--knights1");
const upgradeKnights2 = document.querySelector(".section__button--knights2");
const upgradePaladins1 = document.querySelector(".section__button--paladins1");
const upgradePaladins2 = document.querySelector(".section__button--paladins2");
const upgradeDragons1 = document.querySelector(".section__button--dragons1");
const upgradeDragons2 = document.querySelector(".section__button--dragons2");

// komórki ulepszeń
export const tileAll1 = document.querySelector(".section__tile--all1");
export const tileAll2 = document.querySelector(".section__tile--all2");
export const tileClicker1 = document.querySelector(".section__tile--clicker1");
export const tileClicker2 = document.querySelector(".section__tile--clicker2");
export const tilePeasants1 = document.querySelector(
  ".section__tile--peasants1"
);
export const tilePeasants2 = document.querySelector(
  ".section__tile--peasants2"
);
export const tileMercenearies1 = document.querySelector(
  ".section__tile--mercenearies1"
);
export const tileMercenearies2 = document.querySelector(
  ".section__tile--mercenearies2"
);
export const tilePriests1 = document.querySelector(".section__tile--priests1");
export const tilePriests2 = document.querySelector(".section__tile--priests2");
export const tileKnights1 = document.querySelector(".section__tile--knights1");
export const tileKnights2 = document.querySelector(".section__tile--knights2");
export const tilePaladins1 = document.querySelector(
  ".section__tile--paladins1"
);
export const tilePaladins2 = document.querySelector(
  ".section__tile--paladins2"
);
export const tileDragons1 = document.querySelector(".section__tile--dragons1");
export const tileDragons2 = document.querySelector(".section__tile--dragons2");

export const upgradeTitle = document.querySelector(".section__h3--upgrades");
export const upgradeDescription = document.querySelector(
  ".section__paragraph--upgrades"
);

upgradeAll1.addEventListener("mouseenter", () =>
  upgradeAnimation(
    "appear 0.5s ease-in both",
    "appear 0.5s 0.25s ease-in both",
    "Unstopable Power",
    `Double your current military power. <span class="section__paragraph--required">Required:</span> 75000 Gold <span class="section__paragraph--required">City Lv:</span> 5`
  )
);

upgradeAll1.addEventListener("mouseleave", () =>
  upgradeAnimation(
    "disappear 0.5s ease-in both",
    "disappear 0.5s 0.25s ease-in both",
    "Unstopable Power",
    `Double your current military power. <span class="section__paragraph--required">Required:</span> 75000 Gold <span class="section__paragraph--required">City Lv:</span> 5`
  )
);

upgradeAll1.addEventListener("click", () => {
  if (tileAll1.classList.contains("section__tile--available")) {
    military * 2;
    militaryPower.innerHTML = military;
    boughtUpgrade(tileAll1);
  }
});

upgradeAll2.addEventListener("mouseenter", () =>
  upgradeAnimation(
    "appear 0.5s ease-in both",
    "appear 0.5s 0.25s ease-in both",
    "Taxes",
    `Gain +10 gold per unit <span class="section__paragraph--required">Required:</span> 500 Military Power <span class="section__paragraph--required">City Lv:</span> 2`
  )
);

upgradeAll2.addEventListener("mouseleave", () =>
  upgradeAnimation(
    "disappear 0.5s ease-in both",
    "disappear 0.5s 0.25s ease-in both",
    "Taxes",
    `Gain +10 gold per unit <span class="section__paragraph--required">Required:</span> 500 Military Power <span class="section__paragraph--required">City Lv:</span> 2`
  )
);

upgradeAll2.addEventListener("click", () => {
  if (tileAll2.classList.contains("section__tile--available")) {
    (peasantsQuantity += merceneariesQuantity += priestsQuantity += knightsQuantity += paladinsQuantity += dragonsQuantity) *
      10 ===
      gold;
    goldCounter.innerHTML = gold;
    boughtUpgrade(tileAll2);
  }
});

upgradeClicker1.addEventListener("mouseenter", () =>
  upgradeAnimation(
    "appear 0.5s ease-in both",
    "appear 0.5s 0.25s ease-in both",
    "Click, Click",
    `Clicking generates +1 gold per every peasant <span class="section__paragraph--required">Required:</span> 2500 Gold <span class="section__paragraph--required">City Lv:</span> 2`
  )
);

upgradeClicker1.addEventListener("mouseleave", () =>
  upgradeAnimation(
    "disappear 0.5s ease-in both",
    "disappear 0.5s 0.25s ease-in both",
    "Click, Click",
    `Clicking generates +1 gold per every peasant <span class="section__paragraph--required">Required:</span> 2500 Gold <span class="section__paragraph--required">City Lv:</span> 2`
  )
);

upgradeClicker1.addEventListener("click", () => {
  if (tileClicker1.classList.contains("section__tile--available")) {
    boughtUpgrade(tileClicker1);
  }
});

upgradeClicker2.addEventListener("mouseenter", () =>
  upgradeAnimation(
    "appear 0.5s ease-in both",
    "appear 0.5s 0.25s ease-in both",
    "Golden Clicks",
    `Clicking generates +2% of your gold per second <span class="section__paragraph--required">Required:</span> 10000 Gold <span class="section__paragraph--required">City Lv:</span> 3`
  )
);

upgradeClicker2.addEventListener("mouseleave", () =>
  upgradeAnimation(
    "disappear 0.5s ease-in both",
    "disappear 0.5s 0.25s ease-in both",
    "Golden Clicks",
    `Clicking generates +2% of your gold per second <span class="section__paragraph--required">Required:</span> 10000 Gold <span class="section__paragraph--required">City Lv:</span> 3`
  )
);

upgradePeasants1.addEventListener("mouseenter", () =>
  upgradeAnimation(
    "appear 0.5s ease-in both",
    "appear 0.5s 0.25s ease-in both",
    "Militia",
    `+1 Military Power <span class="section__paragraph--required">Required:</span> 5000 Gold <span class="section__paragraph--required">City Lv:</span> 2`
  )
);

upgradePeasants1.addEventListener("mouseleave", () =>
  upgradeAnimation(
    "disappear 0.5s ease-in both",
    "disappear 0.5s 0.25s ease-in both",
    "Militia",
    `+1 Military Power <span class="section__paragraph--required">Required:</span> 5000 Gold <span class="section__paragraph--required">City Lv:</span> 2`
  )
);

upgradePeasants2.addEventListener("mouseenter", () =>
  upgradeAnimation(
    "appear 0.5s ease-in both",
    "appear 0.5s 0.25s ease-in both",
    "Savings",
    `Every Peasant has a chance for extra 1 gold every 2 seconds <span class="section__paragraph--required">Required:</span> 7000 Gold <span class="section__paragraph--required">City Lv:</span> 3`
  )
);

upgradePeasants2.addEventListener("mouseleave", () =>
  upgradeAnimation(
    "disappear 0.5s ease-in both",
    "disappear 0.5s 0.25s ease-in both",
    "Savings",
    `Every Peasant has a chance for extra 1 gold every 2 seconds <span class="section__paragraph--required">Required:</span> 7000 Gold <span class="section__paragraph--required">City Lv:</span> 3`
  )
);

upgradeMercenearies1.addEventListener("mouseenter", () =>
  upgradeAnimation(
    "appear 0.5s ease-in both",
    "appear 0.5s 0.25s ease-in both",
    "Bought Force",
    `Gain military power equal to 5% of your current gold per second <span class="section__paragraph--required">Required:</span> 10000 Gold <span class="section__paragraph--required">City Lv:</span> 3`
  )
);

upgradeMercenearies1.addEventListener("mouseleave", () =>
  upgradeAnimation(
    "disappear 0.5s ease-in both",
    "disappear 0.5s 0.25s ease-in both",
    "Bought Force",
    `Gain military power equal to 5% of your current gold per second <span class="section__paragraph--required">Required:</span> 10000 Gold <span class="section__paragraph--required">City Lv:</span> 3`
  )
);

upgradeMercenearies2.addEventListener("mouseenter", () =>
  upgradeAnimation(
    "appear 0.5s ease-in both",
    "appear 0.5s 0.25s ease-in both",
    "Double the power",
    `Double your mercenearies current military power <span class="section__paragraph--required">Required:</span> 15000 Gold <span class="section__paragraph--required">City Lv:</span> 3`
  )
);

upgradeMercenearies2.addEventListener("mouseleave", () =>
  upgradeAnimation(
    "disappear 0.5s ease-in both",
    "disappear 0.5s 0.25s ease-in both",
    "Double the power",
    `Double your mercenearies current military power <span class="section__paragraph--required">Required:</span> 15000 Gold <span class="section__paragraph--required">City Lv:</span> 3`
  )
);

upgradePriests1.addEventListener("mouseenter", () =>
  upgradeAnimation(
    "appear 0.5s ease-in both",
    "appear 0.5s 0.25s ease-in both",
    "Reforms",
    `Peasants gains +1 gold per second if you have 15 or more priests <span class="section__paragraph--required">Required:</span> 5000 Gold <span class="section__paragraph--required">City Lv:</span> 2 <span class="section__paragraph--required">Priests:</span> 15`
  )
);

upgradePriests1.addEventListener("mouseleave", () =>
  upgradeAnimation(
    "disappear 0.5s ease-in both",
    "disappear 0.5s 0.25s ease-in both",
    "Reforms",
    `Peasants gains +1 gold per second if you have 15 or more priests <span class="section__paragraph--required">Required:</span> 5000 Gold <span class="section__paragraph--required">City Lv:</span> 2 <span class="section__paragraph--required">Priests:</span> 15`
  )
);

upgradePriests2.addEventListener("mouseenter", () =>
  upgradeAnimation(
    "appear 0.5s ease-in both",
    "appear 0.5s 0.25s ease-in both",
    "True Fire",
    `Dragons gains +25 military power <span class="section__paragraph--required">Required:</span> 25000 Gold <span class="section__paragraph--required">City Lv:</span> 4`
  )
);

upgradePriests2.addEventListener("mouseleave", () =>
  upgradeAnimation(
    "disappear 0.5s ease-in both",
    "disappear 0.5s 0.25s ease-in both",
    "True Fire",
    `Dragons gains +25 military power <span class="section__paragraph--required">Required:</span> 5000 Gold <span class="section__paragraph--required">City Lv:</span> 2`
  )
);

upgradeKnights1.addEventListener("mouseenter", () =>
  upgradeAnimation(
    "appear 0.5s ease-in both",
    "appear 0.5s 0.25s ease-in both",
    "Spoils Of War",
    `Knights gains 50 gold instead of 30 on their ability <span class="section__paragraph--required">Required:</span> 8000 Gold <span class="section__paragraph--required">City Lv:</span> 2`
  )
);

upgradeKnights1.addEventListener("mouseleave", () =>
  upgradeAnimation(
    "disappear 0.5s ease-in both",
    "disappear 0.5s 0.25s ease-in both",
    "Spoils Of War",
    `Knights gains 50 gold instead of 30 on their ability <span class="section__paragraph--required">Required:</span> 8000 Gold <span class="section__paragraph--required">City Lv:</span> 2`
  )
);

upgradeKnights2.addEventListener("mouseenter", () =>
  upgradeAnimation(
    "appear 0.5s ease-in both",
    "appear 0.5s 0.25s ease-in both",
    "Fief",
    `+1 military power for mercenearies per knight <span class="section__paragraph--required">Required:</span> 15000 Gold <span class="section__paragraph--required">City Lv:</span> 4`
  )
);

upgradeKnights2.addEventListener("mouseleave", () =>
  upgradeAnimation(
    "disappear 0.5s ease-in both",
    "disappear 0.5s 0.25s ease-in both",
    "Fief",
    `+1 military power for mercenearies per knight <span class="section__paragraph--required">Required:</span> 15000 Gold <span class="section__paragraph--required">City Lv:</span> 4`
  )
);

upgradePaladins1.addEventListener("mouseenter", () =>
  upgradeAnimation(
    "appear 0.5s ease-in both",
    "appear 0.5s 0.25s ease-in both",
    "Inspire",
    `+1 gold to paladins ability <span class="section__paragraph--required">Required:</span> 10000 Gold <span class="section__paragraph--required">City Lv:</span> 3`
  )
);

upgradePaladins1.addEventListener("mouseleave", () =>
  upgradeAnimation(
    "disappear 0.5s ease-in both",
    "disappear 0.5s 0.25s ease-in both",
    "Inspire",
    `+1 gold to paladins ability <span class="section__paragraph--required">Required:</span> 10000 Gold <span class="section__paragraph--required">City Lv:</span> 3`
  )
);

upgradePaladins2.addEventListener("mouseenter", () =>
  upgradeAnimation(
    "appear 0.5s ease-in both",
    "appear 0.5s 0.25s ease-in both",
    "Holy Clicker",
    `+5 gold per click for every paladin <span class="section__paragraph--required">Required:</span> 7500 Gold <span class="section__paragraph--required">City Lv:</span> 2`
  )
);

upgradePaladins2.addEventListener("mouseleave", () =>
  upgradeAnimation(
    "disappear 0.5s ease-in both",
    "disappear 0.5s 0.25s ease-in both",
    "Holy Clicker",
    `+5 gold per click for every paladin <span class="section__paragraph--required">Required:</span> 7500 Gold <span class="section__paragraph--required">City Lv:</span> 2`
  )
);

upgradeDragons1.addEventListener("mouseenter", () =>
  upgradeAnimation(
    "appear 0.5s ease-in both",
    "appear 0.5s 0.25s ease-in both",
    "Call To Arms",
    `Battle priests, knights and paladins gains +1 military power per dragon <span class="section__paragraph--required">Required:</span> 25000 Gold <span class="section__paragraph--required">City Lv:</span> 4`
  )
);

upgradeDragons1.addEventListener("mouseleave", () =>
  upgradeAnimation(
    "disappear 0.5s ease-in both",
    "disappear 0.5s 0.25s ease-in both",
    "Call To Arms",
    `Battle priests, knights and paladins gains +1 military power per dragon <span class="section__paragraph--required">Required:</span> 25000 Gold <span class="section__paragraph--required">City Lv:</span> 4`
  )
);

upgradeDragons2.addEventListener("mouseenter", () =>
  upgradeAnimation(
    "appear 0.5s ease-in both",
    "appear 0.5s 0.25s ease-in both",
    "Dragon Might",
    `Dragons gains +50 military power <span class="section__paragraph--required">Required:</span> 75000 Gold <span class="section__paragraph--required">City Lv:</span> 5`
  )
);

upgradeDragons2.addEventListener("mouseleave", () =>
  upgradeAnimation(
    "disappear 0.5s ease-in both",
    "disappear 0.5s 0.25s ease-in both",
    "Dragon Might",
    `Dragons gains +50 military power <span class="section__paragraph--required">Required:</span> 75000 Gold <span class="section__paragraph--required">City Lv:</span> 5`
  )
);
