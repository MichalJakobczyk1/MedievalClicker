import {
  coin,
  gold,
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
  peasantsButton,
  merceneariesButton,
  priestsButton,
  knightsButton,
  paladinsButton,
  dragonsButton,
} from "../index";

export function scaleDelete(element, elementClass) {
  element.classList.remove(elementClass);
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
