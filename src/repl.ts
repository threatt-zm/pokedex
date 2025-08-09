import { State } from "./state.js";

export function cleanInput(input:string):string[] {
    return input.toLowerCase().trim().split(" ").filter(word => word != "");
}

export function startREPL(state:State):void {

    state.rl.prompt();
    state.rl.on("line", (input) => {
        const inputs = cleanInput(input);
        const cmd = inputs[0];
        const commands = state.commands;
        if(commands[cmd]){
            commands[cmd].callback(state);
        } else {
            console.log("Unknown command");
        }
        state.rl.prompt();
    });
}

