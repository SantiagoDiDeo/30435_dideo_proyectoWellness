
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

//objeto
class Deportista {
    constructor(nombreDep, apellidoDep, dniDep, edadDep, deporteDep,entrenadorDep, institucionDep, preWellness, postWellness) {
        this.nombreDep = nombreDep;
        this.apellidoDep = apellidoDep;
        this.dniDep = dniDep;
        this.edadDep = edadDep;
        this.deporteDep = deporteDep;
        this.entrenadorDep = entrenadorDep;
        this.institucionDep = institucionDep;
        this.preWellness = preWellness;
        this.postWellness = postWellness;
    }
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

    let nuevoDeportista = new Deportista(nombre, apellido, dni, edad, deporte, entrenador, institucion)
    deportistas.push(nuevoDeportista);

    localStorage.setItem('deportistas', JSON.stringify(deportistas));

}

//bienvenida
const saludoInicial = () => {
    saludo.innerHTML = `Bienvenid@ ${nombre}, ya podes iniciar el test Pre Training Wellness`;
    formularioDeportista.style.display = 'none';
}


//listener
formularioDeportista.addEventListener('submit', (e) => {
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

//objeto
class PreWellness {
    constructor(dniPre, cantidadPre, calidadPre, animicoPre, estresPre, cansancioPre, fatigaPre, lesionesPre){
        this.dniPre = dniPre;
        this.cantidadPre = cantidadPre;
        this.calidadPre = calidadPre;
        this.animicoPre = animicoPre;
        this.estresPre = estresPre;
        this.cansancioPre = cansancioPre;
        this.fatigaPre = fatigaPre;
        this.lesionesPre = lesionesPre;
    }
};


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

    switch(lesiones) {
        case "si":
        case "SI":
        case "Si":
            lesiones = true;
            break;
        
        case "no":
        case "No":
        case "NO":
            lesiones = false;
            break;

        default:
            alert("Su respuesta no es correcta. Complete con 'si' o 'no'.");
            formularioPreWellness.style.display = "flex";
            break;
        } 

        switch(fatiga) {
            case "si":
            case "SI":
            case "Si":
                fatiga = true;
                break;
            
            case "no":
            case "No":
            case "NO":
                fatiga = false;
                break;
    
            default:
                alert("Su respuesta no es correcta. Complete con 'si' o 'no'.");
                formularioPreWellness.style.display = "flex";
                break;
            } 
    let nuevoPreWellness = new PreWellness(dniP, cantidad, calidad, animico, estres, cansancio, fatiga, lesiones);
    preWellness.push(nuevoPreWellness);

    localStorage.setItem('prewellness', JSON.stringify(preWellness));


}

//listener
formularioPreWellness.addEventListener('submit', (e) =>{
    e.preventDefault();
    formularioPreWellness.style.display = 'none';
    enviarFormPre();
    
    }
);


//FORMULARIO POST WELLNESS

//variables
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

//objeto
class PostWellness {
    constructor(dniPost, exigenciaPost, cansancioPost, fatigaPost, lesionesPost) {
        this.dniPost = dniPost;
        this.exigenciaPost = exigenciaPost;
        this.cansancioPost = cansancioPost;
        this.fatigaPost = fatigaPost;
        this.lesionesPost = lesionesPost;
    }
}


//localStorage
const enviarFormPost = () => {
    dniPo = dniPost.value;
    exigenciaP = exigenciaPost.value;
    cansancioP = cansancioPost.value;
    fatigaP = fatigaPost.value;
    lesionesP = lesionesPost.value;

    switch(lesionesP) {
        case "si":
        case "SI":
        case "Si":
            lesiones = true;
            break;
        
        case "no":
        case "No":
        case "NO":
            lesiones = false;
            break;

        default:
            alert("Su respuesta no es correcta. Complete con 'si' o 'no'.");
            formularioPostWellness.style.display = "flex";
            break;
        } 

        switch(fatigaP) {
            case "si":
            case "SI":
            case "Si":
                fatiga = true;
                break;
            
            case "no":
            case "No":
            case "NO":
                fatiga = false;
                break;
    
            default:
                alert("Su respuesta no es correcta. Complete con 'si' o 'no'.");
                formularioPostWellness.style.display = "flex";
                break;
            } 

        
        /* if(dniPo === deportistas.dniDep){
            let nuevoPostWellness = new PostWellness(dniPo, exigenciaP, cansancioP, fatigaP, lesionesP);
    deportistas[Deportista.dniDep].push(nuevoPostWellness)

    localStorage.setItem('postwellness', JSON.stringify(postWellness));
        } else {
            alert("no funciona");
        } */

        let nuevoPostWellness = new PostWellness(dniPo, exigenciaP, cansancioP, fatigaP, lesionesP);
        postWellness.push(nuevoPostWellness)
    
        localStorage.setItem('postwellness', JSON.stringify(postWellness));

}

//listener
formularioPostWellness.addEventListener('submit', (e) =>{
    e.preventDefault();
    formularioPostWellness.style.display = 'none';
    enviarFormPost();
    
    }
);



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







