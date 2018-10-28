//on window load, begin script


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
    function resetGame() {
    var randomWord = wordList[Math.floor(Math.random()*wordList.length)];
    console.log(randomWord);
    remainingGuesses = maxGuesses;
    wordIndex = randomWord;
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
        var userGuess = event.key.toUpperCase();

        if(hasFinished){
            reset();
            hasFinished = false;
        } else if (event.keyCode >= 65 && event.keyCode <=90) {
        console.log(userGuess);
        makeGuess();
        evaluateGuess();
        updateDisplay();
        };


};