/** se importa el archivo, en este caso la importación es interna, 
 * ya que el archivo esta en el equipo
 */
const estudiante1 = require('./calculos')

console.log(estudiante1.estudiante)
let n1= estudiante1.estudiante.notas.matematicas;
let n2= estudiante1.estudiante.notas.ia;
let n3= estudiante1.estudiante.notas.programacion;
console.log('promedio ' + estudiante1.obtenerPromedio(n1,n2,n3))
