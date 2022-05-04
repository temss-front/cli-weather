export const getArgs = (argsArr) => {
    const resultArgs = {}
    const [executor, file, ...args] = argsArr
    args.forEach((arg, i, arr) => {
        if (arg.charAt(0) === "-") {
            if (i === arr.length - 1) {
                resultArgs[arg.substring(1)] = true
            } else if (arr[i + 1].charAt(0) !== "-") {
                resultArgs[arg.substring(1)] = arr[i + 1]
            } else {
                resultArgs[arg.substring(1)] = true
            }
        }
    })
    return resultArgs
}