import { startREPL } from "./repl.js";
import { initState } from "./state.js";

function main() {
    startREPL(initState());
}

main();