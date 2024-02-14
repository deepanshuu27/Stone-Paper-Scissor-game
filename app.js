let userscore=0;
let compscore=0;
let msg = document.querySelector("#msg");
const userscorepara= document.querySelector("#user-score");
const compscorepara= document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
 choice.addEventListener("click",()=>{
    const userchoice = choice.getAttribute("id")
console.log("choice was clicked",userchoice);
playgame(userchoice);
 });
})

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
   let ranIdx= Math.floor(Math.random() *3);
   return options[ranIdx];

}



const playgame = (userchoice) => {
    console.log("user-Choice= ",userchoice);

    const Compchoice= genComputerChoice();
    console.log("comp-Choice:",Compchoice);

    if(userchoice==Compchoice){
      drawgame();              // Draw game
    }
    else{
        let userwin = true;

        if(userchoice =="rock"){
                userwin = Compchoice === "paper"? false: true;            // if computer choice is paper user lost (we can also use if-else inside also) 
        }
        else if(userchoice=="paper"){
            userwin = Compchoice == "scissor"? false: true;            // if computer choice is scissor user lost
        }

        else if(userchoice == "scissor"){
            userwin = Compchoice =="rock"? false: true;               // if computer choice is rock user lost
        }
        showWinner(userwin,userchoice,Compchoice);
    }
}



const showWinner = (userwin,userchoice,compchoice) =>{
    if(userwin){
     userscore++;
     userscorepara.innerText= userscore;

    console.log("You win");
    msg.innerText = `You win ! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;


        console.log("You lose");
        msg.innerText = `You Lose ! ${compchoice} beats  your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
    
}


function drawgame(){
    console.log("game was draw");
    msg.innerText = "Game was Draw!. Play Again"
    msg.style.backgroundColor = "#081b31";
}

