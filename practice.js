// This temperature in Kelvins
const kelvin = 0;

// Finding degree in celsius
let celsius;
celsius= kelvin - 273;
console.log(celsius);

// Now in Fahrenhiet
let fahrenhite;
// Rounded the outup
fahrenheit = Math.floor(celsius * (9/5) +32);
console.log(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

let newton;
newton = celsius * (33/100);
console.log(newton);


// Conditions 
let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
}else{
  console.log('Time to wait for a sale.')
}

//Ternary OPERATORS 
let isLocked = false;


isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');


let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

