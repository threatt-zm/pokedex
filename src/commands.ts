import type { CLICommand } from "./command.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";

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
        }
    };
}