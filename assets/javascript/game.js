$(document).ready(function() {

var win = 0;
var guesses = 10;

var hidden = [];
var word = ["apple", "orange", "banana", "cherry", "pineapple"]
//var res = word.split("");
var random;

var userGuess;

var randomWord;

generate()

dead();

function generate(){
	random = Math.floor((Math.random()* 5)+ 0);
	console.log(word[random]);
	randomWord = word[random];
	//console.log(random);
}

function dead(){
	for (var i = 0; i < randomWord.length; i++) {
	hidden.push("_ ");
	}
	console.log();
	console.log(hidden);
	$("#word-one").text(hidden.join(' '));	
}

document.onkeyup = function(e){
	var wrongLetters = [];
	for (var i = 0; i < randomWord.length; i++){
	var charCode= e.keycode;
	userGuess = e.key;
	console.log(userGuess);
	if (userGuess === randomWord.charAt(i)) {
	hidden[i] = userGuess;
	var character = hidden[i];
	console.log("guessed character " + character);
	console.log("whole thing " + hidden.join(" "));
	console.log("index " + i);
	$("#word-one").text(hidden.join(' '));
	if (hidden.includes("_ ")) {		
	} else {
	win++;
	console.log(win);	
	}
			
	} 
	else {
		console.log("right letter should not be here");
		if (wrongLetters.includes(userGuess) || randomWord.includes(userGuess)) {
		} 
		else {
			wrongLetters.push(userGuess);
			$("#letters-gussed").append(wrongLetters);
			guesses--;
			console.log("this is the guess count " + guesses);	
			}
		console.log(wrongLetters + " this was wrong");	
	   }	
	}
	//var userGuessCode;
	
	//userGuessCode = e.keycode;
	
}

/*if(userGuess === randomWord[i]){
	hidden[i] = userGuess
$("#word-one").text(hidden.join(' '));	
}
}
*/


















});