let userName = "";

// Ternary expression to greet the user properly
let greeting = userName ? `Hello, ${userName}!` : "Hello!";
console.log(greeting);

// User's question to the Magic Eight Ball
let userQuestion = "Will I win the lottery?";
console.log(`${userName ? userName : 'User'} asked: ${userQuestion}`);

//Generate random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

// Create eightBall answers
let eightBall = "";
switch (randomNumber) {
  case 0:
    eightBall ='It is certain';
    break;
  case 1:
    eightBall ='It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall='Cannot predict now';
    break;
  case 4:
    eightBall='Do not count on it';
    break;
  case 5:
    eightBall='My sources say no';
    break;
  case 6:
    eightBall ='Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}
// Output the Magic Eight Ball’s answer
console.log(`The eight ball answered: ${eightBall}`);
