let choices = document.querySelectorAll(".choice");
let youScore = document.querySelector("#you") ;
let compScore = document.querySelector("#comp");
let hide1 = document.querySelector(".hide1");
let hide2 = document.querySelector(".hide2");
const  userCh = document.getElementById('userChoice');
const compCh = document.getElementById('compChoice');
let userScore =0;
let computerScore =0;


generateCompChioce =(userChoice)=>{
    let ch = ['rock' , 'paper' , 'scissor'];
    let rnd = Math.floor(Math.random()*3)
    let compch = ch[rnd] ;
    return compch;
}
playGame = (userChoice)=>{
    console.log("choice = " , userChoice);
    compChoice = generateCompChioce(userChoice)
    console.log("choice = " , compChoice);
    if((userChoice=='rock' && compChoice=='scissor')||
        (userChoice=='paper' && compChoice=='rock')||
        (userChoice=='scissor' && compChoice=='paper')){
            userScore++
    }
    else{
        if((compChoice=='rock' && userChoice=='scissor')||
            (compChoice=='paper' && userChoice=='rock')||
            (compChoice=='scissor' && userChoice=='paper')){
        computerScore++
        }
        else{
            userScore = userScore;
            computerScore = computerScore;
        }
    }
    
}

choices.forEach((choice) => { 
    choice.addEventListener('click' , ()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
        hide1.classList.remove('hide1');
        hide1.innerHTML = userChoice;
        hide2.classList.remove('hide2');
        hide2.innerHTML = compChoice;
        youScore.innerHTML = userScore;
        compScore.innerHTML = computerScore;
        
    })
});