#!/usr/bin/env node
import {getArgs} from "./helpers/getArgs.js";
import {printError, printSuccess, printHelp} from "./services/log.service.js";
import {saveKeyValue, getKeyValue} from "./services/storage.service.js";

const saveToken = async (token) => {
    try {
        await saveKeyValue("token", token)
        printSuccess("Токен успешно сохранён")
    } catch (e) {
        printError(e.message)
    }
}

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
            return saveToken(args.t)
        }
        // output weather
    } catch (e) {
        printError(e)
    }
}

init()