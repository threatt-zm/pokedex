import { State } from "./state.js";

export function cleanInput(input:string):string[] {
    return input.toLowerCase().trim().split(" ").filter(word => word != "");
}

export async function startREPL(state:State):Promise<void> {
    try {
        state.rl.prompt();
        state.rl.on("line", async (input) => {
            const inputs = cleanInput(input);
            const cmd = inputs[0];
            const args = inputs.slice(1);
            const commands = state.commands;
            if(commands[cmd]){
                await commands[cmd].callback(state, ...args);
            } else {
                console.log("Unknown command");
            }
            state.rl.prompt();
        });
    } catch(err) {
        console.log((err as Error).message);
    }
}

