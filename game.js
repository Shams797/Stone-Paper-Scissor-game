let compScore=0;
let userScore=0;

const choices=document.querySelectorAll(".choice");
const userScorePre=document.querySelector("#user-score");
const compScorePre=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");


const genCompChoice= ()=>{
    let list=['rock','paper','scissor'];
    let randomNO=Math.trunc(Math.random()*3);
    return list[randomNO];
}

const draw=() =>{
    console.log("Game was a draw");
    msg.innerHTML="Game was Draw!. Play again."
    msg.style.backgroundColor="#081b31";
}

const userWin=(userwin, userChoce, compChoice) => {
    if(userwin){
        userScore++;
        userScorePre.innerText=userScore;
        console.log("You won!")
        msg.innerHTML=`You won! Your ${userChoce} beat ${compChoice}`;
        msg.style.backgroundColor= "green";
    }
    else{
        compScore++;
        compScorePre.innerHTML=compScore;
        console.log("You lose")
        msg.innerHTML=`You Lose! Computer ${compChoice} beat your ${userChoce}`;
        msg.style.backgroundColor= "red";
    }
}

const playGame=(userChoce) =>{
    console.log(`"user choice ${userChoce}"`);
    let compChoice=genCompChoice();
    console.log(`"computer choice ${compChoice}"`);

    if(userChoce == compChoice){
        draw();
    }
    else{
        let userwin=false;
        if(userChoce === "rock"){
            userwin=compChoice === "paper"? false:true;
        }
        else if(userChoce === "paper"){
            userwin=compChoice === "scissor"? false:true;
        }
        else if(userChoce === "scissor"){
            userwin= compChoice ==="rock"? false:true;
        }
        userWin(userwin, userChoce, compChoice);
    }
}


choices.forEach( (choice) => {
    console.log(choice);
    choice.addEventListener("click",() =>{
        let userChoce=choice.getAttribute("id");
        playGame(userChoce);
    })
});





