import { getKeyValue } from "./storage.service.js";
import { TOKEN_DICTIONARY } from "../constants.js";
import axios from "axios";

export const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_DICTIONARY.TOKEN);
  if (!token) {
    throw new Error('Не задан ключ Api. Задайте его с помощью "-t [API-KEY]"');
  }
  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "ru",
        units: "metric",
      },
    }
  );
  console.log(data)
};
