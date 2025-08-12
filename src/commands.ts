import type { CLICommand } from "./state.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapB } from "./command_map.js"; 

export function getCommands():Record<string, CLICommand>;
export function getCommands():Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Displays next 20 location areas from list page",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Displays previous 20 location areas from list page",
            callback: commandMapB,
        }
    };
}