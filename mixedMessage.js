const randomQuote = ["Whoever is happy will make others happy too.", 
"May the Force be with you", "The greatest glory in living lies not in never falling, but in rising every time we fall.", 
"Mama always said life was like a box of chocolates. You never know what you're gonna get.",
 "I see dead people", "Say hello to my little friend!","Tell me and I forget. Teach me and I remember. Involve me and I learn",
  "Fly, you fools!", "Ogres are like onions", "I am Groot", "Life is what happens when you're busy making other plans", 
  "You're a wizard, Harry", "Just keep swimming, just keep swimming", "That's a bingo!", 
  "Not quite my tempo", "Always remember that you are absolutely unique. Just like everyone else."];

const randomCharacter = ["Hassana", "Balaraba",
 "The Terminator", "ahmed", "Cole Sear", "Tony Montana",
  "Jack Torrance", "Gollum", "Gandalf", "sika", "Groot", "bag", 
  "Hagrid", "money", "Conolel Hans Landa", "Terence Fletcher", "The joker"];

const randomMovie = [ "Star Wars", "legacies","originals",
"The Terminator", "Forrest Gump", "The Sixth Sense",
 "Scarface", "The Shining", "The Lord of The Rings", 
 "The Lord of The Rings", "Shrek", "Guardians of the Galaxy", 
 "Saw", "Harry Potter and the Sorcerer's Stone", "Finding Nemo",
"Inglourious Basterds", "Whiplash", "The Dark Knight"];

let randomizerOne = Math.floor(Math.random() * randomQuote.length);
let randomizerTwo = Math.floor(Math.random() * randomCharacter.length);
let randomizerThree = Math.floor(Math.random() * randomMovie.length);

while (randomizerOne != randomizerTwo || randomizerOne != randomizerThree || randomizerTwo != randomizerThree) {
    console.log(randomQuote[randomizerOne]);
    console.log(randomCharacter[randomizerTwo]);
    console.log(randomMovie[randomizerThree]);
    break;
};