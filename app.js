// STRINGS

 firstVariable = "hello world";
 firstVariable = 23;
 let secondVariable = firstVariable;
 secondVariable = "any string";

// console.log(firstVariable); //1

 const yourName = "Macreen";
 let hello = `Hello, my name is ${yourName}`
 console.log(hello);

//BOOLEANS

 const a = 4; 
 const b = 53; 
 const c = 57; 
 const d = 16; 
 const e = 'Kevin';

 console.log(a < b); 
 console.log(c > d); 
 console.log('Name' == 'Name');

//FOR THE NEXT TWO, USE ONLY && OR ||
 console.log(true || false); 
 console.log(false && false && false && false && false || true); 
 console.log(false === false) 
 console.log(e == 'Kevin'); 
 console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations) 
 console.log(a == a || d); // note: the answer is a simple arithmetic equation, not something "weird" console.log(48 __ '48');


//the Farm
let animal = "cow";

const moo = (a) => {
   return a.toLowerCase === "cow" ? "mooooo" : "hey, that's not a cow"
}

console.log(moo(animal));
//Driver's Ed

let personsAge = 12;

if (num >= 16) {
   console.log("Here's the keys!");
} else {
   console.log("Sorry you're too young to be driving");
}
//LOOPS

//The Basics
//for loop that prints out all numbers from 0 to 10.
for (var i = 0; i <= 10; i++) {
   console.log(i);
}
//for loop that prints out all numbers from 10 to 400
for (var i = 10; i <= 400; i++) {
   console.log(i);
}
//for loop that prints every third number starting with 12 and going no high than 4000
for (var i = 12; i < 4000; i = i + 3) {
   console.log(i);
}
//Get Even

//Give Me 5
var number = 0;
for (var number = 0; number <= 100; number++) {
   if (number % 5 === 0) {
      console.log("I found a", number, "High five!");
   }

}

// other version
var number = 0;
for (var number = 0; number <= 100; number++) {
   if (number % 5 === 0) {
      console.log("I found a", number, "High five!");
   } if (number % 3 === 0) {
      console.log("I found a", number, ". Three is a crowd");
   }

}
//Savings Account
let myPays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let bank_account = 0;


for (let i = 0; i < myPays.length; i++) {
   bank_account += myPays[i];
}

console.log(bank_account);

// Other version

let bank_Account = 0;

for (var i = 1; i <= 100; i++) {
   bank_Account += i * 2;
}
console.log(bank_Account);

//ARRAYS & CONTROL FLOW

//EASY DOES IT

const battleQuotes = ["Get lost!", "Try this!", "Out of my way!"]
quotes = battleQuotes;
console.log(quotes);

//Accessing Elements

const randomThings = [1, 10, "Hello", true]
console.log(randomThings[0]);
var earth = randomThings.splice(2, 1, "World!")
console.log(randomThings)

//Change values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
console.log(ourClass[2])
ourClass.splice(4, 4, "Octocat")
console.log(ourClass);
ourClass.push("Cloud City");
console.log(ourClass)

//Mix it up

//Biggie Smalls

var num = 20;
if (num <= 100) {
   console.log('little number')
} else {
   console.log('big number')
}

//Monkey in the Middle
const nums = 6
if (nums < 5) {
   console.log("Little number");
} else if (nums > 10) {
   console.log("Big number");
} else {
   console.log("monkey");
}

//What's in Your Closet?

const kristynsCloset = [
   "left shoe",
   "cowboy boots",
   "right sock",
   "GA hoodie",
   "green pants",
   "yellow knit hat",
   "marshmallow peeps"
];
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
kristynsCloset.splice(6,0, "raybans")
console.log(kristynsCloset);
kristynsCloset.splice(5,1, "stained knit hat")
console.log(kristynsCloset);
const thomsCloset = [
   [
     // These are Thom's shirts
     "grey button-up",
     "dark grey button-up",
     "light blue button-up",
     "blue button-up",
   ],[
     // These are Thom's pants
     "grey jeans",
     "jeans",
     "PJs"
   ],[
     // Thom's accessories
     "wool mittens",
     "wool scarf",
     "raybans"
   ]
 ];
 console.log(thomsCloset[0][0]);
 let shirt = thomsCloset[0][1]
 let pants = thomsCloset[1][2]
 let accessories = thomsCloset[2][2]
 console.log("Thom is looking fierce in a" + shirt + ", " + pants + ", and " + accessories + "!")


//printGreeting
function printGreetingWith(name) {
   console.log("Hello there, " + name + "!");
}

printGreetingWith("Kevin");

//printcool

function printCool(name) {
  
   console.log(name + "is cool!");
}
printCool("Ryan");


//Calculate a cube

function calculateCube(x) {
   return x * x * x;
}
console.log(calculateCube(5));

//IS VOWEL

function isVowel(char) {
   let letter = char.toLowerCase();
   if (letter === "a" || letter === "e" || letter === "i" ||letter === "o" || letter === "u") {
      return true;
   } else {
      return false;
   }
}
   console.log(isVowel("O"));
   console.log(isVowel("a"));
   //getTwoLengths

   function getTwoLengths(string1, string2) {
      console.log([string1.length, string2.length]);
   }
   //Keep the strings in BRACKETS
   getTwoLengths("Let's", "Go!");

   //getMultipleLengths

   function getMultipleLengths(array) {
      let roster = [];
      for (let i = 0; i < array.length; i++) {
         roster.push(array[i].length);
      }
      return roster;

   }
   let cast = ['Ryu', 'Ken', 'Chun-Li', 'Guile', 'Alex', 'Hugo']
   console.log(getMultipleLengths(cast))

   //Find Max of Three

   function maxOfThree(x, y, z){
      maxVal = 0;
      if(x > y){
         maxVal = x;
      } else {
         maxVal = y;
      }
      if (z > maxVal){
         maxVal = z;
      }
      return maxVal;
   }
   console.log(maxOfThree(1,2,4));
   console.log(maxOfThree(20,50,30));
   console.log(maxOfThree(50,13,42));

   //printLongestWord
   function printLongestWord(str){
      var strCut = str.split(' ');
      var longestWord = '';
      for(var i=0; i<strCut.length; i++){
         if(strCut[i].length>longestWord.length){
            longestWord = strCut[i]
         }
      }
         return longestWord;
   }
   console.log(printLongestWord("Murder these guys!"));
   //OBJECTS
   //Make a user object
    const user = {
      name : "Macreen",
      email : "macreen@gmail.com",
      age : 23,
      purchased : [] 
    }
   //update user
      user.email = "macsmit@gmail.com";
      user.age = user.age+1;
   //Adding keys and values

   user.location = "NY";
   //Shopaholic!
   user.purchased.push("carbohydrates");

   user.purchased.push("peace of mind");

   user.purchased.push("Merino jodhpurs");
   console.log(user.purchased[2]);
   //Object wihin object

   user.friend = {
      name: "Fah",
      age: 23,
      location: "NY",
      purchased: []
   }
   console.log(user.friend.name);
   console.log(user.friend.location);
   user.friend.age = 55;
   user.friend.purchased.push("The One Ring");
   user.friend.purchased.push("A latte");
   console.log(user.friend.purchased[1]);

   // Loops

   for (i = 0; i < user.purchased.length; i++) {
      console.log(user.purchase[i]);
   }
   for (i = 0; i < user.friend.purchased.length; i++) {
      console.log(user.purchase[i]);
   }

   //Functions can operate an objects
   function updateUser() {
      user.age = user.age + 1;
      user.name = user.name.toUpperCase;
   }

   function oldAndLoud(person) {
      person.age = person.age + 1;
      person.name = person.name.toUpperCase;
   }
   oldAndLoud(user);
// let longest = array.reduce( (firstEl, secondEl) => {
//         //if the first el is greater than the second el return firstEl
//         return firstEl.length > secondEl.length ? firstEl : secondEl;
//     }
// );

// console.log(longest)


