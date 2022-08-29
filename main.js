
//formularioDeportista

//variables

//deportista
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

//pre
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

//post
const btnPostWellness = document.querySelector("#btn-postWellness");
const formularioPostWellness = document.querySelector('.main__formPost');
const dniPost = document.querySelector('#dniPost');
const exigenciaPost = document.querySelector('#exigencia');
const cansancioPost = document.querySelector('#cansancioP');
const fatigaPost = document.querySelector('#fatigaP');
const lesionesPost = document.querySelector('#lesionesP');
const submitPost = document.querySelector('#submitPost');

//deportista
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

//pre
let dniP;
let cantidad;
let calidad;
let animico;
let estres;
let cansancio;
let fatiga;
let lesiones;

//post
let dniPo;
let exigenciaP;
let cansancioP;
let fatigaP;
let lesionesP;


//constructores
class PreWellness {
    constructor(cantidadPre, calidadPre, animicoPre, estresPre, cansancioPre, fatigaPre, lesionesPre){
        
        this.cantidadPre = cantidadPre;
        this.calidadPre = calidadPre;
        this.animicoPre = animicoPre;
        this.estresPre = estresPre;
        this.cansancioPre = cansancioPre;
        this.fatigaPre = fatigaPre;
        this.lesionesPre = lesionesPre;
    };
};

class PostWellness {
    constructor(dniPost, exigenciaPost, cansancioPost, fatigaPost, lesionesPost) {
        this.dniPost = dniPost;
        this.exigenciaPost = exigenciaPost;
        this.cansancioPost = cansancioPost;
        this.fatigaPost = fatigaPost;
        this.lesionesPost = lesionesPost;
    }
}

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
    };
};




const getForm = () => {

//asociacion de datos en objetos dentro de array
const datos = [
    {
        btn: btnDeportista, 
        form: formularioDeportista,
    },
    {
        btn: btnPreWellness, 
        form: formularioPreWellness,
    },
    {
        btn: btnPostWellness, 
        form: formularioPostWellness,
    }
    ];

    //flex a formularios
    const displayFlex = (f) => {
        f.style.display = 'flex';
        
    };  

// retorna todo lo que no toco dentro del array 
    const displayNone = (datos, dato) => {
        let aux = datos.filter(d  => {
            if(d !== dato) return d;
        });

        //a lo que no toca ponele display none
            aux.forEach(f =>{
            f.form.style.display = 'none';
        
        })
    };

// recorre cada datos(cada boton dentro del array)
    datos.forEach(dato => {
        dato.btn.addEventListener('click', () => {
//cuando le dan click a un boton da display flex al seleccionado y none al resto
            displayFlex(dato.form);
            displayNone(datos, dato);
            
        });
            
    });


};



//alertas
const alertas = {

    
    success: () => {
        Swal.fire({
            icon: 'success',
            title: 'Deportista agregado correctamente',
            showConfirmButton: false,
            timer: 4000
            });
    },

        //
    error: () => {
        const err = {
            icon: 'error',
            title: 'Valor incorrecto',
            text: 'Responda por "si" o por "no"'
        }

        Swal.fire(
            err
        );
        
    }

};




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

};



//listener
formularioDeportista.addEventListener('submit', () => {
    formularioDeportista.style.display = 'none';
    enviarForm();
    success();
    saludo.innerHTML = `Bienvenid@ ${nombre}, ya podes iniciar el test Pre Training Wellness`;
});






/* FORMULARIO PREWELLNESS */


// guardado de datos en localstorage
const manejoDatos = () => {

    const info = [];

        const datosFormulario = (f) => {

            f.querySelectorAll("input")
            .forEach(e => {                     //aca problema
               // console.log(e.value)

                info.push({
            cantidad : e.name == "cantidad" ? e.value : null,
            calidad : e.name == "calidad" ? e.value : null,
            animico : e.name == "animico" ? e.value : null,
            estres : e.name == "estres" ? e.value : null ,
            cansancio : e.name == "cansancio" ? e.value : null,
            fatiga : e.name == "fatiga" ? e.value : null,
            lesiones : e.name == "lesiones" ? e.value : null,
        
            fatiga : fatigaPre.value == 'si'  ? true :
                    fatigaPre.value == 'no' ? false : alertas.error(),
        
            lesiones: lesionesPre.value == 'si' ? true :
                    lesionesPre.value =='no' ? false : alertas.error()
                
                
            });
            });
            

            console.log(info);
        return info;
    };

    //funcion para postear los datos de prewellness
    const postDatos = () => {
    
        let nuevoPreWellness = new PreWellness(dniP, cantidad, calidad, animico, estres, cansancio, fatiga, lesiones);
        preWellness.push(nuevoPreWellness);
        
        localStorage.setItem('prewellness', JSON.stringify(preWellness));
    
    };

    //listener
formularioPreWellness.addEventListener('submit', (e) =>{
    e.preventDefault();
    formularioPreWellness.style.display = 'none';
    
    datosFormulario(formularioPreWellness);
    }
);



};

getForm();
manejoDatos();











/* const deportistaWellness = deportistas.concat(preWellness);
localStorage.setItem('deportistaPre', JSON.stringify(deportistaWellness)); */




//FORMULARIO POST WELLNESS


/* btnPostWellness.onclick = () => {
    crearPostWellness();
    formularioPreWellness.style.display = 'none';
    formularioDeportista.style.display = 'none';
} */


//localStorage
const alertPost = () => {
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
    alertPost();
    
    }
);


//fetch
const pruebaFetch1 = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(result =>{
            result.forEach(dato => {
                prueba.innerHTML +=
                `
                <div>
                    <h3>${dato.name}</h3>
                    <span>Nombre usuario: ${dato.username} - </span>
                    <span>Email: ${dato.email} - </span>
                    <span>Direccion: ${dato.address.street} - </span>
                    <span>Numero: ${dato.address.suite} - </span>
                    <span>Ciudad: ${dato.address.city} - </span>
                    <span>Coordenadas: ${JSON.stringify(dato.address.geo)}</span>
                </div>
                `
        }).catch(function(err) {
            console.log('error')})
        .finally(console.log("terminado"))

    })

};

botonFetch.onclick = () => {
    pruebaFetch1();
};



/* ESTADISTICAS */

const alertBuscarDep = () => {
    let estadistica = Swal.fire({
        title: 'Buscar deportista (dni):',
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




/* 
let avs = function(x) {console.log(x)} ;
 */

   //formulario
/* formularioDeportista.style.display = 'none'; */

 /* avs(datos); */



//accede a datos dentro de funcion, por fuera(avs)
/* avs(datos); */

/* btnDeportista.onclick = () => {
    agregarDeportista(formularioDeportista);
} */


//formulario
/* formularioPostWellness.style.display = "none"; */

/* const crearPostWellness = () =>{
    formularioPostWellness.style.display = "flex";
} */
















// DUDAS

/* 
1) poner objeto dentro de array
2) buscar deportista en base al dni o nombre y apellido y mostrar datos
3) mostrar deportistas con fetch a traves del boton de ver estadisticas
4) entender if, for, for..if, for.. of, for..in 



--agregar names en html
--copiar cantidad en los demas inputs

buscar exportacion y requerimiento
investiga react y webpack



file system javascript

const fs = require('fs');
const json_data = require('../services/contributors.JSON');

fs.readFile(json_data, 'utf8', function (err, data) {
    try {
    data = JSON.parse(data)
    for (let i in data){
    console.log('Name:',data[i].name)
    }
    } catch (e) {
    // Catch error in case file doesn't exist or isn't valid JSON
    }
});
*/