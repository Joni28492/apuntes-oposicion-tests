import { shuffle } from "underscore";
import { FlagInput, respuestasArr } from "../classes/Flag.class";

//en este archivo crearemos todas las flags que necesitemos

        const  
        flag0 = new FlagInput(0, '¿en que año se creo la constitucion?', '1978', '19XX'),
        flag1 = new FlagInput(1, '¿cuantos temas tiene el temario?', '54', 'XX'),
        flag2 = new FlagInput(2, '¿cuando se fundo la Ley Organica Proteción de la seguridad ciudadana?', '4/2015 30 marzo', 'X/XXXX XX mes '),
        flag3 = new FlagInput(3, '¿cuando se fundo la Ley Organica de cuerpos y fuerza de segirudad?', '2/86 13 marzo', 'X/XX XX mes'),
        flag4 = new FlagInput(4, 'la invilabilidad domiciliaria es un derecho ...', 'fundamental', 'palabra'),
        flag5 = new FlagInput(5, 'La aprobación por las cortes de la constitución fue el ... de 1978', '31 octubre', 'XX mes'),
        flag6 = new FlagInput(6, 'referendum del pueblo Español fue el ', '6 diciembre', 'X mes'),
        flag7 = new FlagInput(7, 'La constitucion fue promulgada por el rey el ', '27 diciembre', 'XX mes'),
        flag8 = new FlagInput(8, 'La poblicación en el BOE de la constitucion fue el ', '29 diciembre', 'XX mes'),
        flag9 = new FlagInput(9, 'Rango de articulos de los derechos fundamentales', '15-55', 'XX-XX'),
        
        //flags Constitucion
        flagConstitucion1  =new FlagInput(10, '¿Cuantos Art tiene la constitución?', '169', 'XXX'),
        flagConstitucion2  =new FlagInput(11, 'disposiciones de la constitución?', '4911', 'XXXX'),
        flagConstitucion3  =new FlagInput(12, '¿cual de las siguientes no es una de las caracteristicas generales de la constitucion?rigida, extensa, escrita, flexible ', 'flexible', 'palabra'),
        flagConstitucion4  =new FlagInput(13, 'El estado social promueve la ...', 'igualdad', 'palabra'),
        flagConstitucion5  =new FlagInput(14, 'cuando la soberania reside en el pueblo, y requiere pluralismo politico estamos en un estado ...', 'democratico', 'palabra'),
        flagConstitucion6  =new FlagInput(15, 'estamos en un estado de derecho', 'si', 'si o no'),
        flagConstitucion7  =new FlagInput(16, '¿En que  Art de la constitución se promueve el pluralismo politico ?', '6', 'X'),
        flagConstitucion8  =new FlagInput(17, '¿el territorio en España se divide en ... , ... , ... ?', 'municipios-provincias-CCAA', 'palabra-palabra-acronimo'),
        flagConstitucion9  =new FlagInput(18, 'libertades publicas ... , ... , ...', 'personales-civiles-politicas', 'palabra-palabra-palabra'),
        flagConstitucion10 =new FlagInput(19, 'Art. .....   Los Españoles son iguales ante la ley', '14', 'Articulo'),
        flagConstitucion11 =new FlagInput(20, '  Art 15 derecho a  la ...', 'vida', 'palabra'),
        flagConstitucion12 =new FlagInput(21, '  Art 16 libertad de  ...', 'ideologia', 'palabra'),
        flagConstitucion13 =new FlagInput(22, '  Art 15 derecho a  la ...', 'libertad', 'palabra'),
        flagConstitucion14 =new FlagInput(23, '  Art 18.1 derecho al ...', 'honor', 'palabra'),
        flagConstitucion15 =new FlagInput(24, '  Art 18.2', 'inviolabilidad-domiciliaria', 'palabra-palabra'),
        flagConstitucion16 =new FlagInput(25, '  Art 18.3 secreto de las ...', 'comunicaciones', 'palabra'),
        flagConstitucion17 =new FlagInput(26, '  Art 18.4 limitacion del use de la ....', 'informatica', 'palabra'),
        flagConstitucion18 =new FlagInput(27, '  Art 19 liberta de  ... y ...', 'residencia-circulacion', 'palabra-palabra'),
        flagConstitucion19 =new FlagInput(28, '  Art 20.3 libertad de  ...', 'catedra', 'palabra'),
        flagConstitucion20 =new FlagInput(23, ' libertad de catedra con limitaciones referidas al ...', 'honor', 'palabra');

//este array es para las pruebas en la pag inicial
const arrHtmlFlag =[flag0, flag1, flag2,flag3, flag4,  flag5,  flag6, flag7,  flag8,  flag9 ];

const flagsBloqueConstitucion=[flag0,flag5,flag6, 
flagConstitucion1,flagConstitucion2,flagConstitucion3,flagConstitucion4,flagConstitucion5,flagConstitucion6,flagConstitucion7,flagConstitucion8,
flagConstitucion9,flagConstitucion10, flagConstitucion11,flagConstitucion12,flagConstitucion13,flagConstitucion14,flagConstitucion15,flagConstitucion16,
flagConstitucion17,flagConstitucion18,flagConstitucion19,flagConstitucion20
];

//esta funcion necesita un array de flagsHtml que sea de los que hemos dibujado
//pordefecto estan randomizadas, y lo podemos poner el limite de preguntas
const flagHtmlFull = (arr=arrHtmlFlag, randomize=true, limit=15)=>{
        
        //randomizamos el array
        if (randomize == true) { arr = shuffle(arr); }
        //console.log(respuestasArr);//activar para comprobar array de respuestas en ramdom


        //pusheamos las respuestas con su orden
        arr.forEach((element, index) => {
                if(index < limit) respuestasArr.push(element.respuesta);
                
        });
        
        let html='';
        arr.forEach((element, index) => {
                if (index<limit) 
                        html += element.crearInputFlag(); 
        });
        return html;
}



//Validacion de  flags

const invalidarRespuestaFlag=(btn, texto, claseBootStrap, time=2000 )=>{
        btn.classList=claseBootStrap;
        btn.textContent=texto;

        setTimeout(() => {
                btn.classList="m-2 btn btn-info";
                btn.textContent="Comprobar";
        }, time);

}

//para las respuestas correctas
const validarRespuestaFlag = (btn,respuesta, divAlert, parent, element,texto="Correcta") =>{
        btn.textContent=texto;
        btn.disabled=true;

        parent.removeChild(element.children[1]);
        divAlert.textContent=respuesta;

        divAlert.classList="alert bg-success text-light";
        parent.insertBefore(divAlert, btn );
        
        btn.nextElementSibling.remove();
}



//esta funcion captura el listado de flags que tenemos en funcion 
//del argumento que le mandemos del DOM

const capturarEventFlags = (flagListDOM) =>{
//childre[0]:: label pregunta     children[1]:: input        children[2]::Button 

        flagListDOM.forEach( (element, index) => {

                const btn      = element.children[2],
                      respuesta=respuestasArr[index], 
                      parent   = btn.parentNode,
                      divAlert =document.createElement('div'),
                      btnSol   = element.children[3];

                element.children[2].addEventListener('click', ()=>{

                        const   input    =element.children[1].value.trim().toLowerCase(),                                                                                              
                                bootStrapFijo="m-2 btn btn-";
                        
                        if (!input) { invalidarRespuestaFlag(btn,"Esta vacío",`${bootStrapFijo}warning`);}
                        
                        else{
                                if (input === respuesta) {validarRespuestaFlag(btn, respuesta,divAlert ,parent, element);}
                                else{invalidarRespuestaFlag(btn,"Incorrecta",`${bootStrapFijo}danger`);}
                        }
                });//fin de los btn de Resolver

                element.children[3].addEventListener('click', ()=>{
                      
                        btn.remove();
                        parent.removeChild(element.children[1]);
                        divAlert.textContent=respuesta;
                        divAlert.classList="alert bg-success text-light border";
                        parent.insertBefore(divAlert, btnSol );
                        
                });//fin btn para obtener la solucion

        });//fin de foreach FlagList
}


export{
        flagHtmlFull,
        arrHtmlFlag,
        invalidarRespuestaFlag,
        validarRespuestaFlag,
        capturarEventFlags,
        flagsBloqueConstitucion
}