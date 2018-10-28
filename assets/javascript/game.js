//on window load, begin script
window.onload = function() {

//variables:

    //directions of press any letter to play
    //array of words
    //blanks representing letters in selected word
    //if user guesses corect letter, replace space with letter
    const maxGuesses = 10; //user max guesses
    
    var wordList = [
        "one",
        "two",
        "three"
    ];  //holds our array of words
    var guessLog = [];  //holds our user guesses
    var wordIndex;
    var remainingGuesses = 0;   //amount of guesses left
    var wins = 0;   //number of wins
    var losses = 0; //number of losses
    var guessingWord = [];  //array in which we build the word to match computer word
    
    var lettersGuessed = document.getElementById("you-guessed");
    var guessAmount = document.getElementById("numOfGuessLeft");


//function definitions
    //this will generate our random word
    var randomWord = wordList[Math.floor(Math.random()*wordList.length)];
    //this will reset our game
    function reset(){
        remainingGuesses = maxGuesses; //resets guess amount
        //select a random word
        randomLetter = wordList[Math.floor(Math.random()*wordList.length)];
        //clear out letter guesses & our guesses against word
        guessLog = [];
        guessingWord = [];
        for (i = 0; i < wordList[wordIndex].length; i++){
            guessingWord.push("_")
        }
        updateDisplay();
    };



//click/key handlers
    //onkeyup save userGuess
    document.onkeyup = function(event){
        if (event.keyCode >= 65 && event.keyCode <=90){
        userGuess = event.key.toUpperCase();
        //console.log(userGuess);
        guessLog.push(userGuess);
        }

        // if (userGuess !== wordList) {
        //     guessesLeft--;
        // } else if (guessesLeft === 0) {
        //     alert("You Lose!");
        // }
    //display user letter guess to page
    lettersGuessed.innerHTML = ("You have guessed: " + guessLog);
    guessAmount.innerHTML = ("You have " + guessesLeft + " guesses remaining");
    //compare user guess to letters in random word
    //if letter matches letter in word, replace space with letter
    //if letter doesnt match, amount of guesses remaining goes down by 1
    //if win or lose, reset game
};
}