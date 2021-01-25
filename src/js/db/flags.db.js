import { shuffle } from "underscore";
import { FlagInput, respuestasArr } from "../classes/Flag.class";

//en este archivo crearemos todas las flags que necesitemos

        const  
        anioConstitucion           = new FlagInput(0, '¿en que año se creo la constitucion?', '1978', '19XX'),
        cantidadTemas              = new FlagInput(1, '¿cuantos temas tiene el temario?', '54', 'XX'),
        LO_SeguridadCiudadana      = new FlagInput(2, '¿cuando se fundo la Ley Organica Proteción de la seguridad ciudadana?', '4/2015 30 marzo', 'X/XXXX XX mes '),
        LO_CuerposYFuerzasSguridad = new FlagInput(3, '¿cuando se fundo la Ley Organica de cuerpos y fuerza de segirudad?', '2/86 13 marzo', 'X/XX XX mes'),
        inviolabilidadDomiciliaria = new FlagInput(4, 'la invilabilidad domiciliaria es un derecho ...', 'fundamental', 'palabra'),
        aprobacionEnLasCortes      = new FlagInput(5, 'La aprobación por las cortes de la constitución fue el ... de 1978', '31 octubre', 'XX mes'),
        referendumConstitucional   = new FlagInput(6, 'referendum del pueblo Español fue el ', '6 diciembre', 'X mes'),
        promulgacionConstitucion   = new FlagInput(7, 'Laconstitucion fue promulgada por el rey el ', '27 diciembre', 'XX mes'),
        constitucionEnElBoe        = new FlagInput(8, 'La poblicación en el BOE de la constitucion fue el ', '29 diciembre', 'XX mes'),
        rangoDchosFundamentales    = new FlagInput(9, 'Rango de articulos de los derechos fundamentales', '15-55', 'XX-XX');

    



const arrHtmlFlag =[anioConstitucion, cantidadTemas, LO_SeguridadCiudadana,LO_CuerposYFuerzasSguridad, 
                    inviolabilidadDomiciliaria,  aprobacionEnLasCortes,  referendumConstitucional,
                      promulgacionConstitucion,  constitucionEnElBoe,  rangoDchosFundamentales ];

//const flagsBloqueConstitucion=[];

//llama a cada elemento del array que le pasemos para dibujar sus flags
const flagHtmlFull = (arr)=>{
        
        //randomizamos el array
        arr = shuffle(arr);
        
        //pusheamos las respuestas con su orden
        arr.forEach(element => {respuestasArr.push(element.respuesta);});
        
        let html='';
        arr.forEach(element => { html += element.crearInputFlag(); });
        return html;
}



//Validacion de  flags

const invalidarRespuestaFlag=(btn, texto, claseBootStrap, time=2000 )=>{
        btn.classList=claseBootStrap;
        btn.textContent=texto;

        setTimeout(() => {
                btn.classList="m-2 btn btn-info";
                btn.textContent="Resolver";
        }, time);

}

//para las respuestas correctas
const validarRespuestaFlag = (btn,respuesta, divAlert, parent, element,texto="Correcta") =>{
        btn.textContent=texto;
        btn.disabled=true;

        parent.removeChild(element.children[1]);
        divAlert.textContent=respuesta;

        divAlert.classList="alert alert-success";
        parent.insertBefore(divAlert, btn );
}



export{
        flagHtmlFull,
        arrHtmlFlag,
        invalidarRespuestaFlag,
        validarRespuestaFlag
}