let userScore=0;
let compScore=0;

const userScore_span= document.getElementById("user-score");
const compScore_span= document.getElementById("comp-score");

const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result>p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");




function main()
{
rock_div.addEventListener('click',function(){
	game("r");
})


paper_div.addEventListener('click',function(){
	game("p");
})


scissors_div.addEventListener('click',function(){
	game("s");
})
}

main();

function compChoice(){
	const choices=['r','p','s'];
	const random=(Math.floor(Math.random()*3));
	return choices[random];
}



function changecomp(comp){
	if(comp=='r')
		comp="Rock";
	else if(comp=='s')
	comp="Scissors";
	else
		comp="Paper";
	return comp;
}



function changeuser(user){
	if(user=='r')
		user="Rock";
	else if(user=='s')
	user="Scissors";
	else
		user="Paper";
	return user;
}
function win(user,comp){
	userScore++;
	let res1=changecomp(comp);
	let res2=changeuser(user);
	
  
    userScore_span.innerHTML= userScore;
    result_div.innerHTML= res2 +" beats "+ res1 +". You" +" WIN".fontcolor('#4dcc7d');
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('green-glow')},1000);
}

function lose(user,comp){
	compScore++;
	let res1=changecomp(comp);
	let res2=changeuser(user);

	compScore_span.innerHTML= compScore;
	result_div.innerHTML= res1 +" beats "+ res2 +". You" +" LOSE".fontcolor('#fc121b');
	 document.getElementById(user).classList.add('red-glow');
	 setTimeout(function(){document.getElementById(user).classList.remove('red-glow')},1000);
}


function draw(user){
	result_div.innerHTML=  "ITS A"+ " DRAW!".fontcolor('#1273BE');
	document.getElementById(user).classList.add('blue-glow');
	setTimeout(function(){document.getElementById(user).classList.remove('blue-glow')},1000);

}




function game(value){
     const computerchoice=compChoice();
     switch(value+computerchoice){
     	case "rs":
     	case "pr":
     	case "sp":
     	win(value,computerchoice);
     	break;
     	case "rp":
     	case "sr":
     	case "ps":
     	lose(value,computerchoice);
     	break;
     	default: draw(value);
     }
}



