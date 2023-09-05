let score=
JSON.parse(localStorage.getItem('score')) || {
wins:0,
losses:0,
ties:0
}
/* the above || code can be written as:
if(!score){ [This means that if(score===null)]
score{
    wins:0,
losses:0,
ties:0
}

}*/

updateScoreElements();





function playGame(playerMove){
const computermove= pickComputerMove();
let result='';

if(playerMove==='scissors'){
if(computermove==='rock'){
result='Oops! Better luck next time :(';
}
else if(computermove==='paper'){
result='Wohoo! You Won! Beat them again :XD';
}
else if(computermove==='scissors'){
result='Umm.. Common You can Win. Try again :|';
}


}else if(playerMove==='paper'){
if(computermove==='rock'){
result='Wohoo! You Won! Beat them again :XD';
}
else if(computermove==='paper'){
result='Umm.. Common You can Win. Try again :|';
}
else if(computermove==='scissors'){
result='Oops! Better luck next time :(';
}


}else if(playerMove==='rock') {
if(computermove==='rock'){
result='Umm.. Common You can Win. Try again :|';
}
else if(computermove==='paper'){
result='Oops! Better luck next time :(';
}
else if(computermove==='scissors'){
result='Wohoo! You Won! Beat them again :XD';
}
}

if(result=== 'Wohoo! You Won! Beat them again :XD'){
score.wins+= 1;
}
else if(result==='Oops! Better luck next time :('){
score.losses+= 1;
}else if(result=== 'Umm.. Common You can Win. Try again :|'){
score.ties+=1;
}

localStorage.setItem('score' , JSON.stringify(score));

updateScoreElements();

document.querySelector('.js-result')
.innerHTML = result;
document.querySelector('.js-moves')
.innerHTML = `You chose: <img src="Images/${playerMove}-emoji.png" class="move-icon" >
Computer chose: <img src="Images/${computermove}-emoji.png" class="move-icon" >`;




}

function updateScoreElements(){
document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function  pickComputerMove(){
const RandomNumber = Math.random();

let computermove='';

if(RandomNumber>=0 && RandomNumber<1/3) 
{ computermove='rock';}   
else  if(RandomNumber>=1/3 && RandomNumber<2/3){
computermove='paper';
}   
else  if(RandomNumber>=2/3 && RandomNumber<1){
computermove='scissors';
}


return computermove;
}  