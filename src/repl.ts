
import { rawListeners } from "node:process";
import { createInterface } from "node:readline";
import Stream from "node:stream";

export function cleanInput(input:string):string[] {
    return input.trim().split(" ").filter(word => word != "").map(word => word.toLowerCase());
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
        if(inputs.length > 0) {
            console.log(`Your command was: ${inputs[0]}`);
        }
        rl.prompt();
    });
}

