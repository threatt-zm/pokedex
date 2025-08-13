type CacheEntry<T> = {
    createdAt:number;
    val:T;
}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId:NodeJS.Timeout | undefined = undefined;
    #interval:number;

    constructor(interval:number) {
        this.#interval = interval;
        this.#startReapLoop();
    }

    add<T>(key:string, val:T):void {
        this.#cache.set(key,{
            createdAt:Date.now(),
            val:val,
        });
    }

    get<T>(key:string):T {
        return this.#cache.get(key)?.val
    }

    #reap():void {
        for(const [key,value] of this.#cache.entries()) {
            if (value.createdAt < Date.now() - this.#interval) {
                this.#cache.delete(key);
            }
        }
    }

    #startReapLoop():void {
        this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
    }

    stopReapLoop() {
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }
}