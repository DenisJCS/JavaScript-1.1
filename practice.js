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


// IF / ELSE 
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if(season === 'fall') {
  console.log('It\'s fall! Leaves are falling!')
} else if(season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
}
  else {
  console.log('Invalid season.');
}


//THE SWITCH KEYWORD 
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break
  case 'second place':
    console.log('You get the silver medal!');
    break
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}  
