export class Recette {
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
      stepTime[i].innerHTML = this.stepTimeList[n];
    }
  }
}
