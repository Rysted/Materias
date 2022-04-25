const archivoTareas = require('./modulos/funcionesDeTareas');
const [filterJson,pushTarea,clearTarea] = require('./modulos/tareas')

let argumentos = process.argv[2]

//console.log(argumentos);

switch(argumentos){
    case 'listar':
        console.log()
        console.log('----------------------------------------');
        console.log('       Listado de tareas');
        console.log('----------------------------------------');
        let tareas = archivoTareas.leerArchivo();
        tareas.forEach(function(valor, index){
            console.log((index + 1) + ". " + valor.titulo + ' - ' + valor.estado)
        })
        console.log('-----------------------------------------');
        
        /*for(let i=0; i < tareas.length; i++){
            console.log((i + 1) +'. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        }
        */
        break;
    case 'crear':
        let objetoLiteral = {
            titulo: process.argv[3],
            estado: "pendiente"
        }
        if(process.argv[3] != undefined){
            pushTarea(objetoLiteral);
            console.log(' ')
            console.log('----------------------------------------');
            console.log(' La materia ha sido agregada con exito!.')
            console.log('-----------------------------------------');
            console.log(' ')
        }
        else{
            console.log(' ')
            console.log('----------------------------------------');
            console.log('   Debes utilizar: crear <materia>.')
            console.log('-----------------------------------------');
        }
        break;
        case 'filtrar':
            if(process.argv[3] != undefined){
                console.log(' ')
                console.log('----------------------------------------');
                filterJson(process.argv[3]);
                console.log('-----------------------------------------');
            }
            else{
                console.log(' ')
                console.log("           Dame un parametro >.<")
                console.log('-----------------------------------------');
                console.log(" <terminada> - <progreso> - <pendiente>")
                console.log('-----------------------------------------');
            }
            break;
        case 'borrar':
            if(process.argv[3] != undefined){
                clearTarea(process.argv[3]);
            }
        else{
            console.log(' ')
            console.log('----------------------------------------');
            console.log('   Debes utilizar: borrar <materia>.')
            console.log('-----------------------------------------');
        }
            break;
    case undefined:
        console.log('')
        console.log('       Atención - Tienes que pasarme una acción');
        console.log('-----------------------------------------------------------------------------------');
        console.log('Acciones: [listar] - [crear <materia>] - [filtrar <progreso>] - [borrar <materia>]');
        console.log('-----------------------------------------------------------------------------------');
        break;
    default:
        console.log("")
        console.log('               No entiendo qué quieres hacer');
        console.log('-----------------------------------------------------------------------------------');
        console.log('Acciones: [listar] - [crear <materia>] - [filtrar <progreso>] - [borrar <materia>]');
        console.log('-----------------------------------------------------------------------------------');
        break;
}