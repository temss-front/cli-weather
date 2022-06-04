#!/usr/bin/env node
import { getArgs } from "./helpers/getArgs.js";
import { printError, printHelp } from "./services/log.service.js";
import { getForecast, saveCity, saveToken } from "./utils.js";

const init = () => {
  const args = getArgs(process.argv);
  try {
    if (args.h) {
      printHelp();
    }
    if (args.c) {
      return saveCity(args.c);
    }
    if (args.t) {
      return saveToken(args.t);
    }
    return getForecast();
  } catch (e) {
    printError(e);
  }
};

init();
