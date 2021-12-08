//Escribir en un fichero, metido en un fichero aparte
/*
const fs = require('fs');
*/

//Configuración del yargs que se mete en un fichero aparte
/*
const argvYargs = require('yargs').argv;
const argvYargsConcatenacion = require('yargs').command('listar', 'Imprime en consola', {
    base: {
        demand: true
    }
}).argv;
const argvYargsConcatenacionConAlias = require('yargs').command('listarAlias', 'Imprime en consola', {
    base: {
        demand: true,
        alias: 'b'
    }
}).argv;
const argvYargsConcatenacionConAliasYLimite = require('yargs').command('listarAliasLimite', 'Imprime en consola', {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}).argv;
const argvYargsConcatenacionHelp = require('yargs').command('listarHelp', 'Imprime en consola', {
    base: {
        demand: true
    }
}).help();
const argvYargsConcatenacionConAliasYLimiteArgv = require('yargs').command('listarAliasLimite', 'Imprime en consola', {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}).help().argv;
*/
const argv = require("./config/yargs").argv;
const colors = require("colors/safe");

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar"); // Desustructuration to export the functions
const multiplicar = require("./multiplicar/multiplicar");
let comando = argv._[0];

//Argumentos con el yargs definido en el app.js
/*
let comandoArgvYargs = argvYargs._[0];
*/

//CÓDIGO DEL TEMA 28 QUE SE VA A METER EN OTRA CARPETA PORQUE APP.JS TIENE QUE SER LO MÁS SIMPLE POSIBLE
/*
//Primera prueba de creación de un fichero 
const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile('message.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});



//Creación de un fichero que sea una tabla de multiplicar
let base = 3;
let datos = '';
for (let i = 1; i <= 10; i++) {
    datos += `${ base } * ${ i } = ${ base * i }\n`;
}
fs.writeFile(`tabla-${ base }.txt`, datos, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});


//Creación de los ficheros en una carpeta aparte que no existe
fs.writeFile(`./ficheroNoExiste/tabla-${ base }.txt`, datos, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});


//Creación de los ficheros en una carpeta aparte que existe
fs.writeFile(`./ficheroExiste/tabla-${ base }.txt`, datos, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
*/

/*console.log(multiplicar);
let crearArchivo2 = multiplicar.crearArchivo();*/

//Prueba que se puede ejecutar el código de las variables funciones importadas
/*let base = 7;
crearArchivo(base).then(archivo => {
    console.log(`Archivo creado:  ${ archivo }`);
}).catch((err) => {
    console.log(err);
})
*/

//Uso de la función Number de typescript
/*if (Number('5')) {
    console.log(`true`);
}
console.log(Number('5'));
*/

//Variables que están siempre definidas cuando se ejecuta nodemon de un fichero .js
//1) module
/*console.log(module);
//2)Process
console.log(process);*/

//process.argv   Argumentos que mandamos al ejecutar el node de un fichero.js
//console.log(process.argv);

//Ejecutamos el fichero de la forma node app OtroArgumento
/*
let argvPrueba = process.argv;
let parametroExtra = argvPrueba[2];
let base = argvPrueba[3].split(`=`)[1];
console.log(`Argumento extra pasado ${ parametroExtra }`);
console.log(`Solamente la base ${ base }`);


crearArchivo(base).then(archivo => {
    console.log(`Archivo creado:  ${ archivo }`);
}).catch((err) => {
    console.log(err);
})
*/

//Obtener los argumentos con la librería yargs. Lo comparamos con el de process

//let argvProcess = process.argv;
//console.log(argvProcess);
//console.log(argvYargs);

//Parámetros obtenidos con alias
/*
console.log(argvYargsConcatenacionConAlias.base);
console.log(argvYargsConcatenacionConAlias.b);
console.log(argvYargsConcatenacionConAlias);
*/

//Con limite
/*
console.log(argvYargsConcatenacionConAlias.limite);
console.log(argvYargsConcatenacionConAlias);
console.log(argvYargsConcatenacionConAliasYLimite.limite);
console.log(argvYargsConcatenacionConAliasYLimite);
*/

//Comandos independientes
/*
console.log(argvYargsConcatenacionConAliasYLimiteArgv);
console.log(comando);
*/

switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.limite);
        break;

    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch((e) => console.log(e));
        break;

    default:
        console.log("Comando no reconocido");
}

/*
// console.log(argv.base);


// let parametro = argv[2];
// let base = parametro.split('=')[1]
*/