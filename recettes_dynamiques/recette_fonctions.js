//import tableauRecettes from "/database.js";

const texte =
  "Nullam eu ante vel est convallis dignissim." +
  "Nullam eu ante vel est convallis dignissim." +
  "Fusce suscipit, wisi nec facilisis facilisis." +
  "Nullam eu ante vel est convallis dignissim." +
  "Fusce suscipit, wisi nec facilisis facilisis." +
  "Fusce suscipit, wisi nec facilisis facilisis.";

const tableauRecettes = {
  recette1: {
    titre: " La Bouillabaisse",
    carousselImg: [
      "img/bouillabaisse-carroussel1.jpeg",
      "img/bouillabaisse-carroussel2.jpg",
      "img/bouillabaisse-carroussel3.jpg",
      "img/bouillabaisse-carroussel4.jpg",
    ],
    ingredients: [
      " kg de poissons de mer",
      " g de fenouil",
      " g de celeri",
      " kg de rascasse",
      " langoustes",
      " kg de rouget grondin",
      " kg de pommes de terre",
    ],
    quantites: [0.25, 80, 20, 0.25, 1, 0.25, 0.5],
    imgEtapes: [
      "img/fenouil.jpg",
      "img/moule.jpg",
      "img/baies.jpg",
      "img/poisson-bouillabaisse.jpeg",
      "img/laurier.jpg",
      "img/epices.jpeg",
    ],
    duree: "1 H",
    niveau: "Moyen",
  },
  recette2: {
    titre: " La Choucroute",
    carousselImg: [
      "img/choucroute1.jpg",
      "img/choucroute2.jpg",
      "img/choucroute3.jpg",
      "img/choucroute4.jpeg",
    ],
    ingredients: [
      " chou à choucroute",
      " oignons",
      " grains de genièvre",
      " g de rôti de porc",
      " saucisse de Strasbourg",
      " bouteille de Riesling",
      " kg de patates",
    ],
    quantites: [0.5, 150, 4, 0.5, 1, 0.25, 0.5],
    imgEtapes: [
      "img/choux.jpg",
      "img/saucisse.jpg",
      "img/baies.jpg",
      "img/patate2.jpg",
      "img/muscade.jpeg",
      "img/choucroute-final.jpg",
    ],
    duree: "2 H",
    niveau: "Difficile",
  },
  recette3: {
    titre: " Le Boeuf Bourguignon",
    carousselImg: [
      "img/boeuf-bourguignon1.jpeg",
      "img/boeuf-bourguignon2.jpg",
      "img/boeuf-bourguignon3.jpeg",
      "img/boeuf-bourguignon4.jpg",
    ],
    ingredients: [
      " kg de viande de boeuf",
      " oignons",
      " carottes",
      " cl de vin rouge",
      " g de champignons",
      " g de largons",
      " gousse d'ail",
    ],
    quantites: [0.25, 0.5, 1, 10, 50, 25, 0.5],
    imgEtapes: [
      "img/carotte.jpg",
      "img/decoupe.jpg",
      "img/plat-final.jpg",
      "img/sauce-vin.jpg",
      "img/sel-poivre.jpg",
      "img/riz.jpeg",
    ],
    duree: "1 H 30",
    niveau: "Facile",
  },
  recette4: {
    titre: " Le Gratin Dauphinois",
    carousselImg: [
      "img/gratin1.jpg",
      "img/gratin2.jpg",
      "img/gratin3.jpg",
      "img/gratin4.jpg",
    ],
    ingredients: [
      " kg de pommes de terre",
      " cl de creme liquide",
      " cl de lait",
      " noisette de beurre",
      " gousse d'ail",
      " pincee de noix de muscade",
    ],
    quantites: [0.5, 30, 40, 1, 1, 1],
    imgEtapes: [
      "img/patate.jpg",
      "img/lait.jpg",
      "img/beurre.jpg",
      "img/ail.jpg",
      "img/muscade.jpeg",
      "img/gratin-final.jpeg",
    ],
    duree: "1 H 15",
    niveau: "Moyen",
  },
};

function setTitle(title) {
  document.querySelector(".title").innerHTML = title;
}

function setText(texte) {
  const textElement = document.querySelectorAll(".step");
  for (let i = 0; i < textElement.length; i++) {
    textElement[i].innerHTML = texte;
  }
}

function setCarrousselImg(imgList) {
  const imgElement = document.querySelectorAll(".caroussel-img");
  for (let i = 0; i < imgList.length; i++) {
    imgElement[i].src = imgList[i];
  }
}

function setDifficultyImg(n) {
  for (let i = 0; i < n; i++) {
    let element = document.createElement("img");
    element.src = "img/casserole.png";
    element.classList.add("difficulty");
    document.querySelector(".infos2").prepend(element);
  }
}

function setLevel(level) {
  const element = document.querySelector(".level");
  element.innerHTML = `&nbsp&nbsp&nbsp&nbsp${level}`;
}

function setIngredient(quantityList, ingredientsRecetteUne, list) {
  for (let i = 0; i < quantityList.length; i++) {
    const listElement = document.createElement("li");
    listElement.innerHTML = `<li class="qty"><span class="Q">${
      quantityList[i] || 0
    }</span>${ingredientsRecetteUne[i]}</li>`;
    list.appendChild(listElement);
  }
}

function setImage(imgList) {
  const img = document.querySelectorAll(".image");
  for (let i = 0; i < imgList.length; i++) {
    img[i].src = imgList[i];
  }
}

function setStepTime(n) {
  const stepTime = document.querySelectorAll(`.step-time-${n + 1}`);
  for (let i = 0; i < stepTime.length; i++) {
    stepTime[i].innerHTML = stepTimeList[n];
  }
}

function setTime(time) {
  const duration = document.querySelector(".time");
  duration.innerHTML = `&nbsp&nbsp${time}`;
}

// ******************** ELEMENT COMMUN *******************

document.querySelector(".timer").src = "img/lhorloge.png";

const stepTimeList = ["0 - 5 min", "5 - 10 min", "10 - 15 min", "15 - 20 min"];

const listParent = document.querySelector(".recipe-infos");
const list = document.createElement("ul");
listParent.prepend(list);

let url = window.location.href;
let recetteNum = url.replace(
  "file:///home/adrien/Bureau/cuistot-Project/recettes_dynamiques/recette.html?id=",
  ""
);

// *********************** APPELS FONCTIONS ***********************

let pageToShow = parseInt(0);

if (pageToShow === 1) {
  setCarrousselImg(tableauRecettes.recette1.carousselImg);
  setTitle(tableauRecettes.recette1.titre);
  setTime(tableauRecettes.recette1.duree);
  setImage(tableauRecettes.recette1.imgEtapes);
  setLevel(tableauRecettes.recette1.niveau);
  setDifficultyImg(2);
  setIngredient(
    tableauRecettes.recette1.quantites,
    tableauRecettes.recette1.ingredients,
    list
  );
} else if (pageToShow === 2) {
  setCarrousselImg(tableauRecettes.recette2.carousselImg);
  setTitle(tableauRecettes.recette2.titre);
  setTime(tableauRecettes.recette2.duree);
  setImage(tableauRecettes.recette2.imgEtapes);

  setDifficultyImg(3);
  setIngredient(
    tableauRecettes.recette2.quantites,
    tableauRecettes.recette2.ingredients,
    list
  );
} else if (pageToShow === 3) {
  setCarrousselImg(tableauRecettes.recette3.carousselImg);
  setTitle(tableauRecettes.recette3.titre);
  setTime(tableauRecettes.recette3.duree);
  setImage(tableauRecettes.recette3.imgEtapes);
  setLevel(tableauRecettes.recette3.niveau);
  setDifficultyImg(1);
  setIngredient(
    tableauRecettes.recette3.quantites,
    tableauRecettes.recette3.ingredients,
    list
  );
} else if (pageToShow === 4) {
  setCarrousselImg(tableauRecettes.recette4.carousselImg);
  setTitle(tableauRecettes.recette4.titre);
  setTime(tableauRecettes.recette4.duree);
  setImage(tableauRecettes.recette4.imgEtapes);
  setLevel(tableauRecettes.recette4.niveau);
  setDifficultyImg(2);
  setIngredient(
    tableauRecettes.recette4.quantites,
    tableauRecettes.recette4.ingredients,
    list
  );
}

setText(texte);
setStepTime(0);
setStepTime(1);
setStepTime(2);
setStepTime(3);
