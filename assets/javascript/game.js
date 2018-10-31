//variables:
var rachmaninoff = new Audio("rachmaninoff.mp3");
var barber = new Audio("barber.mp3");
var mozart = new Audio("mozart.mp3");
var vaughanwilliams = new Audio("vw.mp3")
window.onload = function() {
    //directions of press any letter to play
    //array of words
    //blanks representing letters in selected word
    //if user guesses corect letter, replace space with letter
    const maxGuesses = 10; //user max guesses
    
    var wordList = [
        "barber",
        "mozart",
        "vaughanwilliams",
        "verdi",
        "chopin",
        "rachmaninoff",
        "bach",
    ];  //holds our array of words
    var guessLog = [];  //holds our user guesses
    var wordIndex = 0;
    var remainingGuesses = 10;   //amount of guesses left
    var wins = 0;   //number of wins
    var losses = 0; //number of losses
    var guessingWord = [];  //array in which we build the word to match computer word
    var randomWord = wordList[Math.floor(Math.random()*wordList.length)].toUpperCase();


function gameStart(){    
    randomWord = wordList[Math.floor(Math.random()*wordList.length)].toUpperCase();
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
    document.getElementById("win-count").innerHTML = ("Wins: " + wins);
    document.getElementById("loss-count").innerHTML = ("Losses: " + losses);
    document.getElementById("numOfGuessLeft").innerHTML = ("Guesses left: " +remainingGuesses);

};

function checkAnswer(letter){

    var letterInWord = false;

    for(var l = 0; l < wordIndex; l++) {
  
      if (letter === randomWord[l]) {
        letterInWord = true;
      }
    }
   
    if (letterInWord) {
      for(var l = 0; l < wordIndex; l++) {
        if (randomWord[l] === letter) {
          guessingWord[l] = letter;
          //console.log(guessingWord)
        }         
      }
    } else {
        guessLog.push(letter);
        remainingGuesses--;
    }
};



gameStart();


function internalGameplay() {
    document.getElementById("numOfGuessLeft").innerHTML = ("Guesses left: " +remainingGuesses);
    document.getElementById("you-guessed").innerHTML = ("You have guessed: " +  guessLog);
    document.getElementById("comp-word").innerHTML = guessingWord.join(" ");


    //turns word to string, checks user guess string against random word string
    if (guessingWord.join("") === randomWord) {
        wins++;
        console.log(wins);
        document.getElementById("win-count").innerHTML = ("Wins: " + wins);
        play();
        alert("You win!");
        gameStart();
    } else if (remainingGuesses === 0) {
        losses++;
        document.getElementById("loss-count").innerHTML = ("Losses: " + losses)
        alert("You lose!")
        gameStart();
    }

    };





//click/key handlers
    //onkeyup save userGuess

    document.onkeyup = function(event){
        var userGuess = event.key.toUpperCase();
        
        if (event.keyCode >= 65 && event.keyCode <=90){
        //console.log(userGuess);
        checkAnswer(userGuess);
        internalGameplay();
        }
    }

    //something is wrong here :) max call stack exceeded. not sure how to fix
function play() {
    console.log(randomWord);
    rachmaninoff.pause();
    rachmaninoff.currentTime = 0;
    barber.pause();
    barber.currentTime = 0;
    mozart.pause();
    mozart.currentTime = 0;
    vaughanwilliams.pause();
    vaughanwilliams.currentTime = 0;
    randomWord = randomWord.toLowerCase()
    if (randomWord === "rachmaninoff"){
        rachmaninoff.play();
     } else if (randomWord === "mozart"){
        mozart.play();
    } else if (randomWord === "vaughanwilliams"){
        vaughanwilliams.play()
    } else if (randomWord === "barber"){
        barber.play();
    }

    }
};