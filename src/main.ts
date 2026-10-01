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
  price: number;

  constructor(_lemonades:number,_signs:number,_price:number){
    this.lemonades = _lemonades;
    this.signs = _signs;
    this.price = _price;
  }

  CalcDayPass(weather:Weather){
    let base = 1;
    switch(weather.status) {
      case "absolute drought":
        base=1;
        break;
      case "super sunny":
        base=0.95;
        break;
      case "sunny":
        base=0.85;
        break;
      case "slight cloudy":
        base=0.7;
        break;
      case "overcast":
        base=0.5;
        break;
      case "raining":
        base=0.4;
        break;
      case "storming":
        base=0.3;
        break;
      case "hailing":
        base=0.2;
        break;
    }

  }
}


console.log("Welcome to lemonade stand selling game thing. You sell lemonade.")

rl.question(`What's your name?`, name => {
  console.log(`Hi ${name}! Let's get started.`);
});

let day = 1;
let money = 200;

while(true){
  const weather = new Weather();
  const lemonadePrice = Math.floor(day/2)+1;
  console.log(`- - - - - DAY ${day++} - - - - -`);
  console.log(`The cost of lemonade is $${lemonadePrice/100}.${lemonadePrice%100}`);
  console.log(`Today is ${weather.report()}`);
  console.log(`Assets: $${money/100}.${money%100}`);
  let numLemonade = 0;
  while(true){
    rl.question(`How many glasses of lemonade would you like to make?`,(nums:string) => {
      let num = Number(nums);
      if(num*lemonadePrice>money){
        console.log("YOU DON'T HAVE ENOUGH");
      }else{
        numLemonade = num;
        money-=numLemonade*lemonadePrice;
      }
    });
  }
  let numSigns = 0;
  while(true){
    rl.question(`How many advertising signs would you like to make (15 cent each)?`,(nums:string) => {
      let num = Number(nums);
      if(num*15>money){
        console.log("YOU DON'T HAVE ENOUGH");
      }else{
        numSigns = num;
        money-=numSigns*15;
      }
    });
  }
  let price = 0;
  rl.question(`What price should you charge per lemonade? (in cents)`,(nums:string) => {
    let num = Number(nums);
    price = num;
  });
  let lemonadeStand = new LemonadeStand(numLemonade,numSigns,price);
  let profitReport = lemonadeStand.CalcDayPass(weather);
  console.log(`FINANCIAL REPORT FOR DAY ${day}`);

}
