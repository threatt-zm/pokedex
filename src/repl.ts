import { createInterface } from "node:readline";
import { getCommands } from "./commands.js";

export function cleanInput(input:string):string[] {
    return input.toLowerCase().trim().split(" ").filter(word => word != "");
}

export function startREPL():void {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });

    rl.prompt();
    rl.on("line", (input) => {
        const inputs = cleanInput(input);
        const command = inputs[0];
        const commands = getCommands();
        if(commands[command]){
            commands[command].callback(commands);
        } else {
            console.log("Unknown command");
        }
        rl.prompt();
    });
}

