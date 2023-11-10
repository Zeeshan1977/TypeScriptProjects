import inquirer from "inquirer";
const answer :{
    numberOne:number
    numberTwo:number
    Operator :string
}    = await inquirer.prompt([
    {
       Type : "number",
       name :"numberOne",
       message : "Enter your first number",
    },
    {
        Type : "number",
        name :"numberTwo",
        message : "Enter your second number",
     },
     {
        Type : "List",
        name :"Operator",
        Choices:["+","-","*","/"],
        message : "Select Operators",
     },
]);
const {numberOne,numberTwo,Operator}=answer;
if(numberOne && numberTwo && Operator){

let result : number =0;
if (Operator == "+"){
result =numberOne + numberTwo
}
else     if (Operator == "-"){
   result =numberOne - numberTwo
}
if (Operator == "/"){
   result =numberOne / numberTwo
}
if (Operator == "*"){
   result =numberOne * numberTwo
}
console.log("Your result is: " ,result)
 } else{
      console.log("Enter a valid Input")
   }
