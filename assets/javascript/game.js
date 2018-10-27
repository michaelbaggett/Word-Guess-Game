//variables:

    //directions of press any letter to play
    //array of words
    //blanks representing letters in selected word
    //if user guesses corect letter, replace space with letter
    var wordList [] 
    var lettersGuessed = [ ]
    var guessesLeft = 10
    var wins = 0
    var losses = 0
    


//function definitions
    //this will generate our random word
    var randomWord = wordList[Math.floor(Math.random()*wordList.length)];
    //this will reset our game
    function reset(){
        randomLetter = wordList[Math.floor(Math.random()*wordList.length)];
        //console.log(randomWord);
        guessesLeft = 10;
        lettersGuessed.length = 0;
    }



//click/key handlers
    //onkeyup save userGuess
    //compare user guess to letters in random word
    //if letter matches letter in word, replace space with letter
    //if letter doesnt match, amount of guesses remaining goes down by 1
    //if win or lose, reset game