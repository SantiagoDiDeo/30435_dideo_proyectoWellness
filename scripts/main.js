
//formularioDeportista

//variables

const header = document.querySelector(".header");
const main = document.querySelector(".main")
const btnDark = document.querySelector(".header__darkModeButton")

//deportista
const formularioDeportista = document.querySelector(".main__formDep");
const botonSubmit = document.querySelector("#submit");
const btnDeportista = document.querySelector("#btn-deportista");
const saludo = document.querySelector(".main__saludo");


//pre
const btnPreWellness = document.querySelector("#btn-preWellness");
const formularioPreWellness = document.querySelector('.main__formPre');
const submitPre = document.querySelector('#submitPre');

//post
const btnPostWellness = document.querySelector("#btn-postWellness");
const formularioPostWellness = document.querySelector('.main__formPost');
const submitPost = document.querySelector('#submitPost');

//estadisticas
let btnEstadisticas = document.querySelector(".btn-estadisticas");
const estadisticaP = document.querySelector(".main__estadisticas");

//fetch
const prueba = document.querySelector(".fetchPrueba");
const botonFetch = document.querySelector(".fetch");

//arrays
let deportistas = [];
let preWellness = [];
let postWellness = [];


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
            timer: 2000
            });
    },

        
    error: () => {
        const err = {
            icon: 'error',
            title: 'Valor incorrecto',
            text: 'Responda por "si" o por "no"'
        }

        Swal.fire(
            err
        );
        
    },

    success2 : () => {
        Swal.fire({
            icon: 'success',
            title: 'Formulario completado!',
            timer: 1500,
        })
    },

};







/* FORMULARIO PREWELLNESS */

// guardado de datos en localstorage
const manejoDatos = () => {

    
    const datosFormulario = (f) => {
        
        const info = [];
        let obj = {};
            
            f.querySelectorAll("input")
            .forEach(e => {                    
            info.push([e.name,e.value])
        
                    });


                info.map((e) => {
                    obj[e[0]] = e[1]
                    if(e[0]== 'fatiga' || e[0] == 'lesiones') {
                        obj[e[0]] = booleanChecker(e[1]) ? booleanChecker(e[1]) : alertas.error();
                    } ;
                });
                
            console.log(obj);       //que hago con los datos
        
    };

    //funcion para postear los datos de prewellness
    const postDatosPre = () => {
    
        let nuevoPreWellness = new PreWellness(dniP, cantidad, calidad, animico, estres, cansancio, fatiga, lesiones);
        preWellness.push(nuevoPreWellness);
        
        localStorage.setItem('prewellness', JSON.stringify(preWellness));
    
    };

    const postDatosPost = () => {

        let nuevoPostWellness = new PostWellness(dniPo, exigenciaP, cansancioP, fatigaP, lesionesP);
        postWellness.push(nuevoPostWellness)
    
        localStorage.setItem('postwellness', JSON.stringify(postWellness));

    }

    //listener dep
formularioDeportista.addEventListener('submit', (e) => {
    e.preventDefault()
    //formularioDeportista.style.display = 'none';
    //enviarForm();
    datosFormulario(formularioDeportista)
    alertas.success();
    saludo.innerHTML = `Bienvenid@ ${nombre}, ya podes iniciar el test Pre Training Wellness`;
});

    //listener pre
formularioPreWellness.addEventListener('submit', (e) =>{
    e.preventDefault();
    formularioPreWellness.style.display = 'none';
    
    datosFormulario(formularioPreWellness);
    }
);


//listener post
formularioPostWellness.addEventListener('submit', (e) =>{
    e.preventDefault();
    formularioPostWellness.style.display = 'none';
    datosFormulario(formularioPostWellness)
    
    }
);

};


function booleanChecker(prop) {
    if (prop === "si" || prop === "no") return prop
    else return
};

//FORMULARIO POST WELLNESS









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


btnEstadisticas.onclick = () => {
    estadisticas();
};

btnDark.addEventListener('click', () =>{
    document.body.classList.toggle("dark")

});

getForm();
manejoDatos();






    const guardarFormulario = () => {

        deportistas.find((e) => {
            if(e.dni == dni.value) {
                e.preWellness = postDatosPre();
            };
        });
    
        //deportistas.elemento.datosPre= objSubmit;   preguntar
    };
    
    /* 
    
    listadeportistas(Array)
    cada deportista es un objeto
    cada obj tiene su dni y sus prop
    
    const arrayPrueba = [
        {
            dni: 123456,
            nombre: "juan",
            apellido: "perez",
            datosPre: {},
            datoPost: {},
            
        }
    ]
    
    arrayPrueba.find((elemento) => {
        if(elemento.dni == dni.value) {
            elemento.pre = postDatosPre()
        } 
    })
        arrayPrueba.elemento.datosPre = objSubmit
    */

















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

/* const deportistaWellness = deportistas.concat(preWellness);
localStorage.setItem('deportistaPre', JSON.stringify(deportistaWellness)); */

/* btnPostWellness.onclick = () => {
    crearPostWellness();
    formularioPreWellness.style.display = 'none';
    formularioDeportista.style.display = 'none';
} */

//localStorage
/* const alertPost = () => {
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
} */

//localStorage
/* const enviarForm = () => {

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

}; */






// DUDAS


/* 
1) poner objeto dentro de array
2) buscar deportista en base al dni o nombre y apellido y mostrar datos
3) mostrar deportistas con fetch a traves del boton de ver estadisticas

4) entender if, for, for..if, for.. of, for..in 




buscar exportacion y requerimiento
investiga react y webpack
buscar libreria para modo oscuro



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