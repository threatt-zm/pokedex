import { State } from "./state.js";

export async function commandInspect(state:State, ...args:string[]):Promise<void> {
    const name = args[0];

    if(args.length !== 1){
        console.log("Must provide 1 pokemon");
        return;
    }

    if(!state.pokedex[name]){
        console.log("you have not caught that pokemon");
        return;
    }

    const pokemonInfo = state.pokedex[name];

    console.log(`Name: ${pokemonInfo.name}`);
    console.log(`Height: ${pokemonInfo.height}`);
    console.log(`Weight: ${pokemonInfo.weight}`);
    console.log(`Stats:`);
    for(const statInfo of pokemonInfo.stats) {
        console.log(` -${statInfo.stat.name}: ${statInfo.base_stat}`);
    }
    console.log("Types:");
    for(const typeInfo of pokemonInfo.types) {
        console.log(` - ${typeInfo.type.name}`);
    }

}