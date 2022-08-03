
//formularioDeportista

//variables
const formularioDeportista = document.querySelector(".main__formDep");
const nombreDeportista = document.querySelector("#nombre");
const apellidoDeportista = document.querySelector("#apellido");
const dniDeportista = document.querySelector("#dni");
const edadDeportista = document.querySelector("#edad");
const deporteDeportista = document.querySelector("#deporte");
const entrenadorDeportista = document.querySelector("#entrenador");
const institucionDeportista = document.querySelector("#institucion");
const botonSubmit = document.querySelector("#submit");
const btnDeportista = document.querySelector("#btn-deportista");
const saludo = document.querySelector(".main__saludo");

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

//formulario
formularioDeportista.style.display = 'none';

// AGREGAR DEPORTISTA
const agregarDeportista = () => {   
    formularioDeportista.style.display = 'flex';
    formularioPreWellness.style.display = 'none';
    formularioPostWellness.style.display = 'none';
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

//bienvenida
const saludoInicial = () => {
    saludo.innerHTML = `Bienvenid@ ${nombre}, ya podes iniciar el test Pre Training Wellness`;
    formularioDeportista.style.display = 'none';
}


//listener
formularioDeportista.addEventListener('submit', (e) => {
    e.preventDefault();
    enviarForm();
    saludoInicial();
});






/* FORMULARIO PREWELLNESS */

//variables
const btnPreWellness = document.querySelector("#btn-preWellness");
const formularioPreWellness = document.querySelector('.main__formPre');
const dniPre = document.querySelector('#dniPre')
const cantidadPre = document.querySelector('#cantidad');
const calidadPre = document.querySelector('#calidad');
const animicoPre = document.querySelector('#animico');
const estresPre = document.querySelector('#estres');
const cansancioPre = document.querySelector('#cansancio');
const fatigaPre = document.querySelector('#fatiga');
const lesionesPre = document.querySelector('#lesiones');
const submitPre = document.querySelector('#submitPre');

let dniP;
let cantidad;
let calidad;
let animico;
let estres;
let cansancio;
let fatiga;
let lesiones;


//formulario
formularioPreWellness.style.display = "none";

const crearPreWellness = () =>{
    formularioPreWellness.style.display = "flex";
}

btnPreWellness.onclick = () => {
    crearPreWellness();
    formularioDeportista.style.display = 'none';
    formularioPostWellness.style.display = 'none';
    saludo.style.display = 'none';
}

//localStorage
const enviarFormPre = () => {
    dniP = dniPre.value;
    cantidad = cantidadPre.value;
    calidad = calidadPre.value;
    animico = animicoPre.value;
    estres = estresPre.value;
    cansancio = cansancioPre.value;
    fatiga = fatigaPre.value;
    lesiones = lesionesPre.value;

    localStorage.setItem('cantidad', cantidad);
    localStorage.setItem('calidad', calidad);
    localStorage.setItem('animico', animico);
    localStorage.setItem('estres', estres);
    localStorage.setItem('cansancio', cansancio);
    localStorage.setItem('fatiga', fatiga);
    localStorage.setItem('lesiones', lesiones);

}

//listener
formularioPreWellness.addEventListener('submit', (e) =>{
    e.preventDefault();
    formularioPreWellness.style.display = 'none';
    enviarFormPre();
    
    }
);



/* class PreWellness {
    constructor(cantidadSueno, calidadSueno, animico, estres, cansancio, fatiga, lesiones){
        this.cantidadSueno = cantidadSueno;
        this.calidadSueno = calidadSueno;
        this.animico = animico;
        this.estres = estres;
        this.cansancio = cansancio;
        this.fatiga = fatiga;
        this.lesiones = lesiones;
        
    }
}; */

/* const llenarFormulario1 = () => {
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

} */



//FORMULARIO POST WELLNESS


const btnPostWellness = document.querySelector("#btn-postWellness");
const formularioPostWellness = document.querySelector('.main__formPost');
const dniPost = document.querySelector('#dniPost');
const exigenciaPost = document.querySelector('#exigencia');
const cansancioPost = document.querySelector('#cansancioP');
const fatigaPost = document.querySelector('#fatigaP');
const lesionesPost = document.querySelector('#lesionesP');
const submitPost = document.querySelector('#submitPost');

let dniPo;
let exigenciaP;
let cansancioP;
let fatigaP;
let lesionesP;


//formulario
formularioPostWellness.style.display = "none";

const crearPostWellness = () =>{
    formularioPostWellness.style.display = "flex";
}

btnPostWellness.onclick = () => {
    crearPostWellness();
    formularioPreWellness.style.display = 'none';
    formularioDeportista.style.display = 'none';
    saludo.style.display = 'none';
}

//localStorage
const enviarFormPost = () => {
    dniPo = dniPost.value;
    exigenciaP = exigenciaPost.value;
    cansancioP = cansancioPost.value;
    fatigaP = fatigaPost.value;
    lesionesP = lesionesPost.value;

    localStorage.setItem('exigenciaPost', exigenciaP);
    localStorage.setItem('cansancioPost', cansancioP);
    localStorage.setItem('fatigaPost', fatigaP);
    localStorage.setItem('lesionesPost', lesionesP);
    

}

//listener
formularioPostWellness.addEventListener('submit', (e) =>{
    e.preventDefault();
    formularioPostWellness.style.display = 'none';
    enviarFormPost();
    
    }
);


/* formularioPreWellness.addEventListener('click', ()=>{
    formularioPreWellness.style.display = 'none';
    formularioPostWellness.style.display = 'none';
})  */
/* class PostWellness {
    constructor(exigencia, cansancio, fatiga, lesiones) {
        this.exigencia = exigencia;
        this.cansancio = cansancio;
        this.fatiga = fatiga;
        this.lesiones = lesiones;
    }

}


const llenarFormulario2 = () => {
    let exigencia = parseInt(prompt("Ingrese el nivel de exigencia percibido en su entrenamiento del 1 al 10."));
    let cansancio = parseInt(prompt("    del 1 al 10."));
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
}; */

/* ESTADISTICAS */
/* 
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


 */







