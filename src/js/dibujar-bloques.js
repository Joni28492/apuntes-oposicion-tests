import {  respuestasArr } from './classes/Flag.class';
import { arrHtmlFlag, flagHtmlFull } from './db/flags.db';
import {bloques, temasConstitucion, temasCuerposYFuerzasSeguridad, temasTrafico, temasCodigoPenal } from './temas-list';



//DOM
let divContainer = document.querySelector('#container');
let header = document.querySelector('header');
    header.classList='text-center mt-4 p-2 mb-1';
let btnTests, ul, btnHome;
let flagListDOM;



//Esta funcion captura un array con los temarios y devulve 
//una cadena de li con esos valores
const devolverListado= ( arr ) =>{

    let cadenaListado='';

    arr.forEach(element => {
        //los cambios a los li se realizan aqui
        cadenaListado+=
        `<li class=" btn list-group-item btn-outline-primary mt-2 p-3">${element}</li>`;    
    });

    return cadenaListado;
}

//inyecta en el html los temas que le pasemos con un array 
//utilizando la funcion devolverListado() en funcion del tema
//tenemos titulo y subtitulo como parametro vacios por defecto
const dibujarTemas = (temaArr, titulo='', subtitulo='') =>{
    
    respuestasArr.forEach(element => respuestasArr.pop( element ));
    //No las esta popeando todas
   console.warn(respuestasArr);
    header.innerText='';
    
    header.innerHTML=`<h1 class="text-white">${titulo}</h1>
                      <h4 class="text-white p-2">${subtitulo}</h4>`;
    
    const li = devolverListado(temaArr);
    const btnHome = document.createElement('button');
    btnHome.classList='btn  btn-outline-primary mt-2 p-4';
    btnHome.id='btn-home';

    btnHome.innerText='Página Principal';
    divContainer.innerHTML=li;

    
    divContainer.append(btnHome);

    
}



//dibujamos los bloques de los temas 
const dibujarInicio = () =>{

    
    header.innerHTML=`<h1 class="text-white">Oposiciones Policia Local</h1>
                      <h4 class="text-white p-2">Elige Bloque para estudiar</h4>`;
    

    const html=`
        ${header}
        <ul class="">
        ${devolverListado(bloques)}
        </ul>`;

    const testSection = `
        <hr class="bg-light">
        <button id="btn-test" class=" btn  btn-outline-primary mt-2 p-4">Hacer Tests</button>
    `;


    //limpiamos el array de respuestas para evitar duplicidades
    respuestasArr.forEach(element => respuestasArr.pop( element ));
    //dibujamos diferentes Flags
    const flagListAddHTML=flagHtmlFull(arrHtmlFlag);

    divContainer.innerHTML=html + flagListAddHTML  + testSection ;
   

}


const eventos = () =>{

    ul =document.querySelector('ul');
    btnTests = document.querySelector('#btn-test');
    


    //EVENTO del listado de bloques(PAGINA INICIAL)
    ul.addEventListener('click', (event)=>{
        
        limpiarElemento(event.target.parentNode);

        let bloque=
            (event.target.textContent == bloques[0]) 
            ? dibujarTemas(temasConstitucion, 'La Constitución Española', 'de 1978'):
            (event.target.textContent == bloques[1]) 
            ? dibujarTemas(temasCuerposYFuerzasSeguridad, 'Cuerpos y Fuerzas de seguridad', 'Ley Organica 2/86 13 Marzo'):
            (event.target.textContent == bloques[2]) 
            ? dibujarTemas(temasTrafico, 'Trafico', 'Trafico seguridad vial'):
            (event.target.textContent == bloques[3]) 
            ? dibujarTemas(temasCodigoPenal, 'Código Penal', 'CP'):  null;
    
        if(bloque!==null) {
            //capturamos el btn Home para volver al inicio
            btnHome=document.querySelector('#btn-home');
            btnHome.addEventListener('click', init);
        };

    });

    /**************************/ 
    /**************************/ 
    /**************************/ 
    /**************************/ 

    //EVENTO del btn-test para los test
    btnTests.addEventListener('click', ()=>{
        console.log('Click en el boton hacer test');
        //pendiente implementar test y su funcionamiento
    });

    /**************************/ 
    /**************************/ 
    /**************************/ 
    /**************************/ 


    // selector flags
    flagListDOM=document.querySelectorAll('.flag');
   
    //eventos flags
    //childre[0]:: label pregunta     childre[1]:: input        childre[2]::Button 
    flagListDOM.forEach( (element, index) => {


        element.children[2].addEventListener('click', (event)=>{
            //console.log(`boton de flag, el id del boton es ${element.children[2].id}`);
            const   input    =element.children[1].value,
                    respuesta=respuestasArr[index],
                    btn      = element.children[2],
                    parent   = btn.parentNode,
                    divAlert =document.createElement('div');
            
           if (!input) {
            
                btn.classList="m-2 btn btn-warning";
                btn.textContent="Esta vacio introduce texto";

                setTimeout(() => {
                    btn.classList="m-2 btn btn-info";
                    btn.textContent="Resolver";
                }, 2000);

           }else{
                if (input === respuesta) {
                    btn.classList="m-2 btn btn-success";
                    btn.textContent="Correcta";
                    btn.disabled=true;

                    parent.removeChild(element.children[1]);

                    divAlert.textContent=respuesta;
                    divAlert.classList="alert alert-success";
                    
                    parent.insertBefore(divAlert, btn );

                   
                }else{
                    btn.classList="m-2 btn btn-danger";
                    btn.textContent="Incorrecta";
                    

                    setTimeout(() => {
                        btn.classList="m-2 btn btn-info";
                        btn.textContent="Resolver";
                    }, 2000);
                }
           }//cierre ifelse padre

          
        });//fin de los input de las flags
        
    });//fin de foreach FlagList


}

//limpiamos elemento capturado en el que hacemos clic
const limpiarElemento = (elem) =>{
    elem.textContent='';
}


const init = () =>{
    
    dibujarInicio();
    eventos();
    console.log(respuestasArr);
}

export {
    init 
}