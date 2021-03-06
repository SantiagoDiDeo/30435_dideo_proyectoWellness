

//variables

let deportistas = [];
let preWellness = [];
let postWellness = [];
let nombre;
let apellido;
let dni;
let edad;
let deporte;
let entrenador;
let institucion;

const formularioDeportista = document.querySelector(".main__form1");
const nombreDeportista = document.querySelector("#nombre");
const apellidoDeportista = document.querySelector("#apellido");
const dniDeportista = document.querySelector("#dni");
const edadDeportista = document.querySelector("#edad");
const deporteDeportista = document.querySelector("#deporte");
const entrenadorDeportista = document.querySelector("#entrenador");
const institucionDeportista = document.querySelector("#institucion");
const botonSubmit = document.querySelector("#submit");
const btnDeportista = document.querySelector(".btn-deportista");



//formulario
formularioDeportista.style.display = 'none';




// AGREGAR DEPORTISTA
const agregarDeportista = () => {
    formularioDeportista.style.display = 'block';
};

btnDeportista.onclick = () => {
    agregarDeportista();
}


//localStorage
const enviarForm = () => {

    nombre = nombreDeportista.value;
    apellido = apellidoDeportista.value;
    dni = dniDeportista.value;
    edad = edadDeportista.value;
    deporte = deporteDeportista.value;
    entrenador = entrenadorDeportista.value;
    institucion = institucionDeportista.value;

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellido', apellido);
    localStorage.setItem('dni', dni);
    localStorage.setItem('edad', edad);
    localStorage.setItem('deporte', deporte);
    localStorage.setItem('entrenador', entrenador);
    localStorage.setItem('institucion', institucion);
}

botonSubmit.onclick = enviarForm();







/* FORMULARIO WELLNESS */
class PreWellness {
    constructor(cantidadSueno, calidadSueno, animico, estres, cansancio, fatiga, lesiones){
        this.cantidadSueno = cantidadSueno;
        this.calidadSueno = calidadSueno;
        this.animico = animico;
        this.estres = estres;
        this.cansancio = cansancio;
        this.fatiga = fatiga;
        this.lesiones = lesiones;
        
    }
};



const llenarFormulario1 = () => {
    let cantidadSueno = parseFloat(prompt("Ingrese la cantidad de horas de sue??o (hh:mm)."))
    let calidadSueno = parseInt(prompt("Ingrese su calidad de sue??o del 1 al 10."));
    let animico = parseInt(prompt("Como se encuentra animicamente/de humor del 1 al 10?"));
    let estres = parseInt(prompt("Que tan estresado se siente del 1 al 10?"));
    let cansancio = parseInt(prompt("Ingrese su nivel de cansancio general del 1 al 10."))
    let fatiga = prompt("Tiene fatiga o dolor muscular? Responda por 'si' o 'no'.");
    let lesiones = prompt("Tiene alguna lesion? Responda por 'si' o 'no'.");

    let formNuevo = new PreWellness(cantidadSueno, calidadSueno, animico, estres, cansancio, fatiga,   lesiones);
    preWellness.push(formNuevo);

    if (lesiones === "si") {
        lesiones = true;
        } else if(lesiones === "no") {
            lesiones = false;
            } else {
        alert("su respuesta es incorrecta. Ingrese 'si' o 'no'");
        lesiones = prompt("Tiene alguna lesion? Responda por 'si' o 'no'.");
        preWellness.push(lesiones);
        }

        if (fatiga === "si") {
            fatiga = true;
            } else if(fatiga === "no") {
                fatiga = false;
                } else {
            alert("su respuesta es incorrecta. Ingrese 'si' o 'no'");
            fatiga = prompt("Tiene alguna lesion? Responda por 'si' o 'no'.");
            preWellness.push(fatiga);
            }    

}

let btnPreWellness = document.querySelector(".btn-prewellness");
btnPreWellness.onclick = () => {
    llenarFormulario1();
};

class PostWellness {
    constructor(exigencia, cansancio, fatiga, lesiones) {
        this.exigencia = exigencia;
        this.cansancio = cansancio;
        this.fatiga = fatiga;
        this.lesiones = lesiones;
    }

}



const llenarFormulario2 = () => {
    let exigencia = parseInt(prompt("Ingrese el nivel de exigencia percibido en su entrenamiento del 1 al 10."));
    let cansancio = parseInt(prompt("Ingrese el nivel de cansancio post entrenamiento del 1 al 10."));
    let fatiga = prompt("Tiene fatiga o dolor muscular? Responda por 'si' o 'no'.");
    let lesiones = prompt("Tiene alguna lesion? Responda por 'si' o 'no'.");

    let formNuevo1 = new PostWellness(exigencia, cansancio, fatiga, lesiones);
    postWellness.push(formNuevo1);

    if (lesiones === "si") {
        lesiones = true;
        } else if(lesiones === "no") {
            lesiones = false;
            } else {
        alert("su respuesta es incorrecta. Ingrese 'si' o 'no'");
        lesiones = prompt("Tiene alguna lesion? Responda por 'si' o 'no'.");
        postWellness.push(lesiones);
        }

        if (fatiga === "si") {
            fatiga = true;
            } else if(fatiga === "no") {
                fatiga = false;
                } else {
            alert("su respuesta es incorrecta. Ingrese 'si' o 'no'");
            fatiga = prompt("Tiene alguna lesion? Responda por 'si' o 'no'.");
            postWellness.push(fatiga);
            }    
}

let btnPostWellness = document.querySelector(".btn-postwellness");
btnPostWellness.onclick = () => {
    llenarFormulario2();
};

/* ESTADISTICAS */

const estadisticas = () => {
    let estadistica = prompt("Escriba el nombre del deportista");
    deportistas.forEach(deportistas => {
        console.log(deportistas.preWellness);
        console.log(deportistas.postWellness);
    })
}

let btnEstadisticas = document.querySelector(".btn-estadisticas");
btnEstadisticas.onclick = () => {
    estadisticas();
};










