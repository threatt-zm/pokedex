import type { CLICommand } from "./state.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapB } from "./command_map.js"; 
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";

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
        },
        explore: {
            name: "explore",
            description: "Displays pokemons found in a specified location",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Attempts to catch pokemon to add to pokedex",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "Displays details about a Pokemon",
            callback: commandInspect,
        }
    };
}