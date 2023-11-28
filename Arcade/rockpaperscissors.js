const computerChoice=document.getElementById('computerChoice');
const userChoice=document.getElementById('userChoice');
const result=document.getElementById('result');
let userchoice
let computerchoice
let results

const possiblechoice=document.querySelectorAll('button');
possiblechoice.forEach((button)=>{
    button.addEventListener('click',function(e){
        userchoice=e.target.id;
        userChoice.innerHTML=userchoice;
        generateChoice();
        checkchoice();
    })
})
function generateChoice(){
    const random=(Math.floor(Math.random()*3)+1);
    if(random ===1){
        computerchoice='Rock';
    }
    if(random ===2){
        computerchoice='Paper';
    }
    if(random ===3){
        computerchoice='Scissors';
    }
    computerChoice.innerHTML=computerchoice;
}
function checkchoice(){
    if(userchoice===computerchoice){
        results=`Its a Draw !!!`
    }
    else if(userchoice ==='Rock' && computerchoice==='Scissors'){
        results=`You Win 🥳🥳🥳`
    }
    else if(userchoice ==='Rock' && computerchoice==='Paper'){
        results=`You loose 😔😞🥶`
    }
    else if(userchoice ==='Paper' && computerchoice==='Rock'){
        results=`You Win 🥳🥳🥳`
    }
    else if(userchoice ==='Paper' && computerchoice==='Scissors'){
        results=`You loose 😔😞🥶`
    }
    else if(userchoice ==='Scissors' && computerchoice==='Rock'){
        results=`You loose 😔😞🥶`
    }
    else if(userchoice ==='Scissors' && computerchoice==='Paper'){
        results=`You Win 🥳🥳🥳`
    }
    result.innerHTML=results;

}