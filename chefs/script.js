const itemsImage = document.querySelectorAll(".item-i");
const itemsTexte = document.querySelectorAll(".item-t");

const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");

const activeClass = "active-carrousel";

let index = 0;


function goNext() {
  const activeItems = document.querySelectorAll("." + activeClass);

  activeItems.forEach(
    function(activeItem) {
      activeItem.classList.remove(activeClass);
    }
  );

  index++;

  // Ici, on peut utiliser itemsImage.length ou itemsTexte.length au choix car les deux listes contiennent le même nombre d'éléments
  if (index >= itemsImage.length) {
    index = 0;
  }

  itemsTexte[index].classList.add(activeClass);
  itemsImage[index].classList.add(activeClass);
}

function goPrevious() {
  const activeItems = document.querySelectorAll("." + activeClass);

  activeItems.forEach(
    function(activeItem) {
      activeItem.classList.remove(activeClass);
    }
  );

  index--;

  
  if (index < 0) {
    index = itemsImage.length - 1;
  }

  itemsTexte[index].classList.add(activeClass);
  itemsImage[index].classList.add(activeClass);
}



previousButton.addEventListener("click", goPrevious);
nextButton.addEventListener("click", goNext);
