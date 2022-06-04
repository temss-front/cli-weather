import {
  printError,
  printSuccess,
  printWeather,
} from "./services/log.service.js";
import { getKeyValue, saveKeyValue } from "./services/storage.service.js";
import { TOKEN_DICTIONARY } from "./constants.js";
import { getWeather } from "./services/api-weather.service.js";

export const saveToken = async (token) => {
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

export const saveCity = async (city) => {
  if (!city.length) {
    printError("Не передан город!");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.CITY, city);
    printSuccess("Город успешно сохранён");
  } catch (e) {
    printError(e.message);
  }
};

export const getForecast = async () => {
  const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.CITY));
  try {
    const weatherInfo = await getWeather(city);
    printWeather(weatherInfo);
  } catch (e) {
    if (e?.response?.status === 404) {
      printError("Неверно указан город");
    } else if (e?.response?.status === 401) {
      printError("Неверно указан токен");
    } else {
      printError(e.message);
    }
  }
};
