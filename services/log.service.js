import chalk from "chalk"
import dedent from "dedent"

const printError = (err) => {
    console.log(chalk.bgRed("ERROR") + ` ${err}`);
}
const printSuccess = (msg) => {
    console.log(chalk.bgGreen("SUCCESS") + ` ${msg}`);
}

const printHelp = () => {
    console.log(dedent`${chalk.bgCyan(" HELP ")}
    без параметров - информация о погоде
    -с [CITY] - сохранить город
    -h - вывод помощи
    -t [API_KEY] - сохранить токен`)
}

export {printError, printSuccess, printHelp}

