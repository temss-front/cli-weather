import chalk from "chalk";
import dedent from "dedent";

const printError = (err) => {
  console.log(chalk.bgRed("ERROR") + ` ${err}`);
};
const printSuccess = (msg) => {
  console.log(chalk.bgGreen("SUCCESS") + ` ${msg}`);
};

const printHelp = () => {
  console.log(dedent`${chalk.bgCyan(" HELP ")}
    без параметров - информация о погоде
    -с [CITY] - сохранить город
    -h - вывод помощи
    -t [API_KEY] - сохранить токен`);
};

const printWeather = (weatherData) => {
  console.log(dedent`В городе ${weatherData.name} сегодня ${
    weatherData.weather[0].description
  }.
    Температура сейчас: ${Math.round(
      weatherData.main.temp
    )}°C, ощущается как ${Math.round(weatherData.main.feels_like)}°C
    Максимальная температура: ${Math.round(weatherData.main.temp_max)}°C
    Минимальная температура: ${Math.round(weatherData.main.temp_min)}°C
    Влажность: ${weatherData.main.humidity}%
    `);
};

export { printError, printSuccess, printHelp, printWeather };
