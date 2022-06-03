#!/usr/bin/env node
import { getArgs } from "./helpers/getArgs.js";
import { printError, printSuccess, printHelp } from "./services/log.service.js";
import { saveKeyValue, getKeyValue } from "./services/storage.service.js";
import { TOKEN_DICTIONARY } from "./constants.js";
import {getWeather} from "./services/api-weather.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Не передан токен!");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.TOKEN, token);
    printSuccess("Токен успешно сохранён");
  } catch (e) {
    printError(e.message);
  }
};

const init = () => {
  const args = getArgs(process.argv);
  try {
    if (args.h) {
      printHelp();
    }
    if (args.c) {
      //save city
    }
    if (args.t) {
      return saveToken(args.t);
    }
    getWeather("Санкт-Петербург")
  } catch (e) {
    printError(e);
  }
};

init();
