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
    var wordIndex = 0;
    var remainingGuesses = 10;   //amount of guesses left
    var wins = 0;   //number of wins
    var losses = 0; //number of losses
    var guessingWord = [];  //array in which we build the word to match computer word

function gameStart(){    
    var randomWord = wordList[Math.floor(Math.random()*wordList.length)];
    guessingWord = randomWord.split("");
    wordIndex = guessingWord.length;

    console.log(randomWord);
    console.log(guessingWord);
    console.log(wordIndex);

    remainingGuesses = maxGuesses;
    guessLog = [];
    guessingWord = [];

    for (i = 0; i < wordIndex; i++){
        guessingWord.push("_");
        console.log(guessingWord);
    }
    document.getElementById("comp-word").innerHTML = guessingWord.join(" ");

};
//function definitions
    //this will generate our random word
    // function resetGame() {
    // var randomWord = wordList[Math.floor(Math.random()*wordList.length)];
    // console.log(randomWord);
    // wordIndex = randomWord;
    // guessLog = [];
    // guessingWord = [];
    // for (i = 0; i < wordList[wordIndex].length; i++){
    //     guessingWord.push("_")
    // }
    // };


//click/key handlers
    //onkeyup save userGuess

    document.onkeyup = function(event){
        var userGuess = event.key.toUpperCase();

        if(hasFinished){
            reset();
            hasFinished = false;
        } else if (event.keyCode >= 65 && event.keyCode <=90) {
        console.log(userGuess);
        };


};