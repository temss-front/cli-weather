#!/usr/bin/env node
import {getArgs} from "./helpers/getArgs.js";
import {printError, printSuccess, printHelp} from "./services/log.service.js";

const init = () => {
    const args = getArgs(process.argv)
    try {
        if (args.h) {
            printHelp()
        }
        if (args.c) {
            //save city
        }
        if (args.t) {
            //save token
        }
        // output weather
    } catch (e) {
        printError(e)
    }
}

init()