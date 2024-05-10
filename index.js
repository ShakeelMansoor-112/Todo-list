#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: chalk.red("What you want to add in your todos?"),
        },
    ]);
    todos.push(addTask.todo);
    console.log(addTask.todo);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addMore",
            type: "confirm",
            message: chalk.blue("Do you want to add more?"),
            default: "false",
        },
    ]);
    condition = addMoreTask.addMore;
}
console.log(todos);
