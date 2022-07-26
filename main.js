

//variables

let deportistas = [];
let preWellness = [];
let postWellness = [];







// AGREGAR DEPORTISTA
class Deportista {
    constructor(nombre, apellido, dni, edad, deporte, entrenador, institucion, preWellness, postWellness){
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.edad = edad;
    this.deporte = deporte;
    this.entrenador = entrenador;
    this.institucion = institucion;
    this.preWellness = preWellness;
    this.postWellness = postWellness;
    }
};





const agregarDeportista = () => {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let dni = parseInt(prompt("Ingrese su dni sin puntos"));
    let edad = parseInt(prompt("Ingrese su edad"));
    let deporte = prompt("Ingrese su deporte");
    let entrenador = prompt("Ingrese el nombre de su entrenador");
    let institucion = prompt("Indique el nombre de la institucion donde entrena.");

    let deportistaNuevo = new Deportista(nombre, apellido, dni, edad, deporte, entrenador, institucion, preWellness, postWellness);
    deportistas.push(deportistaNuevo);

    return deportistaNuevo; 
};

/* console.log(deportistas); */

const btnDeportista = document.querySelector(".btn-deportista");
btnDeportista.onclick = () => {
    agregarDeportista();
}



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
    let cantidadSueno = parseFloat(prompt("Ingrese la cantidad de horas de sueño (hh:mm)."))
    let calidadSueno = parseInt(prompt("Ingrese su calidad de sueño del 1 al 10."));
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










