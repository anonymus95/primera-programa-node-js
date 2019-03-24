const nombre ={
    demand: true,
    alias: 'n'
}
const matematicas ={
    demand: true,
    alias: 'm'
}
const ingles ={
    demand: true,
    alias: 'i'
}
const programacion ={
    demand: true,
    alias: 'p'
}

const muestraest = {
    nombre
}

const creacion ={
    nombre,
    matematicas,
    ingles,
    programacion
}

const argv = require('yargs')
            .command('crear','Crear un estudiante en el BD', creacion)
            .command('mostrar','Mostrar los estudiantes y sus notas')
            .command('mostrarest', 'Muestra información un estudiante', muestraest)
            .command('mostrarprom','Muestra el promedio de un estudiante dado', muestraest)
            .argv

module.exports={
    argv
}


