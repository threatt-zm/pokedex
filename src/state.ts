import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI, Pokemon } from "./pokeapi.js";

export type CLICommand = {
    name:string;
    description:string;
    callback: (state:State, ...args:string[]) => Promise<void>;
};

export type State = {
    rl: Interface;
    commands: Record<string, CLICommand>;
    pokedex:Record<string, Pokemon>;
    pokeapi: PokeAPI;
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
        pokedex: {},
        pokeapi: new PokeAPI(interval),
        prevLocationURL: "",
        nextLocationURL: "",
    }
}