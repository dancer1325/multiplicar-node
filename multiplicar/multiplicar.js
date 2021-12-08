// requireds
const fs = require("fs");
const colors = require("colors");

console.clear(); // Clear the console

let salida;
let listarTabla = (base, limite = 10) => {
    console.log("==================".green); // 1) As property
    console.log(`tabla de ${base}`, colors.green); // 2) Using color object
    console.log("==================".green);

    for (let i = 1; i <= limite; i++) {
        salida += `${base} * ${i} = ${base * i}\n`;
        console.log(`${base} * ${i} = ${base * i}`);
    }
    fs.writeFileSync(`tablas/tablasync-${base}-al-${limite}.txt`, salida); // Write in a file synchronously
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        // First argument. Relative path of the file to create
        // Second argument. Data of the file to fulfill
        // Third argument. Error to handle
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
};

// Another version but using async instead of promises directly
let crearArchivoAsAsyncFunction = async(base, limite = 10) => {
    try {
        if (!Number(base)) {
            throw new Error(`El valor introducido ${base} no es un número`);
        }
        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        // First argument. Relative path of the file to create
        // Second argument. Data of the file to fulfill
        // Third argument. Error to handle
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data);
        return `tabla-${base}-al-${limite}.txt`;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    crearArchivo,
    listarTabla,
};

//Gracias a ES6, no haría falta poner lo que hay que exportar si se pone el mismo nombre
/*module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}*/

// module.exports.crearArchivo = (base) => {...};