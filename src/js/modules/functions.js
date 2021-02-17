import {
  coin,
  gold,
  priests,
  military,
  peasantsPriceCounter,
  merceneariesPriceCounter,
  priestsPriceCounter,
  knightsPriceCounter,
  paladinsPriceCounter,
  dragonsPriceCounter,
  cityPriceCounter,
  cityPowerCounter,
  cityButton,
  cityButtonContent,
  peasantsButton,
  merceneariesButton,
  priestsButton,
  knightsButton,
  paladinsButton,
  dragonsButton,
  tileAll1,
  tileAll2,
  tileClicker1,
  tileClicker2,
  tilePeasants1,
  tilePeasants2,
  tileMercenearies1,
  tileMercenearies2,
  tilePriests1,
  tilePriests2,
  tileKnights1,
  tileKnights2,
  tilePaladins1,
  tilePaladins2,
  tileDragons1,
  tileDragons2,
  upgradeTitle,
  upgradeDescription,
} from "../index";

export function classDelete(element, elementClass) {
  element.classList.remove(elementClass);
}

export function classAdd(element, elementClass) {
  element.classList.add(elementClass);
}

export function colorChange(priceCounter, button) {
  if (gold >= priceCounter) {
    button.classList.remove("section__button--buy");
    button.classList.add("section__button--available");
  }
}
export function colorChangeReverse(priceCounter, button) {
  if (gold <= priceCounter) {
    button.classList.remove("section__button--available");
    button.classList.add("section__button--buy");
  }
}
export function cityColorChange(priceCounter, powerCounter, button) {
  if (gold >= priceCounter && military >= powerCounter) {
    button.classList.remove("section__button--buy");
    button.classList.add("section__button--available");
  }
}
export function cityColorChangeReverse(priceCounter, powerCounter, button) {
  if (gold <= priceCounter && military <= powerCounter) {
    button.classList.remove("section__button--available");
    button.classList.add("section__button--buy");
  }
}

function colorChangeUpgradesLv2(
  value,
  price,
  element,
  cityLevelFirst,
  cityLevelSecond,
  cityLevelThird,
  cityLevelFourth
) {
  if (
    value >= price &&
    (cityButtonContent.classList.contains(cityLevelFirst) ||
      cityButtonContent.classList.contains(cityLevelSecond) ||
      cityButtonContent.classList.contains(cityLevelThird) ||
      cityButtonContent.classList.contains(cityLevelFourth))
  ) {
    element.classList.remove("section__tile--buy");
    element.classList.add("section__tile--available");
  }
}

function colorChangeUpgradesLv3(
  value,
  price,
  element,
  cityLevelFirst,
  cityLevelSecond,
  cityLevelThird
) {
  if (
    value >= price &&
    (cityButtonContent.classList.contains(cityLevelFirst) ||
      cityButtonContent.classList.contains(cityLevelSecond) ||
      cityButtonContent.classList.contains(cityLevelThird))
  ) {
    element.classList.remove("section__tile--buy");
    element.classList.add("section__tile--available");
  }
}

function colorChangeUpgradesLv4(
  value,
  price,
  element,
  cityLevelFirst,
  cityLevelSecond
) {
  if (
    value >= price &&
    (cityButtonContent.classList.contains(cityLevelFirst) ||
      cityButtonContent.classList.contains(cityLevelSecond))
  ) {
    element.classList.remove("section__tile--buy");
    element.classList.add("section__tile--available");
  }
}

function colorChangeUpgradesLv5(value, price, element, cityLevelFirst) {
  if (value >= price && cityButtonContent.classList.contains(cityLevelFirst)) {
    element.classList.remove("section__tile--buy");
    element.classList.add("section__tile--available");
  }
}

function colorChangeUpgradesPriests(
  value,
  price,
  element,
  cityLevelFirst,
  cityLevelSecond,
  cityLevelThird,
  cityLevelFourth
) {
  if (
    value >= price &&
    (cityButtonContent.classList.contains(cityLevelFirst) ||
      cityButtonContent.classList.contains(cityLevelSecond) ||
      cityButtonContent.classList.contains(cityLevelThird) ||
      cityButtonContent.classList.contains(cityLevelFourth)) &&
    priests >= 15
  ) {
    element.classList.remove("section__tile--buy");
    element.classList.add("section__tile--available");
  }
}

export function colorChangeUpgradesAll() {
  colorChangeUpgradesLv5(gold, 75000, tileAll1, "city--lv5");
  colorChangeUpgradesLv2(
    military,
    500,
    tileAll2,
    "city--lv2",
    "city--lv3",
    "city--lv4",
    "city--lv5"
  );
  colorChangeUpgradesLv2(
    gold,
    2500,
    tileClicker1,
    "city--lv2",
    "city--lv3",
    "city--lv4",
    "city--lv5"
  );
  colorChangeUpgradesLv3(
    gold,
    10000,
    tileClicker2,
    "city--lv3",
    "city--lv4",
    "city--lv5"
  );
  colorChangeUpgradesLv2(
    gold,
    5000,
    tilePeasants1,
    "city--lv2",
    "city--lv3",
    "city--lv4",
    "city--lv5"
  );
  colorChangeUpgradesLv3(
    gold,
    7000,
    tilePeasants1,
    "city--lv3",
    "city--lv4",
    "city--lv5"
  );
  colorChangeUpgradesLv3(
    gold,
    10000,
    tileMercenearies1,
    "city--lv3",
    "city--lv4",
    "city--lv5"
  );
  colorChangeUpgradesLv3(
    gold,
    15000,
    tileMercenearies2,
    "city--lv3",
    "city--lv4",
    "city--lv5"
  );
  colorChangeUpgradesPriests(
    gold,
    5000,
    tilePriests1,
    "city--lv2",
    "city--lv3",
    "city--lv4",
    "city--lv5"
  );
  colorChangeUpgradesLv3(gold, 25000, tilePriests2, "city--lv4", "city--lv5");
  colorChangeUpgradesLv2(
    gold,
    8000,
    tileKnights1,
    "city--lv2",
    "city--lv3",
    "city--lv4",
    "city--lv5"
  );
  colorChangeUpgradesLv4(gold, 15000, tileKnights2, "city--lv4", "city--lv5");
  colorChangeUpgradesLv3(
    gold,
    10000,
    tilePaladins1,
    "city--lv3",
    "city--lv4",
    "city--lv5"
  );
  colorChangeUpgradesLv2(
    gold,
    7500,
    tilePaladins2,
    "city--lv2",
    "city--lv3",
    "city--lv4",
    "city--lv5"
  );
  colorChangeUpgradesLv4(gold, 25000, tileDragons1, "city--lv4", "city--lv5");
  colorChangeUpgradesLv5(gold, 75000, tileDragons2, "city--lv5");
}

export function colorChangeAll() {
  colorChange(peasantsPriceCounter, peasantsButton);
  colorChangeReverse(peasantsPriceCounter, peasantsButton);
  colorChange(merceneariesPriceCounter, merceneariesButton);
  colorChangeReverse(merceneariesPriceCounter, merceneariesButton);
  colorChange(priestsPriceCounter, priestsButton);
  colorChangeReverse(priestsPriceCounter, priestsButton);
  colorChange(knightsPriceCounter, knightsButton);
  colorChangeReverse(knightsPriceCounter, knightsButton);
  colorChange(paladinsPriceCounter, paladinsButton);
  colorChangeReverse(paladinsPriceCounter, paladinsButton);
  colorChange(dragonsPriceCounter, dragonsButton);
  colorChangeReverse(dragonsPriceCounter, dragonsButton);
  cityColorChange(cityPriceCounter, cityPowerCounter, cityButton);
}
export function colorChangeAllActive() {
  colorChange(peasantsPriceCounter, peasantsButton);
  colorChange(merceneariesPriceCounter, merceneariesButton);
  colorChange(priestsPriceCounter, priestsButton);
  colorChange(knightsPriceCounter, knightsButton);
  colorChange(paladinsPriceCounter, paladinsButton);
  colorChange(dragonsPriceCounter, dragonsButton);
  cityColorChange(cityPriceCounter, cityPowerCounter, cityButton);
}
export function colorChangeReverseCity() {
  colorChangeReverse(peasantsPriceCounter, peasantsButton);
  colorChangeReverse(merceneariesPriceCounter, merceneariesButton);
  colorChangeReverse(priestsPriceCounter, priestsButton);
  colorChangeReverse(knightsPriceCounter, knightsButton);
  colorChangeReverse(paladinsPriceCounter, paladinsButton);
  colorChangeReverse(dragonsPriceCounter, dragonsButton);
}

export function upgradeAnimation(
  animation,
  animationDelayed,
  title,
  description
) {
  document.documentElement.style.setProperty("--animation-h3", animation);
  document.documentElement.style.setProperty(
    "--animation-paragraph",
    animationDelayed
  );
  upgradeTitle.innerHTML = title;
  upgradeDescription.innerHTML = description;
}
