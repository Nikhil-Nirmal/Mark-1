var chalk = require('chalk');
var readlineSync = require("readline-sync");
var username = readlineSync.question(chalk.blue('Enter Your Name?? '));
console.log(chalk.bgRed('Hey '+username));
  console.log(chalk.bgRed('How You Doing Today Pal ??'));
let score = 0;
console.log(chalk.bgRed('lets play a quiz!!!'));
console.log(chalk.yellow('lets see How well you  know me'));
let a = readlineSync.question(chalk.blue('1. What is my name?  '));
if (a=='Nikhil' || a=='nikhil') {
  score = score + 5;
 console.log(chalk.green('You Are Absolutely Correct'));
  console.log(chalk.green('Your Score Is = '+score));

}

else {
  console.log(chalk.red('Wrong Answer!!!!'));
}

console.log(chalk.yellow('lets Proceed With The Second Question!!!'));
let lang = readlineSync.question(chalk.blue('2. What is My Fav Programming Language??  '));

if (lang=='JS' || lang =='Java Scipt') {
  score = score + 5;
 console.log(chalk.green('You Are Absolutely Correct'));
  console.log(chalk.green('Your Score Is = '+score));
}

else {
  console.log(chalk.red('Wrong Answer!!!!'));
}
console.log(chalk.yellow('lets Proceed With The Third Question!!!'));


let mentor = readlineSync.question(chalk.blue('3. Wh0 is My Mentor??  '));
if (mentor == 'Tanay Pratap' ||mentor ==  'TANAY PRATAP')
 {
  score = score + 5;
  console.log(chalk.green( 'You Are Absolutely Correct'));
  console.log(chalk.green('Your Score Is = '+score));

}

else {
  console.log(chalk.red('Wrong Answer!!!!'));
}

console.log(chalk.yellow('lets Proceed With The Fourth Question!!!'));


let game = readlineSync.question(chalk.blue('4. Which Is My Fav Game??1.Counter Strike;2.Valorant;3.GTA 5  '));
if (game == 'Valorant'||game ==  'valorant' ||game ==  'GTA 5 ' ||game ==  'GTA5')
 {
  score = score + 5;
   console.log(chalk.green('You Are Absolutely Correct'));
  console.log(chalk.green('Your Score Is = '+score));

}

else {
  console.log(chalk.red('Wrong Answer!!!!'));
}

console.log(chalk.yellow('lets Proceed With The Fifth Which Is The Last Question!!!'));

if (game=='GTA5'||game=='GTA 5') {
 let char = readlineSync.question(chalk.blue('5. Who is My Fav Character In GTA V??  '));
  if (char=='Miachel' ||char== 'miachel')
  {
  score = score + 5;
   console.log(chalk.green('You Are Absolutely Correct my Friend'));
  console.log(chalk.green('Your Score Is = '+score));

}

else {
  console.log(chalk.red('Wrong Answer!!!!'));
}
}


if (game=='Valorant' ||game== 'valorant') {
 let char =   readlineSync.question(chalk.blue('5. Who is My Fav Agent In Valorant??  '));
  if (char=='CYPHER' ||char== 'cypher' ||char== 'Cypher')
  {
  score = score + 5;
  console.log(chalk.green( 'You Are Absolutely Correct my Friend'));
 console.log( chalk.green('Your Score Is = '+score));

}

else {
  console.log(chalk.green('Wrong Answer!!!!'));
}
}

if (score==25)
{
 console.log(chalk.bgRed('Congrats For Getting the High Score Bruv You Do Know Me Well ;)  HAHA!!!!!!')) 
}

else {
  console.log(chalk.bgRed('thanks for playing the quiz :) '));
}