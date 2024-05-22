#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgMagenta.italic.bold("Welcome To Adventure Game"));
console.log(chalk.green("*".repeat(25)));
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter Your Name",
    },
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Please select the opponent",
        choices: ["skeleton", "Allein", "zombie"],
    },
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select == "skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "Please select the opponent",
                choices: ["Attack", "Drink portion", "Run for your life."],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red("You LOose, Better Luck Next Time. "));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green("You Win "));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.magenta(`You Drink Healthy Portion Fuel Is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life.") {
            console.log(chalk.bold.green("You LOose, Better Luck Next Time. "));
            process.exit();
        }
    }
    if (opponent.select == "Allein") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "Please select the opponent",
                choices: ["Attack", "Drink portion", "Run for your life."],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red("You LOose, Better Luck Next Time. "));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green("You Win "));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.magenta(`You Drink Healthy Portion Fuel Is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life.") {
            console.log(chalk.bold.green("You LOose, Better Luck Next Time. "));
            process.exit();
        }
    }
    if (opponent.select == "zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "Please select the opponent",
                choices: ["Attack", "Drink portion", "Run for your life."],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red("You LOose, Better Luck Next Time. "));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green("You Win "));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.magenta(`You Drink Healthy Portion Fuel Is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life.") {
            console.log(chalk.bold.green("You LOose, Better Luck Next Time. "));
            process.exit();
        }
    }
} while (true);
