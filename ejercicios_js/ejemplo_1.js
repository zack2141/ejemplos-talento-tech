let ejecucion = document.getElementById("boton");



ejecucion.addEventListener("click", function () {

    let numero1 = parseFloat(document.getElementById("num1").value);
    let numero2 = parseFloat(document.getElementById("num2").value);

    let suma = numero1 + numero2;

    console.log(suma);

    
})

let form = document.getElementById("formulario")

form.addEventListener("submit",function(event){

    event.preventDefault()

     let numero1 = parseFloat(document.getElementById("num1").value);
    let numero2 = parseFloat(document.getElementById("num2").value);

    let suma = numero1 + numero2;

    console.log(suma);

})


 

function sumatoria (){

    let numero1 = parseFloat(document.getElementById("num1").value);
    let numero2 = parseFloat(document.getElementById("num2").value);

    let suma = numero1 + numero2;

    console.log(suma);

   

    window.location.reload()
    const resul =document.getElementById("resultado")

    resul.innerHTML=suma;


}