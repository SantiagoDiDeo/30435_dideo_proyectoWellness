
/* AGREGAR DEPORTISTA */
class Deportista {
    constructor(nombre, apellido, dni, edad, deporte, entrenador, institucion, wellness){
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.edad = edad;
    this.deporte = deporte;
    this.entrenador = entrenador;
    this.institucion = institucion;
    this.wellness = wellness;
    }
};

let deportistas = [];

const agregarDeportista = () => {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let dni = parseInt(prompt("Ingrese su dni sin puntos"));
    let edad = parseInt(prompt("Ingrese su edad"));
    let deporte = prompt("Ingrese su deporte");
    let entrenador = prompt("Ingrese el nombre de su entrenador");
    let institucion = prompt("Indique el nombre de la institucion donde entrena.");

    let deportistaNuevo = new Deportista(nombre, apellido, dni, edad, deporte, entrenador, institucion, wellness);
    deportistas.push(deportistaNuevo);

    return deportistaNuevo; 
};

//activar funcion
// agregarDeportista();
console.log(deportistas);



/* FORMULARIO WELLNESS */
class PreWellness {
    constructor(fatiga, calidadSueno, danoMuscular, estres, animico, lesiones){
        this.fatiga = fatiga;
        this.calidadSueno = calidadSueno;
        this.danoMuscular = danoMuscular;
        this.estres = estres;
        this.animico = animico;
        this.lesiones = lesiones;
        
    }
};

let preWellness = [];

const llenarFormulario1 = () => {
    let fatiga = parseInt(prompt("Ingrese su nivel de fatiga actual del 1 al 10"));
    let calidadSueno = parseInt(prompt("Ingrese su calidad de sueño del 1 al 10"));
    let danoMuscular = prompt("Tiene daño muscular?");
    let estres = parseInt(prompt("Que tan estresado se siente del 1 al 10?"));
    let animico = parseInt(prompt("Como se encuentra animicamente del 1 al 10?"));
    let lesiones = prompt("Tiene alguna lesion?");

    let formNuevo = new PreWellness(fatiga, calidadSueno, danoMuscular, estres, animico, lesiones);
    preWellness.push(formNuevo);

    let booleano;
if (danoMuscular == "si") {
    booleano = true;
} else if(danoMuscular == "no") {
    booleano = false;
} else {
    alert("su respuesta es incorrecta. Ingrese 'si' o 'no'")
}

if (lesiones == "si") {
    booleano = true;
} else if(lesiones == "no") {
    booleano = false;
} else {
    alert("su respuesta es incorrecta. Ingrese 'si' o 'no'")
}

}

/* llenarFormulario(); */
console.log(preWellness);


const estadisticas = () => {
    let estadistica = prompt("Escriba el nombre del deportista");
    if (estadisticas == Deportista.nombre) {
        alert(wellnes); 
    }
}


/* console.log(agregarDeportista.sort(1, 0, 2, 3, 4, 5, 6)); */


/* if (deportistas.includes(Deportista.nombre) == true){
    let deportista1 = `nombre: ${Deportista.nombre}`;

    return deportista1;
}

console.log(deportista1); */
