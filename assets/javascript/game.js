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
    var hasFinished = false


//function definitions
    //this will generate our random word
    var randomWord = wordList[Math.floor(Math.random()*wordList.length)];
    //this will reset our game
    function resetGame(){
        remainingGuesses = maxGuesses; //resets guess amount
        //select a random word
        randomWord = wordList[Math.floor(Math.random()*wordList.length)];
        console.log(randomWord);
        //clear out letter guesses & our guesses against word
        guessLog = [];
        guessingWord = [];
        for (i = 0; i < wordList[wordIndex].length; i++){
            guessingWord.push("_")
        }
        updateDisplay();
    };

    function updateDisplay(){
        document.getElementById("win-count").innerHTML = ("Wins: " + wins);
        document.getElementById("loss-count").innerHTML = ("Losses: " + losses);
        document.getElementById("comp-word").innerHTML = "";
        for (var i = 0; i < guessingWord.length; i++) {
            document.getElementById("comp-word").innerHTML += guessingWord[i];
        };
        document.getElementById("numOfGuessesLeft").innerHTML = remainingGuesses;
        document.getElementById("you-guessed").innerHTML = guessLog;
        if (remainingGuesses <= 0){
            hasFinished = true;
        }
    };

    function evaluateGuess(letter) {
        var positions = [];

        for (var i = 0; i < wordList[wordIndex].length; i++){
            if(wordList[wordIndex][i] === letter) {
                positions.push(i);
         }
    }
        if (positions.length <= 0){
        remainingGuesses--;
        } else {
            for(var i = 0; i < positions.length; i++){
            guessingWord[positions[i]] = letter;
        }
    }
};

    function checkWin(){
        if(guessingWord.indexOf("_") === -1) {
            wins++;
            hasFinished = true;
            alert("Nice Job!")
        }
    };

    function checkLoss(){
        if(remainingGuesses <= 0) {
            hasFinished = true;
            alert("You Lose!")
        }
    };

    function makeGuess(letter){
        if(remainingGuesses > 0) {
            if (guessLog.indexOf(letter)=== -1){
                guessLog.push(letter);
            evaluateGuess(letter);
                }
            }
            updateDisplay();
            checkWin();
        };


//click/key handlers
    //onkeyup save userGuess
    document.onkeyup = function(event){
        if(hasFinished){
            resetGame();
            hasFinished = false;
        } else if (event.keyCode >= 65 && event.keyCode <=90) {
        makeGuess(event.key.toLocaleUpperCase());
        updateDisplay();
        checkWin();
        };


}
};