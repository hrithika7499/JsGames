const cardArray=[
    {
        name:'fries',
        img:'images/fries.png',
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'

    },
    {
        name:'hotdog',
        img:'images/hotdog.png'

    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'

    },
    {
        name:'milkshake',
        img:'images/milkshake.png'

    },
    {
        name:'pizza',
        img:'images/pizza.png'

    },
    {
        name:'fries',
        img:'images/fries.png',
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'

    },
    {
        name:'hotdog',
        img:'images/hotdog.png'

    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'

    },
    {
        name:'milkshake',
        img:'images/milkshake.png'

    },
    {
        name:'pizza',
        img:'images/pizza.png'

    },

]

//we want to sort these array items in random order
cardArray.sort(()=>0.5-Math.random())//checking if smaller than 0.5 or larger than 0.5

const gridDisplay=document.querySelector('#grid');
const resultDisplay=document.querySelector('#score');
let cardChoosen=[];
let cardchoosenIds=[];
const cardsWon=[];


//we need to add the images in div using js
function createBoard(){
    for(let i=0;i<cardArray.length;i++){
    const card=document .createElement('img');
    card.setAttribute('src','images/blank.png');
    card.setAttribute('data-id',i);
    card.addEventListener('click',flipCard)
    gridDisplay.appendChild(card);
}
}
createBoard();
function checkMatch(){
    const cards=document.querySelectorAll('img');
    let optionOneId=cardchoosenIds[0];
    let optionTwoId=cardchoosenIds[1];
    if(optionOneId== optionTwoId){
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optionTwoId].setAttribute('src','images/blank.png');
        alert("You have selected the same cards");
    }
    if(cardChoosen[0]==cardChoosen[1]){
        alert('You Got A Match')
        //after its match we make this cards as blank
        cards[optionOneId].setAttribute('src','images/white.png');
        cards[optionTwoId].setAttribute('src','images/white.png');
        //remove the eventlisteners for matched pictures
        cards[optionOneId].removeEventListener('click',flipCard);
        cards[optionTwoId].removeEventListener('click',flipCard);
        cardsWon.push(cardChoosen);
        
    }
            else{
    cards[optionOneId].setAttribute('src','images/blank.png');
    cards[optionTwoId].setAttribute('src','images/blank.png');
    }
    resultDisplay.innerHTML=cardsWon.length;
    cardChoosen=[];
    cardchoosenIds=[];

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML="Congratualtions!!! You matched all";
    }
}
function flipCard(){
    const cardId=this.getAttribute('data-id');
    cardChoosen.push(cardArray[cardId].name);
    cardchoosenIds.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    if(cardChoosen.length === 2){
        setTimeout(checkMatch,500);
    }
}