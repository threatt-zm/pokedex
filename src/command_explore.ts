import { State } from "./state.js"

export async function commandExplore(state:State, ...args:string[]):Promise<void> {
    if(args.length !== 1) {
        console.log("Must provide a location");
    }

    const location = args[0];
    const locArea = await state.pokeapi.fetchLocation(location);
    const pokemonEncounters = locArea.pokemon_encounters;

    console.log("-----------------------------");
    console.log(`Exploring ${location}...`);
    console.log("Found Pokemon");
    for(const pokemonEncounter of pokemonEncounters){
        console.log(` - ${pokemonEncounter.pokemon.name}`);
    }
    
}