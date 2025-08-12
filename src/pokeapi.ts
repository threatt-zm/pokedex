export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor() {}

    async fetchLocations(pageURL?:string):Promise<ShallowLocations> {
        const url = pageURL || `${PokeAPI.baseURL}/location-area`;
        const response = await fetch(url, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.json();
    }

    async fetchLocation(locationName:string):Promise<Location> {
        const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
        const response = await fetch(url, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.json();
    }
}

export type ShallowLocations = {
    count:number;
    next:string;
    previous:string;
    results: NamedAPIResource[];
}

export type Location = {
    name:string;
    id:number;
    //game_index:number;
    encounter_method_rates:EncounterMethodRate;
    location:NamedAPIResource;
    names: Name[];
    pokemon_encounters:PokemonEncounter[]
}

export type EncounterMethodRate = {
    encounter_method:NamedAPIResource;
    version_details:EncounterVersionDetails[];
}

export type NamedAPIResource = {
    name:string;
    url:string;
}

export type Name = {
    name:string;
    language:NamedAPIResource;
}

export type PokemonEncounter = {
    pokemon:NamedAPIResource;
    version_details:VersionEncounterDetail
}

export type VersionEncounterDetail = {
    version:NamedAPIResource;
    max_chance:number;
    encounter_details:Encounter[];
}

export type Encounter = {
    min_level:number;
    max_level:number;
    condition_values:NamedAPIResource[];
    chance:number;
    method:NamedAPIResource;
}

export type EncounterVersionDetails = {
    rate:number;
    version:NamedAPIResource;
}