let input = document.getElementById("input");
let btn = document.getElementById("btn");
let wrng = document.querySelector(".wrng");
let guess= document.getElementById("guess");

let answer = Math.floor(Math.random()*100)+1;
console.log(answer);
let numGuess = 0;

btn.addEventListener("click", ()=>{
    guessNumber();
})

function guessNumber(){
    if(input.value<1 || input.value>100 || isNaN(input.value)){
        wrng.innerHTML = "Enter value between 1 to 100";
    }
    else{
        numGuess++;
        guess.innerHTML = "No of Guesses" + numGuess;
        if(input.value > answer){
            wrng.innerHTML="You've guessed it too High!";
            input.value=" ";
        }
        else if(input.value<answer){
            wrng.innerHTML="You've guessed it too low!";
            input.value=" ";
        }
        else{
            wrng.innerHTML = "Congratulation You've guessed it right "
            setTimeout(()=>{
                resetGame();
            }, 5000)
        }
    }
}

function resetGame(){
    numGuess =0;
    answer = Math.floor(Math.random()*100)+1;
    input.value="";
    guesses.innerHTML = "No of Guess: 0";
}