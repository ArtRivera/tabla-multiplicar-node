const argv = require('yargs')
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla de multiplicar'
    })
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Es el número al que llega la tabla',
        default: 10
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un número';
        }
        return true;
    })
    .argv

module.exports = argv;