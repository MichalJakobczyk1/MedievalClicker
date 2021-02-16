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

const upgradeTitle = document.querySelector(".section__h3--upgrades");
const upgradeDescription = document.querySelector(
  ".section__paragraph--upgrades"
);

upgradeAll1.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--animation-appear-h3",
    "appear 0.5s ease-in both"
  );
});
