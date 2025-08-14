import { Cache } from "./pokecache.js"

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    cache:Cache;
    constructor(interval:number) {
        this.cache = new Cache(interval);
    }

    async fetchLocations(pageURL?:string):Promise<ShallowLocations> {
        const url = pageURL || `${PokeAPI.baseURL}/location-area`;
        if(!this.cache.get(url)) {
             const response = await fetch(url);
            this.cache.add(url, response.json())
        }
        return this.cache.get(url);
    }

    async fetchLocation(locationName:string):Promise<Location> {
        const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
        if(!this.cache.get(url)) {
             const response = await fetch(url);
            this.cache.add(url, response.json())
        }
        return this.cache.get(url);
    }

    async fetchPokemon(name:string):Promise<Pokemon> {
        const url = `${PokeAPI.baseURL}/pokemon/${name}`;
        if(!this.cache.get(url)) {
             const response = await fetch(url);
            this.cache.add(url, response.json())
        }
        return this.cache.get(url);
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
    game_index:number;
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

export type Pokemon = {
    id:number;
    name:string;
    base_experience:number;
    height:number;
    is_default:boolean;
    order:number;
    weight:number;
    abilities:PokemonAbility[];
    forms:NamedAPIResource[];
    game_indices:VersionGameIndex[];
    held_items:PokemonHeldItem[];
    location_area_encounters:string;
    moves:PokemonMove[];
    past_types:PokemonTypePast[];
    past_abilities:PokemonAbilityPast[];
    sprites:PokemonSprites;
    cries:PokemonCries;
    species:NamedAPIResource;
    stats:PokemonStat[];
    types:PokemonType[];
}

export type PokemonAbility = {
    is_hidden:boolean;
    slot:number;
    ability:NamedAPIResource;
}

export type VersionGameIndex = {
    game_index:number;
    version:NamedAPIResource;
}

export type PokemonHeldItem = {
    item:NamedAPIResource;
    version_details:PokemonHeldItemVersion;
}

export type PokemonHeldItemVersion = {
    version:NamedAPIResource;
    rarity:number;
}

export type PokemonMove = {
    move:NamedAPIResource;
    version_group_details:PokemonMoveVersion;
}
export type PokemonMoveVersion = {
    move_learn_method:NamedAPIResource;
    version_group:NamedAPIResource;
    level_learned_at:number;
    order:number;
}

export type PokemonTypePast = {
    generation:NamedAPIResource;
    types:PokemonType;
}

export type PokemonType = {
    slot:number;
    type:NamedAPIResource;
}

export type PokemonAbilityPast = {
    generation:NamedAPIResource;
    abilities:PokemonAbility;
}

export type PokemonSprites = {
    front_default:string;
    front_shiny:string;
    front_female:string;
    front_shiny_female:string;
    back_default:string;
    back_shiny:string;
    back_female:string;
    back_shiny_female:string;
}

export type PokemonCries = {
    latest:string;
    legacy:string;
}

export type PokemonStat = {
    stat:NamedAPIResource;
    effort:number;
    base_stat:number;
}