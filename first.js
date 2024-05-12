let userScore=0;
let computerScore=0;

const choice =document.querySelectorAll(".choice1");
let msg = document.querySelector("#msg");
let userscorepara=document.querySelector("#user-score")
let compcorepara=document.querySelector("#com-score")

const generatecomputerchoice=()=>{
    const option =["rock","paper","scissors"];
    const randomInd=Math.floor(Math.random()*3); //this will generate random number between 0,1,2.
    return option[randomInd];
};

const drawgame=()=>{
    msg.innerText="Game was draw play again";
    msg.style.backgroundColor="black";
};

const showWinner=(userwin,userchoice,comchoice)=>{
    if(userwin===true)
        {
            userScore++;
            userscorepara.innerText=userScore;
            msg.innerText=`Congratulation You Win ! Your ${userchoice} beats ${comchoice}`;
            msg.style.backgroundColor = "green";
        }
    else{
        computerScore++;
        compcorepara.innerText= computerScore;
        msg.innerText=`You lost ${comchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) =>{
    console.log(`user choice = ${userchoice}`);
    //generate computer choice
    const comchoice = generatecomputerchoice();
    if(userchoice===comchoice)
        {
            //draw game
            drawgame();
        }
    else{
        let userwin = true;
        if(userchoice==="rock")
            {
                //scissor , paper 
                userwin = comchoice==="paper" ? false : true;

            }
        else if(userchoice==="paper"){
            //rock,scissors
            userwin=comchoice==="scissors" ? false:true;
        }
        else{
            //rock ,paper
            userwin=comchoice==="rock" ? false:true;
        }
        showWinner(userwin,userchoice,comchoice);
    }
};

choice.forEach((choice1)=>{
    choice1.addEventListener("click",()=>{
        const userchoice = choice1.getAttribute("id")
        playgame(userchoice);
    });
});
