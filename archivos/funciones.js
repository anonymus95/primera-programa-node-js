const fs = require('fs')
listaEstudiantes = []

const crear = (estudiante) => {
    listar()
    let est = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion
    }
    let duplicado = listaEstudiantes.find((nom) => nom.nombre == estudiante.nombre)
    if(!duplicado){
        listaEstudiantes.push(est)
        console.log(listaEstudiantes)
        guardar()
    }
    else{
        console.log('Ya existe otro estudiante con este nombre')
    }
}

const listar= () => {
    try {
        listaEstudiantes = require('./listado.json')
    } catch (error) {
        listaEstudiantes = []
    }
    
}
const guardar = () => {
    let datos = JSON.stringify(listaEstudiantes)
    fs.writeFile('listado.json', datos, (err) => {
        if(err) throw(err)
        console.log('Archivo creado con éxito')
    })
}

const mostrar = () =>{
    listar()
    console.log('Notas de los estudiantes ')
    listaEstudiantes.forEach(estudiante => {
        console.log(estudiante.nombre)
        console.log('notas')
        console.log('matematicas '+ estudiante.matematicas)
        console.log('ingles ' + estudiante.ingles)
        console.log('programación ' + estudiante.programacion +'\n')
    });
}

const mostrarest = (nom) =>{
    listar()
    let est = listaEstudiantes.find((buscar) => buscar.nombre == nom)
    if(!est){
        console.log('No existe este estudiante')
    }
    else{
        console.log(est.nombre)
        console.log('notas')
        console.log('matematicas '+ est.matematicas)
        console.log('ingles ' + est.ingles)
        console.log('programación ' + est.programacion +'\n')
    }
}

const mostrarmat = () => {
    listar()
    let ganan = listaEstudiantes.filter(mat => mat.matematicas >= 3)
    if(ganan.length == 0){
        console.log('ningun estudiante ha ganado')
    }
    else{
        ganan.forEach(estudiante => {
            console.log(estudiante.nombre)
            console.log('notas')
            console.log('matematicas '+ estudiante.matematicas)
        });
    }       
}


//=========================== Bonus ===========================================================

//funcion que calcula el promedio de un estudiante
const prom = (est) =>{
    let promedio = (est.matematicas + est.ingles + est.programacion)/3
    console.log('Estudiante: '+ est.nombre)
    console.log('Promedio: ' + promedio +'\n') 
 }

//funcion que muestra el promedio de un estudiante dado
const mostrarprom = (nom) => {
    listar()
    let est = listaEstudiantes.find((buscar) => buscar.nombre == nom)
    if(!est){
        console.log('No existe este estudiante')
    }
    else{
        prom(est)   
    }
}

//muestra los estudiantes con promedio mayor a 3
const promaprobado = () =>
{
        listar()
        let promedio = listaEstudiantes.filter(asignatura => ((asignatura.matematicas+asignatura.ingles+asignatura.programacion)/3) >= 3)
           
        if(promedio.length == 0){
            console.log('ningun estudiante ha ganado')
        }
        else{
            console.log('Estudiantes con promedio mayor a 2.9\n')
            promedio.forEach(estudiante => {
               prom(estudiante)
            });
        }          
}

module.exports = {
    crear,
    mostrar,
    mostrarest,
    mostrarmat,
    mostrarprom,
    promaprobado
}