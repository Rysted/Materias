const fs = require('fs');
const archivoTareas = require('./funcionesDeTareas');


function escribirJSON(array){
    //convierto el array en JSON
    let tarea = JSON.stringify(array);
    //guardo el archivo
    fs.writeFileSync('./tareas.json', tarea);
}

function guardarTarea(objeto){
    //leo el archivo
    let archivo = fs.readFileSync('./tareas.json');
    //parseo el archivo en JS
    let array = JSON.parse(archivo);
    //meterlo adentro de tareas (ARRAY)
    array.push(objeto);
    escribirJSON(array);
}

function filtrarPorEstado(estado){
    //leo el archivo y lo parseo
    let leerJson = archivoTareas.leerArchivo();

    //filtro
    const tareas = leerJson.filter(function(filtro){
        if(filtro.estado == estado){
            return leerJson;
        }
    });
    //Comprobacion del requerimiento del usuario
    if(estado != undefined){
        console.log(tareas)
    }
}

function borrarTarea(materia){
    //leo el archivo y lo parseo
    let leerJson = archivoTareas.leerArchivo();

    //comprobando si esta la materia
    let lista = [];
    leerJson.map(function(e){
        if(e.titulo != materia){
            return
        }
        else if(e.titulo == materia){
            lista.push(e);
        }
    })
    // borrando la materia
    if(lista.length > 0){
        const tareas = leerJson.filter(function(filtro){
            if(filtro.titulo != materia){
                return leerJson;
            }
        });
        escribirJSON(tareas);
        console.log(' ')
        console.log('----------------------------------------');
        console.log('       La materia ha sido borrada!.')
        console.log('-----------------------------------------');
        console.log(' ')
    }
    else{
        console.log(' ')
        console.log('----------------------------------------');
        console.log('           No la encontre!.')
        console.log('-----------------------------------------');
        console.log(' ')
    }
}

module.exports = [filtrarPorEstado,guardarTarea,borrarTarea];
/*
        
*/