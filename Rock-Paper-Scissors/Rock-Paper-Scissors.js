var computer='';
var result='';
var userMove='';
const paragraph=document.querySelector('.result');
const pageScore=document.querySelector('.score');

const movements=document.querySelector('.reason');

var savedScore=localStorage.getItem('score');

if(!savedScore){

var  score={
  wins : 0,
  losses :0 ,
  ties : 0
}
localStorage.setItem('score',JSON.stringify(score));
}else{
  var score=JSON.parse(savedScore);
}

function assignComputer(){
  
  let n=Math.random();

  if(n<0.33)
  computer='Rock';
else if(n>0.33 && n<0.66)
computer='Paper';
else{
computer='Scissors';
}
}
displayScore();
  
function checkWin(user){
  userMove=user;
  assignComputer();


  if(computer === user){
    result='draw';
  
    
  }
  
else if(user == 'Rock' && computer== 'Paper'){
  result='lose';

}

  else if(user == 'Rock' && computer== 'Scissors'){
    result='win';
   
    
}

else if(user == 'Paper' && computer== 'Scissors'){

  result='lose';

}

else if(user == 'Paper' && computer== 'Rock'){
  result='win';

}

else if(user == 'Scissors' && computer== 'Rock'){
  result='lose';

    
}

else if(user == 'Scissors' && computer== 'Paper'){
  result='win';

    
}
resultt();



}

function resultt(){

  if(result==='draw')
score.ties++;
    else if(result==='lose')
      score.losses++;
        else score.wins++

        localStorage.setItem('score',JSON.stringify(score)); 
        
        displayResult();
        displayReason();
        displayScore();
}



 function resetScore(){
  localStorage.clear('score');
  console.log(`score deleted from local`);
  score={
    wins : 0,
  losses :0 ,
  ties : 0
  }

  paragraph.innerHTML='';
  movements.innerHTML='';
  displayScore();
 }      

 function displayResult(){
  paragraph.innerHTML=`you ${ result}`;

 }

function displayScore(){
  pageScore.innerHTML=`Wins : ${score.wins} , losses : ${score.losses} , Ties : ${score.ties}`;
} 

function displayReason(){
  movements.innerHTML=`you choose ${userMove} and Computer choose ${computer}`
}
