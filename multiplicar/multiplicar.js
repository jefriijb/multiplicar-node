const fs = require('fs');
const colors = require('colors');

let listartabla = (base, limite = 0) => {

    console.log('====================='.red);
    console.log(`=====Tabla de ${base}======`.red);
    console.log('====================='.red);

    for (i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${ base * i }\n`);
    }

}

crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }

        let data = '';

        for (i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i }\n`;
        }

        fs.writeFile(`Tablas/tabla-${ base }-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`Tabla-${ base }.txt`),

                console.log(`El archivo tabla-${base}-al-${limite}.txt ha sido creado`);
        });

    });
}


module.exports = {
    crearArchivo,
    listartabla
}