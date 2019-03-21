
//forma  sencilla de hacer destructuracion
const {estudiante, obtenerPromedio} = require('./calculos')

console.log(estudiante)
let n1= estudiante.notas.matematicas;
let n2= estudiante.notas.ia;
let n3= estudiante.notas.programacion;
console.log('promedio ' +obtenerPromedio(n1,n2,n3))

//otra manera
//edad:anos es una manera de darle un sinonimo a un atributo si es nuestro deseo hacerlo
let {nombre,edad:anos,notas: {matematicas,ia,programacion}} = estudiante
console.log(nombre)
console.log(obtenerPromedio(matematicas,ia,programacion))
console.log(anos)