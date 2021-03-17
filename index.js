var cards = document.querySelectorAll(".card")
// console.log(cards);

cards.forEach((element) => element.addEventListener("click", flip))


var isFlipped = false;
var firstCard, secondCard;

function flip(){
    // console.log(this);
    this.classList.add("flip");
    
    if(!isFlipped){
        firstCard = this;
        isFlipped = true;
    } else {
        secondCard = this;
        checkIt();
    }
    
}

function checkIt() {
    if(firstCard.dataset.image === secondCard.dataset.image){
        
     
        // firstCard.removeEventListener("click", flip);
        // secondCard.removeEventListener("click", flip);
        setTimeout(success, 1000);
        
        
    }
    else {
        // firstCard.removeEventListener("click", flip);
        // secondCard.removeEventListener("click", flip);
        setTimeout(fail, 1000);
    }
}

function success(){
    alert("You won");
    reset();
}

function fail(){
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    cards.forEach((card) => {
        card.classList.remove("flip");
    })
    isFlipped = false;
}

function reset(){
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    isFlipped = false;
    firstCard = null; 
    secondCard = null;
    setTimeout(shuffle, 1000);
}

function shuffle(){
    cards.forEach((card) => {
        card.classList.remove("flip");
    })
    
    cards.forEach((card) => {
        var index = Math.floor(Math.random() * 16);
        console.log(index);
        card.style.order = index;
    })
}

