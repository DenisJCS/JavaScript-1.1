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

