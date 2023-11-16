 /* algorithm:
    when we click a button-
    1)computer randomly selects a move
    2)compare the move with ours to get result
    3) update a score  [objects]
    4)display the result and score in pop-ups
    */
    

    let score = JSON.parse(localStorage.getItem('score'))||  {
      wins: 0,
      losses: 0,
      ties: 0
    }

    updateScoreElement();

  //if there is no score in the memory we will give it a default object
 
 
 /* if(score === null){
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    }
   ;

  }*/
  //making function

  function playGame(playerMove){
    const computerMove =  pickComputerMove();
  
  let result = '';
  if(playerMove === 'scissors'){
    if(computerMove === 'rock'){
    result ='You Lose';
  }else if(computerMove === 'paper'){
    result = 'You Win';
  }else if(computerMove === 'scissors'){
    result = 'Tie';
  }
  }else if(playerMove === 'paper'){
    if(computerMove === 'rock'){
    result ='You Win';
  }else if(computerMove === 'paper'){
    result = 'Tie';
  }else if(computerMove === 'scissors'){
    result = 'You Lose';
  }
  }else if(playerMove === 'rock'){
    if(computerMove === 'rock'){
      result ='Tie';
    }else if(computerMove === 'paper'){
      result = 'You Lose';
    }else if(computerMove === 'scissors'){
      result = 'You Win';
    }
  }

  //code for updating the score
  if (result === 'You Win'){
    score.wins += 1;
  } else if (result === 'You Lose'){
    score.losses += 1;
  }else if (result === 'Tie'){
    score.ties += 1;
  }
   
  localStorage.setItem('score' , JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
   .innerHTML = result;

   document.querySelector('.js-moves')
   .innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`

  

  }
  function updateScoreElement() {
    document.querySelector('.js-score')
     .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }
  
  function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';
  //here random is selected btw 0-1 and we divided the line of 0-1in 3 equal parts
  if(randomNumber>=0 && randomNumber<1/3){
  computerMove = 'rock';
  }else if(randomNumber>=1/3 && randomNumber<2/3){
  computerMove = 'paper';
  }
  else if(randomNumber>=2/3 && randomNumber< 1){
  computerMove = 'scissors';
  }
  return computerMove;
  }