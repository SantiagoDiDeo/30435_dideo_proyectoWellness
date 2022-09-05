    //importar alertas de otro module
    import {alertas} from './alertas.js';
    
    //VARIABLES
    //modoOscuro
    const btnDark = document.querySelector(".header__darkModeButton");

    //deportista
    const formularioDeportista = document.querySelector(".main__formDep");
    const btnDeportista = document.querySelector("#btn-deportista");

    //prewellness
    const btnPreWellness = document.querySelector("#btn-preWellness");
    const formularioPreWellness = document.querySelector(".main__formPre");

    //postwellness
    const btnPostWellness = document.querySelector("#btn-postWellness");
    const formularioPostWellness = document.querySelector(".main__formPost");

    //localJson
    const jsonTitulo = document.querySelector('.json__h3');
    const jsonUl = document.querySelector('.json__ul')
    const botonJson = document.querySelector(".btn__json");
    const url = '../json/deportistas.json'

    //array
    let deportistas = [];


    //confirmacion de value correcto
    function booleanChecker(prop) {
    if (prop === "si" || prop === "no") return prop;
    else alertas.error();
    }


    //CONSTRUCTORES
    class PreWellness {
    constructor(
        cantidadPre,
        calidadPre,
        animicoPre,
        estresPre,
        cansancioPre,
        fatigaPre,
        lesionesPre
    ) {
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
    };
    };

    class Deportista {
    constructor(
        nombreDep,
        apellidoDep,
        dniDep,
        edadDep,
        deporteDep,
        entrenadorDep,
        institucionDep,
        preWellness,
        postWellness
    ) {
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
    
    //asociacion de datos, display formularios
    const getForm = () => {
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
            },
        ];

        const displayFlex = (f) => {
            f.style.display = "flex";
        };

        const displayNone = (datos, dato) => {
            let aux = datos.filter((d) => {
            if (d !== dato) return d;
            });

            aux.forEach((f) => {
            f.form.style.display = "none";
            });
        };

        datos.forEach((dato) => {
            dato.btn.addEventListener("click", () => {
            displayFlex(dato.form);
            displayNone(datos, dato);
            });
        });
    };

    //manejo de input values
const manejoDatos = () => {
    const datosFormulario = (f) => {
        const info = [];
        let obj = {};

        f.querySelectorAll("input").forEach((e) => {
            info.push([e.name, e.value.trim()]);
                });

            info.map((e) => {
                obj[e[0]] = e[1];
                if (e[0] == "fatiga" || e[0] == "lesiones") {
                    obj[e[0]] = booleanChecker(e[1])
                    ? booleanChecker(e[1])
                    : alertas.error();
                        };
                    });
                return obj;
        };

    //fetch de local json
    const getDeportistas = async (url) => {             
        
        let res = await fetch(url)
        return res = await res.json();     
        };

    //agregar json a html mediante libreria
    const addHtml = async () => {
        let datos = await getDeportistas(url);
        jsonTitulo.textContent = 'Todos los deportistas';
        datos.forEach(e => {
            console.log(e)
            let info = Object.entries(e);
            
            info.forEach(ele => {
                let table = new Tabulator("#example-table", {
                    height:205,
                    data:datos,
                    layout:"fitColumns", 
                    columns:[ 
                        {title:"Nombre", field:"Nombre", width:150},
                        {title:"Apellido", field:"Apellido", width:150},
                        {title:"Dni", field:"Dni"},
                        {title:"Edad", field:"Edad"},
                        {title:"Deporte", field:"Deporte"},
                        {title:"Entrenador", field:"Entrenador"},
                        {title:"Institucion", field:"Institucion"}
                    ],
                });
                
                    let li = document.createElement('li');
                    li.textContent = `${ele[0]} : ${ele[1]}`;
                    li.classList.add('json__liInd');
                    if(ele[0] == 'prewellness' || ele[0] == 'postwellness') {
                        li.textContent = ele[0];
                    };
            });
        });
    };

    //localStorage deportistas nuevos
    const crearDeportista = (nuevoDeportista) => {    
        nuevoDeportista.preWellness = [];
        nuevoDeportista.postWellness = [];
        deportistas = [...deportistas, nuevoDeportista];
        
        localStorage.setItem("deportistas", JSON.stringify(deportistas));
    };
    //actualizar datos pre y postwellness
    const actualizarDeportista = (obj, listaDep, deportista, prop) => {
        listaDep.find(dep => {
            if(dep.dni == deportista){
                dep[prop] = [...dep[prop], obj];
                };
            localStorage.setItem("deportistas", JSON.stringify(deportistas));
            });
    };

    //submit
    const submitForm = () => {
        
        document.querySelectorAll(".main__form").forEach((f) => {
        f.addEventListener("submit", (e) => {
            e.preventDefault();
            f.style.display = "none";
            let datos = datosFormulario(f);
            const {dni} = datos;

            switch (true) {

                case f.classList.contains("main__formDep"):
                    crearDeportista(datos);
                    alertas.success();
                break;

                case f.classList.contains("preWellness"):
                actualizarDeportista(
                    datos,
                    deportistas,
                    dni,
                    "preWellness"
                );
                break;

                case f.classList.contains("postWellness"):
                actualizarDeportista(
                    datos,
                    deportistas,
                    dni,
                    "postWellness"
                );
                break;

                default:
                break;
                };
            });
        });
    };
    //ejecucion agregar al html
    botonJson.addEventListener('click', () => addHtml());
    submitForm();
};

//boton modo oscuro
btnDark.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        });

getForm();
manejoDatos();