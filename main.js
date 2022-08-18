
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
const estadisticaP = document.querySelector(".main__estadisticas");
const prueba = document.querySelector(".fetchPrueba");
const botonFetch = document.querySelector(".fetch");

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
    Swal.fire({
        icon: 'success',
        title: 'Deportista agregado correctamente',
        showConfirmButton: false,
        timer: 4000
        })
}


//listener
formularioDeportista.addEventListener('submit', () => {
    formularioDeportista.style.display = 'none';
    enviarForm();
    saludoInicial();
    saludo.innerHTML = `Bienvenid@ ${nombre}, ya podes iniciar el test Pre Training Wellness`;
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
    fatiga = fatigaPre.value == 'si'  ? true :
                fatigaPre.value == 'no' ? false :
                Swal.fire({
                    icon: 'error',
                    title: 'Valor incorrecto',
                    text: 'Responda por "si" o por "no"',
                    
                });
    lesiones = lesionesPre.value == 'si' ? true :
                lesionesPre.value =='no' ? false :
                Swal.fire({
                    icon: 'error',
                    title: 'Valor incorrecto',
                    text: 'Responda por "si" o por "no"',
                    
                });


    let nuevoPreWellness = new PreWellness(dniP, cantidad, calidad, animico, estres, cansancio, fatiga, lesiones);
    preWellness.push(nuevoPreWellness);
    
    localStorage.setItem('prewellness', JSON.stringify(preWellness));
    
}

const deportistaWellness = deportistas.concat(preWellness);
localStorage.setItem('deportistaPre', JSON.stringify(deportistaWellness));

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
    fatigaP = fatigaPost.value == 'si'  ? true :
                fatigaPost.value == 'no' ? false :
                Swal.fire({
                    icon: 'error',
                    title: 'Valor incorrecto',
                    text: 'Responda por "si" o por "no"',
                    
                });
    lesionesP = lesionesPost.value == 'si' ? true :
                lesionesPost.value =='no' ? false :
                Swal.fire({
                    icon: 'error',
                    title: 'Valor incorrecto',
                    text: 'Responda por "si" o por "no"',
                    
                });


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

//fetch



const fetch = async() => {
    try{
    let response = await fetch("./json/datosprueba.json")
    let res = await  res.json()
    .then(result => {
        result.forEach(dato => {
            prueba.innerHTML +=
            `
            <div>
                <span>${dato.nombre}</span>
                <span>${dato.apellido}</span>
                <span>${dato.dni}</span>
                <span>${dato.edad}</span>
                <span>${dato.deporte}</span>
                <span>${dato.entrenador}</span>
                <span>${dato.institucion}</span>
            </div>
            `
        })
    })
    
} catch(error){console.log(error)}
}


botonFetch.onclick = () => {
    fetch();
}



/* ESTADISTICAS */


const estadisticas = () => {
    let estadistica = Swal.fire({
        title: 'Buscar deportista:',
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Buscar',
        showLoaderOnConfirm: true
    });
    deportistas.forEach(deportista => {
        console.log(preWellness);
        console.log(postWellness);
    })
}

let btnEstadisticas = document.querySelector(".btn-estadisticas");
btnEstadisticas.onclick = () => {
    estadisticas();
};











