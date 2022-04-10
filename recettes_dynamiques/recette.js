//import { tableauRecettes } from "./database.js";
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
      "kg de poissons de mer",
      "g de fenouil",
      "g de celeri",
      "kg de rascasse",
      "langoustes",
      "kg de rouget grondin",
      "kg de pommes de terre",
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
  },
  recette2: {
    titre: " La Choucroute",
    carousselImg: [
      "img/choucroute1.jpg",
      "img/choucroute2.jpg",
      "img/choucroute3.jpg",
      "img/choucroute4.jpg",
    ],
    ingredients: [
      "chou à choucroute",
      "oignons",
      "grains de genièvre",
      "500 g de rôti de porc",
      "saucisse de Strasbourg",
      " bouteille de Riesling",
      "kg de patates",
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
      "kg de viande de boeuf",
      "oignons",
      "carottes",
      "cl de vin rouge",
      "g de champignons de Paris",
      "g de largons",
      "gousse d'ail",
    ],
    quantites: [0.25, 0.5, 1, 10, 50, 25, 0.5],
    imgEtapes: [
      "img/carotte.jpg",
      "img/decoupe.jpg",
      "img/plat-final.jpg",
      "img/sauce-vin.jpg",
      "img/sel-poivre.jpeg",
      "img/riz.jpeg",
    ],
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
      "kg de pommes de terre",
      "cl de creme liquide",
      "cl de lait",
      "noisette de beurre",
      "gousse d'ail",
      "pincee de noix de muscade",
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
  },
};

class Recette {
  constructor(
    title,
    imgCarousselList,
    levelIcon,
    timeText,
    levelText,
    imgList,
    text,
    quantityList,
    ingredientsList,
    htmlList,
    stepTimeList
  ) {
    this.title = title;
    this.imgCarousselList = imgCarousselList;
    this.levelIcon = levelIcon;
    this.time = timeText;
    this.levelText = levelText;
    this.text = text;
    this.imgList = imgList;
    this.quantityList = quantityList;
    this.ingredientsList = ingredientsList;
    this.htmlList = htmlList;
    this.stepTimeList = stepTimeList;

    this.setTitle();
    this.setCarrousselImg();
    this.setDifficultyImg();
    this.setTimer();
    this.setIngredients();
    this.setLevelText();
    this.setImage();
    this.setText();
    this.setStepTime(0);
    this.setStepTime(1);
    this.setStepTime(2);
    this.setStepTime(3);
  }
  setTitle() {
    document.querySelector(".title").innerHTML = this.title;
  }
  setCarrousselImg() {
    const imgElement = document.querySelectorAll(".caroussel-img");
    for (let i = 0; i < this.imgCarousselList.length; i++) {
      imgElement[i].src = this.imgCarousselList[i];
    }
  }
  setDifficultyImg() {
    for (let i = 0; i < this.levelIcon; i++) {
      let element = document.createElement("img");
      element.src = "img/casserole.png";
      element.classList.add("difficulty");
      document.querySelector(".infos2").prepend(element);
    }
  }
  setTimer() {
    const duration = document.querySelector(".time");
    duration.innerHTML = `&nbsp&nbsp${this.time}`;
  }
  setIngredients() {
    for (let i = 0; i < this.quantityList.length; i++) {
      const listElement = document.createElement("li");
      listElement.innerHTML = `<li class="qty"><span class="Q">${
        this.quantityList[i] || 0
      }</span>${this.ingredientsList[i]}</li>`;
      this.htmlList.appendChild(listElement);
    }
  }
  setLevelText() {
    const element = document.querySelector(".level");
    element.innerHTML = `&nbsp&nbsp&nbsp&nbsp${this.levelText}`;
  }
  setImage() {
    const img = document.querySelectorAll(".image");
    for (let i = 0; i < this.imgList.length; i++) {
      img[i].src = this.imgList[i];
    }
  }
  setText() {
    const textElement = document.querySelectorAll(".step");
    for (let i = 0; i < textElement.length; i++) {
      textElement[i].innerHTML = this.text;
    }
  }
  setStepTime(n) {
    const stepTime = document.querySelectorAll(`.step-time-${n + 1}`);
    for (let i = 0; i < stepTime.length; i++) {
      stepTime[i].innerHTML = stepTimeList[n];
    }
  }
}

const stepTimeList = ["0 - 5 min", "5 - 10 min", "10 - 15 min", "15 - 20 min"];

const listParent = document.querySelector(".recipe-infos");
const list = document.createElement("ul");
listParent.prepend(list);
let url = window.location.href;
let recetteNum = url.replace(
  "file:///home/adrien/Bureau/cuistot-Project/recettes_dynamiques/recette.html?id=",
  ""
);
let pageToShow = parseInt(recetteNum);
let recette = null;

if (pageToShow === 1) {
  recette = "recette1";
} else if (pageToShow === 2) {
  recette = "recette2";
} else if (pageToShow === 3) {
  recette = "recette3";
} else if (pageToShow === 4) {
  recette = "recette4";
}

let titre = tableauRecettes[recette].titre;
let imgCaroussel = tableauRecettes[recette].carousselImg;
let duree = tableauRecettes[recette].duree;
let ingredient = tableauRecettes[recette].ingredients;
let quantites = tableauRecettes[recette].quantites;
let imgEtapes = tableauRecettes[recette].imgEtapes;
let niveau = tableauRecettes[recette].niveau;
let niveauVal = tableauRecettes[recette].niveauVal;

const recetteToDisplay = new Recette(
  titre,
  imgCaroussel,
  niveauVal,
  duree,
  niveau,
  imgEtapes,
  texte,
  quantites,
  ingredient,
  list,
  stepTimeList
);

//console.log(tableauRecettes);

import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function Contact(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <h4>
        {props.email} - {props.tel}
      </h4>
      <button>delete</button>
    </div>
  );
}

export const App = (
  <div>
    <h1 className="text-center">My contacts list 📱</h1>
    <Contact
      name="Jeannette Steger"
      email="jeannette.steger@gmail.com"
      tel="0589965132"
    />
    <Contact
      name="Yvonne Austin"
      email="yvonne.austin@gmail.com"
      tel="0589965132"
    />
    <Contact
      name="Harry Koziol"
      email="harry.koziol@gmail.com"
      tel="01847605832"
    />
    <Contact
      name="Brenda Ardoin"
      email="brenda.ardoin@gmail.com"
      tel="0989765432"
    />
    <Contact
      name="David Ridley"
      email="david.ridley@gmail.com"
      tel="0989765432"
    />
  </div>
);

ReactDOM.render(App, document.getElementById("root"));
