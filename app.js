//const fs = require('express');
//const fs = require('./fs');

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listartabla } = require(`./multiplicar/multiplicar`);

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listartabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo } `))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;

}


//console.log(process.argv);

console.log(argv);

//console.log(argv.base);



//let parametro = argv[2];
//let base = parametro.split('=')[1];