/*jshint esversion: 6 */

//********************** GESTION DES QUANTITES *******************

function setQuantity(list, nbr, qty) {
  for (let i = 0; i < list.length; i++) {
    let val = qty[i] * parseFloat(nbr.innerText);
    list[i].innerText = val.toString();
  }
}

function initQuantity(qtyOne, qtyList) {
  for (let i = 0; i < qtyList.length; i++) {
    qtyOne.push(parseFloat(qtyList[i].innerText));
  }
}

const btnPlus = document.querySelector("#plus");
const btnMinus = document.querySelector("#minus");
let nbrPeople = document.querySelector("#people");
const quantityList = document.querySelectorAll(".Q");
const quantityForOne = [];

initQuantity(quantityForOne, quantityList);
setQuantity(quantityList, nbrPeople, quantityForOne);

btnMinus.addEventListener("click", function () {
  let val = parseFloat(nbrPeople.innerText);
  val--;
  if (val < 1) {
    val++;
  }
  nbrPeople.innerText = val.toString();
  setQuantity(quantityList, nbrPeople, quantityForOne);
});

btnPlus.addEventListener("click", function () {
  let val = parseInt(nbrPeople.innerText);
  val++;
  if (val > 9) {
    val--;
  }
  nbrPeople.innerText = val.toString();
  setQuantity(quantityList, nbrPeople, quantityForOne);
});

//************************* PROGRESS BAR *************************

window.addEventListener("scroll", () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("bar").style.height = scrolled + "%";
});

//************************* SCROLL UP ****************************

const scrollUp = document.querySelector(".arrow-up");
const ingredients = document.querySelector(".caroussel");
scrollUp.addEventListener("click", () => {
  ingredients.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
});
