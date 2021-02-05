// // generator złota
// export const goldCounterButton = document.querySelector(
//   ".section__button--clicker"
// );
// export const goldCounter = document.querySelector(".counter--gold");
// export const coin = document.querySelector(".section__coin--js");

// export const militaryPower = document.querySelector(".counter--power");

// // liczniki jednostek
// export const peasantsQuantity = document.querySelector(".counter--peasant");
// export const merceneariesQuantity = document.querySelector(
//   ".counter--merceneary"
// );
// export const priestsQuantity = document.querySelector(".counter--priest");
// export const knightsQuantity = document.querySelector(".counter--knight");
// export const paladinsQuantity = document.querySelector(".counter--paladin");
// export const dragonsQuantity = document.querySelector(".counter--dragon");

// // przyciski kupowania jednostek
// export const peasantsButton = document.querySelector(
//   ".section__button--peasant"
// );
// export const merceneariesButton = document.querySelector(
//   ".section__button--merceneary"
// );
// export const priestsButton = document.querySelector(".section__button--priest");
// export const knightsButton = document.querySelector(".section__button--knight");
// export const paladinsButton = document.querySelector(
//   ".section__button--paladin"
// );
// export const dragonsButton = document.querySelector(".section__button--dragon");

// export const peasantsPrice = document.querySelector(".price--peasant");

// // liczniki złota i siły
// export let gold = 0;
// export let military = 0;

// // liczniki stanu jednostek
// export let peasants = 0;
// export let mercenearies = 0;
// export let priests = 0;
// export let knights = 0;
// export let paladins = 0;
// export let dragons = 0;

// // liczniki ceny jednostek
// export let peasantsPriceCounter = 10;

// // generowanie złota co sekundę
// export function goldPerSecond() {
//   gold += peasants * 1;
//   goldCounter.innerHTML = gold;
//   // zmiana koloru przycisku
//   colorChange(peasantsPriceCounter, peasantsButton);
// }

// // zmiana koloru przycisku
// export function colorChange(priceCounter, button) {
//   if (gold >= priceCounter) {
//     button.classList.remove("section__button--units");
//     button.classList.add("section__button--available");
//   }
// }
// export function colorChangeReverse(priceCounter, button) {
//   if (gold <= priceCounter) {
//     button.classList.remove("section__button--available");
//     button.classList.add("section__button--units");
//   }
// }
