import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
    name:string;
    description:string;
    callback: (state:State) => Promise<void>;
};

export type State = {
    rl: Interface;
    commands: Record<string, CLICommand>;
    loc: PokeAPI;
    prevLocationURL:string;
    nextLocationURL:string;
}

export function initState(interval:number):State {
    return {
        rl: createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
        }),
        commands: getCommands(),
        loc: new PokeAPI(interval),
        prevLocationURL: "",
        nextLocationURL: "",
    }
}