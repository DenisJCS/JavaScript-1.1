// Counting dog's age into human
let myAge = 18; // Holds my age

// Frist two years of dog
let earlyYears = 2;
// Each of the two years are counted as 10.5
earlyYears *= 10.5;

// Remaining years after two
let laterYears = myAge - 2;

// Late years of dog
laterYears *=4; // Myltiply later years by four

// Check count
console.log(earlyYears); //Early years should be 
console.log(laterYears); //Next years after

// Whole life of the dog
let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears)

// My name 
let myName = 'Denis'.toLowerCase();
console.log(myName);
// Step 9

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`)







