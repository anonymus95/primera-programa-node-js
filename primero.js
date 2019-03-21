function promedio(nota1,nota2,nota3)
{
    let resultado = (nota1+nota2+nota3)/3;
    console.log('Su promedio este semestre es:' + resultado)
}

//funcion flecha
let suma= (n1,n2) => {
    console.log(n1+n2)
}

let resta = (n1,n2) => console.log(n1-n2)

//non blocking
let mul = (n1,n2) => {
    setTimeout(()=>{
        console.log(n1*n2)
    },2000)
    
}

//callback
let promedioo = (n1,n2,n3,callback) =>{
    setTimeout(()=>{
        callback ((n1+n2+n3)/3)
    },2000)
    
}
promedioo(5,5,5,(resultado)=>{
    console.log(resultado)
})

//salidas
promedio(5,5,5)
mul(2,5)
suma(2,2)
resta(4,2)

