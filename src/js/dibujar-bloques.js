import {  respuestasArr } from './classes/Flag.class';
import { arrHtmlFlag, capturarEventFlags, flagHtmlFull, flagsBloqueConstitucion } from './db/flags.db';
import { capturarBtnHome, ternarioBloquesFunction, ternarioTemaConstitucionFunction } from './helpers';
import {bloques, temasConstitucion} from './temas-list';



//DOM
let divContainer = document.querySelector('#container');
let header = document.querySelector('header');
    header.classList='text-center mt-4 p-2 mb-1';

let btnTests, ul, btnHome, btnHomeTema;
let flagListDOM;

//esta funcion recibe un html y modifica el DOM, 
//la utilizaremos para la teoria de cada tema
const dibujarTeoria = (html, titulo='', subtitulo='', bloque='Constitucion',  arrFlags=flagsBloqueConstitucion) =>{
    
    respuestasArr.length=0;

    header.children[0].textContent=titulo;
    header.children[1].textContent=subtitulo;

    divContainer.innerHTML=html +  flagHtmlFull(arrFlags);
    
    let btn=document.createElement('button');
    btn.classList='btn  btn-outline-primary mt-2 p-4';
    btn.textContent='Volver al listado de temas';
    btn.id=`Home-${bloque}`;

    const flagEventDOM =document.querySelectorAll('.flag');
    capturarEventFlags(flagEventDOM);

    divContainer.append(btn);
    /*
    const btnHomeTema=divContainer.lastElementChild;
    btnHomeTema.addEventListener('click',()=>{
        dibujarTemas(temasConstitucion, 'La Constitución Española', 'de 1978', flagsBloqueConstitucion);
        console.log('Teoria Dibujada');
    });
    */

}

//Esta funcion captura un array con los temarios y devulve 

const devolverListado = ( arr ) =>{

    let cadenaListado='';
    arr.forEach(tema => cadenaListado+=`<li class=" btn list-group-item btn-outline-primary mt-2 p-3">${tema}</li>`);
    return cadenaListado;
}


//inyecta en el html los temas que le pasemos con un array 
//utilizando la funcion devolverListado() en funcion del tema
export const dibujarTemas = (temaArr, titulo='', subtitulo='', arrFlags=arrHtmlFlag) =>{


    respuestasArr.length=0;
   
    header.innerText='';
    
    header.innerHTML=`<h1 class="text-white">${titulo}</h1>
                      <h4 class="text-white p-2">${subtitulo}</h4>`;
    
    const li = devolverListado(temaArr);
    const btnHome = document.createElement('button');
    btnHome.classList='btn  btn-outline-primary mt-2 p-4';
    btnHome.id='btn-home';

    
    btnHome.innerText='Página Principal';
    divContainer.innerHTML= `<ul>${li}</ul>`+ flagHtmlFull(arrFlags);
   
    const flagEventDOM =document.querySelectorAll('.flag');
    capturarEventFlags(flagEventDOM);
    
  
    divContainer.append(btnHome);
    
}



//dibujamos los bloques de los temas 
const dibujarInicio = () =>{

    
    header.innerHTML=`<h1 class="text-white">Oposiciones Policia Local</h1>
                      <h4 class="text-white p-2">Elige Bloque para estudiar</h4>`;
    
    const html=`
        ${header}
        <ul>
        ${devolverListado(bloques)}
        </ul>`;

    const testSection = `
        <hr class="bg-light">
        <button id="btn-test" class=" btn  btn-outline-primary mt-2 p-4">Hacer Tests</button>
    `;

    //dibujamos diferentes Flags
    const flagListAddHTML=flagHtmlFull();
    divContainer.innerHTML=html + flagListAddHTML  + testSection ;


    btnTests = document.querySelector('#btn-test');
    //////////////////
    //EVENTO PARA ACCEDER A LOS TESTS
    btnTests.addEventListener('click', ()=>{console.log('Click en el boton hacer test');});
    //////////////////////
}

    /**************************/ 
    /**************************/ 
    /*********EVENTOS**********/
    /**************************/ 
    /**************************/ 

const eventos = () =>{

    ul =document.querySelector('ul');
    //btnTests = document.querySelector('#btn-test');
    

    //EVENTO del listado de bloques(PAGINA INICIAL)
    ul.addEventListener('click', (event)=>{
        
        
        //fucion ternario para elegir bloque
        const bloque=ternarioBloquesFunction(event);
        //Por ahora encapsulamos por partes

        if(bloque!==null) {
            
            capturarBtnHome(btnHome);
            ul=document.querySelector('ul');
            

            //este evento es para los temas
            ul.addEventListener('click', (event)=>{
               
                //capturamos el titulo para saber en que bloque estamos 
                const tituloBloque=ul.parentNode.parentNode.parentNode.children[1].children[0].children[0].textContent
                //console.log(tituloBloque);
                //funcion ternaria para elegir tema  de Cosntitucion
                const tema=ternarioTemaConstitucionFunction(event);
              
                if (tema!==null) {
                    //console.warn('No es nulo');
                    btnHomeTema=divContainer.lastElementChild;
                    btnHomeTema.addEventListener('click', ()=>{
                        //problema en la funcion, probando con init no se pierde el addEventListener
                        dibujarTemas(temasConstitucion, 'La Constitución Española', 'de 1978', flagsBloqueConstitucion);
                        
                    });
                }
                //PENDIENTE DE TERMINAR         
            });
        }
    });//FIN EVENTO del listado de bloques(PAGINA INICIAL)

    /**************************/ 
    /**************************/ 
    /**************************/ 
    /**************************/ 

    // selector flags
    flagListDOM=document.querySelectorAll('.flag');
    capturarEventFlags(flagListDOM);

}

const init = () =>{
    
    dibujarInicio();
    eventos();
   
    //console.log(respuestasArr);
}

export {
    init,
    dibujarTeoria,
    btnHome
}