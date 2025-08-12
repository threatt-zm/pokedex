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
            const commands = state.commands;
            if(commands[cmd]){
                await commands[cmd].callback(state);
            } else {
                console.log("Unknown command");
            }
            state.rl.prompt();
        });
    } catch(err) {
        if(err instanceof Error){
            console.log(err.message);
        }
    }
}

