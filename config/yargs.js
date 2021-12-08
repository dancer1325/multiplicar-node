const { option, options } = require("yargs");

const opts = {
    base: {
        demand: true,
        alias: "b",
    },
    limite: {
        alias: "l",
        default: 10,
    },
};

const argv = require("yargs")
    .option("b", {
        // option section in the console line
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Base to multiply",
    })
    .option("l", {
        alias: "listar",
        type: "boolean",
        demandOption: true,
        default: false,
        describe: "Show the table in the console",
    })
    .option("h", {
        alias: "hasta",
        type: "number",
        demandOption: true,
        default: 10,
        describe: "Max number of the table",
    })
    .check((argv, options) => {
        // Validations about the arguments
        if (!isNaN(argv.b)) {
            throw "The base must be a number";
        }
    })
    .command("listar", "Imprime en consola la tabla de multiplicar", opts)
    .command("crear", "Genera un archivo con la tabla de multiplicar", opts)
    .help().argv;

// Export them
module.exports = {
    argv,
};