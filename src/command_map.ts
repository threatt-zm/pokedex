import { State } from "./state.js";

export async function commandMap(state:State):Promise<void> {
    const locationsData = await state.loc.fetchLocations(state.nextLocationURL);

    for(const locs of locationsData.results) {
        console.log(locs.name);
    }

    state.prevLocationURL = locationsData.previous;
    state.nextLocationURL = locationsData.next;
    
}

export async function commandMapB(state:State):Promise<void> {
    if(!state.prevLocationURL){
        console.log("you're on the first page");
    } else {
        const locationsData = await state.loc.fetchLocations(state.prevLocationURL);

        for(const locs of locationsData.results) {
            console.log(locs.name);
        }

        state.nextLocationURL = locationsData.next;
        state.prevLocationURL = locationsData.previous;
    }
}