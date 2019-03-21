let estudiante = {
    nombre: 'Julian',
    edad: 23,
    notas:{
        matematicas: 4,
        ia: 5,
        programacion:5
    }
}

let obtenerPromedio= (n1,n2,n3) => { return (n1+n2+n3)/3}


//exporta el codigo para que pueda ser usado por otro usuario
module.exports = {
    estudiante,
    obtenerPromedio
};