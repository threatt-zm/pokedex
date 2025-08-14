import { State } from "./state.js";

export async function commandCatch(state:State, ...args:string[]):Promise<void> {
    const name = args[0];

    if(args.length !== 1){
        console.log("Must provide 1 pokemon");
        return;
    } 
    
    if(state.pokedex[name]) {
        console.log(`${name} is already caught!`);
        return;
    }

    const pokemon = await state.pokeapi.fetchPokemon(name);
    const baseExperience = pokemon.base_experience;
    
    console.log(`Throwing a Pokeball at ${name}...`);

    const chance = Math.random()*baseExperience;
    if(chance < 50 ){
        console.log(`${name} was caught!`);
        console.log("You may now inspect this pokemon.");
        state.pokedex[name] = pokemon;
        return;
    }
    
    console.log(`${name} escaped!`);
    
}