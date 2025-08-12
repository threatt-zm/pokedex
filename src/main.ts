import { startREPL } from "./repl.js";
import { initState } from "./state.js";

async function main() {
    await startREPL(initState());
}

main();