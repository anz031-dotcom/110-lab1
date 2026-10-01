import * as readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Weather {
  readonly status: string;
  readonly possibleStatuses : string[] = ["absolute drought", "super sunny", "sunny", "slight cloudy", "overcast", "raining", "storming", "hailing"]
  constructor(){
    this.status = this.possibleStatuses[Math.floor(Math.random()*this.possibleStatuses.length)];
  }
  report(){
    return this.status;
  }
}

class LemonadeStand {
  lemonades: number;
  signs: number;

  constructor(_lemonades=0,_signs=0){
    this.lemonades = _lemonades;
    this.signs = _signs;
  }
}


console.log("Welcome to lemonade stand selling game thing. You sell lemonade.")

rl.question(`What's your name?`, name => {
  console.log(`Hi ${name}! Let's get started.`);
});

let day = 1;

while(true){
  const weather = new Weather();
  const lemonadePrice = Math.floor(day/2)+1;
  console.log(`- - - - - DAY ${day++} - - - - -`);
  console.log(`Today is ${weather.report()}`);
  console.log(`The cost of lemonade is ${} cents`);
}
