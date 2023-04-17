//selectors
let roll = document.querySelector(".roll");
let container = document.querySelector(".fa-solid");


//Event listeners
roll.addEventListener("click", randomRoll);

//Functions
function randomRoll(){

    let num = Math.floor(
        Math.random() * 6 + 1
      )
    let temp = document.querySelector(".fa-solid");
    

    switch (num) {
        case 1:
            container.classList.remove(temp.classList[1]);
            container.classList.add("fa-dice-one");
            break;
        case 2:
            container.classList.remove(temp.classList[1]);
            container.classList.add("fa-dice-two");
            break;
        case 3:
            container.classList.remove(temp.classList[1]);
            container.classList.add("fa-dice-three");
            break;
        case 4:
            container.classList.remove(temp.classList[1]);
            container.classList.add("fa-dice-four");
            break;
        case 5:
            container.classList.remove(temp.classList[1]);
            container.classList.add("fa-dice-five");
            break;
        default:
            container.classList.remove(temp.classList[1]);
            container.classList.add("fa-dice-six");
            break;
      }

}

