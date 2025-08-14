import { State } from "./state.js";

export async function commandPokedex(state:State):Promise<void> {
    console.log("Your Pokedex:");

    if(Object.keys(state.pokedex).length === 0) {
        console.log("You do not have any pokemon in your pokedex.");
        return;
    }

    for(const key in state.pokedex) {
        console.log(` - ${key}`);
    }
}