"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
    {
        Type: "number",
        name: "numberOne",
        message: "Enter your first number",
    },
    {
        Type: "number",
        name: "numberTwo",
        message: "Enter your second number",
    },
    {
        Type: "List",
        name: "Operator",
        Choices: ["+", "-", "*", "/"],
        message: "Select Operators",
    },
]);
console.log(answer);
