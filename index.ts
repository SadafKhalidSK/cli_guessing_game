#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber=Math.floor(Math.random()*3+1)

const answer= await inquirer.prompt(
    { name: "userGussedNumber",
    type: "number",
    message:"Please guess a number between 1 to 5"

});
if (answer.userGussedNumber==randomNumber){
    console.log("your answer is correct");
}
else {
    console.log("you guessed wrong number")
}
