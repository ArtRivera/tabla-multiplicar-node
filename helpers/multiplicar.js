const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar, hasta) => {
    try {
        let salida = '';
        let consola = '';
        for (let index = 1; index <= hasta; index++) {
            consola += `${base} ${'x'.red} ${index} = ${(base*index).toString().yellow}\n`;
            salida += `${base} x ${index} = ${base*index}\n`;
        };
        if (listar)
            console.log(consola);
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}